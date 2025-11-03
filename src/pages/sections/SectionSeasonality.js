import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import AutoResizeContainer from "../../components/AutoResizeContainer";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

export default function SectionSeasonality({ data }) {
  if (!data) {
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;
  }

  const { charts = {}, insights = [] } = data;
  console.log("SectionOverview data:", data);

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">📅 Сезонность и операции</h2>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="text-[#FFB800]" />
            Когортный анализ удержания
          </h3>
          <AutoResizeContainer height={260}>
            <BarChart data={charts.cohort || []}>
              <XAxis dataKey="cohort" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="M2" stackId="a" fill="#FFD966" />
              <Bar dataKey="M3" stackId="a" fill="#FFB800" />
              <Bar dataKey="M4" stackId="a" fill="#E59E00" />
            </BarChart>
          </AutoResizeContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">🔻 Воронка клиентского пути</h3>
          <AutoResizeContainer height={260}>
            <BarChart data={charts.funnel || []}>
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
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
