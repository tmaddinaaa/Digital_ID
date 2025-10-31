import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function SectionOverview({ data }) {
  if (!data) return <p>Нет данных</p>;

  const { kpi, charts, insights } = data;

  return (
    <div className="space-y-8">
      {/* KPI */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(kpi).map(([key, value]) => (
          <Card key={key} className="shadow-sm">
            <CardContent className="p-4 text-center">
              <p className="text-xs text-gray-500">{key}</p>
              <h2 className="text-xl font-bold text-yellow-600">
                {typeof value === "number" ? value.toLocaleString() : value}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Динамика клиентов */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Динамика новых клиентов</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={charts.newClients}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#FFB800" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Распределение */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Распределение по источникам</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={charts.sourceDistribution}>
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Инсайты */}
      <div className="grid md:grid-cols-2 gap-4">
        {insights.map((text, i) => (
          <div key={i} className="p-4 border bg-gray-50 rounded-lg text-gray-700">
            💡 {text}
          </div>
        ))}
      </div>
    </div>
  );
}
