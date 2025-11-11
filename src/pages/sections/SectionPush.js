"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { MessageSquare, Calendar } from "lucide-react";

export default function SectionPush({ data }) {
  const [reportDate, setReportDate] = useState("2025-10-01");
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

  if (!data) {
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;
  }

  const { charts = {}, insights = [], isDraft = true } = data; // 👈 для теста включим overlay
  const monthlyData = charts.pushByMonth || [];
  const chartWidth =
    monthlyData.length < 12 ? `${monthlyData.length * 140}px` : "100%";

  return (
    <div className="space-y-8">
      {/* 📩 Заголовок */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          📩 Push-коммуникации
        </h2>

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

      {/* 📊 Общие показатели */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <MessageSquare className="text-[#FFB800]" />
            Общие показатели
          </h3>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {Object.entries(charts.pushPerformance || {}).map(([k, v]) => (
              <div key={k} className="p-3 bg-gray-50 rounded-lg border">
                <p className="text-xs text-gray-500">{k}</p>
                <h3 className="text-xl font-semibold text-yellow-600">
                  {typeof v === "number" ? v.toLocaleString() : v}
                </h3>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 📈 График */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Calendar className="text-[#FFB800]" />
              Доля отправленных пушей по месяцам
            </h3>

            <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
              <Calendar size={15} className="text-yellow-600" />
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, start: e.target.value })
                  }
                  className="bg-transparent outline-none text-gray-800 cursor-pointer"
                />
                <span>–</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange({ ...dateRange, end: e.target.value })
                  }
                  className="bg-transparent outline-none text-gray-800 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div
              style={{
                width: chartWidth,
                height: 360,
                position: "relative",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 20, right: 80, left: 60, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    padding={{ left: 30, right: 30 }}
                    tickFormatter={(d) =>
                      new Date(d).toLocaleDateString("ru-RU", {
                        month: "short",
                      })
                    }
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#10B981"
                    label={{
                      value: "Доставка (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: 10,
                      style: { fill: "#10B981", fontSize: 12 },
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#F59E0B"
                    domain={[0, 7]}
                    tickFormatter={(v) => `${v}%`}
                    label={{
                      value: "CTR / Конверсия (%)",
                      angle: -90,
                      position: "insideRight",
                      offset: 20,
                      style: { fill: "#F59E0B", fontSize: 12 },
                    }}
                  />
                  <Tooltip
                    formatter={(value, name) => `${value.toFixed(2)}%`}
                    labelFormatter={(label) =>
                      new Date(label).toLocaleDateString("ru-RU", {
                        month: "long",
                      })
                    }
                  />
                  <Legend verticalAlign="bottom" height={36} />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="deliveryRate"
                    name="Доля доставленных (%)"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive={true}
                    animationDuration={800}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="ctr"
                    name="CTR (%)"
                    fill="#F59E0B"
                    radius={[6, 6, 0, 0]}
                    barSize={22}
                    isAnimationActive={true}
                    animationDuration={700}
                  >
                    <LabelList
                      dataKey="ctr"
                      position="top"
                      formatter={(v) => `${v.toFixed(1)}%`}
                      fontSize={10}
                      fill="#F59E0B"
                    />
                  </Bar>
                  <Bar
                    yAxisId="right"
                    dataKey="conversion"
                    name="Конверсия (%)"
                    fill="#3B82F6"
                    radius={[6, 6, 0, 0]}
                    opacity={0.85}
                    barSize={22}
                    isAnimationActive={true}
                    animationDuration={700}
                  >
                    <LabelList
                      dataKey="conversion"
                      position="top"
                      formatter={(v) => `${v.toFixed(1)}%`}
                      fontSize={10}
                      fill="#3B82F6"
                    />
                  </Bar>
                </LineChart>
              </ResponsiveContainer>

              {/* 🌫️ Мягкий слой поверх графика */}
              {isDraft && (
                <div
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center
                             bg-gray-100/30 backdrop-blur-[2px] rounded-lg
                             text-gray-700 font-medium text-lg select-none"
                >
                  <span className="flex items-center gap-2">
                    ⚙️ Предварительные данные
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    (значения могут поменяться)
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 💡 Инсайты */}
      {insights && insights.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {insights.map((t, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 border rounded-lg text-gray-700"
            >
              💡 {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
