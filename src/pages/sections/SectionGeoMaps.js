// src/pages/sections/SectionGeoMaps.js
"use client";

import React, { useRef } from "react";
import { Card, CardContent } from "../../components/ui/card.jsx";
import { Maximize2 } from "lucide-react";

export default function SectionGeoMaps() {
  const maps = [
    {
      title: "🟦 Карта кластеров Алматы",
      description: "Показывает распределение клиентов по кластерам внутри города.",
      src: "/maps/almaty_clustered_map.html",
    },
    {
      title: "🔥 Тепловая карта с временной шкалой",
      description: "Позволяет анализировать изменение активности клиентов во времени.",
      src: "/maps/almaty_heatmap_withTime.html",
    },
    {
      title: "🌍 Общая карта клиентов по Казахстану",
      description: "Отображает географию клиентской базы и её концентрацию.",
      src: "/maps/map.html",
    },
  ];

  // Создаем массив ссылок для всех iframe
  const iframeRefs = useRef(maps.map(() => React.createRef()));

  // Функция для перехода в полноэкранный режим
  const toggleFullscreen = (index) => {
    const el = iframeRefs.current[index].current;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">
        🗺 Геоаналитика клиентской базы
      </h2>

      {maps.map((m, i) => (
        <Card
          key={i}
          className="shadow-sm border border-gray-200 relative group"
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.description}</p>
              </div>

              {/* Кнопка "на весь экран" */}
              <button
                onClick={() => toggleFullscreen(i)}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm border border-gray-300 hover:border-blue-400 px-3 py-1.5 rounded-lg transition-all duration-200"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Развернуть</span>
              </button>
            </div>

            <iframe
              ref={iframeRefs.current[i]}
              src={m.src}
              title={m.title}
              width="100%"
              height="520"
              loading="lazy"
              className="rounded-xl border border-gray-100 shadow-inner bg-gray-50"
              style={{ transition: "all 0.3s ease" }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
