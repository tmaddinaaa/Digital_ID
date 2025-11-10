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
  // ✅ Все хуки должны быть вызваны до любых return
  const colors = ["#FFD966", "#FFB800", "#E59E00", "#FACC15", "#FDE68A"];
  const { charts = {}, insights = [] } = data || {};

  // 🔹 Формируем точки по датам
  const datePoints =
    charts.depositComparison?.map((item) => item.date) || [
      "2024-10-01",
      "2024-11-01",
      "2024-12-01",
      "2025-01-01",
      "2025-02-01",
    ];

  const [dateIndex, setDateIndex] = useState(datePoints.length - 1);
  const currentDate = datePoints[dateIndex];

  const filteredDepositData = useMemo(() => {
    if (!charts.depositComparison) return [];
    return charts.depositComparison.filter(
      (item) => !item.date || item.date === currentDate
    );
  }, [charts.depositComparison, currentDate]);

  // ✅ Теперь ранний return не мешает хукам
  if (!data)
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        📊 Поведение клиентов
      </h2>

      {/* 💳 Распределение трат */}
      {charts.allocation && charts.allocation.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-1">
              💳 Распределение трат по категориям
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Отображает, какая доля всех расходов клиентов приходится на разные
              категории товаров и услуг.
            </p>

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
                    <span className="font-medium text-gray-800">
                      {entry.category}
                    </span>
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
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  🏦 Средний чек по категориям MCC
                </h3>
                <p className="text-sm text-gray-500">
                  Сравнение среднего чека по различным категориям MCC помогает
                  определить, в каких направлениях клиенты тратят больше всего.
                </p>
              </div>

              {/* 🔹 Выбор даты */}
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>{new Date(currentDate).toLocaleDateString("ru-RU")}</span>
              </div>
            </div>

            {/* 🔹 Ползунок периода */}
            <div className="flex items-center gap-4 mt-2">
              <input
                type="range"
                min="0"
                max={datePoints.length - 1}
                value={dateIndex}
                onChange={(e) => setDateIndex(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {datePoints.length} точек
              </span>
            </div>

            {/* График */}
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
