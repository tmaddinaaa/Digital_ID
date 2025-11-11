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
  LineChart,
  Line,
  CartesianAxis,
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
  Calendar,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

import { loyaltyData } from "../data/loyaltyData";
import { depositsData } from "../data/depositsData";
import { creditsData } from "../data/creditsData";
import { cardsData } from "../data/cardsData";

/**
 * Полный файл ClientPortrait.js
 * Содержит:
 * - разделение по типам продуктов (каждый тип — отдельная карточка)
 * - плашку с датой отчёта (редактируемую)
 * - диапазоны дат над графиками
 * - динамическое перекрёстное отображение клиентов между продуктами
 * - все секции: соцдем, финпок-ки, поведение, графики, инсайты, ComparisonSection
 *
 * Примечание: чтобы фильтрация по датам реально работала, нужны даты в исходных данных.
 * Сейчас реализованы UI-элементы выбора дат; реальная фильтрация — опциональная доработка.
 */

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
  // Отчетная дата (плашка)
  const [reportDate, setReportDate] = useState("2025-11-01");

  // Диапазоны дат для графиков
  const [newClientsRange, setNewClientsRange] = useState({ start: "", end: "" });
  const [branchRange, setBranchRange] = useState({ start: "", end: "" });
  const [mccRange, setMccRange] = useState({ start: "", end: "" });
  const [categoryRange, setCategoryRange] = useState({ start: "", end: "" });

  // Фильтры
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

  // Карта данных по продуктам — используй свои данные
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

  // records выбранного продукта (может быть массив типов)
  const productRecords = useMemo(() => dataMap[filters.product] || [], [dataMap, filters.product]);

  // records для сравнения
  const compareRecords = useMemo(
    () => (filters.compareProduct ? dataMap[filters.compareProduct] || [] : []),
    [dataMap, filters.compareProduct]
  );

  // Агрегатор — если нужно собрать несколько записей в единый агрегат
  function aggregateRecords(records, productName) {
    if (!records || records.length === 0) return null;

    // Если одиночная запись — стандартизируем и вернём
    if (records.length === 1) {
      const r = records[0];
      const base = r.baseMetrics || r.clients || {};
      return {
        ...r,
        product: r.product || productName,
        baseMetrics: {
          clientsCount: Number(base.clientsCount ?? base.count ?? 0),
          avgAge: base.avgAge ?? base.avg_age ?? null,
          avgIncome: base.avgIncome ?? base.avg_income ?? base.avgSalary ?? null,
          genderShare: base.genderShare ?? base.gender ?? null,
          clientsWithCredits: Number(base.clientsWithCredits ?? base.clients_with_credits ?? 0),
          clientsWithDeposits: Number(base.clientsWithDeposits ?? base.clients_with_deposits ?? 0),
          clientsWithCards: Number(base.clientsWithCards ?? base.clients_with_cards ?? 0),
        },
        metrics: r.metrics || r.financial || r.loans || {},
        top5Branches: r.top5Branches || r.branches || [],
        top5MccGroups: r.top5MccGroups || r.topMcc || [],
        categories: r.categories || {},
        insights: r.insights || "",
      };
    }

    // Агрегируем множество записей
    const agg = {
      product: productName,
      baseMetrics: {
        clientsCount: 0,
        avgAge: 0,
        avgIncome: 0,
        genderShare: { male: 0, female: 0 },
        clientsWithCredits: 0,
        clientsWithDeposits: 0,
        clientsWithCards: 0,
      },
      metrics: {},
      top5Branches: [],
      top5MccGroups: [],
      categories: {},
      insights: "",
    };

    let ageWeighted = 0;
    let incomeWeighted = 0;
    let maleWeighted = 0;
    let femaleWeighted = 0;

    for (const r of records) {
      const b = r.baseMetrics || r.clients || {};
      const clients = Number(b.clientsCount ?? b.count ?? 0);

      agg.baseMetrics.clientsCount += clients;

      // cross metrics
      agg.baseMetrics.clientsWithCredits += Number(
        b.clientsWithCredits ?? b.clients_with_credits ?? r.clientsWithCredits ?? r.clients_with_credits ?? 0
      );
      agg.baseMetrics.clientsWithDeposits += Number(
        b.clientsWithDeposits ?? b.clients_with_deposits ?? r.clientsWithDeposits ?? r.clients_with_deposits ?? 0
      );
      agg.baseMetrics.clientsWithCards += Number(
        b.clientsWithCards ?? b.clients_with_cards ?? r.clientsWithCards ?? r.clients_with_cards ?? 0
      );

      // weighted averages
      const ageVal = Number(b.avgAge ?? b.avg_age ?? r.avgAge ?? 0);
      ageWeighted += ageVal * clients;

      const incomeVal = Number(b.avgIncome ?? b.avg_income ?? b.avgSalary ?? r.avgIncome ?? 0);
      incomeWeighted += incomeVal * clients;

      if (b.genderShare) {
        maleWeighted += Number(b.genderShare.male ?? 0) * clients;
        femaleWeighted += Number(b.genderShare.female ?? 0) * clients;
      } else if (b.gender) {
        maleWeighted += Number(b.gender.male ?? 0) * clients;
        femaleWeighted += Number(b.gender.female ?? 0) * clients;
      }

      // numeric metrics
      const fin = r.metrics || r.financial || r.loans || {};
      for (const [k, v] of Object.entries(fin || {})) {
        const n = Number(v);
        if (!Number.isNaN(n)) agg.metrics[k] = (agg.metrics[k] || 0) + n;
      }

      // branches and mcc arrays
      if (Array.isArray(r.top5Branches)) agg.top5Branches.push(...r.top5Branches);
      if (Array.isArray(r.branches)) agg.top5Branches.push(...r.branches);
      if (Array.isArray(r.top5MccGroups)) agg.top5MccGroups.push(...r.top5MccGroups);
      if (Array.isArray(r.topMcc)) agg.top5MccGroups.push(...r.topMcc);

      // categories object
      if (r.categories && typeof r.categories === "object") {
        for (const [k, v] of Object.entries(r.categories)) {
          agg.categories[k] = (agg.categories[k] || 0) + Number(v || 0);
        }
      }

      if (r.insights) {
        agg.insights = (agg.insights ? agg.insights + " | " : "") + r.insights;
      }
    }

    const totalClients = agg.baseMetrics.clientsCount || 1;
    agg.baseMetrics.avgAge = ageWeighted ? +(ageWeighted / totalClients).toFixed(1) : null;
    agg.baseMetrics.avgIncome = incomeWeighted ? Math.round(incomeWeighted / totalClients) : null;
    agg.baseMetrics.genderShare.male = +(maleWeighted / totalClients).toFixed(2);
    agg.baseMetrics.genderShare.female = +(femaleWeighted / totalClients).toFixed(2);

    // reduce branches to top5
    const branchMap = {};
    agg.top5Branches.forEach((b) => {
      if (!b) return;
      const name = b.name ?? b[0] ?? "—";
      const value = Number(b.value ?? b[1] ?? 0);
      branchMap[name] = (branchMap[name] || 0) + value;
    });
    agg.top5Branches = Object.entries(branchMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    // reduce mcc groups
    const mccMap = {};
    agg.top5MccGroups.forEach((m) => {
      if (!m) return;
      const name = m.name ?? m[0] ?? "—";
      const value = Number(m.value ?? m[1] ?? 0);
      mccMap[name] = (mccMap[name] || 0) + value;
    });
    agg.top5MccGroups = Object.entries(mccMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);

    return agg;
  }

  // форматирование
  const fmt = (v) =>
    v === null || v === undefined || v === "—"
      ? "—"
      : typeof v === "number"
      ? v.toLocaleString("ru-RU")
      : String(v);

  // агрегаты
  const left = useMemo(() => aggregateRecords(productRecords, filters.product), [productRecords, filters.product]);
  const right = useMemo(() => (filters.compareProduct ? aggregateRecords(compareRecords, filters.compareProduct) : null), [compareRecords, filters.compareProduct]);

  const compareOptions = useMemo(() => ["", ...products.filter((p) => p !== filters.product)], [products, filters.product]);

  // определить, есть ли подтипы (типы продукта)
  const hasSubtypes = ["Кредиты", "Депозиты", "Карты", "Лояльность"].includes(filters.product);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <Filter className="text-yellow-500" /> Портрет клиента по продукту
        </h1>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <RefreshCw size={14} className="text-yellow-500" />
          Обновлено: {new Date().toLocaleTimeString("ru-RU")}
        </div>
      </div>

      {/* filters */}
      <Card className="border-gray-200 shadow-sm p-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Select label="🏙 Город" value={filters.city}
            options={["Все города", "Алматы", "Астана", "Шымкент"]}
            onChange={(v) => setFilters((f) => ({ ...f, city: v }))} />
          <Select label="📊 Сегмент" value={filters.segment}
            options={[
              "Все сегменты",
    "Ценные клиенты",
    "Кредитные клиенты",
    "Депозитные клиенты",
    "Смешанный доход",
    "Пассивные, но прибыльные",
    "Низкая активность и доход",
    "Пассивные низкодоходные",
    "Активные, но малодоходные",
    "Средний доход, пассивные",
    "Средний доход, активные",
    "Высокий доход",
    "Прочие источники дохода",
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

      {/* content: comparison or list of cards / aggregated card */}
      <div className="space-y-6">
        {filters.compareProduct ? (
          left && right ? (
            <ComparisonSection a={left} b={right} fmt={fmt} />
          ) : (
            <div className="text-sm text-gray-600">Выберите корректные продукты для сравнения.</div>
          )
        ) : hasSubtypes ? (
          productRecords.length > 0 ? (
            <div className="space-y-6">
              {productRecords.map((r, idx) => (
                <PortraitCard
                  key={idx}
                  data={r}
                  product={filters.product}
                  fmt={fmt}
                  reportDate={reportDate}
                  setReportDate={setReportDate}
                  branchRange={branchRange}
                  setBranchRange={setBranchRange}
                  mccRange={mccRange}
                  setMccRange={setMccRange}
                  categoryRange={categoryRange}
                  setCategoryRange={setCategoryRange}
                />
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-600">Нет данных для выбранного продукта.</div>
          )
        ) : (
          left && (
            <PortraitCard
              data={left}
              product={filters.product}
              fmt={fmt}
              reportDate={reportDate}
              setReportDate={setReportDate}
              branchRange={branchRange}
              setBranchRange={setBranchRange}
              mccRange={mccRange}
              setMccRange={setMccRange}
              categoryRange={categoryRange}
              setCategoryRange={setCategoryRange}
            />
          )
        )}
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

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

function SectionTitle({ icon: Icon, title, range, setRange }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-gray-800 font-medium flex items-center gap-2">
        <Icon size={16} className="text-yellow-500" /> {title}
      </h3>
      {setRange && (
        <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1 text-gray-700">
          <Calendar size={14} className="text-yellow-600" />
          <input
            type="date"
            value={range.start}
            onChange={(e) => setRange({ ...range, start: e.target.value })}
            className="bg-transparent outline-none text-gray-800 cursor-pointer"
          />
          <span>–</span>
          <input
            type="date"
            value={range.end}
            onChange={(e) => setRange({ ...range, end: e.target.value })}
            className="bg-transparent outline-none text-gray-800 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

/* ---------------- PortraitCard ---------------- */

function PortraitCard({
  data,
  product,
  fmt,
  reportDate,
  setReportDate,
  branchRange,
  setBranchRange,
  mccRange,
  setMccRange,
  categoryRange,
  setCategoryRange,
}) {
  // normalize
  const base = data.baseMetrics || data.clients || {};
  const metrics = data.metrics || data.financial || data.loans || {};
  const branches = data.top5Branches || data.branches || [];
  const categoriesArray = data.top5MccGroups || data.topMcc || [];
  const categoriesObj = data.categories || null;
  const behavior = data.behaviorMetrics || data.additionalMetrics || null;

  const suffix = data.tier || data.plan || data.loanType || data.cardType || data.type || "";

  // prepare cross metrics for display depending on product
  const cross = getCrossMetricsForProduct(product, base);

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>
          {data.product || product} {suffix ? `— ${suffix}` : ""}
        </CardTitle>

        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 shadow-sm">
          <Calendar size={15} className="text-yellow-600" />
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
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Social & Demographic */}
        {Object.keys(base).length > 0 && (
          <div>
            <SectionTitle icon={Users} title="Социально-демографические" />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Metric label="Клиентов" value={fmt(base.clientsCount ?? base.count)} />
              {cross.map((c) => (
                <Metric key={c.label} label={c.label} value={fmt(c.value)} />
              ))}
              <Metric label="Средний возраст" value={base.avgAge ? `${fmt(base.avgAge)} лет` : "—"} />
              {(base.avgIncome || base.avgSalary || base.avg_income) && (
                <Metric label="Средняя ЗП" value={`${fmt(base.avgIncome ?? base.avgSalary ?? base.avg_income)} ₸`} />
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
            </div>
          </div>
        )}

        {/* Financial / product-specific blocks */}
        {product === "Лояльность" && Object.keys(metrics).length > 0 && (
          <div>
            <SectionTitle icon={Coins} title="Финансовые показатели (Лояльность)" />
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.transactionsSum !== undefined && <Metric label="Сумма транзакций" value={`${fmt(metrics.transactionsSum)} ₸`} />}
              {metrics.transactionsCount !== undefined && <Metric label="Кол-во транзакций" value={fmt(metrics.transactionsCount)} />}
              {metrics.avgTransaction !== undefined && <Metric label="Средний чек" value={`${fmt(metrics.avgTransaction)} ₸`} />}
              {metrics.turnoverPerClient !== undefined && <Metric label="Оборот на клиента" value={`${fmt(metrics.turnoverPerClient)} ₸`} />}
              {metrics.transactionsPerClient !== undefined && <Metric label="Транзакций на клиента" value={fmt(metrics.transactionsPerClient)} />}
              {metrics.avgIncome !== undefined && <Metric label="Средняя ЗП" value={`${fmt(metrics.avgIncome)} ₸`} />}
            </div>
          </div>
        )}

        {product === "Депозиты" && Object.keys(metrics).length > 0 && (
          <div>
            <SectionTitle icon={Coins} title="Финансовые показатели (Депозиты)" />
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.transactionsSum !== undefined && <Metric label="Сумма транзакций" value={`${fmt(metrics.transactionsSum)} ₸`} />}
              {metrics.transactionsCount !== undefined && <Metric label="Кол-во транзакций" value={fmt(metrics.transactionsCount)} />}
              {metrics.avgTransaction !== undefined && <Metric label="Средний чек" value={`${fmt(metrics.avgTransaction)} ₸`} />}
            </div>
          </div>
        )}

        {product === "Кредиты" && Object.keys(metrics).length > 0 && (
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

        {product === "Карты" && (
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

        {/* Branches */}
        {Array.isArray(branches) && branches.length > 0 && (
          <div>
            <SectionTitle icon={Scale} title="Топ-5 филиалов" range={branchRange} setRange={setBranchRange} />
            <ChartPie data={branches} />
          </div>
        )}

        {/* MCC groups */}
        {Array.isArray(categoriesArray) && categoriesArray.length > 0 && (
          <div>
            <SectionTitle icon={Brain} title="Топ-5 MCC групп" range={mccRange} setRange={setMccRange} />
            <ChartBarWithArray data={categoriesArray} />
          </div>
        )}

        {/* Categories object */}
        {categoriesObj && Object.keys(categoriesObj).length > 0 && (
          <div>
            <SectionTitle icon={BarChart3} title="Категории расходов" range={categoryRange} setRange={setCategoryRange} />
            <ChartBar data={categoriesObj} />
          </div>
        )}

        {/* Insights */}
        {data.insights && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-700 italic">
            {data.insights}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------------- Cross metrics helper ---------------- */

function getCrossMetricsForProduct(product, base) {
  const withCredits = Number(base.clientsWithCredits ?? base.clients_with_credits ?? base.clientsWithCredit ?? 0);
  const withDeposits = Number(base.clientsWithDeposits ?? base.clients_with_deposits ?? base.clientsWithDeposit ?? 0);
  const withCards = Number(base.clientsWithCards ?? base.clients_with_cards ?? base.clientsWithCard ?? 0);

  if (product === "Кредиты") {
    return [
      { label: "Из них клиенты с депозитом", value: withDeposits },
      { label: "Из них клиенты с картой", value: withCards },
    ];
  } else if (product === "Депозиты") {
    return [
      { label: "Из них клиенты с кредитом", value: withCredits },
      { label: "Из них клиенты с картой", value: withCards },
    ];
  } else if (product === "Карты") {
    return [
      { label: "Из них клиенты с кредитом", value: withCredits },
      { label: "Из них клиенты с депозитом", value: withDeposits },
    ];
  } else {
    // Лояльность и другие
    return [
      { label: "Из них клиенты с кредитом", value: "coming soon" },
      { label: "Из них клиенты с депозитом", value: "coming soon" },
    ];
  }
}

/* ---------------- ComparisonSection ---------------- */

/* ---------------- ComparisonSection ---------------- */

function ComparisonSection({ a, b, fmt }) {
  if (!a || !b) return <div className="text-sm text-gray-600">Нет данных для сравнения.</div>;

  // Основные метрики для сравнения
  const metrics = [
    {
      key: "clientsCount",
      label: "Количество клиентов",
      a: a.baseMetrics?.clientsCount ?? 0,
      b: b.baseMetrics?.clientsCount ?? 0,
    },
    {
      key: "avgAge",
      label: "Средний возраст",
      a: a.baseMetrics?.avgAge ?? 0,
      b: b.baseMetrics?.avgAge ?? 0,
    },
    {
      key: "avgIncome",
      label: "Средняя ЗП",
      a: a.baseMetrics?.avgIncome ?? 0,
      b: b.baseMetrics?.avgIncome ?? 0,
    },
    {
      key: "clientsWithCredits",
      label: "Клиенты с кредитами",
      a: a.baseMetrics?.clientsWithCredits ?? 0,
      b: b.baseMetrics?.clientsWithCredits ?? 0,
    },
    {
      key: "clientsWithDeposits",
      label: "Клиенты с депозитами",
      a: a.baseMetrics?.clientsWithDeposits ?? 0,
      b: b.baseMetrics?.clientsWithDeposits ?? 0,
    },
    {
      key: "clientsWithCards",
      label: "Клиенты с картами",
      a: a.baseMetrics?.clientsWithCards ?? 0,
      b: b.baseMetrics?.clientsWithCards ?? 0,
    },
  ];

  // Подготовка данных для графика
  const chartData = metrics
    .filter((m) => typeof m.a === "number" && typeof m.b === "number")
    .map((m) => ({
      name: m.label,
      [a.product]: m.a,
      [b.product]: m.b,
    }));

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="text-yellow-500" />
          Сравнение продуктов: <span className="font-semibold">{a.product}</span> vs{" "}
          <span className="font-semibold">{b.product}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Таблица с показателями */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((m) => {
            const diff = (m.a ?? 0) - (m.b ?? 0);
            const diffLabel =
              diff === 0
                ? "—"
                : diff > 0
                ? `+${fmt(diff)}`
                : `−${fmt(Math.abs(diff))}`;
            return (
              <div
                key={m.key}
                className="p-3 bg-white border rounded-lg flex flex-col items-start justify-between shadow-sm"
              >
                <p className="text-xs text-gray-500">{m.label}</p>
                <p className="text-sm font-semibold mt-1 text-gray-800">
                  {fmt(m.a)} vs {fmt(m.b)}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    diff > 0
                      ? "text-green-600"
                      : diff < 0
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  Разница: {diffLabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Визуальное сравнение */}
        <div className="pt-4">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={chartData}
              margin={{ top: 30, right: 30, left: 30, bottom: 60 }}
              barCategoryGap="25%"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#444" }}
                interval={0}
                height={80}
              />
              <YAxis tick={{ fontSize: 11, fill: "#555" }} />
              <Tooltip formatter={(v) => fmt(v)} />
              <Legend verticalAlign="top" align="center" height={36} />
              <Bar dataKey={a.product} fill="#5B8FF9" radius={[6, 6, 0, 0]} />
              <Bar dataKey={b.product} fill="#F6BD16" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------------- Charts ---------------- */

function ChartPie({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;
  const pieData = data.map((d) =>
    Array.isArray(d) ? { name: d[0], value: Number(d[1] || 0) } : { name: d.name || d[0] || "—", value: Number(d.value ?? d[1] ?? 0) }
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
          paddingAngle={3}
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

  const CustomizedTick = ({ x, y, payload }) => {
    const words = String(payload.value).split(" ");
    return (
      <g transform={`translate(${x},${y + 8})`}>
        {words.map((word, index) => (
          <text key={index} x={0} y={index * 12} textAnchor="middle" fill="#444" fontSize={11}>
            {word}
          </text>
        ))}
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={420}>
      <BarChart data={barData} margin={{ top: 30, right: 30, left: 30, bottom: 90 }} barCategoryGap="25%">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} height={100} tick={<CustomizedTick />} />
        <YAxis tick={{ fontSize: 11, fill: "#555" }} width={90} />
        <Legend verticalAlign="top" align="center" iconType="square" height={30} />
        <Tooltip formatter={(v) => (typeof v === "number" ? v.toLocaleString("ru-RU") : v)} />
        <Bar dataKey="value" fill="#5B8FF9" radius={[6, 6, 0, 0]} maxBarSize={55}>
          <LabelList dataKey="value" position="top" fontSize={11} fill="#333" formatter={(v) => v.toLocaleString("ru-RU")} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function ChartBarWithArray({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  const arr = data
    .map((d) => ({ name: d.name || d[0] || "—", value: Number(d.value ?? d[1] ?? 0) }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  const CustomizedTick = ({ x, y, payload }) => {
    const words = String(payload.value).split(" ");
    return (
      <g transform={`translate(${x},${y + 8})`}>
        {words.map((word, i) => (
          <text key={i} x={0} y={i * 12} textAnchor="middle" fill="#444" fontSize={11}>
            {word}
          </text>
        ))}
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={420}>
      <BarChart data={arr} margin={{ top: 40, right: 30, left: 30, bottom: 60 }} barCategoryGap="30%">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={0} height={100} tick={<CustomizedTick />} />
        <YAxis tick={{ fontSize: 11, fill: "#555" }} width={90} />
        <Legend verticalAlign="top" align="center" iconType="square" height={30} />
        <Tooltip formatter={(v) => (typeof v === "number" ? v.toLocaleString("ru-RU") : v)} />
        <Bar dataKey="value" fill="#61DDAA" radius={[6, 6, 0, 0]} maxBarSize={60}>
          <LabelList dataKey="value" position="top" fontSize={11} fill="#333" formatter={(v) => v.toLocaleString("ru-RU")} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
