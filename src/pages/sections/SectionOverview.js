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
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function SectionOverview({ data }) {
  if (!data) return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

  const { kpi = {}, charts = {} } = data;

  // KPI блок
  const kpiDisplay = [
    { key: "totalProfiles", label: "Всего профилей", value: kpi.totalProfiles },
    { key: "activeProfiles", label: "Активные профили", value: kpi.activeProfiles },
    { key: "newProfiles", label: "Новые профили", value: kpi.newProfiles },
  ];

  // Подготовка данных по филиалам
  const cityData = (charts.cityDistribution || []).map((item, i) => ({
    ...item,
    shortCity: item.city.length > 14 ? item.city.slice(0, 12) + "…" : item.city,
  }));

  const manyCities = cityData.length > 10;

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
                {typeof value === "number"
                  ? value.toLocaleString("ru-RU")
                  : value || "—"}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 📈 Динамика новых клиентов */}
      {charts.newClients && charts.newClients.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">
              📈 Динамика новых клиентов (Мобильное приложение)
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Отображает количество новых клиентов по месяцам.
            </p>
            <AutoResizeContainer height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={charts.newClients} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
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
                    {/* ✅ Подписи значений над точками */}
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
      <h3 className="text-lg font-medium mb-2">🏙 Распределение по филиалам</h3>

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
                bottom: 130, // оставляем место для подписей городов
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="city"
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
                  const verticalOffset = 18;
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
