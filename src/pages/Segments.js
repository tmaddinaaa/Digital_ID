"use client";

import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  ScatterChart,
  Scatter,
  ZAxis,
  LabelList,
} from "recharts";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";
import { Filter, Loader2, ChevronDown, ChevronUp, Calendar } from "lucide-react";
import UnifiedFilters from "../components/UnifiedFilters";

/* ---------- Русские названия сегментов ---------- */
const segmentNames = {
  HIGH_VALUE_ALL_ROUND: "Ценные клиенты",
  CREDIT_ORIENTED: "Кредитные клиенты",
  DEPOSIT_ORIENTED: "Депозитные клиенты",
  MIXED_INCOME: "Смешанный доход",
  PASSIVE_BUT_PROFITABLE: "Пассивные, но прибыльные",
  LOW_ENGAGEMENT_LOW_INCOME: "Низкая активность и доход",
  PASSIVE_LOW_INCOME: "Пассивные низкодоходные",
  ACTIVE_BUT_LOW_INCOME: "Активные, но малодоходные",
  CORE_MID_INCOME_PASSIVE: "Средний доход, пассивные",
  CORE_MID_INCOME_ACTIVE: "Средний доход, активные",
  CORE_HIGH_INCOME: "Высокий доход",
  OTHER_INCOME_ORIENTED: "Прочие источники дохода",
};

/* ---------- Цвета ---------- */
function getSegmentColor(segmentName) {
  const COLORS = {
    "Ценные клиенты": "#2563EB",
    "Кредитные клиенты": "#22C55E",
    "Депозитные клиенты": "#F97316",
    "Смешанный доход": "#EAB308",
    "Пассивные, но прибыльные": "#7C3AED",
    "Низкая активность и доход": "#A3A3A3",
    "Пассивные низкодоходные": "#9CA3AF",
    "Активные, но малодоходные": "#FB923C",
    "Средний доход, пассивные": "#06B6D4",
    "Средний доход, активные": "#EF4444",
    "Высокий доход": "#10B981",
    "Прочие источники дохода": "#F59E0B",
  };
  return COLORS[segmentName] || "#D1D5DB";
}

/* ---------- Основные данные (пример) ---------- */
const BASE_DATA = {
  totals: {
    totalUsers: 1633617,
    avgRevenue: 13687,
    totalRevenue: 22362068598,
  },
  genderDistribution: [
    { name: "Мужчины", value: 53.48 },
    { name: "Женщины", value: 46.52 },
  ],
  creditDeposit: [
    { name: "Без кредитов и депозитов", value: 72 },
    { name: "Только кредит", value: 19 },
    { name: "Только депозит", value: 9 },
    { name: "Кредит + депозит", value: 1 },
  ],
  segments: Object.entries(segmentNames).map(([key, name]) => {
    const counts = {
      HIGH_VALUE_ALL_ROUND: 19958,
      CREDIT_ORIENTED: 17525,
      DEPOSIT_ORIENTED: 22999,
      MIXED_INCOME: 3025,
      PASSIVE_BUT_PROFITABLE: 242555,
      LOW_ENGAGEMENT_LOW_INCOME: 39302,
      PASSIVE_LOW_INCOME: 794864,
      ACTIVE_BUT_LOW_INCOME: 140249,
      CORE_MID_INCOME_PASSIVE: 212646,
      CORE_MID_INCOME_ACTIVE: 100831,
      CORE_HIGH_INCOME: 39652,
      OTHER_INCOME_ORIENTED: 25432,
    };
    return { name, count: counts[key] };
  }),
};

const BASE_RFM = [
  { recency: "5", frequency: "222", monetary: 3656956, segment: "Ценные клиенты" },
  { recency: "63", frequency: "17", monetary: 238652, segment: "Кредитные клиенты" },
  { recency: "38", frequency: "119", monetary: 1745636, segment: "Депозитные клиенты" },
  { recency: "70", frequency: "30", monetary: 910000, segment: "Смешанный доход" },
  { recency: "169", frequency: "1", monetary: 1819, segment: "Пассивные низкодоходные" },
  { recency: "150", frequency: "2", monetary: 4499, segment: "Средний доход, пассивные" },
  { recency: "40", frequency: "94", monetary: 701708, segment: "Средний доход, активные" },
  { recency: "77", frequency: "14", monetary: 182101, segment: "Высокий доход" },
  { recency: "78", frequency: "42", monetary: 1158806, segment: "Прочие источники дохода" },
  { recency: "64", frequency: "34", monetary: 178434, segment: "Активные, но малодоходные" },
];

/* ---------- Главный компонент ---------- */
export default function Segments() {
  // хуки — в начале компонента
  const [filters, setFilters] = useState({
    search: "",
    city: "Все города",
    segment: "Все сегменты",
    age: "",
    gender: "Все",
  });
  const [loading, setLoading] = useState(false);

  // Состояние для даты отчета
  const [reportDate, setReportDate] = useState("2025-11-01");

  // единый диапазон дат для всех графиков
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });

  const filteredData = useMemo(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 300);
    let segments = BASE_DATA.segments;
    if (filters.segment && filters.segment !== "Все сегменты") {
      segments = segments.filter((s) => s.name === filters.segment);
    }
    return { ...BASE_DATA, segments };
  }, [filters]);

  const filteredRFM = useMemo(() => {
    let data = BASE_RFM;
    if (filters.segment && filters.segment !== "Все сегменты") {
      data = data.filter((r) => r.segment === filters.segment);
    }
    return data;
  }, [filters]);

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Filter className="text-yellow-500" /> Аналитика по сегментам
        </h1>
        {/* Удален блок с датой отчета */}
      </div>

      <UnifiedFilters filters={filters} setFilters={setFilters} />

      {/* 📅 Дата отчёта (Плашка) - ПЕРЕМЕЩЕНА СЮДА */}
      <div className="flex justify-end">
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
      {/* ------------------------------------------- */}

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin text-yellow-500" size={28} />
        </div>
      ) : (
        <>
          {/* KPI */}
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard label="Количество доходных/активных клиентов" value={filteredData.totals.totalUsers.toLocaleString()} />
            <MetricCard label="Средний доход (₸) на 1 активного клиента" value={filteredData.totals.avgRevenue.toLocaleString()} highlight />
            <MetricCard
              label="Общий доход (₸)"
              value={filteredData.totals.totalRevenue.toLocaleString()}
              note="Без учёта комиссионных сборов"
            />
          </div>

          {/* Распределение по сегментам (тут добавлен диапазон дат) */}
          <Card>
            <CardHeader className="flex items-center justify-between gap-4">
              <div>
                <CardTitle>Распределение клиентов по сегментам</CardTitle>
                <p className="text-sm text-gray-500 mt-1">
                  Период: {dateRange.start} — {dateRange.end}
                </p>
              </div>

              {/* Локальный контрол дат для этого блока (синхронизирован с общим dateRange) */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-gray-700">
                <Calendar size={14} className="text-yellow-600" />
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="bg-transparent outline-none cursor-pointer text-sm"
                />
                <span className="select-none">–</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="bg-transparent outline-none cursor-pointer text-sm"
                />
              </div>
            </CardHeader>

            <CardContent>
              <div style={{ width: "100%", height: 460 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={filteredData.segments}
                    margin={{ top: 20, right: 20, left: 10, bottom: 120 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      interval={0}
                      tick={({ x, y, payload }) => {
                        const value = payload.value || "";
                        const words = value.split(" ").flatMap((w) =>
                          w.includes("-")
                            ? w.split("-").map((p, idx, arr) =>
                                idx < arr.length - 1 ? p + "-" : p
                              )
                            : [w]
                        );
                        const lineHeight = 12;
                        const startY = y + 6;
                        return (
                          <g transform={`translate(${x},${startY})`}>
                            <text textAnchor="middle" fontSize={10} fill="#555">
                              {words.map((line, i) => (
                                <tspan key={i} x="0" dy={i === 0 ? 0 : lineHeight}>
                                  {line}
                                </tspan>
                              ))}
                            </text>
                          </g>
                        );
                      }}
                    />
                    <YAxis />
                    <Tooltip formatter={(v) => v.toLocaleString("ru-RU")} />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                      <LabelList
                        dataKey="count"
                        position="top"
                        formatter={(v) => v.toLocaleString("ru-RU")}
                        fill="#444"
                        fontSize={10}
                      />
                      {filteredData.segments.map((s, i) => (
                        <Cell key={i} fill={getSegmentColor(s.name)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Пироги (каждый пирог имеет локальный контрол диапазона дат, синхронизирован с общим dateRange) */}
          <div className="grid md:grid-cols-2 gap-6">
            <PieCard title="Распределение по полу" data={filteredData.genderDistribution} dateRange={dateRange} />
            <PieCard title="Кредиты и депозиты" data={filteredData.creditDeposit} dateRange={dateRange} smallLabels />
          </div>

          {/* RFM-анализ */}
          <Card>
            <CardHeader className="flex items-center justify-between gap-4">
              <div>
                <CardTitle>RFM-анализ клиентов</CardTitle>
                <p className="text-sm text-gray-500 mt-1">
                  Период: {dateRange.start} — {dateRange.end}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-gray-700">
                <Calendar size={14} className="text-yellow-600" />
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  className="bg-transparent outline-none cursor-pointer text-sm"
                />
                <span className="select-none">–</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  className="bg-transparent outline-none cursor-pointer text-sm"
                />
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-500 mb-3">
                Анализ активности (Recency), частоты (Frequency) и ценности клиента (Monetary).
              </p>

              <ResponsiveContainer width="100%" height={440}>
                <ScatterChart margin={{ top: 40, right: 60, bottom: 40, left: 70 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="recency" label={{ value: "Recency (дни)", position: "bottom" }} />
                  <YAxis type="number" dataKey="frequency" label={{ value: "Frequency (операции)", angle: -90, position: "left" }} />
                  <ZAxis dataKey="monetary" range={[100, 450]} name="Monetary (₸)" />
                  <Tooltip formatter={(v) => `₸${v.toLocaleString("ru-RU")}`} />
                  <Scatter data={filteredRFM}>
                    {filteredRFM.map((p, i) => (
                      <Cell key={i} fill={getSegmentColor(p.segment)} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>

              <CollapsibleRFMTable filteredRFM={filteredRFM} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

/* ---------- Вспомогательные компоненты ---------- */

function MetricCard({ label, value, highlight = false, note }) {
  return (
    <Card className="text-center p-6 shadow-sm">
      <CardContent>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className={`text-3xl font-bold ${highlight ? "text-yellow-600" : "text-gray-800"}`}>{value}</h2>
        {note && <p className="text-xs text-gray-400 mt-1">{note}</p>}
      </CardContent>
    </Card>
  );
}

function PieCard({ title, data, dateRange, smallLabels = false }) {
  const COLORS = ["#FFB800", "#7EA8FF", "#2563eb", "#E59E00", "#FACC15"];
  return (
    <Card>
      <CardHeader className="flex items-center justify-between gap-3">
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center gap-2 text-xs bg-gray-50 border border-gray-200 rounded-md px-2 py-1 text-gray-700">
          <Calendar size={13} className="text-yellow-600" />
          <input
            type="date"
            value={dateRange.start}
            onChange={() => {}}
            className="bg-transparent outline-none cursor-pointer text-xs"
          />
          <span className="select-none">–</span>
          <input
            type="date"
            value={dateRange.end}
            onChange={() => {}}
            className="bg-transparent outline-none cursor-pointer text-xs"
          />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              paddingAngle={3}
              label={({ name, value }) =>
                smallLabels ? `${name.split(" ")[0]}: ${value}%` : `${name}: ${value}%`
              }
              labelLine={false}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function CollapsibleRFMTable({ filteredRFM }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition"
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {open ? "Скрыть детали" : "Показать детали 💰"}
      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-[800px] mt-4" : "max-h-0"
        }`}
      >
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-white/50 text-gray-700">
              <tr>
                <th className="p-2 text-left">Сегмент</th>
                <th className="p-2 text-right">
                  Recency <br />
                  <span className="text-[11px] text-gray-500 font-normal">
                    (давность последней активности, дни)
                  </span>
                </th>
                <th className="p-2 text-right">
                  Frequency <br />
                  <span className="text-[11px] text-gray-500 font-normal">
                    (частота операций, за период)
                  </span>
                </th>
                <th className="p-2 text-right">
                  Monetary <br />
                  <span className="text-[11px] text-gray-500 font-normal">
                    (общая сумма операций, ₸)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRFM.map((p, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="p-2 flex items-center gap-2">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: getSegmentColor(p.segment) }}
                    />
                    {p.segment}
                  </td>
                  <td className="p-2 text-right">{p.recency}</td>
                  <td className="p-2 text-right">{p.frequency}</td>
                  <td className="p-2 text-right font-medium text-gray-800">
                    ₸{Number(p.monetary).toLocaleString("ru-RU")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Маленькое пояснение под таблицей */}
        <div className="text-xs text-gray-500 mt-3 pl-1">
          <p>• Чем меньше Recency — тем недавно клиент был активен.</p>
          <p>• Чем выше Frequency — тем чаще клиент взаимодействует с банком.</p>
          <p>• Чем выше Monetary — тем выше ценность клиента (доход для банка).</p>
        </div>
      </div>
    </div>
  );
}
