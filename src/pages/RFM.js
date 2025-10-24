"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, HeatMapChart, ScatterChart, ZAxis, Scatter } from "recharts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Loader2 } from "lucide-react";

// ⚙️ Примерная структура данных, возвращаемая API:
// [
//   { recency: "1-7 days", frequency: "High", monetary: 120000, customers: ["User1", "User2", ...] },
//   { recency: "8-30 days", frequency: "Medium", monetary: 80000, customers: [...] },
//   ...
// ]

export default function RFM() {
  const [data, setData] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🧩 Заглушка API — позже заменить на реальный запрос
    // fetch('/api/rfm')
    //   .then(res => res.json())
    //   .then(data => setData(data))
    //   .finally(() => setLoading(false));

    // Пока временные тестовые данные:
    setTimeout(() => {
      setData([
        { recency: "1–7 дней", frequency: "Высокая", monetary: 120000, customers: ["User A", "User B"] },
        { recency: "1–7 дней", frequency: "Средняя", monetary: 85000, customers: ["User C"] },
        { recency: "8–30 дней", frequency: "Высокая", monetary: 78000, customers: ["User D", "User E"] },
        { recency: "31–90 дней", frequency: "Низкая", monetary: 20000, customers: ["User F"] },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCellClick = (cell) => setSelectedCell(cell);
  const closeDialog = () => setSelectedCell(null);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>RFM Матрица — Анализ клиентской ценности</CardTitle>
        </CardHeader>
        <CardContent className="h-[500px] flex flex-col">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="animate-spin text-gray-500" size={32} />
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
                onClick={(e) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    handleCellClick(e.activePayload[0].payload);
                  }
                }}
              >
                <XAxis
                  type="category"
                  dataKey="recency"
                  name="Recency"
                  label={{ value: "Давность активности", position: "bottom" }}
                />
                <YAxis
                  type="category"
                  dataKey="frequency"
                  name="Frequency"
                  label={{ value: "Частота покупок", angle: -90, position: "insideLeft" }}
                  reversed
                />
                <ZAxis dataKey="monetary" range={[100, 800]} name="Monetary" />
                <Tooltip
                  formatter={(val, name, props) => [`${val.toLocaleString()} ₸`, "Денежный объём"]}
                  contentStyle={{ backgroundColor: "white", borderRadius: "8px" }}
                />
                <Scatter data={data} fill="#2563eb" />
              </ScatterChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* 💬 Диалог с деталями сегмента */}
      <Dialog open={!!selectedCell} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Сегмент клиентов</DialogTitle>
          </DialogHeader>
          {selectedCell && (
            <div className="space-y-2">
              <p>
                <strong>Recency:</strong> {selectedCell.recency}
              </p>
              <p>
                <strong>Frequency:</strong> {selectedCell.frequency}
              </p>
              <p>
                <strong>Monetary:</strong>{" "}
                {selectedCell.monetary.toLocaleString()} ₸
              </p>
              <p>
                <strong>Клиенты:</strong>{" "}
                {selectedCell.customers?.join(", ") || "Нет данных"}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* 🔵 Легенда */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          🔵 Размер точки — денежный объём (Monetary).  
          Чем больше точка, тем выше общая выручка сегмента.
        </p>
      </div>
    </div>
  );
}
