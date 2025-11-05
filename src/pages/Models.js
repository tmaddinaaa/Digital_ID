"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Brain, Sparkles, TrendingUp } from "lucide-react";

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
      ai: {
        churnProbability: 0.34,
        retentionScore: 0.78,
        segments: "Высокий риск среди молодых клиентов (18–25) и low-income сегментов",
        explanation:
          "Основные драйверы оттока — низкая активность в приложении и отсутствие депозитов.",
        recommendation:
          "Запустить кампанию удержания: персональные пуши и бонусы за первую транзакцию в приложении.",
      },
    },
    {
      name: "CLV Forecast",
      objective: "Прогноз ценности клиента (LTV)",
      trainDate: "2025-09-20",
      auc: 0.82,
      mae: 0.15,
      stability: "Medium",
      dataVersion: "v2.0",
      status: "Running",
      metricsOverSegments: [0.78, 0.81, 0.82],
      ai: {
        ltv: "Высокий LTV у сегментов High Income & Core",
        drivers: "Частота операций, депозиты, активность в приложении",
        recommendation:
          "Усилить программы лояльности + предложения по инвестициям и кешбек-категориям.",
      },
    },
    {
      name: "Next Best Offer",
      objective: "Рекомендации следующего продукта",
      trainDate: "2025-10-10",
      auc: 0.91,
      mae: 0.09,
      stability: "High",
      dataVersion: "v1.5",
      status: "Error",
      metricsOverSegments: [0.88, 0.91, 0.90],
      ai: {
        propensity: "Наиболее вероятный продукт — дебетовая карта премиум",
        issue: "Ошибка в данных: неожиданный сплеск веса 'push-activity'",
        recommendation:
          "Перезапуск пайплайна, переразметка признаков и перекалибровка LightGBM.",
      },
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
        <Card key={idx} className="shadow-sm border-gray-200 hover:shadow-md transition">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Brain size={18} className="text-indigo-500" /> {model.name}
            </CardTitle>
            <span
              className={`px-2 py-1 rounded-full text-white text-xs ${getStatusColor(
                model.status
              )}`}
            >
              {model.status}
            </span>
          </CardHeader>

          <CardContent className="space-y-2 text-sm">
            <p><strong>Цель:</strong> {model.objective}</p>
            <p><strong>Дата обучения:</strong> {model.trainDate}</p>
            <p><strong>AUC:</strong> {model.auc} | MAE: {model.mae}</p>
            <p><strong>Стабильность:</strong> {model.stability}</p>
            <p><strong>Версия данных:</strong> {model.dataVersion}</p>

            {/* Мини-график */}
            <div className="mt-3 h-20">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={model.metricsOverSegments.map((v, i) => ({ segment: i + 1, val: v }))}
                >
                  <XAxis dataKey="segment" />
                  <YAxis domain={[0, 1]} />
                  <Tooltip formatter={(v) => (v * 100).toFixed(1) + "%"} />
                  <Bar dataKey="val" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* AI Insights */}
            <div className="mt-3 bg-gray-50 border p-3 rounded-lg text-xs space-y-2">
              <p className="font-semibold flex gap-1 items-center">
                <Sparkles size={14} className="text-indigo-600" /> AI-инсайты:
              </p>

              {model.ai.churnProbability && (
                <p>📉 Вероятность оттока: {(model.ai.churnProbability * 100).toFixed(1)}%</p>
              )}
              {model.ai.retentionScore && <p>🔁 Retention score: {model.ai.retentionScore}</p>}
              {model.ai.ltv && <p>💰 LTV: {model.ai.ltv}</p>}
              {model.ai.propensity && <p>🎯 Propensity: {model.ai.propensity}</p>}

              {model.ai.segments && <p>👥 Сегменты: {model.ai.segments}</p>}
              {model.ai.drivers && <p>📊 Драйверы: {model.ai.drivers}</p>}
              {model.ai.issue && <p className="text-red-600">⚠️ {model.ai.issue}</p>}

              <p className="text-gray-800">💡 {model.ai.recommendation}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
