"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Models() {
  const [models] = useState([
    {
      name: "Churn Prediction",
      objective: "Предсказание ухода клиентов",
      trainDate: "2025-10-01",
      auc: 0.89,
      mae: 0.12,
      stability: "High",
      dataVersion: "v1.2",
      status: "Ready",
      metricsOverSegments: [0.85, 0.89, 0.91],
    },
    {
      name: "CLV Forecast",
      objective: "Прогноз жизненной ценности клиента",
      trainDate: "2025-09-20",
      auc: 0.82,
      mae: 0.15,
      stability: "Medium",
      dataVersion: "v2.0",
      status: "Running",
      metricsOverSegments: [0.78, 0.81, 0.82],
    },
    {
      name: "Next Best Offer",
      objective: "Рекомендации по следующему предложению клиенту",
      trainDate: "2025-10-10",
      auc: 0.91,
      mae: 0.09,
      stability: "High",
      dataVersion: "v1.5",
      status: "Error",
      metricsOverSegments: [0.88, 0.91, 0.90],
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Ready":
        return "bg-green-500";
      case "Running":
        return "bg-yellow-500";
      case "Error":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {models.map((model, idx) => (
        <Card key={idx} className="shadow-sm border-gray-200">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>{model.name}</CardTitle>
            <span
              className={`px-2 py-1 rounded-full text-white text-xs ${getStatusColor(
                model.status
              )}`}
            >
              {model.status}
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>Цель:</strong> {model.objective}
            </p>
            <p>
              <strong>Дата обучения:</strong> {model.trainDate}
            </p>
            <p>
              <strong>AUC:</strong> {model.auc} | <strong>MAE:</strong> {model.mae}
            </p>
            <p>
              <strong>Стабильность:</strong> {model.stability} | <strong>Версия данных:</strong>{" "}
              {model.dataVersion}
            </p>

            {/* Мини-график распределений по сегментам */}
            <div className="mt-2 h-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={model.metricsOverSegments.map((val, i) => ({ segment: i + 1, val }))}>
                  <XAxis dataKey="segment" />
                  <YAxis domain={[0, 1]} />
                  <Tooltip formatter={(val) => (val * 100).toFixed(1) + "%"} />
                  <Bar dataKey="val" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
