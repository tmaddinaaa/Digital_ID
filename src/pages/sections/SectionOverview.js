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

  const { kpi = {}, charts = {}, insights = [] } = data;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">📊 Обзор клиентской базы</h2>

      {/* KPI */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(kpi).map(([key, val]) => (
          <Card key={key}>
            <CardContent className="p-4 text-center">
              <p className="text-xs text-gray-500">{key}</p>
              <h2 className="text-xl font-bold text-yellow-600">
                {typeof val === "number" ? val.toLocaleString() : val}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Динамика новых клиентов */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">📈 Динамика новых клиентов</h3>
          <AutoResizeContainer height={250}>
            <LineChart data={charts.newClients || []}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#FFB800" strokeWidth={2} />
            </LineChart>
          </AutoResizeContainer>
        </CardContent>
      </Card>

      {/* Распределения */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">🏙 Распределение по городам</h3>
            <AutoResizeContainer height={220}>
              <BarChart data={charts.cityDistribution || []}>
                <XAxis dataKey="city" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#FBBF24" radius={[6, 6, 0, 0]} />
              </BarChart>
            </AutoResizeContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">🌐 Каналы привлечения</h3>
            <AutoResizeContainer height={220}>
              <BarChart data={charts.sourceDistribution || []}>
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </AutoResizeContainer>
          </CardContent>
        </Card>
      </div>

      {/* Инсайты */}
      <div className="grid md:grid-cols-2 gap-4">
        {insights.map((t, i) => (
          <div key={i} className="p-4 bg-gray-50 border rounded-lg text-gray-700">
            💡 {t}
          </div>
        ))}
      </div>
    </div>
  );
}
