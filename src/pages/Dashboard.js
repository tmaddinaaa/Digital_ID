import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Loader2, TrendingUp, Users, RefreshCw } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProfiles: 128530,
    activeProfiles: 82410,
    newProfiles: 2150,
    uniqueEvents: 485000,
    avgAttributes: 23.4,
    mergeRate: 7.2,
    lastUpdated: "2 часа назад",
  });

  const [loading, setLoading] = useState(true);

  // --- MOCK: имитация загрузки данных ---
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // --- MOCK: динамика новых клиентов ---
  const newClientsData = [
    { month: "Май", count: 1500 },
    { month: "Июн", count: 1800 },
    { month: "Июл", count: 2200 },
    { month: "Авг", count: 2500 },
    { month: "Сен", count: 2300 },
    { month: "Окт", count: 2150 },
  ];

  // --- MOCK: структура клиентской базы ---
  const sourceData = [
    { source: "CRM", value: 42000 },
    { source: "Мобильное приложение", value: 56000 },
    { source: "Веб", value: 30530 },
  ];

  // --- MOCK: мини-инсайты ---
  const insights = [
    { title: "Сегмент «Digital активные» растёт на 12%", trend: "up" },
    { title: "Сегмент «Low spenders» теряет активность (-5%)", trend: "down" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">
            Ключевые метрики по клиентской базе, динамика и инсайты.
          </p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <RefreshCw size={16} className="mr-1 text-[#FFB800]" />
          Обновлено: {stats.lastUpdated}
        </div>
      </div>

      {/* === KPI CARDS === */}
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-gray-500" size={32} />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          <KpiCard title="Всего профилей" value={stats.totalProfiles} color="text-teal-600" />
          <KpiCard title="Активные профили" value={stats.activeProfiles} color="text-blue-600" />
          <KpiCard title="Новые за период" value={stats.newProfiles} color="text-green-600" />
          <KpiCard title="Уникальные события" value={stats.uniqueEvents} color="text-purple-600" />
          <KpiCard title="Атрибутов на профиль" value={stats.avgAttributes} color="text-rose-600" />
          <KpiCard title="Merge Rate" value={`${stats.mergeRate}%`} color="text-orange-600" />
        </div>
      )}

      {/* === CHARTS === */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* --- Динамика новых клиентов --- */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">Динамика новых клиентов</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={newClientsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#FFB800"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* --- Источники профилей --- */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-4">
              Структура клиентской базы по источникам
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={sourceData}>
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* === MINI INSIGHTS === */}
      <div>
        <h2 className="text-lg font-medium mb-4">Мини-инсайты</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 border rounded-lg p-4"
            >
              <p className="text-gray-700">{insight.title}</p>
              {insight.trend === "up" ? (
                <TrendingUp className="text-green-500" size={18} />
              ) : (
                <TrendingUp className="text-red-500 rotate-180" size={18} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Компонент для карточек KPI ---
function KpiCard({ title, value, color }) {
  return (
    <Card className="shadow-sm border-gray-200">
      <CardContent className="p-4 text-center">
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className={`text-2xl font-bold ${color}`}>
          {typeof value === "number" ? value.toLocaleString() : value}
        </h2>
      </CardContent>
    </Card>
  );
}
