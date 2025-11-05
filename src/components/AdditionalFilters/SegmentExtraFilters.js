import React from "react";

export default function SegmentExtraFilters({ localFilters, setLocalFilters }) {
  return (
    <div className="bg-white shadow-sm rounded-xl p-4 border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Дополнительные фильтры RFM</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* ⏱ Период */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">⏱ Период анализа</label>
          <select
            value={localFilters.timePeriod}
            onChange={(e) => setLocalFilters((f) => ({ ...f, timePeriod: e.target.value }))}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
          >
            <option value="30">Последние 30 дней</option>
            <option value="90">Последние 90 дней</option>
            <option value="180">Последние 180 дней</option>
            <option value="all">Всё время</option>
          </select>
        </div>

        {/* 📈 Режим визуализации */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 mb-1">📈 Режим RFM-визуализации</label>
          <select
            value={localFilters.rfmMode}
            onChange={(e) => setLocalFilters((f) => ({ ...f, rfmMode: e.target.value }))}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
          >
            <option value="all">Все клиенты</option>
            <option value="segment">По сегменту</option>
            <option value="demographic">По полу/возрасту</option>
          </select>
        </div>
      </div>
    </div>
  );
}
