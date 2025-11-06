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
import SectionGeoMaps from "./sections/SectionGeoMaps.js"; // 🗺 Геоаналитика

console.log("🔍 Импорт GeoMaps:", SectionGeoMaps);

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
  const [filteredGeo, setFilteredGeo] = useState({});

  useEffect(() => {
    console.log("⚙️ Применение фильтров:", filters);

    setFilteredOverview(overviewAllData);
    setFilteredBehavior(behaviorAllData);
    setFilteredPush(pushAllData);
    setFilteredSeasonality(seasonalityAllData);
    setFilteredRelations(relationsAllData);
    setFilteredGeo({ updatedAt: new Date().toISOString() });

    setLastUpdated(new Date().toLocaleTimeString("ru-RU"));
  }, [filters]);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* 🔹 Заголовок */}
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

      {/* 🔹 Панель фильтров */}
      <UnifiedFilters filters={filters} setFilters={setFilters} onReset={() => setFilters({
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
      })} />

      {/* 🔹 Вкладки */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex gap-2 overflow-x-auto bg-white border rounded-lg p-2 shadow-sm">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
       { /*  <TabsTrigger value="seasonality">Сезонность</TabsTrigger> */}
          <TabsTrigger value="behavior">Поведение</TabsTrigger>
          <TabsTrigger value="push">Push-коммуникации</TabsTrigger>
       { /*  <TabsTrigger value="relations">Связи</TabsTrigger>*/}
          <TabsTrigger value="geomaps">Геоаналитика</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <SectionOverview data={filteredOverview} />
        </TabsContent>

      {/*  <TabsContent value="seasonality">
          <SectionSeasonality data={filteredSeasonality} />
        </TabsContent> */}

        <TabsContent value="behavior">
          <SectionBehavior data={filteredBehavior} />
        </TabsContent>

        <TabsContent value="push">
          <SectionPush data={filteredPush} />
        </TabsContent>

       {/* <TabsContent value="relations">
          <SectionRelations data={filteredRelations} />
        </TabsContent> */}

        <TabsContent value="geomaps">
          {SectionGeoMaps ? (
            <SectionGeoMaps data={filteredGeo} />
          ) : (
            <p className="text-red-600 font-medium">
              ❌ Ошибка: компонент GeoMaps не найден
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
