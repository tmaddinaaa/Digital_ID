// SectionOverview.js
import React from "react";
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
} from "recharts";

export default function SectionOverview({ data }) {
  console.log("📊 SectionOverview render:", data);
  if (!data) {
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;
  }

  const { kpi = {}, charts = {} } = data;

  // Оставляем только реальные KPI
  const kpiDisplay = [
    { key: "totalProfiles", label: "Всего профилей", value: kpi.totalProfiles },
    { key: "activeProfiles", label: "Активные профили", value: kpi.activeProfiles },
    { key: "newProfiles", label: "Новые профили", value: kpi.newProfiles },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">
        📊 Обзор клиентской базы
      </h2>

      {/* KPI */}
      <div className="grid md:grid-cols-3 gap-4">
        {kpiDisplay.map(({ key, label, value }) => (
          <Card key={key}>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-gray-500">{label}</p>
              <h2 className="text-2xl font-bold text-yellow-600">
                {typeof value === "number" ? value.toLocaleString("ru-RU") : value || "—"}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 📈 Динамика новых клиентов */}
      {charts.newClients && charts.newClients.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">📈 Динамика новых клиентов (Мобильное приложение)</h3>
            <AutoResizeContainer height={250}>
              <LineChart data={charts.newClients}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip formatter={(v) => v.toLocaleString("ru-RU")} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#FFB800"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </AutoResizeContainer>
          </CardContent>
        </Card>
      )}

      {/* Распределения */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* 🏙 Распределение по городам */}
        {charts.cityDistribution && charts.cityDistribution.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">🏙 Распределение по филиалам</h3>
              <AutoResizeContainer height={250}>
                <BarChart data={charts.cityDistribution}>
                  <XAxis dataKey="city" tick={{ fontSize: 10 }} interval={0} angle={-30} textAnchor="end" />
                  <YAxis />
                  <Tooltip formatter={(v) => v.toLocaleString("ru-RU")} />
                  <Bar dataKey="count" fill="#FBBF24" radius={[6, 6, 0, 0]} />
                </BarChart>
              </AutoResizeContainer>
            </CardContent>
          </Card>
        )}

        {/* 🌐 Каналы привлечения */}
        {charts.sourceDistribution && charts.sourceDistribution.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">🌐 Пересечение клиентских источников</h3>
              <AutoResizeContainer height={250}>
                <BarChart data={charts.sourceDistribution}>
                  <XAxis dataKey="source" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip formatter={(v) => v.toLocaleString("ru-RU")} />
                  <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
                </BarChart>
              </AutoResizeContainer>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
