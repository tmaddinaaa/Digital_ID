import React, { useState } from "react";

export default function GeoAnalyticsWidget({ data }) {
  const [expanded, setExpanded] = useState(true);

  const maps = data?.geoMaps || {};

  // Если у клиента нет карт — возвращаем заглушку
  if (!Object.keys(maps).length) {
    return (
      <p className="text-gray-500">
        Нет интерактивных карт для этого клиента
      </p>
    );
  }

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-6">
      {/* 🔹 Заголовок */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          🗺 Геоаналитика клиента
        </h2>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
        >
          {expanded ? "Свернуть ▲" : "Развернуть ▼"}
        </button>
      </div>

      {/* 🔹 Список карт */}
      {expanded && (
        <div className="space-y-8 mt-4">
          {Object.entries(maps).map(([key, url]) => (
            <div
              key={key}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-700 text-sm flex justify-between items-center">
                <span>{mapTitles[key] || key}</span>
                <span className="text-gray-400 text-xs italic">
                  {mapDescriptions[key] || ""}
                </span>
              </div>
              <iframe
                src={url}
                title={key}
                width="100%"
                height="400"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  background: "#fafafa",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 🔹 Названия и описания карт
const mapTitles = {
  all_points: "📍 Все точки пользователя",
  clustered_points: "🧩 Кластеризация точек",
  heatmap: "🔥 Тепловая карта плотности",
  time_heatmap: "⏱ Тепловая карта по времени суток",
  time_points: "🕒 Точки по времени суток",
};

const mapDescriptions = {
  all_points: "Отображает все зафиксированные локации клиента на карте.",
  clustered_points: "Группирует близкие точки для наглядного анализа концентраций.",
  heatmap: "Показывает зоны с наибольшей активностью пользователя.",
  time_heatmap: "Показывает, как плотность точек меняется в течение суток.",
  time_points: "Демонстрирует динамику появления точек клиента по времени.",
};
