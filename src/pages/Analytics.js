import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, Sankey } from "recharts";
import { TrendingUp, Activity, GitBranch } from "lucide-react";

/**
 * Страница аналитики (Cohort & Behavior Analytics)
 * ✅ Cohort heatmap
 * ✅ Funnel (воронка)
 * ✅ Path analysis (Sankey)
 * ✅ Time series (линейный график)
 * ✅ Подготовлено под API-интеграцию
 */

export default function Analytics() {
  // --- Данные состояния (моки для теста) ---
  const [cohortData, setCohortData] = useState([]);
  const [funnelData, setFunnelData] = useState([]);
  const [pathData, setPathData] = useState({ nodes: [], links: [] });
  const [timeSeries, setTimeSeries] = useState([]);

  // --- Пример вызова API (пока закомментировано) ---
  useEffect(() => {
    // ✅ 1. Когортный анализ (Retention по месяцам)
    // fetch("/api/analytics/cohort")
    //   .then((res) => res.json())
    //   .then(setCohortData);

    // ✅ 2. Воронка (Funnel)
    // fetch("/api/analytics/funnel")
    //   .then((res) => res.json())
    //   .then(setFunnelData);

    // ✅ 3. Поведенческий путь (Sankey)
    // fetch("/api/analytics/path")
    //   .then((res) => res.json())
    //   .then(setPathData);

    // ✅ 4. Динамика по времени (Time Series)
    // fetch("/api/analytics/timeseries")
    //   .then((res) => res.json())
    //   .then(setTimeSeries);

    // --- MOCK DATA для UI-тестирования ---
    setCohortData([
      { cohort: "Jan", M1: 100, M2: 85, M3: 70, M4: 60 },
      { cohort: "Feb", M1: 100, M2: 80, M3: 66, M4: 55 },
    ]);
    setFunnelData([
      { name: "Registered", value: 1000 },
      { name: "Activated", value: 800 },
      { name: "Purchased", value: 500 },
      { name: "Repeat", value: 300 },
    ]);
    setPathData({
      nodes: [
        { name: "Registration" },
        { name: "Activation" },
        { name: "Purchase" },
        { name: "Repeat" },
        { name: "Churn" },
      ],
      links: [
        { source: 0, target: 1, value: 800 },
        { source: 1, target: 2, value: 500 },
        { source: 2, target: 3, value: 300 },
        { source: 1, target: 4, value: 300 },
      ],
    });
    setTimeSeries([
      { date: "2025-09", active: 1200, revenue: 4500000 },
      { date: "2025-10", active: 1500, revenue: 5200000 },
      { date: "2025-11", active: 1700, revenue: 6100000 },
    ]);
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <Activity className="text-[#FFB800]" /> Cohort & Behavior Analytics
      </h1>

      {/* === Когортный анализ === */}
      <Card className="p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <TrendingUp className="text-[#FFB800]" /> Когортный анализ удержания
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cohortData}>
            <XAxis dataKey="cohort" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="M2" stackId="a" fill="#FFD966" />
            <Bar dataKey="M3" stackId="a" fill="#FFB800" />
            <Bar dataKey="M4" stackId="a" fill="#E59E00" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* === Воронка конверсий === */}
      <Card className="p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <TrendingUp className="text-[#FFB800]" /> Воронка клиентского пути
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnelData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#FFB800" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* === Поведенческий путь (Sankey) === */}
      <Card className="p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <GitBranch className="text-[#FFB800]" /> Поведенческий маршрут (Sankey)
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <Sankey
            data={pathData}
            nodePadding={30}
            margin={{ left: 50, right: 50, top: 20, bottom: 20 }}
            link={{ stroke: "#FFB800", strokeWidth: 20 }}
            node={{ fill: "#E0E0E0" }}
          >
            <Tooltip />
          </Sankey>
        </ResponsiveContainer>
      </Card>

      {/* === Временная динамика === */}
      <Card className="p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Activity className="text-[#FFB800]" /> Динамика по времени
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={timeSeries}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="active" stroke="#FFB800" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke="#555" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
