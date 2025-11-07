import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Search,
  Package,
  Tags,
  Briefcase,
  Shield,
  Building2,
  X,
} from "lucide-react";
import Select from "react-select";

export default function UnifiedFilters({
  filters,
  setFilters,
  onReset,
  allTags = [],
}) {
  const [showDates, setShowDates] = useState(false);

  const handleChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const toggleCheckbox = (group, item) => {
    setFilters((prev) => {
      const list = new Set(prev[group] || []);
      list.has(item) ? list.delete(item) : list.add(item);
      return { ...prev, [group]: Array.from(list) };
    });
  };

  const handleSelectAll = (group, items) => {
    setFilters((prev) => ({ ...prev, [group]: [...items] }));
  };

  const handleClearAll = (group) => {
    setFilters((prev) => ({ ...prev, [group]: [] }));
  };

  const handleRemoveTag = (group, item) => {
    setFilters((prev) => ({
      ...prev,
      [group]: prev[group].filter((i) => i !== item),
    }));
  };

  const dateFilterActive =
    filters.registrationBankFrom ||
    filters.registrationBankTo ||
    filters.registrationMPFrom ||
    filters.registrationMPTo;

  const selectStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db",
      borderRadius: "0.375rem",
      boxShadow: "none",
      "&:hover": { borderColor: "#facc15" },
      minHeight: "38px",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 50,
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#fef3c7",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "#92400e",
    }),
  };

  const defaultTags = [
    {
      label: "Активность",
      options: [
        { value: "active", label: "Активный" },
        { value: "inactive", label: "Неактивный" },
        { value: "new_user", label: "Новый клиент" },
      ],
    },
    {
      label: "Финансы",
      options: [
        { value: "deposit_user", label: "Депозитный клиент" },
        { value: "credit_user", label: "Кредитный клиент" },
        { value: "high_balance", label: "Высокий баланс" },
      ],
    },
    {
      label: "Лояльность",
      options: [
        { value: "promo_participant", label: "Участвует в акциях" },
        { value: "bonus_lover", label: "Использует бонусы" },
        { value: "churn_risk", label: "Риск оттока" },
      ],
    },
  ];

  const tagOptions = allTags.length > 0 ? allTags : defaultTags;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6 space-y-4">
      {/* 🔍 Поиск и теги */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Поиск */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1">
            🔍 Поиск
          </label>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Введите ФИО, ИИН или AC_ID..."
              value={filters.search || ""}
              onChange={(e) => handleChange("search", e.target.value)}
              className="border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition w-full"
            />
          </div>
        </div>

        {/* 🏷 Теги */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1 flex items-center gap-1">
            <Tags className="w-3.5 h-3.5 text-yellow-500" /> Теги
          </label>
          <Select
            isMulti
            options={tagOptions}
            placeholder="Выберите теги..."
            value={filters.tags || []}
            onChange={(selected) => handleChange("tags", selected || [])}
            styles={selectStyles}
            className="text-sm"
          />
        </div>
      </div>

      {/* 🧩 Основные фильтры */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <FilterSelect
          label="🏙 Город"
          value={filters.city || "Все города"}
          options={[
            "Все города",
            "Алматы",
            "Астана",
            "Шымкент",
            "Караганда",
            "Актобе",
            "Костанай",
          ]}
          onChange={(v) => handleChange("city", v)}
        />

        <FilterSelect
          label="📊 Сегмент"
          value={filters.segment || "Все сегменты"}
          options={[
            "Все сегменты",
            "ACTIVE_BUT_LOW_INCOME",
            "CORE_HIGH_INCOME",
            "CORE_MID_INCOME_ACTIVE",
            "CORE_MID_INCOME_PASSIVE",
            "CREDIT_ORIENTED", 
            "DEPOSIT_ORIENTED", 
            "HIGH_VALUE_ALL_ROUND", 
            "LOW_ENGAGEMENT_LOW_INCOME", 
            "MIXED_INCOME", 
            "PASSIVE_BUT_PROFITABLE", 
            "PASSIVE_LOW_INCOME", 
          ]}
          onChange={(v) => handleChange("segment", v)}
        />

        <FilterSelect
          label="⚙️ Статус активности"
          value={filters.activityStatus || "Все статусы"}
          options={["Все статусы", "Активен", "Неактивен"]}
          onChange={(v) => handleChange("activityStatus", v)}
        />

        <FilterSelect
          label="🔒 Private статус"
          value={filters.privateStatus || "Все"}
          options={["Все", "Private", "Public"]}
          onChange={(v) => handleChange("privateStatus", v)}
        />

        <FilterSelect
          label="❤️ Жизненный статус"
          value={filters.lifeStatus || "Все"}
          options={["Все", "Актуальный", "Смерть"]}
          onChange={(v) => handleChange("lifeStatus", v)}
        />

        <FilterSelect
          label="💍 Семейное положение"
          value={filters.maritalStatus || "Все"}
          options={[
            "Все",
            "Холост/Не замужем",
            "Женат/Замужем",
            "Разведен(а)",
            "Вдовец/Вдова",
          ]}
          onChange={(v) => handleChange("maritalStatus", v)}
        />

        <FilterSelect
          label="🧠 Пол"
          value={filters.gender || "Все"}
          options={["Все", "Мужчины", "Женщины"]}
          onChange={(v) => handleChange("gender", v)}
        />

        {/* 🎂 Возраст */}
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-gray-500 mb-1">
            🎂 Возраст (число или диапазон)
          </label>
          <input
            type="text"
            placeholder="Например: 30 или 25-40"
            value={filters.age || ""}
            onChange={(e) => handleChange("age", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
          />
        </div>
      </div>

      {/* 🏦 Продукты */}
      <div className="mt-2 grid md:grid-cols-3 gap-6">
        <ProductBlock
          title="🏦 Продукты Банка"
          items={["Кредит", "Депозит", "Карта"]}
          activeList={filters.bankProducts || []}
          onToggle={(i) => toggleCheckbox("bankProducts", i)}
          onSelectAll={() => handleSelectAll("bankProducts", ["Кредит", "Депозит", "Карта"])}
          onClear={() => handleClearAll("bankProducts")}
          onRemove={(i) => handleRemoveTag("bankProducts", i)}
        />

        <ProductBlock
          title="💼 AC Invest (инвестиционная)"
          items={["Инвестиции", "Облигации", "Акции"]}
          activeList={filters.investProducts || []}
          onToggle={(i) => toggleCheckbox("investProducts", i)}
          onSelectAll={() => handleSelectAll("investProducts", ["Инвестиции", "Облигации", "Акции"])}
          onClear={() => handleClearAll("investProducts")}
          onRemove={(i) => handleRemoveTag("investProducts", i)}
        />

        <ProductBlock
          title="🛡️ AC Garant (страховая)"
          items={["Страховка жизни", "Медицинская страховка", "КАСКО"]}
          activeList={filters.garantProducts || []}
          onToggle={(i) => toggleCheckbox("garantProducts", i)}
          onSelectAll={() => handleSelectAll("garantProducts", ["Страховка жизни", "Медицинская страховка", "КАСКО"])}
          onClear={() => handleClearAll("garantProducts")}
          onRemove={(i) => handleRemoveTag("garantProducts", i)}
        />
      </div>

      {/* 📅 Фильтры по дате регистрации */}
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
          {showDates ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showDates && (
          <div className="mt-4 flex flex-wrap items-end gap-6 text-sm">
            <DateRangeFilter
              label="🏦 Банк"
              from={filters.registrationBankFrom}
              to={filters.registrationBankTo}
              onFromChange={(v) => handleChange("registrationBankFrom", v)}
              onToChange={(v) => handleChange("registrationBankTo", v)}
            />
            <DateRangeFilter
              label="📱 Мобильное приложение"
              from={filters.registrationMPFrom}
              to={filters.registrationMPTo}
              onFromChange={(v) => handleChange("registrationMPFrom", v)}
              onToChange={(v) => handleChange("registrationMPTo", v)}
            />
          </div>
        )}
      </div>

      {/* 🔁 Сброс */}
      <div className="flex justify-end mt-4">
        <button
          onClick={onReset}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2"
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
}

/* 🔹 Подкомпоненты */
const FilterSelect = ({ label, value, options, onChange }) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-gray-500 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const DateRangeFilter = ({ label, from, to, onFromChange, onToChange }) => (
  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
    <span className="font-semibold text-gray-600 whitespace-nowrap">{label}:</span>
    <input
      type="date"
      value={from || ""}
      onChange={(e) => onFromChange(e.target.value)}
      className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
    />
    <span className="text-gray-500">–</span>
    <input
      type="date"
      value={to || ""}
      onChange={(e) => onToChange(e.target.value)}
      className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-yellow-400 hover:border-yellow-300 transition"
    />
  </div>
);

const ProductBlock = ({
  title,
  icon,
  items,
  activeList,
  onToggle,
  onSelectAll,
  onClear,
  onRemove,
}) => {
  const isActive = activeList && activeList.length > 0;
  return (
    <div
      className={`border rounded-lg p-4 transition bg-gray-50 hover:bg-yellow-50 ${
        isActive ? "border-yellow-300 shadow-sm" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3
          className={`text-sm font-semibold flex items-center gap-2 ${
            isActive ? "text-yellow-600" : "text-gray-700"
          }`}
        >
          {icon} {title}
        </h3>
        <div className="flex gap-2 text-xs">
          <button
            onClick={onSelectAll}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            Все
          </button>
          <button
            onClick={onClear}
            className="text-gray-500 hover:text-gray-700 font-medium"
          >
            Очистить
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <label
            key={item}
            className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none hover:text-yellow-600"
          >
            <input
              type="checkbox"
              checked={activeList.includes(item)}
              onChange={() => onToggle(item)}
              className="accent-yellow-500 h-4 w-4 rounded"
            />
            {item}
          </label>
        ))}
      </div>

      {isActive && (
        <div className="mt-3 flex flex-wrap gap-2">
          {activeList.map((a) => (
            <span
              key={a}
              className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1"
            >
              {a}
              <X
                className="w-3 h-3 cursor-pointer hover:text-red-500"
                onClick={() => onRemove(a)}
              />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
