"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
} from "recharts";
import { TrendingUp, Calendar } from "lucide-react";

export default function SectionBehavior({ data }) {
  const colors = ["#FFD966", "#FFB800", "#E59E00", "#FACC15", "#FDE68A"];
  const { charts = {}, insights = [] } = data || {};

  // 📅 Основная дата отчета
  const [reportDate, setReportDate] = useState("2025-10-01");

  // 📆 Диапазоны для графиков
  const [spendingRange, setSpendingRange] = useState({
    start: "2025-09-01",
    end: "2025-09-30",
  });

  const [mccRange, setMccRange] = useState({
    start: "2025-09-01",
    end: "2025-09-30",
  });

  // Подготовка данных (заглушки)
  const filteredDepositData = useMemo(() => {
    if (!charts.depositComparison) return [];
    return charts.depositComparison;
  }, [charts.depositComparison]);

  if (!data)
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

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

      {/* 💳 Распределение трат */}
      {charts.allocation && charts.allocation.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            {/* Заголовок + диапазон */}
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
              {/* Пирог */}
              <div style={{ width: "100%", height: 280, maxWidth: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={charts.allocation}
                      dataKey="share"
                      nameKey="category"
                      outerRadius={100}
                      paddingAngle={3}
                      label={({ value }) => `${value}%`}
                      labelLine={false}
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
              <div className="flex flex-col gap-2 text-sm text-gray-700">
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
      {charts.depositComparison && charts.depositComparison.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            {/* Заголовок + диапазон */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  🏦 Средний чек по категориям MCC
                </h3>
                <p className="text-sm text-gray-500">
                  Сравнение среднего чека по различным категориям MCC помогает
                  определить, где клиенты тратят больше всего.
                </p>
              </div>

              {/* 📆 Диапазон дат */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
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

            {/* 📊 График */}
            <div style={{ width: "100%", height: 340 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={filteredDepositData}
                  margin={{ top: 20, right: 20, left: 10, bottom: 100 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="segment"
                    interval={0}
                    tick={({ x, y, payload }) => {
                      const words = payload.value.split(" ");
                      const lines = [];
                      words.forEach((word) => {
                        if (word.includes("-")) {
                          const parts = word.split("-");
                          parts.forEach((part, idx) => {
                            if (idx === 0) lines.push(part + "-");
                            else lines.push(part);
                          });
                        } else {
                          lines.push(word);
                        }
                      });
                      const lineHeight = 12;
                      const verticalOffset = 16;
                      const startY = y + verticalOffset;
                      return (
                        <g transform={`translate(${x},${startY})`}>
                          <text textAnchor="middle" fontSize={11} fill="#555">
                            {lines.map((line, index) => (
                              <tspan
                                key={index}
                                x="0"
                                dy={index === 0 ? 0 : lineHeight}
                              >
                                {line}
                              </tspan>
                            ))}
                          </text>
                        </g>
                      );
                    }}
                  />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} ₸`} />
                  <Bar dataKey="avgBill" fill="#FFB800" radius={[6, 6, 0, 0]}>
                    <LabelList
                      dataKey="avgBill"
                      position="top"
                      formatter={(v) => v.toLocaleString()}
                      fontSize={10}
                      fill="#333"
                    />
                  </Bar>
                </BarChart>
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
