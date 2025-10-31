import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Users } from "lucide-react";

export default function SectionRelations({ data }) {
  if (!data) return <p>Нет данных</p>;

  const { charts, insights } = data;

  return (
    <div className="space-y-8">
      {/* --- Основная статистика --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Users className="text-[#FFB800]" />
            Социальные связи и домохозяйства
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {Object.entries(charts.relationStats).map(([key, val]) => (
              <div key={key} className="p-3 bg-gray-50 rounded-lg border">
                <p className="text-xs text-gray-500">{key}</p>
                <h3 className="text-xl font-semibold text-yellow-600">
                  {typeof val === "number" ? val.toLocaleString() : val}
                </h3>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* --- По типам связи --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Типы связей</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={charts.relationByType}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#FFB800" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* --- По регионам --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Региональное распределение</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={charts.relationByRegion}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="families" fill="#FBBF24" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* --- Инсайты --- */}
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
