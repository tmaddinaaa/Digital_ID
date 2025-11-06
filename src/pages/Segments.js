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
} from "recharts";
import { Card, CardHeader, CardContent, CardTitle } from "../components/ui/card";
import { BarChart3, Filter, Clock, Loader2 } from "lucide-react";
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
    { segement: "ACTIVE_BUT_LOW_INCOME", count: 140249 },
    { segement: "CORE_HIGH_INCOME", count: 39652 },
    { segement: "CORE_MID_INCOME_ACTIVE", count: 100831 },
    { segement: "CORE_MID_INCOME_PASSIVE", count: 212646 },
    { segement: "CREDIT_ORIENTED", count: 17525 },
    { segement: "DEPOSIT_ORIENTED", count: 22999 },
    { segement: "HIGH_VALUE_ALL_ROUND", count: 19958 },
    { segement: "LOW_ENGAGEMENT_LOW_INCOME", count: 39302 },
    { segement: "MIXED_INCOME", count: 3025 },
    { segement: "PASSIVE_BUT_PROFITABLE", count: 242555 },
    { segement: "PASSIVE_LOW_INCOME", count: 794864 },
  ],
};

const BASE_RFM = [
  {
    recency: "5",
    frequency: "222",
    monetary: 3656956,
    segment: "HIGH_VALUE_ALL_ROUND",
    gender_M: 57,
    gender_F: 43,
    age_avg: "42",
    age_median: "40",
  },
  {
    recency: "38",
    frequency: "119",
    monetary: 1745636,
    segment: "DEPOSIT_ORIENTED",
    gender_M: 53,
    gender_F: 47,
    age_avg: "47",
    age_median: "45",
  },
  {
    recency: "78",
    frequency: "42",
    monetary: 1158806,
    segment: "OTHER_INCOME_ORIENTED",
    gender_M: 70,
    gender_F: 30,
    age_avg: "45",
    age_median: "42",
  },
  {
    recency: "40",
    frequency: "94",
    monetary: 701708,
    segment: "CORE_MID_INCOME_ACTIVE",
    gender_M: 52,
    gender_F: 48,
    age_avg: "40",
    age_median: "38",
  },
  {
    recency: "63",
    frequency: "17",
    monetary: 238652,
    segment: "CREDIT_ORIENTED",
    gender_M: 59,
    gender_F: 41,
    age_avg: "36",
    age_median: "34",
  },
  {
    recency: "77",
    frequency: "14",
    monetary: 182101,
    segment: "CORE_HIGH_INCOME",
    gender_M: 58,
    gender_F: 42,
    age_avg: "36",
    age_median: "34",
  },
  {
    recency: "64",
    frequency: "34",
    monetary: 178434,
    segment: "ACTIVE_BUT_LOW_INCOME",
    gender_M: 54,
    gender_F: 46,
    age_avg: "35",
    age_median: "34",
  },
  {
    recency: "150",
    frequency: "2",
    monetary: 4499,
    segment: "CORE_MID_INCOME_PASSIVE",
    gender_M: 51,
    gender_F: 49,
    age_avg: "43",
    age_median: "41",
  },
  {
    recency: "155",
    frequency: "1",
    monetary: 2113,
    segment: "LOW_ENGAGEMENT_LOW_INCOME",
    gender_M: 56,
    gender_F: 44,
    age_avg: "37",
    age_median: "36",
  },
  {
    recency: "169",
    frequency: "1",
    monetary: 1819,
    segment: "PASSIVE_BUT_PROFITABLE",
    gender_M: 52,
    gender_F: 48,
    age_avg: "40",
    age_median: "38",
  },
];

/* ---------- Цвета для сегментов ---------- */
function getSegmentColor(segment) {
  if (segment.includes("HIGH")) return "#2563eb";
  if (segment.includes("PROFITABLE")) return "#7EA8FF";
  if (segment.includes("LOW")) return "#FACC15";
  if (segment.includes("ACTIVE")) return "#E59E00";
  if (segment.includes("DEPOSIT")) return "#FFB800";
  return "#9CA3AF";
}

/* ---------- Главный компонент ---------- */
export default function Segments() {
  const [filters, setFilters] = useState({
    search: "",
    city: "Все города",
    segment: "Все сегменты",
    age: "",
    gender: "Все",
    activityStatus: "Все статусы",
    maritalStatus: "Все",
    privateStatus: "Все",
    registrationMPFrom: "",
    registrationMPTo: "",
    registrationBankFrom: "",
    registrationBankTo: "",
    bankProducts: [],
    investProducts: [],
    garantProducts: [],
    tags: [],
  });

  const [loading, setLoading] = useState(false);

  const handleReset = () =>
    setFilters({
      search: "",
      city: "Все города",
      segment: "Все сегменты",
      age: "",
      gender: "Все",
      activityStatus: "Все статусы",
      maritalStatus: "Все",
      privateStatus: "Все",
      registrationMPFrom: "",
      registrationMPTo: "",
      registrationBankFrom: "",
      registrationBankTo: "",
      bankProducts: [],
      investProducts: [],
      garantProducts: [],
      tags: [],
    });

  const filteredData = useMemo(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
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
    if (filters.gender !== "Все") {
      data = data.filter((r) => filters.gender === "Мужчины" ? r.gender_M > r.gender_F : r.gender_F > r.gender_M);
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

      <UnifiedFilters filters={filters} setFilters={setFilters} onReset={handleReset} />

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin text-yellow-500" size={28} />
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard label="Количество клиентов" value={filteredData.totals.totalUsers.toLocaleString()} />
            <MetricCard label="Средний доход (₸)" value={filteredData.totals.avgRevenue.toLocaleString()} highlight />
            <MetricCard label="Общий доход (₸)" value={filteredData.totals.totalRevenue.toLocaleString()} />
          </div>

          {/* 📊 Горизонтальный бар-чарт */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <BarChart3 className="text-yellow-500" />
              <CardTitle>Распределение по сегментам</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={420}>
                <BarChart
                  layout="vertical"
                  data={filteredData.segments}
                  margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis
                    type="category"
                    dataKey="segement"
                    width={200}
                    tickFormatter={(v) => v.replace(/_/g, " ")}
                    tick={{ fontSize: 11 }}
                  />
                  <Tooltip
                    formatter={(value, _, obj) => [
                      value.toLocaleString(),
                      obj.payload.segement.replace(/_/g, " "),
                    ]}
                  />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                    {filteredData.segments.map((entry, index) => (
                      <Cell key={index} fill={getSegmentColor(entry.segement)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Пироги */}
          <div className="grid md:grid-cols-2 gap-6">
            <PieCard title="Распределение по полу" data={filteredData.genderDistribution} />
            <PieCard title="Кредиты и депозиты" data={filteredData.creditDeposit} />
          </div>

          {/* Линия */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <Clock className="text-yellow-500" />
              <CardTitle>Распределение по сроку обслуживания</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={filteredData.serviceDurationDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="clients" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Scatter RFM */}
          <Card>
            <CardHeader>
              <CardTitle>RFM-анализ клиентов</CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                Распределение по давности активности (Recency), частоте операций (Frequency) и ценности (Monetary).
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart margin={{ top: 30, right: 30, bottom: 40, left: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="recency" name="Recency" />
                  <YAxis type="number" dataKey="frequency" name="Frequency" />
                  <ZAxis dataKey="monetary" range={[60, 450]} name="Monetary (₸)" />
                  <Tooltip
                    formatter={(val, _, obj) => [
                      val.toLocaleString(),
                      obj.payload.segment.replace(/_/g, " "),
                    ]}
                  />
                  <Scatter data={filteredRFM}>
                    {filteredRFM.map((p, i) => (
                      <Cell key={i} fill={getSegmentColor(p.segment)} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
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
        <h2 className={`text-3xl font-bold ${highlight ? "text-yellow-600" : "text-gray-800"}`}>
          {value}
        </h2>
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
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} label>
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
