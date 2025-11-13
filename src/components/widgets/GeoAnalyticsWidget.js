import React, { useState, useRef, useEffect } from "react";
import * as XLSX from "xlsx";
import {
  Maximize2,
  Minimize2,
  Table,
  MapPinOff,
  Loader2,
  XCircle,
} from "lucide-react";

export default function GeoAnalyticsWidget({ data }) {
  const [expanded, setExpanded] = useState(true);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [availableMaps, setAvailableMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [tableError, setTableError] = useState(null);
  // НОВОЕ СОСТОЯНИЕ: для управления раскрытием/свертыванием таблицы
  const [tableExpanded, setTableExpanded] = useState(false);

  const iframeRefs = useRef([]);
  const maps = data?.geoMaps || {};

  // ✅ Проверка доступных карт
  useEffect(() => {
    const checkFiles = async () => {
      const entries = Object.entries(maps).filter(([k]) => k !== "table");
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

            // 🚫 Пропускаем index.html React приложения
            if (
              text.includes('<div id="root"') ||
              text.includes("React") ||
              text.includes("vite") ||
              text.includes("Client Base Analytics")
            ) {
              console.warn(`⚠️ ${url} не содержит карту`);
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

  // ✅ Отслеживание выхода из fullscreen
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

  // ✅ Чтение XLSX через Blob без скачивания
  const toggleTable = async () => {
    if (showTable) {
      setShowTable(false);
      // При скрытии сбрасываем состояние развертывания
      setTableExpanded(false);
      return;
    }

    if (!maps.table) {
      setTableError("⚠️ Таблица недоступна для данного пользователя.");
      return;
    }

    setTableLoading(true);
    setTableError(null);

    try {
      // 🧩 Читаем бинарные данные в память
      const res = await fetch(maps.table, { cache: "no-store" });
      if (!res.ok) throw new Error("Ошибка при загрузке файла");

      const blob = await res.arrayBuffer();

      // 📖 Читаем как Excel
      const workbook = XLSX.read(blob, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      setTableData(json);
      setShowTable(true);
      // При успешной загрузке устанавливаем tableExpanded в false, чтобы показать только 5 строк
      setTableExpanded(false); 
    } catch (err) {
      console.error("Ошибка при чтении XLSX:", err);
      setTableError("Ошибка при чтении таблицы");
    } finally {
      setTableLoading(false);
    }
  };

  // 🔄 Состояние загрузки
  if (loading) {
    return (
      <div className="bg-white shadow rounded-2xl p-6 text-center text-gray-500 italic">
        Проверка наличия карт...
      </div>
    );
  }

  // 🚫 Нет карт
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

  // ✅ Основной рендер
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
              {/* Заголовок блока */}
              <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-700 text-sm flex justify-between items-center">
                <span>{mapTitles[key] || key}</span>

                <div className="flex items-center gap-3">
                  {/* 📊 Табличный вид */}
                  {key === "all_points" && (
                    <button
                      onClick={toggleTable}
                      className="flex items-center gap-1 text-gray-600 hover:text-green-600 text-xs border border-gray-300 hover:border-green-400 px-2 py-1 rounded-md transition-all duration-200"
                    >
                      <Table className="w-3.5 h-3.5" />
                      <span>
                        {showTable ? "Скрыть таблицу" : "Табличный вид"}
                      </span>
                    </button>
                  )}

                  {/* ⛶ Развернуть */}
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

              {/* iframe */}
              <iframe
                ref={(el) => (iframeRefs.current[index] = el)}
                src={url}
                title={key}
                width="100%"
                height="420"
                loading="lazy"
                className="rounded-b-xl bg-gray-50"
                style={{ border: "none", transition: "all 0.3s ease" }}
                onError={(e) => {
                  e.target.outerHTML = `
                    <div class='flex items-center justify-center h-52 bg-gray-50 text-gray-500 text-sm rounded-lg border border-gray-200'>
                      ⚠️ Не удалось загрузить карту
                    </div>`;
                }}
              />

              {/* 📋 Таблица под картой */}
              {key === "all_points" && showTable && (
                <div className="p-4 bg-gray-50 border-t border-gray-200 overflow-x-auto">
                  {tableLoading ? (
                    <div className="flex justify-center items-center py-8 text-gray-500">
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Загрузка таблицы...
                    </div>
                  ) : tableError ? (
                    <div className="flex justify-center items-center py-8 text-red-500 text-sm">
                      <XCircle className="w-5 h-5 mr-2" /> {tableError}
                    </div>
                  ) : (
                    <>
                      {/* Логика обрезки таблицы */}
                      {(() => {
                        const rowsToShow = tableExpanded
                          ? tableData
                          : tableData.slice(0, 5);
                        const hasMoreRows = tableData.length > 5;

                        return (
                          <>
                            <table className="min-w-full border border-gray-200 text-sm text-gray-700">
                              <thead className="bg-gray-100">
                                <tr>
                                  {Object.keys(tableData[0] || {}).map(
                                    (key) => (
                                      <th
                                        key={key}
                                        className="px-3 py-2 text-left border-b border-gray-200 font-medium"
                                      >
                                        {key}
                                      </th>
                                    )
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {rowsToShow.map((row, i) => (
                                  <tr
                                    key={i}
                                    className={
                                      i % 2 === 0
                                        ? "bg-white"
                                        : "bg-gray-50 hover:bg-gray-100"
                                    }
                                  >
                                    {Object.values(row).map((val, j) => (
                                      <td
                                        key={j}
                                        className="px-3 py-2 border-b"
                                      >
                                        {val}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                                {/* Добавляем строку-заполнитель, если таблица свернута */}
                                {!tableExpanded && hasMoreRows && (
                                  <tr className="bg-gray-200">
                                    <td
                                      colSpan={
                                        Object.keys(tableData[0] || {}).length
                                      }
                                      className="px-3 py-2 text-center italic text-gray-500"
                                    >
                                      ... Еще {tableData.length - 5} строк ...
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                            {/* Кнопка Развернуть/Свернуть */}
                            {hasMoreRows && (
                              <div className="text-center mt-3">
                                <button
                                  onClick={() => setTableExpanded((p) => !p)}
                                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 hover:border-blue-300"
                                >
                                  {tableExpanded
                                    ? "Свернуть таблицу ▲"
                                    : `Развернуть таблицу (Все ${tableData.length} строк) ▼`}
                                </button>
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Названия карт
const mapTitles = {
  all_points: "📍 Все точки пользователя",
  clustered_points: "🧩 Кластеризация точек",
  heatmap: "🔥 Тепловая карта плотности",
  time_heatmap: "⏱ Тепловая карта по времени суток",
  time_points: "🕒 Точки по времени суток",
  path_points: "🚶‍♂️ Маршруты передвижений по датам",
};