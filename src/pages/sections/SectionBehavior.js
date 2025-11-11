"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Bar, // Импортируем Bar
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  Legend,
  ComposedChart, // Импортируем ComposedChart
  Line, // Импортируем Line
} from "recharts";
import { TrendingUp, Calendar, Filter } from "lucide-react";

export default function SectionBehavior({ data }) {
  const colors = [
    "#FFD966", "#FFB800", "#E59E00", "#FACC15", "#FDE68A", "#FBBF24", "#F59E0B",
    "#D97706", "#B45309", "#FCD34D", "#FCA311", "#FFCA3A", "#FF9F1C", "#FDB813", "#FEE440",
  ];

  const { charts = {}, insights = [] } = data || {};

  // --- 1. ВСЕ ХУКИ ВЫЗЫВАЕМ В НАЧАЛЕ ---

  const [reportDate, setReportDate] = useState("2025-10-01");
  const [spendingRange, setSpendingRange] = useState({
    start: "2025-09-01",
    end: "2025-09-30",
  });
  const [mccRange, setMccRange] = useState({
    start: "2025-09-01",
    end: "2025-09-30",
  });
  const [selectedMcc, setSelectedMcc] = useState("all"); 

  // Данные для первого графика
  const filteredDepositData = useMemo(() => {
    if (!charts.depositComparison) return [];
    return charts.depositComparison;
  }, [charts.depositComparison]);

  // Данные для второго графика (MCC)
  const filteredTransactionsData = useMemo(() => {
    if (!charts.transactionsBySegment) return [];
    
    // Масштабируем Объем транзакций в миллионы
    let processedData = charts.transactionsBySegment.map(item => ({
        ...item,
        transactionSumMln: item.transactionSum / 1_000_000, 
    }));

    if (selectedMcc === "all") {
        return processedData;
    }
    return processedData.filter(item => item.segment === selectedMcc);
  }, [charts.transactionsBySegment, selectedMcc]);
  
  // Список MCC для фильтра
  const mccOptions = useMemo(() => {
    if (!charts.transactionsBySegment) return [];
    return ["all", ...charts.transactionsBySegment.map(item => item.segment)];
  }, [charts.transactionsBySegment]);


  // --- 2. РАННИЙ ВЫХОД ---

  if (!data)
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

  // --- 3. ОСНОВНОЙ РЕНДЕРИНГ ---

  return (
    <div className="space-y-8">
      {/* 📊 Заголовок с датой */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          📊 Поведение клиентов
        </h2>

        {/* 📅 Фильтр даты отчёта */}
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

      {/* 💳 Распределение трат (Оставлен без изменений) */}
      {charts.allocation && charts.allocation.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            {/* ... (Ваш код для первого графика) ... */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  💳 Распределение трат по категориям
                </h3>
                <p className="text-sm text-gray-500">
                  Отображает долю расходов клиентов по различным категориям товаров и услуг.
                </p>
              </div>

              {/* 📆 Диапазон дат */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
                <Calendar size={15} className="text-yellow-600" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={spendingRange.start}
                    onChange={(e) =>
                      setSpendingRange({ ...spendingRange, start: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={spendingRange.end}
                    onChange={(e) =>
                      setSpendingRange({ ...spendingRange, end: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 📊 Визуализация */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Пироговая диаграмма */}
              <div style={{ width: "100%", height: 300, maxWidth: 420 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart margin={{ top: 30, right: 80, bottom: 30, left: 80 }}>
                    <Pie
                      data={charts.allocation}
                      dataKey="share"
                      nameKey="category"
                      outerRadius={110}
                      paddingAngle={2}
                      labelLine={true}
                      label={({ cx, cy, midAngle, outerRadius, percent, index }) => {
                        const RADIAN = Math.PI / 180;
                        let extraRadius = 20 + (index % 3) * 10;
                        const adjustedAngle = midAngle % 360;
                        if (adjustedAngle > 60 && adjustedAngle < 120) extraRadius += 15;
                        if (adjustedAngle > 120 && adjustedAngle < 180) extraRadius += 10;
                        if (adjustedAngle > 240 && adjustedAngle < 300) extraRadius += 5;
                        const radius = outerRadius + extraRadius;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#555"
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                            fontSize={11}
                          >
                            {`${(percent * 100).toFixed(1)}%`}
                          </text>
                        );
                      }}
                    >
                      {charts.allocation.map((_, i) => (
                        <Cell key={i} fill={colors[i % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Кастомная легенда */}
              <div className="flex flex-col gap-2 text-sm text-gray-700 max-w-[260px]">
                {charts.allocation.map((entry, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="inline-block w-4 h-4 rounded-sm"
                      style={{ backgroundColor: colors[i % colors.length] }}
                    ></span>
                    <span className="font-medium text-gray-800">{entry.category}</span>
                    <span className="text-amber-600 font-semibold ml-auto">
                      {entry.share}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
{/* 🏦 Средний чек по категориям MCC */}
{charts.transactionsBySegment && charts.transactionsBySegment.length > 0 && (
  <Card>
    <CardContent className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-medium mb-1">
            🏦 Средний чек и активность по категориям MCC
          </h3>
          <p className="text-sm text-gray-500">
            Отображает средний чек, объем и количество транзакций по категориям MCC.
          </p>
        </div>

        {/* 📆 Диапазон дат и фильтр MCC */}
        <div className="flex flex-wrap items-center justify-end gap-4 ml-auto mt-2 sm:mt-0">
          {/* Фильтр по MCC */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
            <Filter size={15} className="text-indigo-600" />
            <select
              value={selectedMcc}
              onChange={(e) => setSelectedMcc(e.target.value)}
              className="bg-transparent outline-none text-gray-800 cursor-pointer"
            >
              <option value="all">Все категории</option>
              {mccOptions
                .filter((o) => o !== "all")
                .map((mcc) => (
                  <option key={mcc} value={mcc}>
                    {mcc}
                  </option>
                ))}
            </select>
          </div>

          {/* Диапазон дат */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
            <Calendar size={15} className="text-yellow-600" />
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={mccRange.start}
                onChange={(e) =>
                  setMccRange({ ...mccRange, start: e.target.value })
                }
                className="bg-transparent outline-none text-gray-800 cursor-pointer"
              />
              <span>–</span>
              <input
                type="date"
                value={mccRange.end}
                onChange={(e) =>
                  setMccRange({ ...mccRange, end: e.target.value })
                }
                className="bg-transparent outline-none text-gray-800 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 📊 График ComposedChart */}
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={filteredTransactionsData.map((d) => ({
              ...d,
              transactionSumMln: d.transactionSum / 1_000_000, // объем в млн ₸
              transactionCountK: d.transactionCount / 1_000, // кол-во в тыс.
            }))}
            margin={{ top: 20, right: 40, left: 10, bottom: 100 }}
            barCategoryGap="10%"
          >
            <CartesianGrid strokeDasharray="3 3" />

            {/* Ось X с переносом слов */}
            <XAxis
              dataKey="segment"
              interval={0}
              height={100}
              tick={({ x, y, payload }) => {
                const words = payload.value.split(" ");
                const lineHeight = 12;
                const startY = y + 16;
                return (
                  <g transform={`translate(${x},${startY})`}>
                    <text textAnchor="middle" fontSize={11} fill="#555">
                      {words.map((word, index) => (
                        <tspan
                          key={index}
                          x="0"
                          dy={index === 0 ? 0 : lineHeight}
                        >
                          {word}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              }}
            />

            {/* Левая ось — Средний чек */}
            <YAxis
              yAxisId="left"
              orientation="left"
              label={{
                value: "Средний чек (₸)",
                angle: -90,
                position: "insideLeft",
                style: { fontSize: 12, fill: "#F59E0B" },
              }}
              tickFormatter={(v) => v.toLocaleString()}
            />

            {/* Правая ось — Объем (млн ₸) / Кол-во (тыс.) */}
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Объем (млн ₸) / Кол-во (тыс.)",
                angle: -90,
                position: "insideRight",
                style: { fontSize: 12, fill: "#3B82F6" },
              }}
              tickFormatter={(v) =>
                v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v
              }
            />

            <Tooltip
              formatter={(value, name) => {
                if (name.includes("Средний чек"))
                  return [`${value.toLocaleString()} ₸`, name];
                if (name.includes("Объем транзакций"))
                  return [`${value.toFixed(1)} млн ₸`, name];
                if (name.includes("Кол-во транзакций"))
                  return [`${value.toFixed(1)} тыс.`, name];
                return [value, name];
              }}
            />
            <Legend verticalAlign="bottom" height={36} />

            {/* 🟩 Объем транзакций */}
            <Bar
              yAxisId="right"
              dataKey="transactionSumMln"
              name="Объем транзакций (млн ₸)"
              fill="#34D399"
              radius={[6, 6, 0, 0]}
              barSize={20}
            >
              <LabelList
                dataKey="transactionSumMln"
                position="top"
                formatter={(v) => `${v.toFixed(1)} млн`}
                fontSize={9}
                fill="#065F46"
              />
            </Bar>

            {/* 🟨 Средний чек */}
            <Bar
              yAxisId="left"
              dataKey="avgTransaction"
              name="Средний чек (₸)"
              fill="#FBBF24"
              radius={[6, 6, 0, 0]}
              barSize={20}
            >
              <LabelList
                dataKey="avgTransaction"
                position="bottom"
                formatter={(v) => v.toLocaleString()}
                fontSize={10}
                fill="#333"
              />
            </Bar>

            {/* 🟦 Количество транзакций */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="transactionCountK"
              name="Кол-во транзакций (тыс.)"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
)}



      {/* 💡 Инсайты */}
      {insights && insights.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              Ключевые инсайты
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {insights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}