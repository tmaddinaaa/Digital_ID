// src/pages/Profiles.js
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { profilesList } from "../data/profilesList";
import UnifiedFilters from "../components/UnifiedFilters";

/**
 * Profiles.js — страница Client360 (Profiles)
 * - использует UnifiedFilters (единую панель фильтров)
 * - корректно фильтрует по продуктам, тегам, датам, полу и т.д.
 * - агрегация продуктов: getAllProducts(p)
 */

export default function Profiles() {
  const navigate = useNavigate();

  // --- Единое состояние фильтров (как в UnifiedFilters) ---
  const [filters, setFilters] = useState({
    search: "",
    city: "Все города",
    segment: "Все сегменты",
    gender: "Все",
    activityStatus: "Все статусы",
    maritalStatus: "Все",
    privateStatus: "Все",
    lifeStatus: "Все",
    registrationMPFrom: "",
    registrationMPTo: "",
    registrationBankFrom: "",
    registrationBankTo: "",
    bankProducts: [],
    investProducts: [],
    garantProducts: [],
    tags: [],
  });

  const handleReset = () =>
    setFilters({
      search: "",
      city: "Все города",
      segment: "Все сегменты",
      gender: "Все",
      activityStatus: "Все статусы",
      maritalStatus: "Все",
      privateStatus: "Все",
      lifeStatus: "Все",
      registrationMPFrom: "",
      registrationMPTo: "",
      registrationBankFrom: "",
      registrationBankTo: "",
      bankProducts: [],
      investProducts: [],
      garantProducts: [],
      tags: [],
    });



  // --- Вспомогательная: собрать все продукты для профиля в единый массив строк ---
  const getAllProducts = (p) => {
    // 1) если уже есть allProducts (простой массив строк) — используем
    if (Array.isArray(p.allProducts) && p.allProducts.length) {
      return Array.from(new Set(p.allProducts));
    }

    const out = new Set();

    // 2) старый стиль: p.products может быть массивом строк
    if (Array.isArray(p.products)) {
      p.products.forEach((x) => out.add(x));
    }

    // 3) вложенная структура (из примера profilesData): products.bankProducts.items
    if (p.products && p.products.bankProducts && Array.isArray(p.products.bankProducts.items)) {
      p.products.bankProducts.items.forEach((it) => {
        if (it.type) out.add(it.type);
        if (it.name && !it.type) out.add(it.name);
      });
    }

    // 4) group products: alatauInvest / alatauGarant
    if (p.products && p.products.groupProducts) {
      const gp = p.products.groupProducts;
      if (Array.isArray(gp.alatauInvest)) {
        gp.alatauInvest.forEach((x) => {
          if (x.type) out.add(x.type);
          if (x.name) out.add(x.name);
        });
      }
      if (Array.isArray(gp.alatauGarant)) {
        gp.alatauGarant.forEach((x) => {
          if (x.type) out.add(x.type);
          if (x.name) out.add(x.name);
        });
      }
    }

    // 5) альтернативные поля: bankProducts / investProducts / garantProducts (простые массивы или объекты)
    if (Array.isArray(p.bankProducts)) p.bankProducts.forEach((x) => out.add(x));
    if (Array.isArray(p.investProducts)) p.investProducts.forEach((x) => out.add(x));
    if (Array.isArray(p.garantProducts)) p.garantProducts.forEach((x) => out.add(x));

    // 6) если в профиле есть поле productsMap (object) — добавим ключи/значения
    if (p.productsMap && typeof p.productsMap === "object") {
      Object.values(p.productsMap).forEach((v) => {
        if (Array.isArray(v)) v.forEach((x) => out.add(x));
        else if (typeof v === "string") out.add(v);
      });
    }

    // 7) как fallback — некоторые профили могут хранить products как объект с title/items
    if (p.bankProducts && typeof p.bankProducts === "object" && Array.isArray(p.bankProducts.items)) {
      p.bankProducts.items.forEach((it) => {
        if (it.type) out.add(it.type);
        else if (it.name) out.add(it.name);
      });
    }

    return Array.from(out);
  };

  // --- Фильтрация данных (useMemo для оптимизации) ---
  const filteredProfiles = useMemo(() => {
    return profilesList.filter((p) => {
      // helper значения в профиле (защищённый доступ)
      const profileGender = p.gender || (p.basicInfo && p.basicInfo.gender) || null;
      const profileRegistrationBank = p.registrationDate || p.basicInfo?.bankRegistrationDate || "";
      const profileRegistrationMP = p.mobileAppRegistrationDate || p.basicInfo?.mobileAppRegistrationDate || "";
      const allProducts = getAllProducts(p); // агрегированный массив продуктов (строк)

      // --- поиск (FIO/IIN/AC_ID) ---
      const matchesSearch =
        !filters.search ||
        (p.fio && p.fio.toLowerCase().includes(filters.search.toLowerCase())) ||
        (p.iin && p.iin.toString().includes(filters.search)) ||
        (p.ac_id && p.ac_id.toString().includes(filters.search));

      // --- селекты ---
      const matchesCity = filters.city === "Все города" || !filters.city || p.city === filters.city;
      const matchesSegment = filters.segment === "Все сегменты" || !filters.segment || p.segment === filters.segment;
      const matchesGender = filters.gender === "Все" || !filters.gender || profileGender === filters.gender;
      const matchesActivity = filters.activityStatus === "Все статусы" || !filters.activityStatus || p.status === filters.activityStatus;
      const matchesPrivate =
        filters.privateStatus === "Все" ||
        !filters.privateStatus ||
        (filters.privateStatus === "Private" ? p.isPrivate : !p.isPrivate);
      const matchesLife = filters.lifeStatus === "Все" || !filters.lifeStatus || p.lifeStatus === filters.lifeStatus;
      const matchesMarital = filters.maritalStatus === "Все" || !filters.maritalStatus || p.maritalStatus === filters.maritalStatus;

      // --- теги (UnifiedFilters передаёт массив объектов {value,label}) ---
      const matchesTags =
        !filters.tags?.length ||
        filters.tags.every((t) => {
          const val = t.value || t.label || t;
          return p.tags && p.tags.includes(val);
        });

      // --- продукты: проверяем агрегированный allProducts ---
      const matchesProducts =
        (!filters.bankProducts?.length || filters.bankProducts.some((bp) => allProducts.includes(bp))) &&
        (!filters.investProducts?.length || filters.investProducts.some((ip) => allProducts.includes(ip))) &&
        (!filters.garantProducts?.length || filters.garantProducts.some((gp) => allProducts.includes(gp)));

      // --- даты (simple ISO string compare; профили должны хранить YYYY-MM-DD) ---
      const matchesDateBank =
        (!filters.registrationBankFrom && !filters.registrationBankTo) ||
        ((profileRegistrationBank || "") >= (filters.registrationBankFrom || "") &&
          (profileRegistrationBank || "") <= (filters.registrationBankTo || "9999-12-31"));

      const matchesDateMP =
        (!filters.registrationMPFrom && !filters.registrationMPTo) ||
        ((profileRegistrationMP || "") >= (filters.registrationMPFrom || "") &&
          (profileRegistrationMP || "") <= (filters.registrationMPTo || "9999-12-31"));

      return (
        matchesSearch &&
        matchesCity &&
        matchesSegment &&
        matchesGender &&
        matchesActivity &&
        matchesPrivate &&
        matchesLife &&
        matchesMarital &&
        matchesTags &&
        matchesProducts &&
        matchesDateBank &&
        matchesDateMP
      );
    });
  }, [filters]);

  // --- Пагинация ---
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredProfiles.length / pageSize));
  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">👥 Client 360</h1>

        {/* 🎛 Единая панель фильтров */}
        <UnifiedFilters filters={filters} setFilters={setFilters} onReset={handleReset} allTags={[]} />

        {/* 📊 Инфо о количестве найденных */}
        <div className="text-sm text-gray-700 mb-3">
          Найдено клиентов: <span className="font-semibold">{filteredProfiles.length}</span>
        </div>

        {/* 📋 Таблица профилей */}
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full border-collapse text-gray-700">
            <thead className="bg-yellow-50 text-yellow-700">
              <tr>
                <th className="p-3 text-left">AC ID</th>
                <th className="p-3 text-left">ФИО</th>
                <th className="p-3 text-left">ИИН</th>
                <th className="p-3 text-left">Город</th>
                <th className="p-3 text-left">Сегмент</th>
                <th className="p-3 text-left">Пол</th>
                <th className="p-3 text-left">Private</th>
                <th className="p-3 text-left">Жизненный статус</th>
                <th className="p-3 text-left">Семейное положение</th>
                <th className="p-3 text-left">Статус</th>
                <th className="p-3 text-left">Регистрация (банк)</th>
                <th className="p-3 text-left">Регистрация (МП)</th>
                <th className="p-3 text-left">Продукты</th>
                <th className="p-3 text-left">Теги</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProfiles.map((p) => {
                const allProducts = getAllProducts(p);
                const profileGender = p.gender || p.basicInfo?.gender || "—";
                const profileRegistrationBank = p.registrationDate || p.basicInfo?.bankRegistrationDate || "—";
                const profileRegistrationMP = p.mobileAppRegistrationDate || p.basicInfo?.mobileAppRegistrationDate || "—";

                return (
                  <tr
                    key={p.ac_id}
                    className="border-t hover:bg-yellow-100 cursor-pointer transition-colors"
                    onClick={() => navigate(`/profiles/${p.ac_id}`)}
                  >
                    <td className="p-3 font-mono">{p.ac_id}</td>
                    <td className="p-3">{p.fio}</td>
                    <td className="p-3 font-mono">{p.iin}</td>
                    <td className="p-3">{p.city}</td>
                    <td className="p-3">{p.segment}</td>
                    <td className="p-3">{profileGender}</td>
                    <td className="p-3">{p.isPrivate ? "Private" : "Public"}</td>
                    <td className="p-3">{p.lifeStatus || "—"}</td>
                    <td className="p-3">{p.maritalStatus || "—"}</td>
                    <td
                      className={`p-3 font-medium ${
                        p.status === "Активен" ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {p.status}
                    </td>
                    <td className="p-3">{profileRegistrationBank}</td>
                    <td className="p-3">{profileRegistrationMP}</td>
                    <td className="p-3">
                      {allProducts.length ? (
                        allProducts.map((prod) => (
                          <span
                            key={prod}
                            className="inline-flex items-center bg-yellow-50 border border-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-medium mr-1 mb-1"
                          >
                            <span>{prod}</span>
                          </span>
                        ))
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="p-3">
                      {p.tags?.length ? (
                        p.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-medium mr-1"
                          >
                            {t}
                          </span>
                        ))
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 🔄 Пагинация */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            ← Назад
          </button>
          <span>
            Страница {currentPage} из {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            Вперёд →
          </button>
        </div>
      </div>
    </div>
  );
}
