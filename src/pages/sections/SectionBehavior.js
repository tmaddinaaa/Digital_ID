// SectionBehavior.js
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
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

export default function SectionBehavior({ data }) {
  if (!data)
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

  const { charts = {}, insights = [] } = data;
  const colors = ["#FFD966", "#FFB800", "#E59E00", "#FACC15", "#FDE68A"];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">
        📊 Поведение клиентов
      </h2>

      {/* 💳 Распределение трат */}
      {charts.allocation && charts.allocation.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">
              💳 Распределение трат по категориям
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={charts.allocation}
                    dataKey="share"
                    nameKey="category"
                    outerRadius={80}
                    label
                  >
                    {charts.allocation.map((_, i) => (
                      <Cell key={i} fill={colors[i % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 🏦 Средний чек по категориям MCC */}
      {charts.depositComparison && charts.depositComparison.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">
              🏦 Средний чек по категориям MCC
            </h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={charts.depositComparison}>
                  <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} ₸`} />
                  <Bar dataKey="avgBill" fill="#FFB800" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 💡 Инсайты */}
      {insights && insights.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              Ключевые инсайты
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {insights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
