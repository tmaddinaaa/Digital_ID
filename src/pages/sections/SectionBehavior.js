// SectionBehavior.js (фрагмент)
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer, // <- добавлено
} from "recharts";
import { TrendingUp } from "lucide-react";

export default function SectionBehavior({ data }) {
  if (!data) return <p className="text-gray-500 text-center mt-6">Нет данных</p>;
  const { charts = {}, insights = [] } = data;
  const colors = ["#FFD966", "#FFB800", "#E59E00", "#FACC15", "#FDE68A"];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">📈 Поведение после поступлений</h2>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">💳 Распределение трат</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={charts.allocation || []}
                  dataKey="share"
                  nameKey="category"
                  outerRadius={80}
                  label
                >
                  {(charts.allocation || []).map((_, i) => (
                    <Cell key={i} fill={colors[i % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Бар-чарт депозиты */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">🏦 Средние депозиты по сегментам</h3>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.depositComparison || []}>
                <XAxis dataKey="segment" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avgDeposit" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* ... остальное аналогично ... */}
    </div>
  );
}
