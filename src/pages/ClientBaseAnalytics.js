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
    city: "Все города",
    segment: "Все сегменты",
    device: "Все устройства",
    activityDateFrom: "",
    activityDateTo: "",
    search: "",
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

  // ---- Мок-фильтрация данных ----
  useEffect(() => {
    console.log("⚙️ Применение фильтров:", filters);

    const isDefault =
      filters.city === "Все города" &&
      filters.segment === "Все сегменты" &&
      filters.device === "Все устройства" &&
      !filters.activityDateFrom &&
      !filters.activityDateTo &&
      !filters.search;

    const scaleFactor = (() => {
      // имитация реакции на фильтр
      let factor = 1;
      if (filters.city === "Алматы") factor *= 0.85;
      if (filters.city === "Астана") factor *= 0.9;
      if (filters.segment === "Премиум") factor *= 1.1;
      if (filters.segment === "Массовый") factor *= 0.8;
      if (filters.device === "iOS") factor *= 0.95;
      if (filters.device === "Android") factor *= 1.05;
      if (filters.search) factor *= 0.5;
      return factor;
    })();

    const applyFilter = (data) => {
      if (isDefault) return data;

      const clone = JSON.parse(JSON.stringify(data));

      // 🔸 уменьшаем/увеличиваем KPI
      if (clone.kpi) {
        Object.keys(clone.kpi).forEach((k) => {
          if (typeof clone.kpi[k] === "number") {
            clone.kpi[k] = Math.round(clone.kpi[k] * scaleFactor);
          }
        });
      }

      // 🔸 модифицируем графики
      if (clone.charts) {
        Object.keys(clone.charts).forEach((chartKey) => {
          const chart = clone.charts[chartKey];
          if (Array.isArray(chart)) {
            clone.charts[chartKey] = chart.map((d) =>
              Object.fromEntries(
                Object.entries(d).map(([k, v]) =>
                  typeof v === "number" ? [k, Math.round(v * scaleFactor)] : [k, v]
                )
              )
            );
          }
        });
      }

      // 🔸 обновляем метаданные
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

    // 🔁 применяем фильтры к каждому разделу
    setFilteredOverview(applyFilter(overviewAllData));
    setFilteredBehavior(applyFilter(behaviorAllData));
    setFilteredPush(applyFilter(pushAllData));
    setFilteredSeasonality(applyFilter(seasonalityAllData));
    setFilteredRelations(applyFilter(relationsAllData));

    setLastUpdated(new Date().toLocaleTimeString("ru-RU"));
  }, [filters]);

  const handleReset = () =>
    setFilters({
      city: "Все города",
      segment: "Все сегменты",
      device: "Все устройства",
      activityDateFrom: "",
      activityDateTo: "",
      search: "",
    });

  const filtersActive =
    filters.city !== "Все города" ||
    filters.segment !== "Все сегменты" ||
    filters.device !== "Все устройства" ||
    filters.activityDateFrom ||
    filters.activityDateTo ||
    filters.search;

  // ---- Рендер ----
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
        <div className="flex flex-wrap gap-4 items-end">
          {/* Поиск */}
          <div className="flex flex-col flex-1 min-w-[220px]">
            <label className="text-xs text-gray-500 font-medium mb-1">
              <Search size={12} className="inline mr-1 text-yellow-600" />
              Глобальный поиск
            </label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
              placeholder="ФИО, ИИН, ID, счёт..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Город */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">🏙 Город</label>
            <select
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            >
              <option>Все города</option>
              <option>Алматы</option>
              <option>Астана</option>
              <option>Шымкент</option>
            </select>
          </div>

          {/* Сегмент */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">📊 Сегмент</label>
            <select
              value={filters.segment}
              onChange={(e) => setFilters({ ...filters, segment: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            >
              <option>Все сегменты</option>
              <option>Премиум</option>
              <option>Массовый</option>
              <option>Семейный</option>
            </select>
          </div>

          {/* Устройство */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">📱 Устройство</label>
            <select
              value={filters.device}
              onChange={(e) => setFilters({ ...filters, device: e.target.value })}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            >
              <option>Все устройства</option>
              <option>iOS</option>
              <option>Android</option>
              <option>Web</option>
            </select>
          </div>

          <button
            onClick={handleReset}
            className="ml-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Сбросить
          </button>
        </div>

        {filtersActive && (
          <div className="mt-3 text-sm text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md p-2">
            Фильтры активны:{" "}
            {Object.entries(filters)
              .filter(([_, v]) => v && !v.includes("Все"))
              .map(([k, v]) => `${k}: ${v}`)
              .join(", ")}
          </div>
        )}
      </div>

      {/* ---- ВКЛАДКИ ---- */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex gap-2 overflow-x-auto bg-white border rounded-lg p-2 shadow-sm">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="seasonality">Сезонность</TabsTrigger>
          <TabsTrigger value="behavior">Поведение</TabsTrigger>
          <TabsTrigger value="push">Push-коммуникации</TabsTrigger>
          <TabsTrigger value="relations">Связи</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="mt-6 space-y-6">
            <SectionOverview data={filteredOverview} />
          </div>
        </TabsContent>

        <TabsContent value="seasonality">
          <div className="mt-6 space-y-6">
            <SectionSeasonality data={filteredSeasonality} />
          </div>
        </TabsContent>

        <TabsContent value="behavior">
          <div className="mt-6 space-y-6">
            <SectionBehavior data={filteredBehavior} />
          </div>
        </TabsContent>

        <TabsContent value="push">
          <div className="mt-6 space-y-6">
            <SectionPush data={filteredPush} />
          </div>
        </TabsContent>

        <TabsContent value="relations">
          <div className="mt-6 space-y-6">
            <SectionRelations data={filteredRelations} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
