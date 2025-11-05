"use client";

import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Filter,
  RefreshCw,
  Scale,
  ShoppingBag,
  Globe,
  Users,
  Coins,
  Smartphone,
  Brain,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { clientPortraitData } from "../data/clientPortraitData";

const COLORS = ["#FFB800", "#2563eb", "#7EA8FF", "#34D399", "#E11D48"];

export default function ClientPortrait() {
  const [filters, setFilters] = useState({
    city: "Все города",
    segment: "Все сегменты",
    device: "Все устройства",
    product: "Депозиты",
    compareProduct: "",
    activityStatus: "Все статусы",
    gender: "Все",
    age: "Все возраста",
  });

  const [portraitData, setPortraitData] = useState(clientPortraitData);

  useEffect(() => {
    const scaleFactor =
      filters.segment === "Премиум"
        ? 1.15
        : filters.segment === "Массовый"
        ? 0.9
        : 1;

    const adjusted = clientPortraitData.map((p) => ({
      ...p,
      financial: {
        ...p.financial,
        balance: Math.round(p.financial.balance * scaleFactor),
        incomeFromClient: Math.round(p.financial.incomeFromClient * scaleFactor),
      },
      ml: {
        ...p.ml,
        churnProbability: +(p.ml.churnProbability * (2 - scaleFactor)).toFixed(2),
      },
    }));

    setPortraitData(adjusted);
  }, [filters]);

  const current = portraitData.find((p) => p.product === filters.product);
  const compare = filters.compareProduct
    ? portraitData.find((p) => p.product === filters.compareProduct)
    : null;

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <Filter className="text-yellow-500" /> Портрет клиента по продукту
        </h1>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <RefreshCw size={14} className="text-yellow-500" />
          Обновлено: {new Date().toLocaleTimeString("ru-RU")}
        </div>
      </div>

      {/* Фильтры */}
      <Card className="border-gray-200 shadow-sm p-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Select label="🏙 Город" value={filters.city} options={["Все города", "Алматы", "Астана", "Шымкент"]} onChange={(v) => setFilters((f) => ({ ...f, city: v }))} />
          <Select label="📊 Сегмент" value={filters.segment} options={["Все сегменты", "Премиум", "Массовый", "Семейный"]} onChange={(v) => setFilters((f) => ({ ...f, segment: v }))} />
          <Select label="📱 Устройство" value={filters.device} options={["Все устройства", "iOS", "Android", "Web"]} onChange={(v) => setFilters((f) => ({ ...f, device: v }))} />
          <Select label="💳 Продукт" value={filters.product} options={["Депозиты", "Кредиты", "Карты", "Страховка"]} onChange={(v) => setFilters((f) => ({ ...f, product: v }))} />
          <Select label="⚖️ Сравнить с" value={filters.compareProduct} options={["", "Депозиты", "Кредиты", "Карты", "Страховка"]} onChange={(v) => setFilters((f) => ({ ...f, compareProduct: v }))} />
          <Select label="⚡ Активность" value={filters.activityStatus} options={["Все статусы", "Активный", "Неактивный"]} onChange={(v) => setFilters((f) => ({ ...f, activityStatus: v }))} />
          <Select label="🚻 Пол" value={filters.gender} options={["Все", "Мужчины", "Женщины"]} onChange={(v) => setFilters((f) => ({ ...f, gender: v }))} />
          <Select label="🎂 Возраст" value={filters.age} options={["Все возраста", "18–25", "26–35", "36–45", "46–60", "60+"]} onChange={(v) => setFilters((f) => ({ ...f, age: v }))} />
        </div>
      </Card>

      {/* Основной контент */}
      {!compare && current && <PortraitSection data={current} />}
      {compare && <ComparisonSection a={current} b={compare} />}
    </div>
  );
}

/* ---------------- Компоненты ---------------- */

function Select({ label, value, options, onChange }) {
  return (
    <div>
      <label className="text-xs text-gray-600">{label}</label>
      <select className="border rounded-md px-2 py-1 w-full" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Metric({ label, value, icon: Icon }) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg border flex flex-col items-start">
      <p className="text-xs text-gray-500 flex items-center gap-1">
        {Icon && <Icon size={12} className="text-yellow-500" />} {label}
      </p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

/* --- Основной портрет --- */
function PortraitSection({ data }) {
  return (
    <Card className="p-6 shadow-sm">
      <CardHeader>
        <CardTitle>{data.product}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Соц-демо */}
        <SectionTitle icon={Users} title="Социально-демографические" />
        <Grid>
          <Metric label="Средний возраст" value={`${data.baseMetrics.avgAge} лет`} />
          <Metric label="Мужчины" value={`${data.baseMetrics.genderShare.male}%`} />
          <Metric label="Женщины" value={`${data.baseMetrics.genderShare.female}%`} />
          <Metric label="Доход" value={`${data.baseMetrics.avgIncome.toLocaleString()} ₸`} />
          <Metric label="Образование" value={data.baseMetrics.education} />
          <Metric label="Семейное положение" value={data.baseMetrics.maritalStatus} />
        </Grid>

        {/* Финансы */}
        <SectionTitle icon={Coins} title="Финансовое поведение" />
        <Grid>
          <Metric label="Средний баланс" value={`${data.financial.balance.toLocaleString()} ₸`} />
          <Metric label="Доход банку" value={`${data.financial.incomeFromClient.toLocaleString()} ₸`} />
          <Metric label="Доля продукта" value={`${data.financial.productShare}%`} />
        </Grid>

        {/* Цифровое */}
        <SectionTitle icon={Smartphone} title="Цифровое поведение" />
        <Grid>
          <Metric label="Мобильная доля" value={`${data.digital.mobileShare}%`} />
          <Metric label="Сессий в неделю" value={data.digital.appUsageFreq} />
          <Metric label="Время в приложении" value={`${data.digital.avgSessionTime} мин`} />
        </Grid>
        <ChartPie title="Распределение по устройствам" data={data.digital.devices} />

        {/* Поведение */}
        <SectionTitle icon={ShoppingBag} title="Поведенческие паттерны" />
        <Grid>
          <Metric label="RFM Score" value={data.behavior.rfmScore} />
          <Metric label="Транзакций в мес" value={data.behavior.frequency} />
          <Metric label="Средний чек" value={`${data.behavior.avgTransaction.toLocaleString()} ₸`} />
          <Metric label="Срок обслуживания" value={`${data.behavior.tenureMonths} мес`} />
        </Grid>
        <ChartPie title="Типичные операции (MCC)" data={data.behavior.preferredMcc} />

        {/* Гео */}
        <SectionTitle icon={Globe} title="География и сезонность" />
        <Grid>
          <Metric label="Пиковый месяц" value={data.geoSeasonal.peakMonth} />
          <Metric label="Топ города" value={data.geoSeasonal.topCities.map((c) => c.name).join(", ")} />
        </Grid>
        <ChartLine title="Динамика вовлечённости" data={data.geoSeasonal.engagementTrend} />

        {/* ML */}
        <SectionTitle icon={Brain} title="Инсайты и ML-метрики" />
        <Grid>
          <Metric label="LTV" value={`${data.ml.ltv.toLocaleString()} ₸`} />
          <Metric label="Churn Probability" value={`${(data.ml.churnProbability * 100).toFixed(1)}%`} />
          <Metric label="Retention Score" value={data.ml.retentionScore} />
          <Metric label="Propensity to Buy" value={`${(data.ml.propensityToBuy * 100).toFixed(1)}%`} />
          <Metric label="CLV Growth Rate" value={`${(data.ml.clvGrowthRate * 100).toFixed(1)}%`} />
        </Grid>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-gray-800">
          🧠 {data.ml.aiComment}
        </div>
      </CardContent>
    </Card>
  );
}

/* --- Вспомогательные компоненты --- */
function SectionTitle({ icon: Icon, title }) {
  return (
    <h3 className="text-gray-800 font-medium flex items-center gap-2 mt-4">
      <Icon size={16} className="text-yellow-500" /> {title}
    </h3>
  );
}
function Grid({ children }) {
  return <div className="grid md:grid-cols-3 gap-4 mt-2">{children}</div>;
}
function ChartPie({ title, data }) {
  return (
    <>
      <h4 className="mt-6 text-gray-700 font-medium">{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
function ChartLine({ title, data }) {
  return (
    <>
      <h4 className="mt-6 text-gray-700 font-medium">{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

/* --- Секция сравнения портретов --- */
function ComparisonSection({ a, b }) {
  const compareMetric = (aVal, bVal, higherIsBetter = true) => {
    if (aVal === bVal) return "text-gray-500";
    const better = higherIsBetter ? aVal > bVal : aVal < bVal;
    return better ? "text-green-600 font-semibold" : "text-gray-400";
  };

  const CardMetric = ({ label, aVal, bVal, higherIsBetter = true }) => (
    <div className="p-3 bg-gray-50 border rounded-lg flex flex-col text-sm">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex justify-between items-center">
        <span className={`flex items-center gap-1 ${compareMetric(aVal, bVal, higherIsBetter)}`}>
          {aVal}
          {aVal > bVal ? <ArrowUp size={12} /> : aVal < bVal ? <ArrowDown size={12} /> : null}
        </span>
        <span className="text-gray-400">vs</span>
        <span className={`flex items-center gap-1 ${compareMetric(bVal, aVal, higherIsBetter)}`}>
          {bVal}
          {bVal > aVal ? <ArrowUp size={12} /> : bVal < aVal ? <ArrowDown size={12} /> : null}
        </span>
      </div>
    </div>
  );

  return (
    <Card className="p-6 shadow-sm">
      <CardHeader className="flex items-center gap-2 border-b pb-3">
        <Scale className="text-yellow-500" />
        <CardTitle>
          Сравнение портретов: {a.product} vs {b.product}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 space-y-6">
        {/* Соцдемо */}
        <h3 className="text-gray-700 font-medium flex items-center gap-2">
          <Users size={14} className="text-yellow-500" /> Социально-демографические
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          <CardMetric label="Возраст (лет)" aVal={a.baseMetrics.avgAge} bVal={b.baseMetrics.avgAge} higherIsBetter={false} />
          <CardMetric label="Доход (₸)" aVal={a.baseMetrics.avgIncome.toLocaleString()} bVal={b.baseMetrics.avgIncome.toLocaleString()} />
          <CardMetric label="Мужчины (%)" aVal={a.baseMetrics.genderShare.male} bVal={b.baseMetrics.genderShare.male} />
          <CardMetric label="Женщины (%)" aVal={a.baseMetrics.genderShare.female} bVal={b.baseMetrics.genderShare.female} />
        </div>

        {/* Финансы */}
        <h3 className="text-gray-700 font-medium flex items-center gap-2">
          <Coins size={14} className="text-yellow-500" /> Финансовое поведение
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          <CardMetric label="Баланс (₸)" aVal={a.financial.balance.toLocaleString()} bVal={b.financial.balance.toLocaleString()} />
          <CardMetric label="Доход банку (₸)" aVal={a.financial.incomeFromClient.toLocaleString()} bVal={b.financial.incomeFromClient.toLocaleString()} />
          <CardMetric label="Средний чек (₸)" aVal={a.behavior.avgTransaction.toLocaleString()} bVal={b.behavior.avgTransaction.toLocaleString()} />
        </div>

        {/* ML */}
        <h3 className="text-gray-700 font-medium flex items-center gap-2">
          <Brain size={14} className="text-yellow-500" /> ML и прогнозные метрики
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          <CardMetric label="LTV (₸)" aVal={a.ml.ltv.toLocaleString()} bVal={b.ml.ltv.toLocaleString()} />
          <CardMetric label="Churn Probability (%)" aVal={(a.ml.churnProbability * 100).toFixed(1)} bVal={(b.ml.churnProbability * 100).toFixed(1)} higherIsBetter={false} />
          <CardMetric label="Propensity to Buy (%)" aVal={(a.ml.propensityToBuy * 100).toFixed(1)} bVal={(b.ml.propensityToBuy * 100).toFixed(1)} />
          <CardMetric label="Retention Score" aVal={a.ml.retentionScore} bVal={b.ml.retentionScore} />
          <CardMetric label="CLV Growth Rate (%)" aVal={(a.ml.clvGrowthRate * 100).toFixed(1)} bVal={(b.ml.clvGrowthRate * 100).toFixed(1)} />
        </div>

        {/* Интерпретация */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-gray-800">
          💡 <strong>Интерпретация:</strong>{" "}
          {a.ml.churnProbability < b.ml.churnProbability
            ? `${a.product} удерживает клиентов лучше — риск оттока ниже. `
            : `${b.product} показывает более стабильную клиентскую базу. `}
          {a.ml.propensityToBuy > b.ml.propensityToBuy
            ? ` Клиенты ${a.product} активнее реагируют на предложения.`
            : ` Клиенты ${b.product} чаще совершают покупки.`}
        </div>
      </CardContent>
    </Card>
  );
}
