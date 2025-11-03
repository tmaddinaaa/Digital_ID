import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Users, BarChart3, Filter, Clock, User } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Segments() {
  const [filters, setFilters] = useState({
    segment: "Все",
    ageGroup: "Все",
  });

  const handleFilterChange = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value }));
  };

  // 📊 Основные данные
  const segmentDistribution = [
    { segment: "PASSIVE_LOW_INCOME", count: 791780 },
    { segment: "PASSIVE_BUT_PROFITABLE", count: 241950 },
    { segment: "CORE_MID_INCOME_PASSIVE", count: 211170 },
    { segment: "ACTIVE_BUT_LOW_INCOME", count: 140090 },
    { segment: "CORE_HIGH_INCOME", count: 100660 },
    { segment: "DEPOSIT_ORIENTED", count: 39640 },
    { segment: "CREDIT_ORIENTED", count: 19530 },
  ];

  const genderDistribution = [
    { name: "Мужчины", value: 55.53 },
    { name: "Женщины", value: 44.47 },
  ];

  const creditDeposit = [
    { name: "NoDepo NoCred", value: 8.45 },
    { name: "Only Credit", value: 15.77 },
    { name: "Only Deposit", value: 27.75 },
    { name: "Credit + Deposit", value: 48.03 },
  ];

  const creditStats = [
    { name: "PASSIVE_LOW_INCOME", count: 0.4 },
    { name: "PASSIVE_BUT_PROFITABLE", count: 239.7 },
    { name: "CORE_MID_INCOME_PASSIVE", count: 35.3 },
    { name: "CORE_HIGH_INCOME", count: 58.8 },
    { name: "CREDIT_ORIENTED", count: 37.9 },
  ];

  const depositStats = [
    { name: "PASSIVE_LOW_INCOME", count: 48.0 },
    { name: "PASSIVE_BUT_PROFITABLE", count: 28.4 },
    { name: "CORE_MID_INCOME_PASSIVE", count: 36.0 },
    { name: "CORE_HIGH_INCOME", count: 20.3 },
    { name: "CREDIT_ORIENTED", count: 16.2 },
  ];

  // 🔹 Новые данные: возраст и срок обслуживания
  const avgAgeBySegment = [
    { name: "PASSIVE_LOW_INCOME", value: 39.2 },
    { name: "PASSIVE_BUT_PROFITABLE", value: 42.1 },
    { name: "CORE_MID_INCOME_PASSIVE", value: 36.7 },
    { name: "ACTIVE_BUT_LOW_INCOME", value: 33.4 },
    { name: "CORE_HIGH_INCOME", value: 41.8 },
    { name: "DEPOSIT_ORIENTED", value: 44.5 },
    { name: "CREDIT_ORIENTED", value: 35.6 },
  ];

  const avgServiceDurationBySegment = [
    { name: "PASSIVE_LOW_INCOME", value: 25.3 },
    { name: "PASSIVE_BUT_PROFITABLE", value: 36.1 },
    { name: "CORE_MID_INCOME_PASSIVE", value: 30.5 },
    { name: "ACTIVE_BUT_LOW_INCOME", value: 20.8 },
    { name: "CORE_HIGH_INCOME", value: 33.7 },
    { name: "DEPOSIT_ORIENTED", value: 38.2 },
    { name: "CREDIT_ORIENTED", value: 29.4 },
  ];

  const serviceDurationDistribution = [
    { month: "0–6", clients: 12.5 },
    { month: "7–12", clients: 18.2 },
    { month: "13–24", clients: 26.8 },
    { month: "25–36", clients: 19.6 },
    { month: "37–60", clients: 14.3 },
    { month: "60+", clients: 8.6 },
  ];

  const COLORS = ["#FFB800", "#FFD966", "#E59E00", "#FACC15"];

  const [filteredData, setFilteredData] = useState({
    segmentDistribution,
    creditStats,
    depositStats,
    avgAgeBySegment,
    avgServiceDurationBySegment,
  });

  useEffect(() => {
    if (filters.segment === "Все") {
      setFilteredData({
        segmentDistribution,
        creditStats,
        depositStats,
        avgAgeBySegment,
        avgServiceDurationBySegment,
      });
      return;
    }

    const filterBySegment = (data) =>
      data.filter(
        (d) => d.segment === filters.segment || d.name === filters.segment
      );

    setFilteredData({
      segmentDistribution: filterBySegment(segmentDistribution),
      creditStats: filterBySegment(creditStats),
      depositStats: filterBySegment(depositStats),
      avgAgeBySegment: filterBySegment(avgAgeBySegment),
      avgServiceDurationBySegment: filterBySegment(avgServiceDurationBySegment),
    });
  }, [filters]);

  // кастомная подпись
  const CustomTick = ({ x, y, payload }) => {
    const words = payload.value.split("_");
    return (
      <text x={x} y={y + 10} textAnchor="end" fontSize={10} fill="#555">
        {words.map((word, index) => (
          <tspan x={x} dy={index ? 10 : 0} key={index}>
            {word}
          </tspan>
        ))}
      </text>
    );
  };

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <Filter className="text-[#FFB800]" /> Аналитика по сегментам
      </h1>

      {/* --- Фильтры --- */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <h2 className="text-lg font-medium">Фильтры</h2>
        </CardHeader>
        <CardContent className="flex gap-6 flex-wrap">
          <div>
            <label className="text-sm text-gray-600">Сегмент</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 ml-2"
              value={filters.segment}
              onChange={(e) => handleFilterChange("segment", e.target.value)}
            >
              <option>Все</option>
              {segmentDistribution.map((s) => (
                <option key={s.segment}>{s.segment}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Возрастная группа</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 ml-2"
              value={filters.ageGroup}
              onChange={(e) => handleFilterChange("ageGroup", e.target.value)}
            >
              <option>Все</option>
              <option>18–25</option>
              <option>26–35</option>
              <option>36–45</option>
              <option>46–60</option>
              <option>60+</option>
            </select>
          </div>

          <Button
            className="bg-[#FFB800] text-white hover:bg-[#e5a700]"
            onClick={() => console.log("✅ Применён фильтр:", filters)}
          >
            Применить фильтр
          </Button>
        </CardContent>
      </Card>

      {/* --- Основные метрики (улучшенные) --- */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 text-center flex flex-col justify-center items-center p-6 rounded-xl">
          <CardContent className="flex flex-col items-center justify-center w-full">
            <p className="text-sm text-gray-500 font-medium tracking-wide mb-2">
              Количество клиентов
            </p>
            <h2 className="text-3xl font-bold text-gray-800">1.63 млн</h2>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 text-center flex flex-col justify-center items-center p-6 rounded-xl">
          <CardContent className="flex flex-col items-center justify-center w-full">
            <p className="text-sm text-gray-500 font-medium tracking-wide mb-2">
              Средний доход (₸)
            </p>
            <h2 className="text-3xl font-bold text-yellow-600">13 817</h2>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 text-center flex flex-col justify-center items-center p-6 rounded-xl">
          <CardContent className="flex flex-col items-center justify-center w-full">
            <p className="text-sm text-gray-500 font-medium tracking-wide mb-2">
              Total доход (₸)
            </p>
            <h2 className="text-3xl font-bold text-gray-800">
              22 328 860 000
            </h2>
          </CardContent>
        </Card>
      </div>

      {/* --- Распределение по сегментам --- */}
      <Card>
        <CardHeader className="text-lg font-medium flex items-center gap-2">
          <BarChart3 className="text-[#FFB800]" />
          Распределение по сегментам
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData.segmentDistribution}>
              <XAxis dataKey="segment" tick={<CustomTick />} interval={0} height={70} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#FFB800" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* --- Распределение по полу и кредит/депозит --- */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="text-lg font-medium">Распределение по полу</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={genderDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#FFB800"
                  dataKey="value"
                >
                  {genderDistribution.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-medium">Наличие кредита/депозита</CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={creditDeposit}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#FFB800"
                  dataKey="value"
                >
                  {creditDeposit.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* --- Кредиты и депозиты --- */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="text-lg font-medium text-center bg-[#F5F5F5]">
            Кредиты
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={filteredData.creditStats}>
                <XAxis dataKey="name" tick={<CustomTick />} interval={0} height={60} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#7EA8FF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-medium text-center bg-[#F5F5F5]">
            Депозиты
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={filteredData.depositStats}>
                <XAxis dataKey="name" tick={<CustomTick />} interval={0} height={60} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* --- Возраст и срок обслуживания --- */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="text-lg font-medium flex items-center gap-2">
            <User className="text-[#FFB800]" /> Средний возраст по сегментам
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={filteredData.avgAgeBySegment}>
                <XAxis dataKey="name" tick={<CustomTick />} interval={0} height={70} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#7EA8FF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-medium flex items-center gap-2">
            <Clock className="text-[#FFB800]" /> Средний срок обслуживания (мес)
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={filteredData.avgServiceDurationBySegment}>
                <XAxis dataKey="name" tick={<CustomTick />} interval={0} height={70} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* --- Линейный график срока обслуживания --- */}
      <Card>
        <CardHeader className="text-lg font-medium flex items-center gap-2">
          <Clock className="text-[#FFB800]" /> Распределение по сроку обслуживания
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={serviceDurationDistribution}>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="clients"
                stroke="#FFB800"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
