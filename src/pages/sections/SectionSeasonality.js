import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Sankey,
} from "recharts";
import { TrendingUp, GitBranch } from "lucide-react";

export default function SectionSeasonality({ data }) {
  if (!data) return <p>Нет данных</p>;

  const { charts, insights } = data;

  return (
    <div className="space-y-8">
      {/* === Когортный анализ === */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="text-[#FFB800]" />
            Когортный анализ удержания
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={charts.cohort}>
              <XAxis dataKey="cohort" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="M2" stackId="a" fill="#FFD966" />
              <Bar dataKey="M3" stackId="a" fill="#FFB800" />
              <Bar dataKey="M4" stackId="a" fill="#E59E00" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* === Воронка === */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">
            🔻 Воронка клиентского пути
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={charts.funnel}>
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFB800" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* === Sankey === */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <GitBranch className="text-[#FFB800]" />
            Поведенческий маршрут
          </h2>
          <ResponsiveContainer width="100%" height={380}>
            <Sankey
              data={charts.path}
              nodePadding={25}
              margin={{ left: 40, right: 40, top: 10, bottom: 10 }}
              link={{ stroke: "#FFB800", strokeWidth: 20 }}
              node={{ fill: "#E0E0E0" }}
            >
              <Tooltip />
            </Sankey>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* === Инсайты === */}
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
