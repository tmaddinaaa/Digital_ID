import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import AutoResizeContainer from "../../components/AutoResizeContainer";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { MessageSquare, Calendar } from "lucide-react";

export default function SectionPush({ data }) {
  if (!data) {
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;
  }

  const { charts = {}, insights = [] } = data;
  const monthlyData = charts.pushByMonth || [];

  const chartWidth =
    monthlyData.length < 12 ? `${monthlyData.length * 140}px` : "100%";

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">📩 Push-коммуникации</h2>

      {/* 📊 Общие показатели */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <MessageSquare className="text-[#FFB800]" />
            Общие показатели
          </h3>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {Object.entries(charts.pushPerformance || {}).map(([k, v]) => (
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

      {/* 📈 Доля отправленных пушей по месяцам */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Calendar className="text-[#FFB800]" />
            Доля отправленных пушей по месяцам
          </h3>

          <div className="w-full overflow-x-auto">
            <div style={{ width: chartWidth, height: 360 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlyData}
                  margin={{ top: 20, right: 80, left: 60, bottom: 30 }}
                  barCategoryGap="45%"
                  barGap={10}
                >
                  <CartesianGrid strokeDasharray="3 3" />

                  {/* 📅 Ось X */}
                  <XAxis
                    dataKey="date"
                    padding={{ left: 30, right: 30 }}
                    tickFormatter={(d) =>
                      new Date(d).toLocaleDateString("ru-RU", {
                        month: "short",
                      })
                    }
                    tick={{ fontSize: 12 }}
                  />

                  {/* 🧮 Левая ось */}
                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#10B981"
                    label={{
                      value: "Доставка (%)",
                      angle: -90,
                      position: "insideLeft",
                      offset: 10,
                      style: { fill: "#10B981", fontSize: 12 },
                    }}
                  />

                  {/* 📊 Правая ось (CTR / Конверсия) */}
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#F59E0B"
                    domain={[0, 7]} // ✅ фиксированный максимум 7%
                    tickFormatter={(v) => `${v}%`}
                    label={{
                      value: "CTR / Конверсия (%)",
                      angle: -90,
                      position: "insideRight",
                      offset: 20,
                      style: { fill: "#F59E0B", fontSize: 12 },
                    }}
                  />

                  {/* 💬 Tooltip */}
                  <Tooltip
                    formatter={(value, name) => `${value.toFixed(2)}%`}
                    labelFormatter={(label) =>
                      new Date(label).toLocaleDateString("ru-RU", {
                        month: "long",
                      })
                    }
                  />
                  <Legend verticalAlign="bottom" height={36} />

                  {/* 💚 Доля доставленных — линия */}
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="deliveryRate"
                    name="Доля доставленных (%)"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive={true}
                    animationDuration={800}
                  />

                  {/* 🟧 CTR — столбики */}
                  <Bar
                    yAxisId="right"
                    dataKey="ctr"
                    name="CTR (%)"
                    fill="#F59E0B"
                    radius={[6, 6, 0, 0]}
                    barSize={22}
                    isAnimationActive={true}
                    animationDuration={700}
                  >
                    <LabelList
                      dataKey="ctr"
                      position="top"
                      formatter={(v) => `${v.toFixed(1)}%`}
                      fontSize={10}
                      fill="#F59E0B"
                    />
                  </Bar>

                  {/* 🔵 Conversion — столбики */}
                  <Bar
                    yAxisId="right"
                    dataKey="conversion"
                    name="Конверсия (%)"
                    fill="#3B82F6"
                    radius={[6, 6, 0, 0]}
                    opacity={0.85}
                    barSize={22}
                    isAnimationActive={true}
                    animationDuration={700}
                  >
                    <LabelList
                      dataKey="conversion"
                      position="top"
                      formatter={(v) => `${v.toFixed(1)}%`}
                      fontSize={10}
                      fill="#3B82F6"
                    />
                  </Bar>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 💡 Инсайты */}
      {insights && insights.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {insights.map((t, i) => (
            <div key={i} className="p-4 bg-gray-50 border rounded-lg text-gray-700">
              💡 {t}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
