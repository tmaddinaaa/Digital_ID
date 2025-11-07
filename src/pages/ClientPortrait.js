"use client";

import React, { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LabelList,
} from "recharts";
import {
  Filter,
  RefreshCw,
  Users,
  Coins,
  CreditCard,
  Brain,
  Scale,
  BarChart3,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

import { loyaltyData } from "../data/loyaltyData";
import { depositsData } from "../data/depositsData";
import { creditsData } from "../data/creditsData";
import { cardsData } from "../data/cardsData";

const COLORS = [
  "#5B8FF9",
  "#61DDAA",
  "#65789B",
  "#F6BD16",
  "#7262FD",
  "#78D3F8",
  "#9661BC",
  "#F6903D",
  "#E8684A",
  "#A7A7A7",
];

export default function ClientPortrait() {
  // По умолчанию показываем "Кредиты".
  const [filters, setFilters] = useState({
    city: "Все города",
    segment: "Все сегменты",
    device: "Все устройства",
    product: "Кредиты",
    compareProduct: "",
    activityStatus: "Все статусы",
    gender: "Все",
    age: "Все возраста",
  });

  // Карта продуктов -> источников данных
  const dataMap = useMemo(
    () => ({
      Лояльность: loyaltyData || [],
      Депозиты: depositsData || [],
      Кредиты: creditsData || [],
      Карты: cardsData || [],
    }),
    []
  );

  const products = useMemo(() => Object.keys(dataMap), [dataMap]);

  // records для выбранного продукта
  const productRecords = useMemo(() => dataMap[filters.product] || [], [
    dataMap,
    filters.product,
  ]);

  // records для сравнения (можно сравнить любой другой продукт)
  const compareRecords = useMemo(
    () => (filters.compareProduct ? dataMap[filters.compareProduct] || [] : []),
    [dataMap, filters.compareProduct]
  );

  // Функция агрегации для сравнения / суммарного представления
  function aggregateRecords(records, productName) {
    if (!records || records.length === 0) return null;
    if (records.length === 1) {
      // Ensure product field exists for display
      return { ...(records[0] || {}), product: records[0].product || productName };
    }

    // Generic aggregator: попытается аккумулировать базовые и финансовые числовые метрики.
    const agg = {
      product: records[0].product || productName,
      type: "Aggregate",
      baseMetrics: {
        clientsCount: 0,
        avgAge: null,
        genderShare: { male: 0, female: 0 },
        avgIncome: null,
      },
      metrics: {},
      financialSums: {},
      top5Branches: [],
      top5MccGroups: [],
    };

    let ageWeighted = 0;
    let incomeWeighted = 0;
    let maleWeighted = 0;
    let femaleWeighted = 0;

    // collect numeric sums (common keys across different structures)
    const numericSums = {};

    for (const r of records) {
      const base = r.baseMetrics || r.clients || {};
      const fin = r.metrics || r.financial || r.loans || {};

      const clients = Number(base.clientsCount || base.count || 0);
      agg.baseMetrics.clientsCount += clients;

      if (base.avgAge) ageWeighted += Number(base.avgAge) * clients;
      if (base.avgIncome) incomeWeighted += Number(base.avgIncome) * clients;
      if (base.avgSalary) incomeWeighted += Number(base.avgSalary) * clients;
      if (base.genderShare) {
        maleWeighted += Number(base.genderShare.male || 0) * clients;
        femaleWeighted += Number(base.genderShare.female || 0) * clients;
      } else if (base.gender) {
        maleWeighted += Number(base.gender.male || 0) * clients;
        femaleWeighted += Number(base.gender.female || 0) * clients;
      }

      // collect all numeric top-level numeric fields from financial blocks
      for (const [k, v] of Object.entries(fin)) {
        const num = Number(v);
        if (!Number.isNaN(num)) numericSums[k] = (numericSums[k] || 0) + num;
      }

      // merge branch lists (keep top by value later)
      const branches = r.top5Branches || r.branches || [];
      if (Array.isArray(branches) && branches.length) {
        agg.top5Branches.push(...branches);
      }
      // MCC groups array
      const mccArr = r.top5MccGroups || r.top5MccGroups;
      if (Array.isArray(mccArr) && mccArr.length) agg.top5MccGroups.push(...mccArr);
      // categories object (convert to array)
      if (r.categories && typeof r.categories === "object" && !Array.isArray(r.categories)) {
        for (const [k, val] of Object.entries(r.categories)) {
          agg.top5MccGroups.push({ name: k, value: Number(val) || 0 });
        }
      }
    }

    const totalClients = agg.baseMetrics.clientsCount || 1;
    agg.baseMetrics.avgAge = ageWeighted ? +(ageWeighted / totalClients).toFixed(1) : null;
    agg.baseMetrics.avgIncome = incomeWeighted ? Math.round(incomeWeighted / totalClients) : null;
    agg.baseMetrics.genderShare.male = totalClients ? +(maleWeighted / totalClients).toFixed(2) : 0;
    agg.baseMetrics.genderShare.female = totalClients ? +(femaleWeighted / totalClients).toFixed(2) : 0;

    // put numeric sums into metrics
    agg.metrics = numericSums;

    // reduce top5Branches: group by name and sum values, then take top 5
    const branchMap = {};
    agg.top5Branches.forEach((b) => {
      if (!b || !b.name) return;
      branchMap[b.name] = (branchMap[b.name] || 0) + Number(b.value || 0);
    });
    agg.top5Branches = Object.entries(branchMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    // reduce mcc groups (agg.top5MccGroups)
    const mccMap = {};
    agg.top5MccGroups.forEach((m) => {
      if (!m) return;
      const name = m.name || m[0];
      const value = Number(m.value ?? m[1] ?? 0);
      mccMap[name] = (mccMap[name] || 0) + value;
    });
    agg.top5MccGroups = Object.entries(mccMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    return agg;
  }

  // Formatting helper
  const fmt = (v) =>
    v === null || v === undefined || v === "—"
      ? "—"
      : typeof v === "number"
      ? v.toLocaleString("ru-RU")
      : String(v);

  // Decide whether product type has multiple entries (e.g. loyalty tiers)
  const isMultiType = ["Лояльность", "Депозиты", "Кредиты", "Карты"].includes(filters.product);

  const left = isMultiType ? aggregateRecords(productRecords, filters.product) : (productRecords[0] || null);
  const right = filters.compareProduct ? (isMultiType ? aggregateRecords(compareRecords, filters.compareProduct) : (compareRecords[0] || null)) : null;

  // Compare options list (include empty)
  const compareOptions = useMemo(() => {
    const ops = products.filter((p) => p !== filters.product);
    return ["", ...ops];
  }, [products, filters.product]);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <Filter className="text-yellow-500" /> Портрет клиента по продукту
        </h1>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <RefreshCw size={14} className="text-yellow-500" />
          Обновлено: {new Date().toLocaleTimeString("ru-RU")}
        </div>
      </div>

      {/* Filters */}
      <Card className="border-gray-200 shadow-sm p-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Select label="🏙 Город" value={filters.city}
            options={["Все города", "Алматы", "Астана", "Шымкент"]}
            onChange={(v) => setFilters((f) => ({ ...f, city: v }))} />
          <Select label="📊 Сегмент" value={filters.segment}
            options={[
              "Все сегменты",
              "ACTIVE_BUT_LOW_INCOME",
              "CORE_HIGH_INCOME",
              "CORE_MID_INCOME_ACTIVE",
              "CORE_MID_INCOME_PASSIVE",
              "CREDIT_ORIENTED",
              "DEPOSIT_ORIENTED",
              "HIGH_VALUE_ALL_ROUND",
              "LOW_ENGAGEMENT_LOW_INCOME",
              "MIXED_INCOME",
              "PASSIVE_BUT_PROFITABLE",
              "PASSIVE_LOW_INCOME",
            ]}
            onChange={(v) => setFilters((f) => ({ ...f, segment: v }))} />
          <Select label="📱 Устройство" value={filters.device}
            options={["Все устройства", "iOS", "Android", "Web"]}
            onChange={(v) => setFilters((f) => ({ ...f, device: v }))} />
          <Select label="💳 Продукт" value={filters.product}
            options={products}
            onChange={(v) => setFilters((f) => ({ ...f, product: v, compareProduct: "" }))} />
          <Select label="⚖️ Сравнить с" value={filters.compareProduct}
            options={compareOptions}
            onChange={(v) => setFilters((f) => ({ ...f, compareProduct: v }))} />
          <Select label="⚡ Активность" value={filters.activityStatus}
            options={["Все статусы", "Активный", "Неактивный"]}
            onChange={(v) => setFilters((f) => ({ ...f, activityStatus: v }))} />
          <Select label="🚻 Пол" value={filters.gender}
            options={["Все", "Мужчины", "Женщины"]}
            onChange={(v) => setFilters((f) => ({ ...f, gender: v }))} />
          <Select label="🎂 Возраст" value={filters.age}
            options={["Все возраста", "18–25", "26–35", "36–45", "46–60", "60+"]}
            onChange={(v) => setFilters((f) => ({ ...f, age: v }))} />
        </div>
      </Card>

      {/* Content */}
      <div className="space-y-6">
        {/* Comparison */}
        {filters.compareProduct ? (
          left && right ? (
            <ComparisonSection a={left} b={right} fmt={fmt} />
          ) : (
            <div className="text-sm text-gray-600">Выберите корректные продукты для сравнения.</div>
          )
        ) : // If multi-type (e.g. loyalty tiers) — show cards for each record, else show aggregate or single
          isMultiType ? (
            productRecords.length > 0 ? (
              <div className="space-y-6">
                {productRecords.map((r, idx) => (
                  <PortraitCard key={idx} data={r} product={filters.product} fmt={fmt} />
                ))}
              </div>
            ) : (
              <div className="text-sm text-gray-600">Нет данных для выбранного продукта.</div>
            )
          ) : (
            // single-type (shouldn't happen as we map by product), but keep fallback
            (productRecords[0] && <PortraitCard data={productRecords[0]} product={filters.product} fmt={fmt} />) ||
            <div className="text-sm text-gray-600">Нет данных для выбранного продукта.</div>
          )}
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Select({ label, value, options, onChange }) {
  return (
    <div>
      <label className="text-xs text-gray-600">{label}</label>
      <select
        className="border rounded-md px-2 py-1 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="p-3 bg-white rounded-lg border flex flex-col items-start">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-lg font-semibold mt-1">{value ?? "—"}</p>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <h3 className="text-gray-800 font-medium flex items-center gap-2 mt-2 mb-2">
      <Icon size={16} className="text-yellow-500" /> {title}
    </h3>
  );
}

/* ---------- PortraitCard (универсальная карточка под продукт) ---------- */

function PortraitCard({ data, product, fmt }) {
  // normalize some fields (data can differ by product)
  const base = data.baseMetrics || data.clients || {};
  const metrics = data.metrics || data.financial || data.loans || {};
  // branches may be array of {name,value}
  const branches = data.top5Branches || data.branches || [];
  // categories: for credits it's object (categories), for loyalty/cards it's array top5MccGroups
  const categoriesArray = data.top5MccGroups || data.top5MccGroups || null;
  const categoriesObj = data.categories || null;
  const behavior = data.behaviorMetrics || data.additionalMetrics || null;
  const isCredit = product === "Кредиты";
  const isLoyalty = product === "Лояльность";
  const isDeposit = product === "Депозиты";
  const isCard = product === "Карты";

  // Title suffix (tier/plan/loanType/cardType)
  const suffix = data.tier || data.plan || data.loanType || data.cardType || data.type || "";

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle>
          {data.product || product} {suffix ? `— ${suffix}` : ""}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Социально-демографические */}
        {Object.keys(base).length > 0 && (
          <div>
            <SectionTitle icon={Users} title="Социально-демографические" />
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Metric label="Клиентов" value={fmt(base.clientsCount || base.count)} />
              <Metric label="Средний возраст" value={base.avgAge ? `${fmt(base.avgAge)} лет` : "—"} />
              {(base.avgIncome || base.avgSalary || base.avgIncome === 0) && (
                <Metric label="Средняя ЗП" value={`${fmt(base.avgIncome || base.avgSalary)} ₸`} />
              )}
              {base.genderShare ? (
                <>
                  <Metric label="Мужчины" value={`${fmt(base.genderShare.male)}%`} />
                  <Metric label="Женщины" value={`${fmt(base.genderShare.female)}%`} />
                </>
              ) : base.gender ? (
                <>
                  <Metric label="Мужчины" value={`${fmt(base.gender.male)}%`} />
                  <Metric label="Женщины" value={`${fmt(base.gender.female)}%`} />
                </>
              ) : null}
              {base.marriedCount !== undefined && base.marriedCount !== null && (
                <Metric
                  label="Женатые/замужние"
                  value={`${fmt(base.marriedCount)} (${typeof base.marriedShare === "number" ? (base.marriedShare * 100).toFixed(1) + "%" : "—"})`}
                />
              )}
            </div>
          </div>
        )}

        {/* --- Лояльность: подробные финансовые метрики --- */}
        {isLoyalty && Object.keys(metrics).length > 0 && (
          <div>
            <SectionTitle icon={Coins} title="Финансовые показатели (Лояльность)" />
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.transactionsSum !== undefined && (
                <Metric label="Сумма транзакций" value={`${fmt(metrics.transactionsSum)} ₸`} />
              )}
              {metrics.transactionsCount !== undefined && (
                <Metric label="Кол-во транзакций" value={fmt(metrics.transactionsCount)} />
              )}
              {metrics.avgTransaction !== undefined && (
                <Metric label="Средний чек" value={`${fmt(metrics.avgTransaction)} ₸`} />
              )}
              {metrics.turnoverPerClient !== undefined && (
                <Metric label="Оборот на клиента" value={`${fmt(metrics.turnoverPerClient)} ₸`} />
              )}
              {metrics.transactionsPerClient !== undefined && (
                <Metric label="Транзакций на клиента" value={fmt(metrics.transactionsPerClient)} />
              )}
              {metrics.avgIncome !== undefined && (
                <Metric label="Средняя ЗП" value={`${fmt(metrics.avgIncome)} ₸`} />
              )}
            </div>
          </div>
        )}

        {/* --- Депозиты: аналогично лояльности (использует metrics и top5MccGroups) --- */}
        {isDeposit && Object.keys(metrics).length > 0 && (
          <div>
            <SectionTitle icon={Coins} title="Финансовые показатели (Депозиты)" />
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.transactionsSum !== undefined && (
                <Metric label="Сумма транзакций" value={`${fmt(metrics.transactionsSum)} ₸`} />
              )}
              {metrics.transactionsCount !== undefined && (
                <Metric label="Кол-во транзакций" value={fmt(metrics.transactionsCount)} />
              )}
              {metrics.avgTransaction !== undefined && (
                <Metric label="Средний чек" value={`${fmt(metrics.avgTransaction)} ₸`} />
              )}
            </div>
          </div>
        )}

        {/* --- Кредиты: кредитный портфель --- */}
        {isCredit && Object.keys(metrics).length > 0 && (
          <div>
            <SectionTitle icon={Coins} title="Кредитный портфель" />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {metrics.countAll !== undefined && <Metric label="Среднее кол-во займов" value={fmt(metrics.countAll)} />}
              {metrics.sumAllKzt !== undefined && <Metric label="Средний объем выданных займов" value={`${fmt(metrics.sumAllKzt)} ₸`} />}
              {metrics.countActive !== undefined && <Metric label="Активные займы" value={fmt(metrics.countActive)} />}
              {metrics.sumActiveKzt !== undefined && <Metric label="Средний срок займа" value={`${fmt(metrics.sumActiveKzt)} месяца`} />}
              {metrics.sumOdKzt !== undefined && <Metric label="ОД активных займов" value={`${fmt(metrics.sumOdKzt)} ₸`} />}
            </div>
          </div>
        )}

        {/* --- Карты: metrics + behaviorMetrics --- */}
        {isCard && (
          <>
            {Object.keys(metrics).length > 0 && (
              <div>
                <SectionTitle icon={Coins} title="Финансовые показатели (Карты)" />
                <div className="grid md:grid-cols-3 gap-4">
                  {metrics.transactionsSum !== undefined && <Metric label="Сумма транзакций" value={`${fmt(metrics.transactionsSum)} ₸`} />}
                  {metrics.transactionsCount !== undefined && <Metric label="Кол-во транзакций" value={fmt(metrics.transactionsCount)} />}
                  {metrics.avgTransaction !== undefined && <Metric label="Средний чек" value={`${fmt(metrics.avgTransaction)} ₸`} />}
                </div>
              </div>
            )}
            {behavior && (
              <div>
                <SectionTitle icon={CreditCard} title="Поведенческие метрики" />
                <div className="grid md:grid-cols-4 gap-4">
                  {behavior.activeBaseShare !== undefined && <Metric label="Доля в активной базе" value={behavior.activeBaseShare} />}
                  {behavior.onlineShare !== undefined && <Metric label="Онлайн-транзакции" value={behavior.onlineShare} />}
                  {behavior.foreignOpsShare !== undefined && <Metric label="Зарубежные операции" value={behavior.foreignOpsShare} />}
                  {behavior.avgBalance !== undefined && <Metric label="Средний остаток" value={`${fmt(behavior.avgBalance)} ₸`} />}
                </div>
              </div>
            )}
          </>
        )}

        {/* --- Топ-5 филиалов (универсально) --- */}
        {Array.isArray(branches) && branches.length > 0 && (
          <div>
            <SectionTitle icon={Scale} title="Топ-5 филиалов" />
            <ChartPie data={branches} />
          </div>
        )}

        {/* --- Категории / MCC:  */}
        {Array.isArray(categoriesArray) && categoriesArray.length > 0 && (
          <div>
            <SectionTitle icon={Brain} title={isCard ? "Топ-5 MCC групп" : "Категории расходов"} />
            <ChartBarWithArray data={categoriesArray} />
          </div>
        )}

        {categoriesObj && Object.keys(categoriesObj).length > 0 && (
          <div>
            <SectionTitle icon={Brain} title="Категории расходов" />
            <ChartBar data={categoriesObj} />
          </div>
        )}

        {/* Инсайты */}
        {data.insights && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700 italic">
            {data.insights}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------- Секции сравнения ---------- */

function ComparisonSection({ a, b, fmt }) {
  if (!a || !b) return <div className="text-sm text-gray-600">Нет данных для сравнения.</div>;

  // show a small set of comparable metrics; both a and b are aggregated records
  const aClients = a.baseMetrics?.clientsCount || a.clients?.count || "—";
  const bClients = b.baseMetrics?.clientsCount || b.clients?.count || "—";

  // try to extract avg income / avg transaction if available
  const aAvgIncome = a.baseMetrics?.avgIncome || a.metrics?.avgIncome || a.metrics?.avgIncome;
  const bAvgIncome = b.baseMetrics?.avgIncome || b.metrics?.avgIncome || b.metrics?.avgIncome;

  const aAvgTransaction = a.metrics?.avgTransaction || a.financial?.avgTransaction || a.metrics?.avgTransaction;
  const bAvgTransaction = b.metrics?.avgTransaction || b.financial?.avgTransaction || b.metrics?.avgTransaction;

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle>
          Сравнение: {a.product} {a.type || ""} vs {b.product} {b.type || ""}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-3">
          <Metric label="Клиентов (A)" value={fmt(aClients)} />
          <Metric label="Средняя ЗП (A)" value={aAvgIncome ? `${fmt(aAvgIncome)} ₸` : "—"} />
          <Metric label="Средний чек (A)" value={aAvgTransaction ? `${fmt(aAvgTransaction)} ₸` : "—"} />
          <Metric label="Клиентов (B)" value={fmt(bClients)} />
          <Metric label="Средняя ЗП (B)" value={bAvgIncome ? `${fmt(bAvgIncome)} ₸` : "—"} />
          <Metric label="Средний чек (B)" value={bAvgTransaction ? `${fmt(bAvgTransaction)} ₸` : "—"} />
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------- Диаграммы ---------- */

function ChartPie({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  // ensure objects have {name,value}
  const pieData = data.map((d) =>
    Array.isArray(d) ? { name: d[0], value: Number(d[1] || 0) } : { name: d.name || d[0], value: Number(d.value ?? d[1] ?? 0) }
  );
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          paddingAngle={3} // gap between slices
          label={({ name, value }) => `${name}: ${value.toLocaleString("ru-RU")}`}
          labelLine
        >
          {pieData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => (typeof v === "number" ? v.toLocaleString("ru-RU") : v)} />
      </PieChart>
    </ResponsiveContainer>
  );
}

function ChartBar({ data }) {
  if (!data || Object.keys(data).length === 0) return null;
  const barData = Object.entries(data)
    .map(([name, value]) => ({ name, value: Number(value || 0) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={barData} margin={{ top: 30, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-25} dy={10} />
        <YAxis />
        <Tooltip formatter={(v) => (typeof v === "number" ? v.toLocaleString("ru-RU") : v)} />
        <Legend />
        <Bar dataKey="value" fill="#5B8FF9">
          <LabelList dataKey="value" position="top" formatter={(v) => v.toLocaleString("ru-RU")} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// Для массивных top5MccGroups форм ([{name,value}, ...]) — отображаем bar
function ChartBarWithArray({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  const arr = data
    .map((d) => ({ name: d.name || d[0], value: Number(d.value ?? d[1] ?? 0) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={arr} margin={{ top: 30, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-25} dy={10} />
        <YAxis />
        <Tooltip formatter={(v) => (typeof v === "number" ? v.toLocaleString("ru-RU") : v)} />
        <Legend />
        <Bar dataKey="value" fill="#61DDAA">
          <LabelList dataKey="value" position="top" formatter={(v) => v.toLocaleString("ru-RU")} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
