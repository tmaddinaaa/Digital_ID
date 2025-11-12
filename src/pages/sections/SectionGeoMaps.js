// src/pages/sections/SectionGeoMaps.js
"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent } from "../../components/ui/card.jsx";
import { Maximize2, Calendar } from "lucide-react";

export default function SectionGeoMaps() {
  const [reportDate, setReportDate] = useState("2025-11-01");

  // 🔹 Дефолтный диапазон для карт
  const [dateRange, setDateRange] = useState({
    start: "2025-10-01",
    end: "2025-10-31",
  });

  const maps = [
    {
      title: "🟦 Карта кластеров Алматы",
      description: "Показывает распределение клиентов по кластерам внутри города.",
      src: "/maps/almaty_clustered_map.html",
    },
    {
      title: "🔥 Тепловая карта Алматы с временной шкалой",
      description: "Позволяет анализировать изменение активности клиентов во времени.",
      src: "/maps/almaty_heatmap_withTime.html",
    },
    {
      title: "🌍 Общая карта кластеров клиентов по Казахстану",
      description: "Отображает географию клиентской базы и её концентрацию.",
      src: "/maps/map.html",
    },
  ];

  // Ссылки на iframe для полноэкранного режима
  const iframeRefs = useRef(maps.map(() => React.createRef()));

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
      {/* 🔹 Заголовок и дата отчёта */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          🗺 Геоаналитика клиентской базы
        </h2>

        {/* 📅 Дата отчёта */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 shadow-sm">
          <Calendar size={16} className="text-yellow-600" />
          <span>
            Данные на{" "}
            <input
              type="date"
              value={reportDate}
              onChange={(e) => setReportDate(e.target.value)}
              className="bg-transparent outline-none text-gray-800 cursor-pointer"
            />
          </span>
        </div>
      </div>

      {/* 🔹 Список карт */}
      {maps.map((m, i) => (
        <Card
          key={i}
          className="shadow-sm border border-gray-200 relative group"
        >
          <CardContent className="p-6 space-y-5">
            {/* 🔸 Заголовок, описание и диапазон */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.description}</p>
              </div>

              {/* 📆 Диапазон дат */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
                <Calendar size={15} className="text-yellow-600" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={dateRange.start}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, start: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={dateRange.end}
                    onChange={(e) =>
                      setDateRange({ ...dateRange, end: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 🔘 Кнопка “Развернуть” */}
            <div className="flex justify-end">
              <button
                onClick={() => toggleFullscreen(i)}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 text-sm border border-gray-300 hover:border-blue-400 px-3 py-1.5 rounded-lg transition-all duration-200"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Развернуть</span>
              </button>
            </div>

            {/* 🗺 Карта / iframe */}
            <iframe
              ref={iframeRefs.current[i]}
              src={m.src}
              title={m.title}
              width="100%"
              height="520"
              loading="lazy"
              className="rounded-xl border border-gray-100 shadow-inner bg-gray-50"
              style={{ transition: "all 0.3s ease" }}
              onError={(e) => {
                e.target.outerHTML = `
                  <div class='flex items-center justify-center h-52 bg-gray-50 text-gray-500 text-sm rounded-lg border border-gray-200'>
                    ⚠️ Не удалось загрузить данные по геолокации
                  </div>`;
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
