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
  Legend,
  LabelList,
  CartesianGrid,
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
            <h3 className="text-lg font-medium mb-1">
              💳 Распределение трат по категориям
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Отображает, какая доля всех расходов клиентов приходится на разные категории
              товаров и услуг.
            </p>
            <div style={{ width: "100%", height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={charts.allocation}
                    dataKey="share"
                    nameKey="category"
                    outerRadius={100}
                    paddingAngle={3} // ✅ зазор между долями
                    label={({ value }) => `${value}%`} // ✅ проценты на долях
                    labelLine={false}
                  >
                    {charts.allocation.map((_, i) => (
                      <Cell key={i} fill={colors[i % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
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
            <h3 className="text-lg font-medium mb-1">
              🏦 Средний чек по категориям MCC
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Сравнение среднего чека по различным категориям MCC помогает определить,
              в каких направлениях клиенты тратят больше всего.
            </p>
            <div style={{ width: "100%", height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={charts.depositComparison}
                  margin={{ top: 20, right: 20, left: 10, bottom: 80 }} // ✅ увеличен нижний отступ
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="segment"
                    tick={{ fontSize: 11 }}
                    angle={-15} // ✅ поворот подписей
                    textAnchor="end"
                    interval={0} // ✅ показываем все подписи
                    height={70} // ✅ увеличена высота оси
                  />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} ₸`} />
                  {/* ✅ только подписи над столбцами */}
                  <Bar dataKey="avgBill" fill="#FFB800" radius={[6, 6, 0, 0]}>
                    <LabelList
                      dataKey="avgBill"
                      position="top"
                      formatter={(v) => v.toLocaleString()}
                      fontSize={10}
                      fill="#333"
                    />
                  </Bar>
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
