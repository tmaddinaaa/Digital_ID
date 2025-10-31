import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { RefreshCw, Search } from "lucide-react";

import { overviewData } from "../data/analytics/overviewData";
import { seasonalityData } from "../data/analytics/seasonalityData";
import { behaviorData } from "../data/analytics/behaviorData";
import { pushData } from "../data/analytics/pushData";
import { relationsData } from "../data/analytics/relationsData";

import SectionOverview from "./sections/SectionOverview";
import SectionSeasonality from "./sections/SectionSeasonality";
import SectionBehavior from "./sections/SectionBehavior";
import SectionPush from "./sections/SectionPush";
import SectionRelations from "./sections/SectionRelations";

export default function ClientBaseAnalytics() {
  // === Панель фильтров ===
  const [filters, setFilters] = useState({
    city: "Все города",
    segment: "Все сегменты",
    device: "Все устройства",
    activityDateFrom: "",
    activityDateTo: "",
    search: "",
  });

  const [activeTab, setActiveTab] = useState("overview");
  const [lastUpdated, setLastUpdated] = useState("—");

  // --- Локальные состояния с фильтрованными данными ---
  const [filteredOverview, setFilteredOverview] = useState(overviewData);
  const [filteredBehavior, setFilteredBehavior] = useState(behaviorData);
  const [filteredPush, setFilteredPush] = useState(pushData);
  const [filteredSeasonality, setFilteredSeasonality] = useState(seasonalityData);
  const [filteredRelations, setFilteredRelations] = useState(relationsData);

  // === Эффект: обновление при изменении фильтров ===
  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString("ru-RU"));

    const noFilters =
      filters.city === "Все города" &&
      filters.segment === "Все сегменты" &&
      filters.device === "Все устройства" &&
      !filters.activityDateFrom &&
      !filters.activityDateTo &&
      !filters.search;

    if (noFilters) {
      // возвращаем полную базу
      setFilteredOverview(overviewData);
      setFilteredBehavior(behaviorData);
      setFilteredPush(pushData);
      setFilteredSeasonality(seasonalityData);
      setFilteredRelations(relationsData);
      return;
    }

    // Имитируем фильтрацию — в будущем здесь будет вызов API
    const mockFilter = (data, label) => ({
      ...data,
      meta: {
        ...data.meta,
        filtersApplied: filters,
        filtered: true,
        label,
      },
      insights: [
        `Отфильтровано по: ${Object.entries(filters)
          .map(([k, v]) => `${k}: ${v}`)
          .join(", ")}`,
        ...(data.insights || []),
      ],
    });

    setFilteredOverview(mockFilter(overviewData, "Overview"));
    setFilteredBehavior(mockFilter(behaviorData, "Behavior"));
    setFilteredPush(mockFilter(pushData, "Push"));
    setFilteredSeasonality(mockFilter(seasonalityData, "Seasonality"));
    setFilteredRelations(mockFilter(relationsData, "Relations"));
  }, [filters]);

  // === Сброс фильтров ===
  const handleReset = () => {
    setFilters({
      city: "Все города",
      segment: "Все сегменты",
      device: "Все устройства",
      activityDateFrom: "",
      activityDateTo: "",
      search: "",
    });
  };

  // === Проверка активности фильтров ===
  const filtersActive = !(
    filters.city === "Все города" &&
    filters.segment === "Все сегменты" &&
    filters.device === "Все устройства" &&
    !filters.activityDateFrom &&
    !filters.activityDateTo &&
    !filters.search
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* === Заголовок === */}
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

      {/* === Панель фильтров === */}
      <div className="bg-white shadow-sm rounded-xl p-4 border border-gray-100">
        <div className="flex flex-wrap gap-4 items-end">
          {/* 🔍 Глобальный поиск */}
          <div className="flex flex-col flex-1 min-w-[220px]">
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
              placeholder="ФИО, ИИН, ID, счёт, полис..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* 🏙 Город */}
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

          {/* 📊 Сегмент */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">📊 Сегмент</label>
            <select
              value={filters.segment}
              onChange={(e) =>
                setFilters({ ...filters, segment: e.target.value })
              }
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            >
              <option>Все сегменты</option>
              <option>Премиум</option>
              <option>Массовый</option>
              <option>Семейный</option>
            </select>
          </div>

          {/* 📱 Устройство */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 mb-1">📱 Устройство</label>
            <select
              value={filters.device}
              onChange={(e) =>
                setFilters({ ...filters, device: e.target.value })
              }
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
            >
              <option>Все устройства</option>
              <option>iOS</option>
              <option>Android</option>
              <option>Web</option>
            </select>
          </div>

          {/* 📅 Активность */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">📅 С</label>
              <input
                type="date"
                value={filters.activityDateFrom}
                onChange={(e) =>
                  setFilters({ ...filters, activityDateFrom: e.target.value })
                }
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">📅 По</label>
              <input
                type="date"
                value={filters.activityDateTo}
                onChange={(e) =>
                  setFilters({ ...filters, activityDateTo: e.target.value })
                }
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          {/* 🔁 Сброс */}
          <button
            onClick={handleReset}
            className="ml-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            Сбросить
          </button>
        </div>

        {/* 🟡 Индикация активных фильтров */}
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

      {/* === Вкладки === */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex gap-2 overflow-x-auto bg-white border rounded-lg p-2 shadow-sm">
          <TabsTrigger value="overview">3.1 Обзор</TabsTrigger>
          <TabsTrigger value="seasonality">3.2 Сезонность</TabsTrigger>
          <TabsTrigger value="behavior">3.3 Поведение</TabsTrigger>
          <TabsTrigger value="push">3.4 Push-коммуникации</TabsTrigger>
          <TabsTrigger value="relations">3.5 Связи</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="overview">
            <SectionOverview data={filteredOverview} filters={filters} />
          </TabsContent>

          <TabsContent value="seasonality">
            <SectionSeasonality data={filteredSeasonality} filters={filters} />
          </TabsContent>

          <TabsContent value="behavior">
            <SectionBehavior data={filteredBehavior} filters={filters} />
          </TabsContent>

          <TabsContent value="push">
            <SectionPush data={filteredPush} filters={filters} />
          </TabsContent>

          <TabsContent value="relations">
            <SectionRelations data={filteredRelations} filters={filters} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
