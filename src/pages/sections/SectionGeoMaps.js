// src/pages/sections/SectionGeoMaps.js
import React from "react";
import { Card, CardContent } from "../../components/ui/card.jsx";

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

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-800">
        🗺 Геоаналитика клиентской базы
      </h2>

      {maps.map((m, i) => (
        <Card key={i} className="shadow-sm border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">{m.title}</h3>
              <p className="text-gray-500 text-sm">{m.description}</p>
            </div>
            <iframe
              src={m.src}
              title={m.title}
              width="100%"
              height="520"
              loading="lazy"
              style={{
                border: "none",
                borderRadius: "12px",
                background: "#f9fafb",
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
