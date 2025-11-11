"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import AutoResizeContainer from "../../components/AutoResizeContainer";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar } from "lucide-react";

export default function SectionOverview({ data }) {
  const [reportDate, setReportDate] = useState("2025-10-01");
  const [newClientsRange, setNewClientsRange] = useState({
    start: "",
    end: "",
  });
  const [cityRange, setCityRange] = useState({
    start: "",
    end: "",
  });
  const [genderRange, setGenderRange] = useState({
    start: "",
    end: "",
  });

  if (!data)
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

  const { kpi = {}, charts = {} } = data;

  const kpiDisplay = [
    { key: "totalProfiles", label: "Всего профилей", value: kpi.totalProfiles },
    { key: "activeProfiles", label: "Активные профили", value: kpi.activeProfiles },
    { key: "newProfiles", label: "Новые профили", value: kpi.newProfiles },
  ];

  const cityData = (charts.cityDistribution || []).map((item) => ({
    ...item,
    shortCity:
      item.city.length > 14 ? item.city.slice(0, 12) + "…" : item.city,
  }));

  const manyCities = cityData.length > 10;

  // 🧍‍♂️ Данные для графика распределения по полу
  const genderData = [
    { name: "Женщины", value: 49.2 },
    { name: "Мужчины", value: 100 - 49.2 },
  ];
  const averageAge = 38.9;

  const COLORS = ["#FBBF24", "#60A5FA"];

  return (
    <div className="space-y-8">
      {/* 📊 Заголовок */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          📊 Обзор клиентской базы
        </h2>

        {/* 📅 Дата отчёта */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 shadow-sm">
          <Calendar size={16} className="text-yellow-600" />
          <span>
            Данные на{" "}
            <input
              type="date"
              value={reportDate}
              onChange={(e) => setReportDate(e.target.value)}
              className="bg-transparent outline-none text-gray-800 cursor-pointer"
            />
          </span>
        </div>
      </div>

      {/* KPI */}
      <div className="grid md:grid-cols-3 gap-4">
        {kpiDisplay.map(({ key, label, value }) => (
          <Card key={key}>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-gray-500">{label}</p>
              <h2 className="text-2xl font-bold text-yellow-600">
                {typeof value === "number"
                  ? value.toLocaleString("ru-RU")
                  : value || "—"}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 🧍 Распределение по полу + Средний возраст */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h3 className="text-lg font-medium">
              🧍 Распределение клиентской базы по полу и средний возраст
            </h3>

            {/* 📅 Диапазон дат */}
            <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
              <Calendar size={15} className="text-yellow-600" />
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={genderRange.start}
                  onChange={(e) =>
                    setGenderRange({ ...genderRange, start: e.target.value })
                  }
                  className="bg-transparent outline-none text-gray-800 cursor-pointer"
                />
                <span>–</span>
                <input
                  type="date"
                  value={genderRange.end}
                  onChange={(e) =>
                    setGenderRange({ ...genderRange, end: e.target.value })
                  }
                  className="bg-transparent outline-none text-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Отображает долю мужчин и женщин в клиентской базе. Средний возраст клиентов —{" "}
            <span className="font-semibold text-gray-800">{averageAge.toFixed(1)}</span> лет.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div style={{ width: 280, height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => `${v}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Легенда */}
            <div className="flex flex-col gap-3 text-sm text-gray-700">
              {genderData.map((entry, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="inline-block w-4 h-4 rounded-sm"
                    style={{ backgroundColor: COLORS[i % COLORS.length] }}
                  ></span>
                  <span className="font-medium text-gray-800">{entry.name}</span>
                  <span className="ml-auto font-semibold text-amber-600">
                    {entry.value}%
                  </span>
                </div>
              ))}
              <div className="mt-2 text-sm text-gray-600">
                Средний возраст:{" "}
                <span className="font-semibold text-gray-800">
                  {averageAge.toFixed(1)} лет
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 📈 Динамика новых клиентов */}
      {charts.newClients && charts.newClients.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg font-medium">
                📈 Динамика новых клиентов (Мобильное приложение)
              </h3>

              {/* Фильтр диапазона */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
                <Calendar size={15} className="text-yellow-600" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={newClientsRange.start}
                    onChange={(e) =>
                      setNewClientsRange({
                        ...newClientsRange,
                        start: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={newClientsRange.end}
                    onChange={(e) =>
                      setNewClientsRange({
                        ...newClientsRange,
                        end: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Отображает количество новых клиентов по месяцам.
            </p>

            <AutoResizeContainer height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={charts.newClients}
                  margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip formatter={(v) => v.toLocaleString("ru-RU")} />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#FFB800"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  >
                    <LabelList
                      dataKey="count"
                      position="top"
                      formatter={(v) => v.toLocaleString("ru-RU")}
                      fill="#444"
                      fontSize={11}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </AutoResizeContainer>
          </CardContent>
        </Card>
      )}

      {/* 🏙 Распределение по филиалам */}
      {charts.cityDistribution && charts.cityDistribution.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg font-medium">🏙 Распределение по филиалам</h3>

              {/* Фильтр диапазона */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
                <Calendar size={15} className="text-yellow-600" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={cityRange.start}
                    onChange={(e) =>
                      setCityRange({ ...cityRange, start: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={cityRange.end}
                    onChange={(e) =>
                      setCityRange({ ...cityRange, end: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className={`${manyCities ? "overflow-x-auto pb-4" : ""}`}>
              <div
                style={{
                  width: manyCities ? `${cityData.length * 130}px` : "100%",
                  height: 480,
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={cityData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 10,
                      bottom: 130,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip formatter={(v) => v.toLocaleString("ru-RU")} />
                    <Bar dataKey="count" fill="#FBBF24" radius={[6, 6, 0, 0]}>
                      <LabelList
                        dataKey="count"
                        position="top"
                        formatter={(v) => v.toLocaleString("ru-RU")}
                        fill="#444"
                        fontSize={11}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
