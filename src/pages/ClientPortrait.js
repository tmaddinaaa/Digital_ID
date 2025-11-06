"use client";

import React, { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Filter,
  RefreshCw,
  Scale,
  Users,
  Coins,
  Brain,
  CreditCard,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { clientPortraitData } from "../data/clientPortraitData";

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
  const [filters, setFilters] = useState({
    city: "Все города",
    segment: "Все сегменты",
    device: "Все устройства",
    product: "Лояльность",
    compareProduct: "",
    activityStatus: "Все статусы",
    gender: "Все",
    age: "Все возраста",
  });

  // Все продукты
  const products = useMemo(
    () => Array.from(new Set(clientPortraitData.map((p) => p.product))).sort(),
    []
  );

  // Доступные продукты для сравнения
  const compareOptions = useMemo(() => {
    const base = products.filter((p) => p !== filters.product);
    if (!base.includes("Лояльность")) base.unshift("Лояльность");
    return ["", ...base];
  }, [products, filters.product]);

  // Записи по выбранному продукту
  const productRecords = useMemo(
    () => clientPortraitData.filter((p) => p.product === filters.product),
    [filters.product]
  );

  // Записи для сравнения
  const compareRecords = useMemo(
    () =>
      filters.compareProduct
        ? clientPortraitData.filter((p) => p.product === filters.compareProduct)
        : [],
    [filters.compareProduct]
  );

  // Агрегирование для суммарной "лояльности"
  function aggregateRecords(records) {
    if (!records || records.length === 0) return null;
    if (records.length === 1) return records[0];

    const agg = {
      product: records[0].product,
      type: "Aggregate",
      baseMetrics: {
        clientsCount: 0,
        avgAge: null,
        genderShare: { male: 0, female: 0 },
        avgIncome: null,
      },
      financial: {
        transactionsSum: 0,
        transactionsCount: 0,
        turnoverPerClient: 0,
        avgTransaction: 0,
      },
      top5Branches: [],
      top5MccGroups: [],
    };

    let ageWeightedSum = 0;
    let incomeWeightedSum = 0;
    let maleWeighted = 0;
    let femaleWeighted = 0;

    for (const r of records) {
      const clients = Number(r.baseMetrics?.clientsCount || 0);
      agg.baseMetrics.clientsCount += clients;
      ageWeightedSum += (r.baseMetrics?.avgAge || 0) * clients;
      incomeWeightedSum += (r.baseMetrics?.avgIncome || 0) * clients;
      maleWeighted += (r.baseMetrics?.genderShare?.male || 0) * clients;
      femaleWeighted += (r.baseMetrics?.genderShare?.female || 0) * clients;
      agg.financial.transactionsSum += Number(r.financial?.transactionsSum || 0);
      agg.financial.transactionsCount += Number(r.financial?.transactionsCount || 0);
    }

    const total = agg.baseMetrics.clientsCount || 1;
    agg.baseMetrics.avgAge = +(ageWeightedSum / total).toFixed(1);
    agg.baseMetrics.avgIncome = +(incomeWeightedSum / total).toFixed(0);
    agg.baseMetrics.genderShare.male = +(maleWeighted / total).toFixed(2);
    agg.baseMetrics.genderShare.female = +(femaleWeighted / total).toFixed(2);
    agg.financial.turnoverPerClient = +(agg.financial.transactionsSum / total).toFixed(2);
    agg.financial.avgTransaction =
      agg.financial.transactionsCount > 0
        ? +(agg.financial.transactionsSum / agg.financial.transactionsCount).toFixed(2)
        : 0;

    return agg;
  }

  const fmt = (v) =>
    v === null || v === undefined || v === "—"
      ? "—"
      : typeof v === "number"
      ? v.toLocaleString()
      : String(v);

  const isMultiType = ["Лояльность", "Депозиты", "Кредиты", "Карты"].includes(filters.product);
  const isCompare = Boolean(filters.compareProduct);

  const left = isMultiType ? aggregateRecords(productRecords) : productRecords[0];
  const right =
    isCompare && filters.compareProduct
      ? aggregateRecords(compareRecords)
      : null;

  return (
    <div className="p-6 space-y-6 bg-gray-50">
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
      {isCompare ? (
        right ? (
          <ComparisonSection a={left} b={right} fmt={fmt} />
        ) : (
          <div className="text-sm text-gray-600">Выберите продукт для сравнения.</div>
        )
      ) : isMultiType ? (
        <div className="space-y-6">
          {productRecords.map((r) => (
            <PortraitCard key={r.type} data={r} fmt={fmt} />
          ))}
        </div>
      ) : (
        <PortraitCard data={left} fmt={fmt} />
      )}
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
      <p className="text-lg font-semibold mt-1">{value}</p>
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

/* Портретная карточка продукта */
function PortraitCard({ data, fmt }) {
  const base = data.baseMetrics || {};
  const fin = data.financial || {};
  const extra = data.additionalMetrics || {};

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle>
          {data.product} {data.type ? `— ${data.type}` : ""}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Социально-демографические */}
        <div>
          <SectionTitle icon={Users} title="Социально-демографические" />
          <div className="grid md:grid-cols-3 gap-4">
            <Metric label="Клиентов" value={fmt(base.clientsCount)} />
            <Metric label="Средний возраст" value={base.avgAge ? `${base.avgAge} лет` : "—"} />
            <Metric label="Средняя ЗП" value={base.avgIncome ? `${fmt(base.avgIncome)} ₸` : "—"} />
            <Metric label="Мужчины" value={base.genderShare?.male ? `${base.genderShare.male}%` : "—"} />
            <Metric label="Женщины" value={base.genderShare?.female ? `${base.genderShare.female}%` : "—"} />
          </div>
        </div>

        {/* Финансовые показатели */}
        <div>
          <SectionTitle icon={Coins} title="Финансовые показатели" />
          <div className="grid md:grid-cols-3 gap-4">
            <Metric label="Сумма транзакций" value={fin.transactionsSum ? `${fmt(fin.transactionsSum)} ₸` : "—"} />
            <Metric label="Кол-во транзакций" value={fmt(fin.transactionsCount)} />
            <Metric label="Средний чек" value={fin.avgTransaction ? `${fmt(fin.avgTransaction)} ₸` : "—"} />
          </div>
        </div>

        {/* Дополнительные метрики (для карт) */}
        {Object.keys(extra).length > 0 && (
          <div>
            <SectionTitle icon={CreditCard} title="Дополнительные метрики" />
            <div className="grid md:grid-cols-4 gap-4">
              <Metric label="Доля в активной базе" value={extra.activeBaseShare || "—"} />
              <Metric label="Онлайн-транзакции" value={extra.onlineShare || "—"} />
              <Metric label="Зарубежные операции" value={extra.foreignOpsShare || "—"} />
              <Metric label="Средний остаток" value={extra.avgBalance ? `${fmt(extra.avgBalance)} ₸` : "—"} />
            </div>
          </div>
        )}

        {/* Графики: филиалы + MCC */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <SectionTitle icon={Scale} title="Топ-5 филиалов" />
            {data.top5Branches?.length ? (
              <ChartPie data={data.top5Branches} />
            ) : (
              <p className="text-sm text-gray-500">Нет данных.</p>
            )}
          </div>
          <div>
            <SectionTitle icon={Brain} title="Топ-5 MCC групп" />
            {data.top5MccGroups?.length ? (
              <ChartPie data={data.top5MccGroups} />
            ) : (
              <p className="text-sm text-gray-500">Нет данных.</p>
            )}
          </div>
        </div>

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

/* Диаграмма Pie */
function ChartPie({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => value?.toLocaleString?.() ?? value} />
      </PieChart>
    </ResponsiveContainer>
  );
}

/* Секция сравнения */
function ComparisonSection({ a, b, fmt }) {
  if (!a || !b) return <div className="text-sm text-gray-600">Нет данных для сравнения.</div>;

  const cmp = (aVal, bVal, higherIsBetter = true) => {
    const aNum = Number(aVal || 0);
    const bNum = Number(bVal || 0);
    if (aNum === bNum) return "text-gray-500";
    const better = higherIsBetter ? aNum > bNum : aNum < bNum;
    return better ? "text-green-600 font-semibold" : "text-gray-400";
  };

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle>
          Сравнение: {a.product} {a.type || ""} vs {b.product} {b.type || ""}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-3">
          <Metric label="Клиентов" value={fmt(a.baseMetrics.clientsCount)} />
          <Metric label="Средняя ЗП" value={fmt(a.baseMetrics.avgIncome)} />
          <Metric label="Средний чек" value={fmt(a.financial.avgTransaction)} />
        </div>
      </CardContent>
    </Card>
  );
}
