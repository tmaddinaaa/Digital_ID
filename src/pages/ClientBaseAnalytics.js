// src/pages/ClientBaseAnalytics.js
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs.js";
import { RefreshCw } from "lucide-react";

import UnifiedFilters from "../components/UnifiedFilters";

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
  const [filters, setFilters] = useState({
    search: "",
    city: "Все города",
    segment: "Все сегменты",
    age: "",
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

  const [activeTab, setActiveTab] = useState("overview");
  const [lastUpdated, setLastUpdated] = useState("—");

  const [filteredOverview, setFilteredOverview] = useState(overviewAllData);
  const [filteredBehavior, setFilteredBehavior] = useState(behaviorAllData);
  const [filteredPush, setFilteredPush] = useState(pushAllData);
  const [filteredSeasonality, setFilteredSeasonality] = useState(seasonalityAllData);
  const [filteredRelations, setFilteredRelations] = useState(relationsAllData);

  // --- Безопасная функция фильтрации без потери графиков ---
  const applyRealFilter = (dataset) => {
    if (!dataset || typeof dataset !== "object") return dataset;

    const clone = {
      ...dataset,
      charts: { ...(dataset.charts || {}) },
      kpi: { ...(dataset.kpi || {}) },
    };

    // 🔸 Корректируем KPI при фильтрах
    if (clone.kpi) {
      let scale = 1;

      if (filters.gender === "Женщины") scale *= 0.95;
      if (filters.gender === "Мужчины") scale *= 1.05;
      if (filters.bankProducts.includes("Кредит")) scale *= 1.1;
      if (filters.bankProducts.includes("Депозит")) scale *= 1.05;
      if (filters.activityStatus === "Неактивен") scale *= 0.8;

      Object.keys(clone.kpi).forEach((k) => {
        if (typeof clone.kpi[k] === "number") {
          clone.kpi[k] = Math.round(clone.kpi[k] * scale);
        }
      });
    }

    // 🔸 Мягкая фильтрация графиков
    if (clone.charts) {
      Object.keys(clone.charts).forEach((key) => {
        const chart = clone.charts[key];
        if (Array.isArray(chart)) {
          const filtered = chart.filter((row) => {
            if (filters.city !== "Все города" && row.city && row.city !== filters.city)
              return false;
            if (filters.segment !== "Все сегменты" && row.segment && row.segment !== filters.segment)
              return false;
            if (filters.gender !== "Все" && row.gender && row.gender !== filters.gender)
              return false;
            return true;
          });
          // Если всё выфильтровали — оставляем оригинал, чтобы график не пропал
          clone.charts[key] = filtered.length ? filtered : dataset.charts[key];
        }
      });
    }

    // 🔸 Метаданные и инсайты
    clone.meta = { ...clone.meta, updatedAt: new Date().toISOString() };
    clone.insights = [
      `Применены фильтры: ${
        Object.entries(filters)
          .filter(([_, v]) =>
            Array.isArray(v) ? v.length > 0 : v && !v.includes("Все")
          )
          .map(([k, v]) =>
            Array.isArray(v) ? `${k}: ${v.join(", ")}` : `${k}: ${v}`
          )
          .join("; ") || "нет"
      }`,
      ...(dataset.insights || []),
    ];

    return clone;
  };

  // --- Реакция на изменения фильтров ---
  useEffect(() => {
    console.log("⚙️ Применение фильтров:", filters);

    setFilteredOverview(applyRealFilter(overviewAllData));
    setFilteredBehavior(applyRealFilter(behaviorAllData));
    setFilteredPush(applyRealFilter(pushAllData));
    setFilteredSeasonality(applyRealFilter(seasonalityAllData));
    setFilteredRelations(applyRealFilter(relationsAllData));

    setLastUpdated(new Date().toLocaleTimeString("ru-RU"));
  }, [filters]);

  const handleReset = () =>
    setFilters({
      search: "",
      city: "Все города",
      segment: "Все сегменты",
      age: "",
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

  const filtersActive = Object.entries(filters).some(
    ([_, v]) =>
      (Array.isArray(v) && v.length > 0) ||
      (typeof v === "string" && v && !v.includes("Все"))
  );

  // --- UI ---
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
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

      {/* Единая панель фильтров */}
      <UnifiedFilters filters={filters} setFilters={setFilters} onReset={handleReset} />

      {/* Активные фильтры */}
      {filtersActive && (
        <div className="text-sm text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md p-3">
          Активные фильтры:{" "}
          {Object.entries(filters)
            .filter(([_, v]) => {
              if (Array.isArray(v)) return v.length > 0;
              return v && !v.includes("Все");
            })
            .map(([k, v]) =>
              Array.isArray(v) ? `${k}: ${v.join(", ")}` : `${k}: ${v}`
            )
            .join(", ")}
        </div>
      )}

      {/* Вкладки */}
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
