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
  Tooltip,
} from "recharts";
import { MessageSquare } from "lucide-react";

export default function SectionPush({ data }) {
  if (!data) return <p>Нет данных</p>;

  const { charts, insights } = data;

  return (
    <div className="space-y-8">
      {/* --- Общие показатели --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <MessageSquare className="text-[#FFB800]" />
            Статистика Push-коммуникаций
          </h2>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            {Object.entries(charts.pushPerformance).map(([key, val]) => (
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

      {/* --- CTR по часам --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">CTR по часам</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={charts.ctrByHour}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ctr" stroke="#FFB800" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* --- Heatmap CTR --- */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">CTR Heatmap (день × час)</h2>
          <pre className="bg-gray-50 text-xs p-3 rounded-md border overflow-x-auto">
            {JSON.stringify(charts.ctrHeatmap, null, 2)}
          </pre>
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
