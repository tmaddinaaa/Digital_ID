// src/pages/Profiles.js
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { profilesList } from "../data/profilesList";
import UnifiedFilters from "../components/UnifiedFilters";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; 

export default function Profiles() {
  const navigate = useNavigate();

  // --- Единое состояние фильтров ---
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
    age: "",
  });

  // --- Состояние для скрытия/показа ФИО и ИИН ---
  // КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Изначально устанавливаем в false (скрыто)
  const [showPII, setShowPII] = useState(false);

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
      age: "",
    });

  // --- собрать все продукты для профиля ---
  const getAllProducts = (p) => {
    if (Array.isArray(p.allProducts) && p.allProducts.length) {
      return Array.from(new Set(p.allProducts));
    }

    const out = new Set();
    if (Array.isArray(p.products)) p.products.forEach((x) => out.add(x));
    if (p.products?.bankProducts?.items)
      p.products.bankProducts.items.forEach((it) => out.add(it.type || it.name));
    if (p.products?.groupProducts) {
      const gp = p.products.groupProducts;
      gp.alatauInvest?.forEach((x) => out.add(x.type || x.name));
      gp.alatauGarant?.forEach((x) => out.add(x.type || x.name));
    }
    if (Array.isArray(p.bankProducts)) p.bankProducts.forEach((x) => out.add(x));
    if (Array.isArray(p.investProducts)) p.investProducts.forEach((x) => out.add(x));
    if (Array.isArray(p.garantProducts)) p.garantProducts.forEach((x) => out.add(x));
    if (p.productsMap && typeof p.productsMap === "object") {
      Object.values(p.productsMap).forEach((v) => {
        if (Array.isArray(v)) v.forEach((x) => out.add(x));
        else if (typeof v === "string") out.add(v);
      });
    }
    if (p.bankProducts?.items)
      p.bankProducts.items.forEach((it) => out.add(it.type || it.name));
    return Array.from(out);
  };

  // --- фильтрация ---
  const filteredProfiles = useMemo(() => {
    // Вычисление возраста по дате рождения
    const getAgeFromBirthDate = (birthDate) => {
      if (!birthDate) return null;
      const today = new Date();
      const dob = new Date(birthDate);
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
      return age;
    };

    // Извлечение даты рождения из ИИН (формат YYMMDDxxxxxx)
    const getBirthDateFromIIN = (iin) => {
      if (!iin || iin.length < 7) return null;
      const year = parseInt(iin.slice(0, 2), 10);
      const month = parseInt(iin.slice(2, 4), 10);
      const day = parseInt(iin.slice(4, 6), 10);
      const centuryCode = parseInt(iin[6], 10);
      let fullYear;
      if (centuryCode === 1 || centuryCode === 2) fullYear = 1800 + year;
      else if (centuryCode === 3 || centuryCode === 4) fullYear = 1900 + year;
      else if (centuryCode === 5 || centuryCode === 6) fullYear = 2000 + year;
      else fullYear = 1900 + year;
      const isValidDate = (y, m, d) => {
        const date = new Date(y, m - 1, d);
        return (
          date.getFullYear() === y &&
          date.getMonth() === m - 1 &&
          date.getDate() === d
        );
      };
      if (!isValidDate(fullYear, month, day)) return null;
      return `${fullYear.toString().padStart(4, "0")}-${String(month).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
    };

    return profilesList.filter((p) => {
      const profileGender = p.gender || p.basicInfo?.gender || null;
      const profileRegistrationBank =
        p.registrationDate || p.basicInfo?.bankRegistrationDate || "";
      const profileRegistrationMP =
        p.mobileAppRegistrationDate ||
        p.basicInfo?.mobileAppRegistrationDate ||
        "";
      const allProducts = getAllProducts(p);

      const birthDate = p.birthDate || getBirthDateFromIIN(p.iin);
      const profileAge =
        p.age || (birthDate ? getAgeFromBirthDate(birthDate) : null);

      // --- поиск ---
      const matchesSearch =
        !filters.search ||
        (p.fio &&
          p.fio.toLowerCase().includes(filters.search.toLowerCase())) ||
        (p.iin && p.iin.toString().includes(filters.search)) ||
        (p.ac_id && p.ac_id.toString().includes(filters.search));

      // --- селекты ---
      const matchesCity =
        filters.city === "Все города" || p.city === filters.city;
      const matchesSegment =
        filters.segment === "Все сегменты" || p.segment === filters.segment;

      const matchesGender =
        filters.gender === "Все" ||
        (filters.gender.startsWith("Муж") &&
          profileGender?.startsWith("Муж")) ||
        (filters.gender.startsWith("Жен") &&
          profileGender?.startsWith("Жен"));

      const matchesActivity =
        filters.activityStatus === "Все статусы" ||
        p.status === filters.activityStatus;

      const matchesPrivate =
        filters.privateStatus === "Все" ||
        (filters.privateStatus === "Private" ? p.isPrivate : !p.isPrivate);

      const matchesLife =
        filters.lifeStatus === "Все" ||
        p.lifeStatus === filters.lifeStatus;

      const matchesMarital =
        filters.maritalStatus === "Все" ||
        (filters.maritalStatus === "Женат/Замужем" &&
          ["Женат", "Замужем"].includes(p.maritalStatus)) ||
        p.maritalStatus === filters.maritalStatus;

      const matchesTags =
        !filters.tags?.length ||
        filters.tags.every((t) => {
          const val = t.value || t.label || t;
          return p.tags && p.tags.includes(val);
        });

      const matchesProducts =
        (!filters.bankProducts?.length ||
          filters.bankProducts.some((bp) => allProducts.includes(bp))) &&
        (!filters.investProducts?.length ||
          filters.investProducts.some((ip) => allProducts.includes(ip))) &&
        (!filters.garantProducts?.length ||
          filters.garantProducts.some((gp) => allProducts.includes(gp)));

      const matchesDateBank =
        (!filters.registrationBankFrom && !filters.registrationBankTo) ||
        ((profileRegistrationBank || "") >=
          (filters.registrationBankFrom || "") &&
          (profileRegistrationBank || "") <=
            (filters.registrationBankTo || "9999-12-31"));

      const matchesDateMP =
        (!filters.registrationMPFrom && !filters.registrationMPTo) ||
        ((profileRegistrationMP || "") >=
          (filters.registrationMPFrom || "") &&
          (profileRegistrationMP || "") <=
            (filters.registrationMPTo || "9999-12-31"));

      const matchesAge =
        !filters.age ||
        (() => {
          if (!profileAge) return true;
          if (filters.age.includes("-")) {
            const [min, max] = filters.age.split("-").map(Number);
            return profileAge >= min && profileAge <= max;
          }
          return profileAge === Number(filters.age);
        })();

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
        matchesDateMP &&
        matchesAge
      );
    });
  }, [filters]);

  // --- пагинация ---
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredProfiles.length / pageSize));
  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () =>
    setCurrentPage((p) => Math.min(p + 1, totalPages));

  // --- UI ---
  const getAgeFromBirthDate = (birthDate) => {
    if (!birthDate) return null;
    const today = new Date();
    const dob = new Date(birthDate);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age;
  };
  const getBirthDateFromIIN = (iin) => {
    if (!iin || iin.length < 7) return null;
    const year = parseInt(iin.slice(0, 2), 10);
    const month = parseInt(iin.slice(2, 4), 10);
    const day = parseInt(iin.slice(4, 6), 10);
    const centuryCode = parseInt(iin[6], 10);
    let fullYear;
    if (centuryCode === 1 || centuryCode === 2) fullYear = 1800 + year;
    else if (centuryCode === 3 || centuryCode === 4) fullYear = 1900 + year;
    else if (centuryCode === 5 || centuryCode === 6) fullYear = 2000 + year;
    else fullYear = 1900 + year;

    const isValidDate = (y, m, d) => { 
        const date = new Date(y, m - 1, d);
        return (
          date.getFullYear() === y &&
          date.getMonth() === m - 1 &&
          date.getDate() === d
        );
    };
    if (!isValidDate(fullYear, month, day)) return null;

    return `${fullYear}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">
          👥 Customer Data Platform
        </h1>

        <UnifiedFilters
          filters={filters}
          setFilters={setFilters}
          onReset={handleReset}
          allTags={[]}
        />

        <div className="flex items-center text-sm text-gray-700 mb-3">
          Найдено клиентов:{" "}
          <span className="font-semibold ml-1 mr-3">
            {filteredProfiles.length}
          </span>
          <button
            onClick={() => setShowPII((prev) => !prev)}
            className="p-1 rounded-full text-gray-500 hover:text-gray-700 transition-colors"
            title={showPII ? "Скрыть ФИО и ИИН" : "Показать ФИО и ИИН"}
          >
            {showPII ? (
              <EyeIcon className="w-5 h-5" />
            ) : (
              <EyeSlashIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full border-collapse text-gray-700">
            <thead className="bg-yellow-50 text-yellow-700">
              <tr>
                <th className="p-3 text-left">AC ID</th>
                <th className="p-3 text-left">ФИО</th>
                <th className="p-3 text-left">ИИН</th>
                <th className="p-3 text-left">Город</th>
                <th className="p-3 text-left">Сегмент</th>
                <th className="p-3 text-left">Статус активности</th> 
                <th className="p-3 text-left">Пол</th>
                <th className="p-3 text-left">Private</th>
                <th className="p-3 text-left">Жизненный статус</th>
                <th className="p-3 text-left">Семейное положение</th>
                <th className="p-3 text-left">Возраст</th>
                <th className="p-3 text-left">Регистрация (банк)</th>
                <th className="p-3 text-left">Регистрация (МП)</th>
                <th className="p-3 text-left">Продукты</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProfiles.map((p) => {
                const allProducts = getAllProducts(p);
                const profileGender =
                  p.gender || p.basicInfo?.gender || "—";
                const birthDate = p.birthDate || getBirthDateFromIIN(p.iin);
                const age = birthDate ? getAgeFromBirthDate(birthDate) : "—";

                // Определяем отображаемое ФИО и ИИН
                const displayFio = showPII
                  ? p.fio
                  : "**********";
                const displayIin = showPII
                  ? p.iin
                  : "************"; 

                return (
                  <tr
                    key={p.ac_id}
                    className="border-t hover:bg-yellow-100 cursor-pointer transition-colors"
                    onClick={() => navigate(`/profiles/${p.ac_id}`)}
                  >
                    <td className="p-3 font-mono">{p.ac_id}</td>
                    <td className="p-3">{displayFio}</td> 
                    <td className="p-3 font-mono">{displayIin}</td> 
                    <td className="p-3">{p.city}</td>
                    <td className="p-3">{p.segment}</td>
                    <td className="p-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          p.status === "Активен"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {p.status || "—"}
                      </span>
                    </td> 
                    <td className="p-3">{profileGender}</td>
                    <td className="p-3">{p.isPrivate ? "Private" : "Public"}</td>
                    <td className="p-3">{p.lifeStatus || "—"}</td>
                    <td className="p-3">{p.maritalStatus || "—"}</td>
                    <td className="p-3">
                      {age}{" "}
                      {birthDate && (
                        <span className="text-gray-400 text-xs ml-1">
                          ({birthDate})
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {p.registrationDate || "—"}
                    </td>
                    <td className="p-3">
                      {p.mobileAppRegistrationDate || "—"}
                    </td>
                    <td className="p-3">
                      {allProducts.length
                        ? allProducts.map((prod) => (
                            <span
                              key={prod}
                              className="inline-flex items-center bg-yellow-50 border border-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-medium mr-1 mb-1"
                            >
                              {prod}
                            </span>
                          ))
                        : "—"}
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