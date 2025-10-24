import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Filter, BarChart3 } from "lucide-react";

// --- Компонент ползунка фильтра ---
function FilterSlider({ label, min, max, step = 1, value, onChange }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{label}</p>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onValueChange={(v) => onChange([Math.min(...v), Math.max(...v)])}
        className="text-[#FFB800]"
      />
      <p className="text-sm text-gray-600 mt-1">
        {value[0]} — {value[1]}
      </p>
    </div>
  );
}

export default function Segments() {
  // --- Фильтры сегментации ---
  const [filters, setFilters] = useState({
    age: [25, 60],
    transactions: [3, 20],
    avgCheck: [5000, 20000],
  });

  // --- Статистика сегмента ---
  const [segmentStats, setSegmentStats] = useState({
    totalUsers: 0,
    avgRevenue: 0,
    genderSplit: [],
  });

  const [loading, setLoading] = useState(false);

  // --- Обновление фильтров ---
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: [Math.min(...value), Math.max(...value)],
    }));
  };

  // --- Построение сегмента (mock API) ---
  const buildSegment = async () => {
    setLoading(true);

    // 🔹 Здесь будет реальный API вызов
    // const response = await fetch("/api/segments", { method: "POST", body: JSON.stringify(filters) });
    // const data = await response.json();

    // 🔹 Пока mock
    await new Promise((r) => setTimeout(r, 800));
    const data = {
      totalUsers: 15230,
      avgRevenue: 12400,
      genderSplit: [
        { name: "Мужчины", value: 7800 },
        { name: "Женщины", value: 7430 },
      ],
    };

    setSegmentStats(data);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <Filter className="text-[#FFB800]" /> Audience Builder (Segments)
      </h1>

      {/* --- Панель фильтров --- */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader>
          <h2 className="text-lg font-medium">Фильтры сегмента</h2>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6">
          <FilterSlider
            label="Возраст"
            min={18}
            max={70}
            value={filters.age}
            onChange={(v) => updateFilter("age", v)}
          />
          <FilterSlider
            label="Число транзакций"
            min={1}
            max={50}
            value={filters.transactions}
            onChange={(v) => updateFilter("transactions", v)}
          />
          <FilterSlider
            label="Средний чек (₸)"
            min={1000}
            max={50000}
            step={1000}
            value={filters.avgCheck}
            onChange={(v) => updateFilter("avgCheck", v)}
          />
        </CardContent>
      </Card>

      {/* --- Результаты сегмента --- */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-lg font-medium flex items-center gap-2">
            <Users className="text-[#FFB800]" /> Результаты сегмента
          </h2>
          <Button
            onClick={buildSegment}
            className="bg-[#FFB800] hover:bg-[#e5a700] text-white"
            disabled={loading}
          >
            {loading ? "Вычисление..." : "Построить сегмент"}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Размер сегмента</p>
              <p className="text-2xl font-semibold">{segmentStats.totalUsers.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Средний доход (₸)</p>
              <p className="text-2xl font-semibold">{segmentStats.avgRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Покрытие аудитории</p>
              <p className="text-2xl font-semibold">
                {((segmentStats.totalUsers / 100000) * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          {/* --- График распределения по полу --- */}
          <div className="mt-8">
            <h3 className="text-md font-medium flex items-center gap-2 mb-3">
              <BarChart3 className="text-[#FFB800]" /> Гендерное распределение
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={segmentStats.genderSplit}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
