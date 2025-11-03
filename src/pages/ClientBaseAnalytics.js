import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs.js";
import { RefreshCw, Search } from "lucide-react";

import { overviewAllData } from "../data/analytics/overviewAllData";
import { behaviorAllData } from "../data/analytics/behaviorAllData";
import { pushAllData } from "../data/analytics/pushAllData";
import { seasonalityAllData } from "../data/analytics/seasonalityAllData";
import { relationsAllData } from "../data/analytics/relationsAllData";

import SectionOverview from "./sections/SectionOverview";
import SectionSeasonality from "./sections/SectionSeasonality";
import SectionBehavior from "./sections/SectionBehavior";
import SectionPush from "./sections/SectionPush";
import SectionRelations from "./sections/SectionRelations";

export default function ClientBaseAnalytics() {
  console.log("✅ [Mount] ClientBaseAnalytics загружен");

  // ---- Фильтры ----
  const [filters, setFilters] = useState({
    search: "",
    city: "Все города",
    segment: "Все сегменты",
    product: "Все продукты",
    tag: "Все теги",
    age: "Все возраста",
    gender: "Все",
    activityStatus: "Все статусы",
    device: "Все устройства",
    registrationMPFrom: "",
    registrationMPTo: "",
    registrationBankFrom: "",
    registrationBankTo: "",
  });

  // ---- Tabs & обновление ----
  const [activeTab, setActiveTab] = useState("overview");
  const [lastUpdated, setLastUpdated] = useState("—");

  // ---- Данные ----
  const [filteredOverview, setFilteredOverview] = useState(overviewAllData);
  const [filteredBehavior, setFilteredBehavior] = useState(behaviorAllData);
  const [filteredPush, setFilteredPush] = useState(pushAllData);
  const [filteredSeasonality, setFilteredSeasonality] = useState(seasonalityAllData);
  const [filteredRelations, setFilteredRelations] = useState(relationsAllData);

  // ---- Мок-фильтрация ----
  useEffect(() => {
    console.log("⚙️ Применение фильтров:", filters);

    const isDefault = Object.values(filters).every(
      (v) => !v || v.includes("Все")
    );

    const scaleFactor = (() => {
      let factor = 1;
      if (filters.city === "Алматы") factor *= 0.9;
      if (filters.segment === "Премиум") factor *= 1.15;
      if (filters.segment === "Массовый") factor *= 0.85;
      if (filters.device === "iOS") factor *= 0.95;
      if (filters.device === "Android") factor *= 1.05;
      if (filters.product === "Кредиты") factor *= 1.2;
      if (filters.product === "Карты") factor *= 0.9;
      if (filters.activityStatus === "Неактивный") factor *= 0.6;
      if (filters.activityStatus === "Активный") factor *= 1.1;
      if (filters.search) factor *= 0.7;
      return factor;
    })();

    const applyFilter = (data) => {
      if (isDefault) return data;
      const clone = JSON.parse(JSON.stringify(data));

      // KPI
      if (clone.kpi) {
        Object.keys(clone.kpi).forEach((k) => {
          if (typeof clone.kpi[k] === "number") {
            clone.kpi[k] = Math.round(clone.kpi[k] * scaleFactor);
          }
        });
      }

      // Charts
      if (clone.charts) {
        Object.keys(clone.charts).forEach((key) => {
          const chart = clone.charts[key];
          if (Array.isArray(chart)) {
            clone.charts[key] = chart.map((d) =>
              Object.fromEntries(
                Object.entries(d).map(([k, v]) =>
                  typeof v === "number" ? [k, Math.round(v * scaleFactor)] : [k, v]
                )
              )
            );
          }
        });
      }

      clone.meta = { ...clone.meta, updatedAt: new Date().toISOString() };
      clone.insights = [
        `Фильтры: ${Object.entries(filters)
          .filter(([_, v]) => v && !v.includes("Все"))
          .map(([k, v]) => `${k}=${v}`)
          .join(", ")}`,
        ...(clone.insights || []),
      ];

      return clone;
    };

    setFilteredOverview(applyFilter(overviewAllData));
    setFilteredBehavior(applyFilter(behaviorAllData));
    setFilteredPush(applyFilter(pushAllData));
    setFilteredSeasonality(applyFilter(seasonalityAllData));
    setFilteredRelations(applyFilter(relationsAllData));

    setLastUpdated(new Date().toLocaleTimeString("ru-RU"));
  }, [filters]);

  const handleReset = () =>
    setFilters({
      search: "",
      city: "Все города",
      segment: "Все сегменты",
      product: "Все продукты",
      tag: "Все теги",
      age: "Все возраста",
      gender: "Все",
      activityStatus: "Все статусы",
      device: "Все устройства",
      registrationMPFrom: "",
      registrationMPTo: "",
      registrationBankFrom: "",
      registrationBankTo: "",
    });

  const filtersActive = Object.entries(filters).some(
    ([_, v]) => v && !v.includes("Все")
  );

  // ---- UI ----
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            📊 Client Base Analytics
          </h1>
          <p className="text-gray-600 text-sm">
            Единый аналитический обзор клиентской базы
          </p>
        </div>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <RefreshCw size={14} className="text-yellow-500" />
          Обновлено: {lastUpdated}
        </div>
      </div>

      {/* Панель фильтров */}
      <div className="bg-white shadow-sm rounded-xl p-4 border border-gray-100">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* 🔍 Поиск */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 font-medium mb-1">
              <Search size={12} className="inline mr-1 text-yellow-600" />
              Глобальный поиск
            </label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) =>
                setFilters((f) => ({ ...f, search: e.target.value }))
              }
              placeholder="ФИО, ИИН, ID, счёт..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* 📍 Город */}
          <SelectBox
            label="🏙 Город"
            value={filters.city}
            options={["Все города", "Алматы", "Астана", "Шымкент"]}
            onChange={(v) => setFilters((f) => ({ ...f, city: v }))}
          />

          {/* 🧩 Продукт */}
          <SelectBox
            label="💳 Продукт"
            value={filters.product}
            options={[
              "Все продукты",
              "Карты",
              "Кредиты",
              "Депозиты",
              "Инвестиции",
            ]}
            onChange={(v) => setFilters((f) => ({ ...f, product: v }))}
          />

          {/* 🏷 Теги */}
          <SelectBox
            label="🏷 Тег"
            value={filters.tag}
            options={["Все теги", "VIP", "Новичок", "Проблемный", "Loyal"]}
            onChange={(v) => setFilters((f) => ({ ...f, tag: v }))}
          />

          {/* 📊 Сегмент */}
          <SelectBox
            label="📊 Сегмент"
            value={filters.segment}
            options={["Все сегменты", "Премиум", "Массовый", "Семейный"]}
            onChange={(v) => setFilters((f) => ({ ...f, segment: v }))}
          />

          {/* 🎂 Возраст */}
          <SelectBox
            label="🎂 Возраст"
            value={filters.age}
            options={["Все возраста", "18–25", "26–35", "36–45", "46–60", "60+"]}
            onChange={(v) => setFilters((f) => ({ ...f, age: v }))}
          />

          {/* 🚻 Гендер */}
          <SelectBox
            label="🚻 Пол"
            value={filters.gender}
            options={["Все", "Мужчины", "Женщины"]}
            onChange={(v) => setFilters((f) => ({ ...f, gender: v }))}
          />

          {/* ⚡ Активность */}
          <SelectBox
            label="⚡ Статус активности"
            value={filters.activityStatus}
            options={["Все статусы", "Активный", "Неактивный"]}
            onChange={(v) => setFilters((f) => ({ ...f, activityStatus: v }))}
          />

          {/* 📱 Устройство */}
          <SelectBox
            label="📱 Устройство"
            value={filters.device}
            options={["Все устройства", "iOS", "Android", "Web"]}
            onChange={(v) => setFilters((f) => ({ ...f, device: v }))}
          />

          {/* 📅 Регистрация в МП */}
          <DateRangeBox
            label="📅 Регистрация в МП"
            from={filters.registrationMPFrom}
            to={filters.registrationMPTo}
            onChange={(from, to) =>
              setFilters((f) => ({ ...f, registrationMPFrom: from, registrationMPTo: to }))
            }
          />

          {/* 🏦 Регистрация в банке */}
          <DateRangeBox
            label="🏦 Регистрация в банке"
            from={filters.registrationBankFrom}
            to={filters.registrationBankTo}
            onChange={(from, to) =>
              setFilters((f) => ({ ...f, registrationBankFrom: from, registrationBankTo: to }))
            }
          />
        </div>

        {/* Сброс */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleReset}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Сбросить фильтры
          </button>
        </div>

        {filtersActive && (
          <div className="mt-3 text-sm text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md p-2">
            Активны фильтры:{" "}
            {Object.entries(filters)
              .filter(([_, v]) => v && !v.includes("Все"))
              .map(([k, v]) => `${k}: ${v}`)
              .join(", ")}
          </div>
        )}
      </div>

      {/* ---- Вкладки ---- */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex gap-2 overflow-x-auto bg-white border rounded-lg p-2 shadow-sm">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="seasonality">Сезонность</TabsTrigger>
          <TabsTrigger value="behavior">Поведение</TabsTrigger>
          <TabsTrigger value="push">Push-коммуникации</TabsTrigger>
          <TabsTrigger value="relations">Связи</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <SectionOverview data={filteredOverview} />
        </TabsContent>

        <TabsContent value="seasonality">
          <SectionSeasonality data={filteredSeasonality} />
        </TabsContent>

        <TabsContent value="behavior">
          <SectionBehavior data={filteredBehavior} />
        </TabsContent>

        <TabsContent value="push">
          <SectionPush data={filteredPush} />
        </TabsContent>

        <TabsContent value="relations">
          <SectionRelations data={filteredRelations} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

/* -------------------- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ -------------------- */

function SelectBox({ label, value, options, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function DateRangeBox({ label, from, to, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="date"
          value={from}
          onChange={(e) => onChange(e.target.value, to)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm w-1/2"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => onChange(from, e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm w-1/2"
        />
      </div>
    </div>
  );
}
