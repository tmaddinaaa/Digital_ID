import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { TrendingUp } from "lucide-react";

export default function SectionBehavior({ data }) {
  if (!data) return <p>Нет данных</p>;

  const { charts, insights } = data;
  const colors = ["#FFD966", "#FFB800", "#E59E00", "#FACC15", "#FDE68A"];

  return (
    <div className="space-y-8">
      {/* --- Расходы по категориям --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Распределение трат</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={charts.allocation}
                dataKey="share"
                nameKey="category"
                outerRadius={120}
                label
              >
                {charts.allocation.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* --- Средние депозиты по сегментам --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Сравнение по депозитам</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={charts.depositComparison}>
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgDeposit" fill="#FFB800" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* --- Поведение по возрастным группам --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <TrendingUp className="text-[#FFB800]" />
            Паттерны распределения дохода
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={charts.salaryPatterns}>
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="spent3days" fill="#FBBF24" radius={[6, 6, 0, 0]} />
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
