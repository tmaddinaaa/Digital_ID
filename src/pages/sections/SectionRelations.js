import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import AutoResizeContainer from "../../components/AutoResizeContainer";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Users } from "lucide-react";

export default function SectionRelations({ data }) {
  if (!data) {
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;
  }

  const { charts = {}, insights = [] } = data;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">👥 Связанные клиенты (социальный граф)</h2>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Users className="text-[#FFB800]" />
            Основные метрики
          </h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {Object.entries(charts.relationStats || {}).map(([k, v]) => (
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

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">🔗 Типы связей</h3>
          <AutoResizeContainer height={260}>
            <BarChart data={charts.relationByType || []}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#FFB800" radius={[6, 6, 0, 0]} />
            </BarChart>
          </AutoResizeContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">🏙 Региональное распределение</h3>
          <AutoResizeContainer height={260}>
            <BarChart data={charts.relationByRegion || []}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="families" fill="#FBBF24" radius={[6, 6, 0, 0]} />
            </BarChart>
          </AutoResizeContainer>
        </CardContent>
      </Card>

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
