import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profilesList } from "../data/profilesList";
import Select from "react-select";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

const Profiles = () => {
  const navigate = useNavigate();

  const [filterValue, setFilterValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [cityFilter, setCityFilter] = useState("Все");
  const [segmentFilter, setSegmentFilter] = useState("Все");
  const [statusFilter, setStatusFilter] = useState("Все");

  const [dateFromBank, setDateFromBank] = useState("");
  const [dateToBank, setDateToBank] = useState("");
  const [dateFromMP, setDateFromMP] = useState("");
  const [dateToMP, setDateToMP] = useState("");

  const [showDates, setShowDates] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  // --- Уникальные значения ---
  const allCities = ["Все", ...new Set(profilesList.map((p) => p.city))];
  const allSegments = ["Все", ...new Set(profilesList.map((p) => p.segment))];
  const allTags = Array.from(
    new Set(profilesList.flatMap((p) => p.tags || []))
  ).map((tag) => ({ value: tag, label: tag }));

  // --- Фильтрация ---
  const filteredProfiles = profilesList.filter((p) => {
    const matchesSearch =
      p.fio.toLowerCase().includes(filterValue.toLowerCase()) ||
      p.iin.toString().includes(filterValue) ||
      p.ac_id.toString().includes(filterValue);

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((t) => p.tags && p.tags.includes(t.value));

    const matchesCity = cityFilter === "Все" || p.city === cityFilter;
    const matchesSegment = segmentFilter === "Все" || p.segment === segmentFilter;
    const matchesStatus = statusFilter === "Все" || p.status === statusFilter;

    const matchesDateBank =
      (!dateFromBank && !dateToBank) ||
      ((p.registrationDate || "").localeCompare(dateFromBank) >= 0 &&
        (p.registrationDate || "").localeCompare(dateToBank) <= 0);

    const matchesDateMP =
      (!dateFromMP && !dateToMP) ||
      ((p.mobileAppRegistrationDate || "").localeCompare(dateFromMP) >= 0 &&
        (p.mobileAppRegistrationDate || "").localeCompare(dateToMP) <= 0);

    return (
      matchesSearch &&
      matchesTags &&
      matchesCity &&
      matchesSegment &&
      matchesStatus &&
      matchesDateBank &&
      matchesDateMP
    );
  });

  // --- Пагинация ---
  const totalPages = Math.ceil(filteredProfiles.length / pageSize);
  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleReset = () => {
    setFilterValue("");
    setSelectedTags([]);
    setCityFilter("Все");
    setSegmentFilter("Все");
    setStatusFilter("Все");
    setDateFromBank("");
    setDateToBank("");
    setDateFromMP("");
    setDateToMP("");
    setCurrentPage(1);
  };

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  const dateFilterActive =
    dateFromBank || dateToBank || dateFromMP || dateToMP;

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">Client 360</h1>

        {/* 🎛️ Панель фильтров */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6 space-y-4">
          {/* 🔍 Основная строка */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col flex-1 min-w-[240px]">
              <label className="text-xs font-semibold text-gray-500 mb-1">
                🔍 Поиск
              </label>
              <input
                type="text"
                placeholder="Введите ФИО, ИИН или AC_ID..."
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
              />
            </div>

            {/* 🏷 Теги */}
            <div className="flex flex-col min-w-[250px]">
              <label className="text-xs font-semibold text-gray-500 mb-1">
                🏷 Теги
              </label>
              <Select
                isMulti
                options={allTags}
                placeholder="Выберите теги..."
                value={selectedTags}
                onChange={(selected) => setSelectedTags(selected || [])}
                className="text-sm"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "#d1d5db",
                    borderRadius: "0.375rem",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#facc15" },
                  }),
                }}
              />
            </div>

            {/* 🏙 Город */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1">
                🏙 Город
              </label>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
              >
                {allCities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* 📊 Сегмент */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1">
                📊 Сегмент
              </label>
              <select
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
              >
                {allSegments.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* ⚙️ Статус */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-500 mb-1">
                ⚙️ Статус
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
              >
                <option>Все</option>
                <option>Активен</option>
                <option>Неактивен</option>
              </select>
            </div>

            {/* Сброс */}
            <div className="flex items-end">
              <button
                onClick={handleReset}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Сбросить
              </button>
            </div>
          </div>

          {/* 📅 Collapsible фильтры по дате регистрации */}
          <div className="mt-3 border-t border-gray-200 pt-3">
            <button
              onClick={() => setShowDates((prev) => !prev)}
              className={`flex items-center gap-2 text-sm font-semibold transition ${
                dateFilterActive
                  ? "text-yellow-600"
                  : "text-gray-700 hover:text-yellow-600"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Фильтры по дате регистрации
              {showDates ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {showDates && (
              <div className="mt-4 flex flex-wrap items-end gap-6 text-sm">
                {/* 🏦 Регистрация в банке */}
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                  <span className="font-semibold text-gray-600 whitespace-nowrap">
                    🏦 Банк:
                  </span>
                  <input
                    type="date"
                    value={dateFromBank}
                    onChange={(e) => setDateFromBank(e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
                  />
                  <span className="text-gray-500">–</span>
                  <input
                    type="date"
                    value={dateToBank}
                    onChange={(e) => setDateToBank(e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
                  />
                </div>

                {/* 📱 Регистрация в мобильном приложении */}
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                  <span className="font-semibold text-gray-600 whitespace-nowrap">
                    📱 МП:
                  </span>
                  <input
                    type="date"
                    value={dateFromMP}
                    onChange={(e) => setDateFromMP(e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
                  />
                  <span className="text-gray-500">–</span>
                  <input
                    type="date"
                    value={dateToMP}
                    onChange={(e) => setDateToMP(e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 📋 Таблица */}
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="min-w-full border-collapse text-gray-700">
            <thead className="bg-yellow-50 text-yellow-700">
              <tr>
                <th className="p-3 text-left">AC ID</th>
                <th className="p-3 text-left">ФИО</th>
                <th className="p-3 text-left">ИИН</th>
                <th className="p-3 text-left">Город</th>
                <th className="p-3 text-left">Сегмент</th>
                <th className="p-3 text-left">Статус</th>
                <th className="p-3 text-left">Регистрация (банк)</th>
                <th className="p-3 text-left">Регистрация (МП)</th>
                <th className="p-3 text-left">Теги</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProfiles.map((p) => (
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
                  <td
                    className={`p-3 font-medium ${
                      p.status === "Активен"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {p.status}
                  </td>
                  <td className="p-3">{p.registrationDate || "—"}</td>
                  <td className="p-3">{p.mobileAppRegistrationDate || "—"}</td>
                  <td className="p-3">
                    {p.tags?.length
                      ? p.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-medium mr-1"
                          >
                            {t}
                          </span>
                        ))
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
