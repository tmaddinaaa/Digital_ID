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
  LineChart,
  Line,
  CartesianGrid,
  ScatterChart,
  Scatter,
  ZAxis,
  LabelList,
  Legend,
} from "recharts";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";
import { BarChart3, Filter, Clock, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import UnifiedFilters from "../components/UnifiedFilters";

/* ---------- Моки ---------- */
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
    { name: "NoDepo NoCred", value: 72 },
    { name: "Only Credit", value: 19 },
    { name: "Only Deposit", value: 9 },
    { name: "Credit + Deposit", value: 1 },
  ],
  serviceDurationDistribution: [
    { month: "0–6", clients: 6 },
    { month: "7–12", clients: 6 },
    { month: "13–24", clients: 15 },
    { month: "25–36", clients: 18 },
    { month: "37–60", clients: 24 },
    { month: "60+", clients: 30 },
  ],
  segments: [
    { segement: "HIGH_VALUE_ALL_ROUND", count: 19958 },
    { segement: "CREDIT_ORIENTED", count: 17525 },
    { segement: "DEPOSIT_ORIENTED", count: 22999 },
    { segement: "MIXED_INCOME", count: 3025 },
    { segement: "PASSIVE_BUT_PROFITABLE", count: 242555 },
    { segement: "LOW_ENGAGEMENT_LOW_INCOME", count: 39302 },
    { segement: "PASSIVE_LOW_INCOME", count: 794864 },
    { segement: "ACTIVE_BUT_LOW_INCOME", count: 140249 },
    { segement: "CORE_MID_INCOME_PASSIVE", count: 212646 },
    { segement: "CORE_MID_INCOME_ACTIVE", count: 100831 },
    { segement: "CORE_HIGH_INCOME", count: 39652 },
    { segement: "OTHER_INCOME_ORIENTED", count: 25432 },
  ],
};

const BASE_RFM = [
  { recency: "5", frequency: "222", monetary: 3656956, segment: "HIGH_VALUE_ALL_ROUND" },
  { recency: "63", frequency: "17", monetary: 238652, segment: "CREDIT_ORIENTED" },
  { recency: "38", frequency: "119", monetary: 1745636, segment: "DEPOSIT_ORIENTED" },
  { recency: "70", frequency: "30", monetary: 910000, segment: "MIXED_INCOME" },
  { recency: "169", frequency: "1", monetary: 1819, segment: "PASSIVE_LOW_INCOME" },
  { recency: "150", frequency: "2", monetary: 4499, segment: "CORE_MID_INCOME_PASSIVE" },
  { recency: "40", frequency: "94", monetary: 701708, segment: "CORE_MID_INCOME_ACTIVE" },
  { recency: "77", frequency: "14", monetary: 182101, segment: "CORE_HIGH_INCOME" },
  { recency: "78", frequency: "42", monetary: 1158806, segment: "OTHER_INCOME_ORIENTED" },
  { recency: "64", frequency: "34", monetary: 178434, segment: "ACTIVE_BUT_LOW_INCOME" },
];

/* ---------- Цвета ---------- */
function getSegmentColor(segment) {
  const COLORS = {
    HIGH_VALUE_ALL_ROUND: "#2563EB",
    CREDIT_ORIENTED: "#22C55E",
    DEPOSIT_ORIENTED: "#F97316",
    MIXED_INCOME: "#EAB308",
    PASSIVE_LOW_INCOME: "#A3A3A3",
    ACTIVE_BUT_LOW_INCOME: "#FB923C",
    PASSIVE_BUT_PROFITABLE: "#7C3AED",
    CORE_MID_INCOME_PASSIVE: "#06B6D4",
    CORE_MID_INCOME_ACTIVE: "#EF4444",
    CORE_HIGH_INCOME: "#10B981",
    OTHER_INCOME_ORIENTED: "#F59E0B",
  };
  return COLORS[segment] || "#9CA3AF";
}

/* ---------- Главный компонент ---------- */
export default function Segments() {
  const [filters, setFilters] = useState({
    search: "",
    city: "Все города",
    segment: "Все сегменты",
    age: "",
    gender: "Все",
  });
  const [loading, setLoading] = useState(false);

  const filteredData = useMemo(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
    let segments = BASE_DATA.segments;
    if (filters.segment !== "Все сегменты") {
      segments = segments.filter((s) => s.segement === filters.segment);
    }
    return { ...BASE_DATA, segments };
  }, [filters]);

  const filteredRFM = useMemo(() => {
    let data = BASE_RFM;
    if (filters.segment !== "Все сегменты") {
      data = data.filter((r) => r.segment === filters.segment);
    }
    return data;
  }, [filters]);

  return (
    <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Filter className="text-yellow-500" /> Аналитика по сегментам
        </h1>
        <span className="text-sm text-gray-500">
          Обновлено: {new Date().toLocaleTimeString("ru-RU")}
        </span>
      </div>

      <UnifiedFilters filters={filters} setFilters={setFilters} />

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin text-yellow-500" size={28} />
        </div>
      ) : (
        <>
          {/* KPI */}
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard label="Количество клиентов" value={filteredData.totals.totalUsers.toLocaleString()} />
            <MetricCard label="Средний доход (₸)" value={filteredData.totals.avgRevenue.toLocaleString()} highlight />
            <MetricCard label="Общий доход (₸)" value={filteredData.totals.totalRevenue.toLocaleString()} />
          </div>

          {/* Пироги */}
          <div className="grid md:grid-cols-2 gap-6">
            <PieCard title="Распределение по полу" data={filteredData.genderDistribution} />
            <PieCard title="Кредиты и депозиты" data={filteredData.creditDeposit} />
          </div>

          {/* RFM график */}
          <Card>
            <CardHeader>
              <CardTitle>RFM-анализ клиентов</CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                Распределение по давности активности (Recency), частоте операций (Frequency)
                и ценности клиента (Monetary).
              </p>
            </CardHeader>
            <CardContent>
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

/* ---------- Компоненты ---------- */
function MetricCard({ label, value, highlight = false }) {
  return (
    <Card className="text-center p-6 shadow-sm">
      <CardContent>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className={`text-3xl font-bold ${highlight ? "text-yellow-600" : "text-gray-800"}`}>{value}</h2>
      </CardContent>
    </Card>
  );
}

function PieCard({ title, data }) {
  const COLORS = ["#FFB800", "#7EA8FF", "#2563eb", "#E59E00", "#FACC15"];
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              paddingAngle={3}
              label={({ name, value }) => `${name}: ${value}%`}
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

/* ---------- Выдвижное описание для RFM ---------- */
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

      <div className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[600px] mt-4" : "max-h-0"}`}>
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-2 text-left">Сегмент</th>
                <th className="p-2 text-right">Recency (дни)</th>
                <th className="p-2 text-right">Frequency (операции)</th>
                <th className="p-2 text-right">Monetary (₸)</th>
              </tr>
            </thead>
            <tbody>
              {filteredRFM.map((p, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-2 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: getSegmentColor(p.segment) }}></span>
                    {p.segment}
                  </td>
                  <td className="p-2 text-right">{p.recency}</td>
                  <td className="p-2 text-right">{p.frequency}</td>
                  <td className="p-2 text-right font-medium text-gray-800">
                    ₸{p.monetary.toLocaleString("ru-RU")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
