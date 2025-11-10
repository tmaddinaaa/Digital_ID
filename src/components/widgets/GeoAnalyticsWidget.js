import React, { useState, useRef, useEffect } from "react";
import { Maximize2, Minimize2, MapPinOff } from "lucide-react";

export default function GeoAnalyticsWidget({ data }) {
  const [expanded, setExpanded] = useState(true);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [availableMaps, setAvailableMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  const iframeRefs = useRef([]);
  const maps = data?.geoMaps || {};

  // ✅ Проверяем, что URL не возвращает index.html React-приложения
  useEffect(() => {
    const checkFiles = async () => {
      const entries = Object.entries(maps);
      if (entries.length === 0) {
        setAvailableMaps([]);
        setLoading(false);
        return;
      }

      const valid = [];

      await Promise.all(
        entries.map(async ([key, url]) => {
          if (!url) return;
          try {
            const res = await fetch(url);
            if (!res.ok) return;
            const text = await res.text();
            // 🚫 Если это React index.html — пропускаем
            if (
              text.includes("<div id=\"root\"") ||
              text.includes("React") ||
              text.includes("vite") ||
              text.includes("Client Base Analytics")
            ) {
              console.warn(`⚠️ ${url} не содержит карту (вернулся index.html)`);
              return;
            }
            valid.push([key, url]);
          } catch (err) {
            console.warn(`Ошибка при загрузке ${url}:`, err);
          }
        })
      );

      setAvailableMaps(valid);
      setLoading(false);
    };

    checkFiles();
  }, [maps]);

  // fullscreen toggle
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) setFullscreenIndex(null);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = (index) => {
    const el = iframeRefs.current[index];
    if (!document.fullscreenElement) {
      el?.requestFullscreen?.();
      setFullscreenIndex(index);
    } else {
      document.exitFullscreen?.();
      setFullscreenIndex(null);
    }
  };

  // 🔄 Загрузка
  if (loading) {
    return (
      <div className="bg-white shadow rounded-2xl p-6 text-center text-gray-500 italic">
        Проверка наличия карт...
      </div>
    );
  }

  // 🚫 Нет реальных файлов
  if (availableMaps.length === 0) {
    return (
      <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center text-center text-gray-500">
        <MapPinOff className="w-10 h-10 text-gray-400 mb-2" />
        <p className="text-base font-medium">Нет данных по геолокации</p>
        <p className="text-sm text-gray-400">
          Файлы карт отсутствуют или не найдены 
                  </p>
      </div>
    );
  }

  // ✅ Отображение карт
  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          🗺 Геоаналитика клиента
        </h2>
        <button
          onClick={() => setExpanded((p) => !p)}
          className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
        >
          {expanded ? "Свернуть ▲" : "Развернуть ▼"}
        </button>
      </div>

      {expanded && (
        <div className="space-y-8 mt-4">
          {availableMaps.map(([key, url], index) => (
            <div
              key={key}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-700 text-sm flex justify-between items-center">
                <span>{mapTitles[key] || key}</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-xs italic">
                    {mapDescriptions[key] || ""}
                  </span>
                  <button
                    onClick={() => toggleFullscreen(index)}
                    className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-xs border border-gray-300 hover:border-blue-400 px-2 py-1 rounded-md transition-all duration-200"
                  >
                    {fullscreenIndex === index ? (
                      <>
                        <Minimize2 className="w-3.5 h-3.5" />
                        <span>Свернуть</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Развернуть</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <iframe
                ref={(el) => (iframeRefs.current[index] = el)}
                src={url}
                title={key}
                width="100%"
                height="400"
                className="rounded-b-xl bg-gray-50"
                style={{
                  border: "none",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Названия и описания
const mapTitles = {
  all_points: "📍 Все точки пользователя",
  clustered_points: "🧩 Кластеризация точек",
  heatmap: "🔥 Тепловая карта плотности",
  time_heatmap: "⏱ Тепловая карта по времени суток",
  time_points: "🕒 Точки по времени суток",
};

const mapDescriptions = {
  all_points: "Отображает все зафиксированные локации клиента на карте.",
  clustered_points:
    "Группирует близкие точки для наглядного анализа концентраций.",
  heatmap: "Показывает зоны с наибольшей активностью пользователя.",
  time_heatmap: "Показывает, как плотность точек меняется в течение суток.",
  time_points: "Демонстрирует динамику появления точек клиента по времени.",
};
