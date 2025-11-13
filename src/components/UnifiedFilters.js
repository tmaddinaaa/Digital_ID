import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Search,
  Tags,
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

  const handleSelectAll = (group, items) =>
    setFilters((prev) => ({ ...prev, [group]: [...items] }));

  const handleClearAll = (group) =>
    setFilters((prev) => ({ ...prev, [group]: [] }));

  const handleRemoveTag = (group, item) =>
    setFilters((prev) => ({
      ...prev,
      [group]: (prev[group] || []).filter((x) => x !== item),
    }));

  const selectStyles = {
    control: (base) => ({
      ...base,
      borderColor: "#d1d5db",
      borderRadius: "0.375rem",
      "&:hover": { borderColor: "#facc15" },
      minHeight: "38px",
    }),
    menu: (base) => ({ ...base, zIndex: 50 }),
  };

  const bankProductsList = ["Кредит", "Депозит", "Карта"];
  const investProductsList = [
    "Облигации",
    "Акции",
    "Валюта",
    "Денежные средства",
  ];
  const garantProductsList = [
    "Автострахование",
    "Путешествия",
    "Страхование жизни",
  ];
  const portfolioTypesList = ["Крупный", "Средний", "Малый"];

  const showPortfolioFilter =
    filters.investProducts && filters.investProducts.length > 0;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6 space-y-4">
      {/* Поиск и теги */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Search */}
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1">
            🔍 Поиск
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={filters.search || ""}
              onChange={(e) => handleChange("search", e.target.value)}
              placeholder="Введите ФИО, ИИН или AC_ID…"
              className="border rounded-md w-full pl-9 pr-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1 flex gap-1 items-center">
            <Tags className="w-3.5 h-3.5 text-yellow-500" /> Теги
          </label>
          <Select
            isMulti
            styles={selectStyles}
            options={allTags}
            value={filters.tags || []}
            onChange={(v) => handleChange("tags", v)}
          />
        </div>

        {/* Chips */}
        <div>
          <label className="text-xs font-semibold text-gray-500 mb-1">
            Выбранные фильтры
          </label>
          <div className="bg-gray-50 border rounded-md min-h-[42px] px-3 py-2 flex flex-wrap gap-2">
            {(filters.investProducts || []).map((p) => (
              <FilterChip key={p} onRemove={() => handleRemoveTag("investProducts", p)}>
                {p}
              </FilterChip>
            ))}

            {(filters.portfolioTypes || []).map((t) => (
              <FilterChip key={t} onRemove={() => handleRemoveTag("portfolioTypes", t)}>
                Портфель: {t}
              </FilterChip>
            ))}

            {(!filters.investProducts || filters.investProducts.length === 0) &&
              (!filters.portfolioTypes || filters.portfolioTypes.length === 0) && (
                <span className="text-xs text-gray-400">
                  Пока нет выбранных фильтров
                </span>
              )}
          </div>
        </div>
      </div>

      {/* Основные фильтры */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <FilterSelect
          label="🏙 Город"
          value={filters.city || "Все города"}
          onChange={(v) => handleChange("city", v)}
          options={[
            "Все города",
            "Алматы",
            "Астана",
            "Шымкент",
            "Караганда",
            "Актобе",
            "Костанай",
          ]}
        />

        <FilterSelect
          label="📊 Сегмент"
          value={filters.segment || "Все сегменты"}
          onChange={(v) => handleChange("segment", v)}
          options={[
            "Все сегменты",
            "Ценные клиенты",
            "Кредитные клиенты",
            "Депозитные клиенты",
            "Смешанный доход",
            "Пассивные, но прибыльные",
            "Низкая активность и доход",
            "Пассивные низкодоходные",
            "Активные, но малодоходные",
            "Средний доход, пассивные",
            "Средний доход, активные",
            "Высокий доход",
            "Прочие источники дохода",
          ]}
        />

        <FilterSelect
          label="⚙️ Статус активности"
          value={filters.activityStatus || "Все статусы"}
          onChange={(v) => handleChange("activityStatus", v)}
          options={["Все статусы", "Активен", "Неактивен"]}
        />

        <FilterSelect
          label="🔒 Private статус"
          value={filters.privateStatus || "Все"}
          onChange={(v) => handleChange("privateStatus", v)}
          options={["Все", "Private", "Public"]}
        />

        <FilterSelect
          label="❤️ Жизненный статус"
          value={filters.lifeStatus || "Все"}
          onChange={(v) => handleChange("lifeStatus", v)}
          options={["Все", "Актуальный", "Смерть"]}
        />

        <FilterSelect
          label="💍 Семейное положение"
          value={filters.maritalStatus || "Все"}
          onChange={(v) => handleChange("maritalStatus", v)}
          options={[
            "Все",
            "Холост/Не замужем",
            "Женат/Замужем",
            "Разведен(а)",
            "Вдовец/Вдова",
          ]}
        />

        <FilterSelect
          label="🧠 Пол"
          value={filters.gender || "Все"}
          onChange={(v) => handleChange("gender", v)}
          options={["Все", "Мужчины", "Женщины"]}
        />
      </div>

      {/* Продуктовые блоки */}
      <div className="grid md:grid-cols-3 gap-6 mt-2">

        <ProductBlock
          title="🏦 Продукты Банка"
          items={bankProductsList}
          activeList={filters.bankProducts || []}
          onToggle={(i) => toggleCheckbox("bankProducts", i)}
          onSelectAll={() => handleSelectAll("bankProducts", bankProductsList)}
          onClear={() => handleClearAll("bankProducts")}
          onRemove={(i) => handleRemoveTag("bankProducts", i)}
        />

        {/* AC INVEST + Тип портфеля */}
        <ProductBlock
          title="💼 AC Invest (инвестиционная)"
          items={investProductsList}
          activeList={filters.investProducts || []}
          onToggle={(i) => toggleCheckbox("investProducts", i)}
          onSelectAll={() => handleSelectAll("investProducts", investProductsList)}
          onClear={() => handleClearAll("investProducts")}
          onRemove={(i) => handleRemoveTag("investProducts", i)}
          isInvest={true}
          portfolioTypes={filters.portfolioTypes || []}
          togglePortfolioType={(t) => toggleCheckbox("portfolioTypes", t)}
        />

        <ProductBlock
          title="🛡️ AC Garant (страховая)"
          items={garantProductsList}
          activeList={filters.garantProducts || []}
          onToggle={(i) => toggleCheckbox("garantProducts", i)}
          onSelectAll={() => handleSelectAll("garantProducts", garantProductsList)}
          onClear={() => handleClearAll("garantProducts")}
          onRemove={(i) => handleRemoveTag("garantProducts", i)}
        />

      </div>

      {/* Даты */}
      <div className="border-t pt-3 mt-3">
        <button
          onClick={() => setShowDates((p) => !p)}
          className={`flex items-center gap-2 text-sm font-semibold ${
            showDates ? "text-yellow-600" : "text-gray-700"
          }`}
        >
          <Calendar className="w-4 h-4" />
          Фильтры по дате регистрации
          {showDates ? <ChevronUp /> : <ChevronDown />}
        </button>

        {showDates && (
          <div className="mt-4 flex flex-wrap gap-6">
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

      {/* Buttons */}
      <div className="flex justify-end mt-4 gap-3">
        <button
          onClick={onReset}
          className="border px-4 py-2 rounded-md text-sm"
        >
          Сбросить
        </button>

        <button className="bg-yellow-500 px-4 py-2 rounded-md text-sm text-gray-900">
          Применить
        </button>
      </div>
    </div>
  );
}

/* ========================== COMPONENTS ========================== */

const FilterSelect = ({ label, value, options, onChange }) => (
  <div className="flex flex-col">
    <label className="text-xs font-semibold text-gray-500 mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-3 py-2 text-sm"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const DateRangeFilter = ({ label, from, to, onFromChange, onToChange }) => (
  <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-gray-50">
    <span className="font-semibold text-gray-600">{label}:</span>
    <input
      type="date"
      value={from || ""}
      onChange={(e) => onFromChange(e.target.value)}
      className="border rounded-md px-2 py-1 text-sm"
    />
    <span>–</span>
    <input
      type="date"
      value={to || ""}
      onChange={(e) => onToChange(e.target.value)}
      className="border rounded-md px-2 py-1 text-sm"
    />
  </div>
);

const ProductBlock = ({
  title,
  items,
  activeList,
  onToggle,
  onSelectAll,
  onClear,
  onRemove,
  isInvest = false,
  portfolioTypes = [],
  togglePortfolioType,
}) => {
  const isActive = activeList.length > 0;

  return (
    <div
      className={`border rounded-lg p-4 bg-gray-50 ${
        isActive ? "border-yellow-300" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-sm font-semibold ${isActive ? "text-yellow-600" : ""}`}>
          {title}
        </h3>

        <div className="flex gap-2 text-xs">
          <button onClick={onSelectAll} className="text-yellow-600">
            Все
          </button>
          <button onClick={onClear} className="text-gray-600">
            Очистить
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {items.map((i) => (
          <label key={i} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={activeList.includes(i)}
              onChange={() => onToggle(i)}
              className="accent-yellow-500"
            />
            {i}
          </label>
        ))}
      </div>

      {isActive && (
        <div className="mt-3 flex flex-wrap gap-2">
          {activeList.map((a) => (
            <span
              key={a}
              className="px-2 py-0.5 bg-yellow-100 rounded-full text-xs text-yellow-800 flex items-center gap-1"
            >
              {a}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => onRemove(a)}
              />
            </span>
          ))}
        </div>
      )}

      {/* 🔥 Тип портфеля внутри блока INVEST */}
      {isInvest && activeList.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="text-sm font-semibold text-yellow-700 mb-2">
            Тип портфеля
          </h4>

          {["Крупный", "Средний", "Малый"].map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={portfolioTypes.includes(t)}
                onChange={() => togglePortfolioType(t)}
                className="accent-yellow-500"
              />
              {t}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterChip = ({ children, onRemove }) => (
  <div className="flex gap-2 bg-gray-100 px-2 py-1 rounded-full text-xs">
    {children}
    <X className="w-3 h-3 cursor-pointer" onClick={onRemove} />
  </div>
);
