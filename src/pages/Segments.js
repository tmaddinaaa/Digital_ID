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
    totalUsers: 1630000,
    avgRevenue: 13817,
    totalRevenue: 22328860000,
  },
  genderDistribution: [
    { name: "Мужчины", value: 55.53 },
    { name: "Женщины", value: 44.47 },
  ],
  creditDeposit: [
    { name: "NoDepo NoCred", value: 8.45 },
    { name: "Only Credit", value: 15.77 },
    { name: "Only Deposit", value: 27.75 },
    { name: "Credit + Deposit", value: 48.03 },
  ],
  serviceDurationDistribution: [
    { month: "0–6", clients: 12.5 },
    { month: "7–12", clients: 18.2 },
    { month: "13–24", clients: 26.8 },
    { month: "25–36", clients: 19.6 },
    { month: "37–60", clients: 14.3 },
    { month: "60+", clients: 8.6 },
  ],
  segments: [
    { segment: "PASSIVE_LOW_INCOME", count: 791780 },
    { segment: "PASSIVE_BUT_PROFITABLE", count: 241950 },
    { segment: "CORE_MID_INCOME_PASSIVE", count: 211170 },
    { segment: "ACTIVE_BUT_LOW_INCOME", count: 140090 },
    { segment: "CORE_HIGH_INCOME", count: 100660 },
    { segment: "DEPOSIT_ORIENTED", count: 39640 },
    { segment: "CREDIT_ORIENTED", count: 19530 },
  ],
};

const BASE_RFM = [
  { recency: "1–7 дней", frequency: "Высокая", monetary: 120000, segment: "CORE_HIGH_INCOME", gender: "Мужчины", age: "36–45" },
  { recency: "8–30 дней", frequency: "Средняя", monetary: 60000, segment: "PASSIVE_BUT_PROFITABLE", gender: "Женщины", age: "26–35" },
  { recency: "31–90 дней", frequency: "Низкая", monetary: 20000, segment: "ACTIVE_BUT_LOW_INCOME", gender: "Мужчины", age: "18–25" },
  { recency: "91–180 дней", frequency: "Низкая", monetary: 8000, segment: "DEPOSIT_ORIENTED", gender: "Женщины", age: "46–60" },
  { recency: "180+", frequency: "Низкая", monetary: 3000, segment: "PASSIVE_LOW_INCOME", gender: "Женщины", age: "60+" },
];

const COLORS = ["#FFB800", "#7EA8FF", "#2563eb", "#E59E00", "#FACC15"];

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

  /* ---------- Динамические данные ---------- */
  const filteredData = useMemo(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);

    const segmentScale =
      filters.segment === "CORE_HIGH_INCOME"
        ? 1.3
        : filters.segment === "PASSIVE_BUT_PROFITABLE"
        ? 1.15
        : filters.segment === "ACTIVE_BUT_LOW_INCOME"
        ? 0.9
        : filters.segment === "PASSIVE_LOW_INCOME"
        ? 0.8
        : 1;

    const genderScale =
      filters.gender === "Женщины" ? 0.95 : filters.gender === "Мужчины" ? 1.05 : 1;

    const ageScale =
      filters.age && filters.age.includes("60")
        ? 0.85
        : filters.age && filters.age.includes("18")
        ? 0.9
        : 1;

    const bankScale =
      (filters.bankProducts.includes("Кредит") ? 1.1 : 1) *
      (filters.bankProducts.includes("Депозит") ? 1.05 : 1) *
      (filters.bankProducts.includes("Карта") ? 1.02 : 1);

    const totalScale = segmentScale * genderScale * ageScale * bankScale;

    const totals = {
      totalUsers: Math.round(BASE_DATA.totals.totalUsers * totalScale),
      avgRevenue: Math.round(BASE_DATA.totals.avgRevenue * (totalScale * 0.97)),
      totalRevenue: Math.round(BASE_DATA.totals.totalRevenue * (totalScale * 1.02)),
    };

    const genderDistribution = BASE_DATA.genderDistribution.map((g) => ({
      ...g,
      value: +(g.value * genderScale).toFixed(2),
    }));

    const creditDeposit = BASE_DATA.creditDeposit.map((c) => ({
      ...c,
      value: +(c.value * (filters.gender === "Женщины" ? 0.9 : 1.05)).toFixed(2),
    }));

    const serviceDurationDistribution = BASE_DATA.serviceDurationDistribution.map((d) => ({
      ...d,
      clients: +(d.clients * totalScale).toFixed(1),
    }));

    let segments = BASE_DATA.segments.map((s) => ({
      ...s,
      count: Math.round(s.count * totalScale),
    }));

    if (filters.segment !== "Все сегменты") {
      segments = segments.filter((s) => s.segment === filters.segment);
    }

    return {
      totals,
      genderDistribution,
      creditDeposit,
      serviceDurationDistribution,
      segments,
    };
  }, [filters]);

  /* ---------- RFM ---------- */
  const filteredRFM = useMemo(() => {
    let data = BASE_RFM;

    if (filters.gender !== "Все") data = data.filter((r) => r.gender === filters.gender);
    if (filters.segment !== "Все сегменты") data = data.filter((r) => r.segment === filters.segment);
    if (filters.age) data = data.filter((r) => r.age === filters.age);

    if (filters.bankProducts?.includes("Кредит")) data = data.filter((r) => r.frequency !== "Низкая");
    if (filters.garantProducts?.includes("Страховка жизни")) data = data.filter((r) => r.monetary > 5000);

    return data;
  }, [filters]);

  /* ---------- UI ---------- */
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
          {/* Метрики */}
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard label="Количество клиентов" value={filteredData.totals.totalUsers.toLocaleString()} />
            <MetricCard label="Средний доход (₸)" value={filteredData.totals.avgRevenue.toLocaleString()} highlight />
            <MetricCard label="Общий доход (₸)" value={filteredData.totals.totalRevenue.toLocaleString()} />
          </div>

          {/* Бар-чарт */}
          <Card>
            <CardHeader className="flex items-center gap-2">
              <BarChart3 className="text-yellow-500" />
              <CardTitle>Распределение по сегментам</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredData.segments}>
                  <XAxis dataKey="segment" interval={0} tick={{ fontSize: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                    {filteredData.segments.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          filters.segment !== "Все сегменты" && entry.segment === filters.segment
                            ? "#2563eb"
                            : "#FFB800"
                        }
                        cursor="pointer"
                        style={{ transition: "fill 0.3s", opacity: 0.9 }}
                      />
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

          {/* RFM Scatter */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>RFM-анализ клиентов</CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                Распределение клиентов по давности активности (Recency), частоте операций (Frequency) и ценности (Monetary).
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={420}>
                <ScatterChart margin={{ top: 30, right: 30, bottom: 40, left: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    type="category"
                    dataKey="recency"
                    padding={{ left: 20, right: 20 }}
                    label={{ value: "Recency", position: "bottom" }}
                  />
                  <YAxis
                    type="category"
                    dataKey="frequency"
                    reversed
                    padding={{ top: 10, bottom: 10 }}
                    label={{ value: "Frequency", angle: -90, position: "insideLeft" }}
                  />
                  <ZAxis dataKey="monetary" range={[80, 450]} name="Monetary (₸)" />

                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    }}
                    labelFormatter={(_, items) => {
                      const p = items?.[0]?.payload;
                      return (
                        <div className="space-y-1">
                          <p className="font-semibold text-gray-800">
                            🧩 {p.segment.replaceAll("_", " ")}
                          </p>
                          <p className="text-sm text-gray-600">Recency: {p.recency}</p>
                          <p className="text-sm text-gray-600">Frequency: {p.frequency}</p>
                          <p className="text-sm text-gray-600">
                            Monetary: {p.monetary.toLocaleString()} ₸
                          </p>
                          <p className="text-sm text-gray-600">Возраст: {p.age}</p>
                          <p className="text-sm text-gray-600">Пол: {p.gender}</p>
                        </div>
                      );
                    }}
                  />

                  <Scatter
                    name="RFM-кластеры"
                    data={filteredRFM}
                    shape={(props) => {
                      const { cx, cy, payload } = props;
                      const color = getSegmentColor(payload.segment);
                      const rawR = Math.sqrt(payload.monetary) / 45;
                      const r = Math.min(Math.max(rawR, 5), 14);
                      return (
                        <circle cx={cx} cy={cy} r={r} fill={color} stroke="#fff" strokeWidth={1} opacity={0.9} />
                      );
                    }}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

/* ---------- Карточки ---------- */
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
