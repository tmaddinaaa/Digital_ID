"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  Legend,
  ComposedChart,
  Line,
  BarChart
} from "recharts";
import {
  TrendingUp,
  Calendar,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function SectionBehavior({ data }) {
  const colors = [
    "#FFD966",
    "#FFB800",
    "#E59E00",
    "#FACC15",
    "#FDE68A",
    "#FBBF24",
    "#F59E0B",
    "#D97706",
    "#B45309",
    "#FCD34D",
    "#FCA311",
    "#FFCA3A",
    "#FF9F1C",
    "#FDB813",
    "#FEE440",
  ];

  const { charts = {}, insights = [] } = data || {};

  const [reportDate, setReportDate] = useState("2025-10-01");
  const [spendingRange, setSpendingRange] = useState({
    start: "2025-09-01",
    end: "2025-09-30",
  });
  const [mccRange, setMccRange] = useState({
    start: "2025-09-01",
    end: "2025-09-30",
  });

    // новые диапазоны для 3 нижних графиков
  const [bankRange, setBankRange] = useState({
    start: "2025-08-01",
    end: "2025-11-01",
  });
  const [appsRange, setAppsRange] = useState({
    start: "2025-08-01",
    end: "2025-11-01",
  });
  const [userRange, setUserRange] = useState({
    start: "2024-10-01",
    end: "2025-09-01",
  });

  
  const [selectedMcc, setSelectedMcc] = useState("all");
  const [showOther, setShowOther] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // MCC график
  const filteredTransactionsData = useMemo(() => {
    if (!charts.transactionsBySegment) return [];
    const processed = charts.transactionsBySegment.map((item) => ({
      ...item,
      transactionSumMln: item.transactionSum / 1_000_000,
    }));
    return selectedMcc === "all"
      ? processed
      : processed.filter((item) => item.segment === selectedMcc);
  }, [charts.transactionsBySegment, selectedMcc]);

  const mccOptions = useMemo(() => {
    if (!charts.transactionsBySegment) return [];
    return ["all", ...charts.transactionsBySegment.map((item) => item.segment)];
  }, [charts.transactionsBySegment]);

  const otherCategories = charts.otherCategories || [];
  const visibleRows = expanded ? otherCategories : otherCategories.slice(0, 5);

  if (!data)
    return <p className="text-gray-500 text-center mt-6">Нет данных</p>;

  return (
    <div className="space-y-8">
      {/* 📊 Заголовок */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          📊 Поведение клиентов
        </h2>

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

      {/* 💳 Распределение трат по категориям */}
      {charts.allocation && charts.allocation.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  💳 Распределение трат по категориям
                </h3>
                <p className="text-sm text-gray-500">
                  Отображает долю расходов клиентов по различным категориям
                  товаров и услуг.
                </p>
              </div>

              {/* 📅 Диапазон дат */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700">
                <Calendar size={15} className="text-yellow-600" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={spendingRange.start}
                    onChange={(e) =>
                      setSpendingRange({
                        ...spendingRange,
                        start: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={spendingRange.end}
                    onChange={(e) =>
                      setSpendingRange({
                        ...spendingRange,
                        end: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 📊 Диаграмма */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div style={{ width: "100%", height: 360, maxWidth: 440 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart
                    margin={{
                      top: 40,
                      right: 100,
                      bottom: 60,
                      left: 100,
                    }}
                  >
                    <Pie
                      data={charts.allocation}
                      dataKey="share"
                      nameKey="category"
                      outerRadius={120}
                      paddingAngle={2}
                      labelLine={true}
                      label={({ cx, cy, midAngle, outerRadius, percent, index }) => {
                        if (percent * 100 < 1) return null;
                        const RADIAN = Math.PI / 180;
                        const offset = 25 + (index % 3) * 10;
                        const radius = outerRadius + offset;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#E59E00"
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                            fontSize={12}
                            fontWeight="600"
                          >
                            {(percent * 100).toFixed(1)}%
                          </text>
                        );
                      }}
                    >
                      {charts.allocation.map((_, i) => (
                        <Cell key={i} fill={colors[i % colors.length]} />
                      ))}
                    </Pie>

                    <Tooltip
                      formatter={(value, name) => [`${value}%`, name]}
                      contentStyle={{
                        borderRadius: "8px",
                        borderColor: "#FBBF24",
                        fontSize: "13px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* 🧾 Легенда с прокруткой */}
              <div className="flex flex-col gap-2 text-sm text-gray-700 max-h-[240px] overflow-y-auto pr-2">
                {charts.allocation.map((entry, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      entry.category === "Другое" && setShowOther(!showOther)
                    }
                    className={`flex items-center gap-2 cursor-pointer rounded-md p-1.5 ${
                      entry.category === "Другое"
                        ? "hover:bg-amber-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className="inline-block w-4 h-4 rounded-sm"
                      style={{ backgroundColor: colors[i % colors.length] }}
                    ></span>
                    <span className="font-medium text-gray-800 truncate">
                      {entry.category}
                    </span>
                    <span className="text-amber-600 font-semibold ml-auto">
                      {entry.share}%
                    </span>
                    {entry.category === "Другое" && (
                      <span className="ml-1 text-gray-500">
                        {showOther ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 📋 Таблица “Другое” */}
            {showOther && (
              <div className="mt-4 border-t pt-4">
                <h4 className="font-medium mb-2 text-gray-800">
                  Детализация категории «Другое»
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full border text-sm text-gray-700">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="px-3 py-2 border text-left">Категория</th>
                        <th className="px-3 py-2 border text-right">
                          % от общих трат
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleRows.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-3 py-2 border">{item.category}</td>
                          <td className="px-3 py-2 border text-right">
                            {item.share.toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-center mt-3">
                  <button
                    className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? (
                      <>
                        Свернуть <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        Показать все <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
{/* 🏦 Средний чек по категориям MCC */}
{charts.transactionsBySegment && charts.transactionsBySegment.length > 0 && (
  <Card>
    <CardContent className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-medium mb-1">
            🏦 Средний чек и активность по категориям MCC
          </h3>
          <p className="text-sm text-gray-500">
            Отображает средний чек, объем и количество транзакций по категориям MCC.
          </p>
        </div>

        {/* 📆 Фильтры */}
        <div className="flex flex-wrap items-center justify-end gap-4 ml-auto mt-2 sm:mt-0">
          {/* Фильтр по MCC */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
            <Filter size={15} className="text-indigo-600" />
            <select
              value={selectedMcc}
              onChange={(e) => setSelectedMcc(e.target.value)}
              className="bg-transparent outline-none text-gray-800 cursor-pointer"
            >
              <option value="all">Все категории</option>
              {mccOptions
                .filter((o) => o !== "all")
                .map((mcc) => (
                  <option key={mcc} value={mcc}>
                    {mcc}
                  </option>
                ))}
            </select>
          </div>

          {/* Диапазон дат */}
          <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
            <Calendar size={15} className="text-yellow-600" />
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={mccRange.start}
                onChange={(e) =>
                  setMccRange({ ...mccRange, start: e.target.value })
                }
                className="bg-transparent outline-none text-gray-800 cursor-pointer"
              />
              <span>–</span>
              <input
                type="date"
                value={mccRange.end}
                onChange={(e) =>
                  setMccRange({ ...mccRange, end: e.target.value })
                }
                className="bg-transparent outline-none text-gray-800 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 📊 График с горизонтальной прокруткой */}
      <div className="overflow-x-auto">
        <div style={{ width: "1400px", height: "420px", paddingRight: "30px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={filteredTransactionsData.map((d) => ({
                ...d,
                transactionSumMln: d.transactionSum / 1_000_000, // объем в млн ₸
                transactionCountK: d.transactionCount / 1_000, // кол-во в тыс.
              }))}
              margin={{ top: 20, right: 40, left: 20, bottom: 100 }}
              barCategoryGap="15%"
            >
              <CartesianGrid strokeDasharray="3 3" />

              {/* X-ось с переносом текста */}
              <XAxis
                dataKey="segment"
                interval={0}
                height={100}
                tick={({ x, y, payload }) => {
                  const words = payload.value.split(" ");
                  const lineHeight = 12;
                  const startY = y + 16;
                  return (
                    <g transform={`translate(${x},${startY})`}>
                      <text textAnchor="middle" fontSize={11} fill="#555">
                        {words.map((word, index) => (
                          <tspan
                            key={index}
                            x="0"
                            dy={index === 0 ? 0 : lineHeight}
                          >
                            {word}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  );
                }}
              />

              {/* Левая ось — Средний чек */}
              <YAxis
                yAxisId="left"
                orientation="left"
                label={{
                  value: "Средний чек (₸)",
                  angle: -90,
                  position: "insideLeft",
                  offset: -10,
                  dy: 30,
                  style: { fontSize: 12, fill: "#F59E0B" },
                }}
                tickFormatter={(v) => v.toLocaleString()}
              />

              {/* Правая ось — Объем / Кол-во */}
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{
                  value: "Объем (млн ₸) / Кол-во (тыс.)",
                  angle: -90,
                  position: "insideRight",
                  dy: 30,
                  style: { fontSize: 12, fill: "#3B82F6" },
                }}
                tickFormatter={(v) =>
                  v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v
                }
              />

              <Tooltip
                formatter={(value, name) => {
                  if (name.includes("Средний чек"))
                    return [`${value.toLocaleString()} ₸`, name];
                  if (name.includes("Объем транзакций"))
                    return [`${value.toFixed(1)} млн ₸`, name];
                  if (name.includes("Кол-во транзакций"))
                    return [`${value.toFixed(1)} тыс.`, name];
                  return [value, name];
                }}
              />
              <Legend verticalAlign="bottom" height={36} />

              {/* 🟩 Объем транзакций */}
              <Bar
                yAxisId="right"
                dataKey="transactionSumMln"
                name="Объем транзакций (млн ₸)"
                fill="#34D399"
                radius={[6, 6, 0, 0]}
                barSize={20}
              >
                <LabelList
                  dataKey="transactionSumMln"
                  position="top"
                  formatter={(v) => `${v.toFixed(1)} млн`}
                  fontSize={9}
                  fill="#065F46"
                />
              </Bar>

              {/* 🟨 Средний чек */}
              <Bar
                yAxisId="left"
                dataKey="avgTransaction"
                name="Средний чек (₸)"
                fill="#FBBF24"
                radius={[6, 6, 0, 0]}
                barSize={20}
              >
                <LabelList
                  dataKey="avgTransaction"
                  position="bottom"
                  formatter={(v) => v.toLocaleString()}
                  fontSize={10}
                  fill="#333"
                />
              </Bar>

              {/* 🟦 Количество транзакций */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="transactionCountK"
                name="Кол-во транзакций (тыс.)"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CardContent>
  </Card>
)}

      {/* ---------------------------------------- */}
      {/* 🏦 Наиболее популярные приложения БВУ */}
      {/* ---------------------------------------- */}
      {charts.bankApps?.popularApps && charts.bankApps.popularApps.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  🏦 Наиболее популярные приложения БВУ среди клиентов банка
                </h3>
                <p className="text-sm text-gray-500">
                  Количество клиентов, у которых установлены приложения банков
                  второго уровня. 
                </p>
                <p className="text-sm text-gray-400">
                  * Без учета данных Kaspi и Halyk Bank ввиду отсутствия информации в базе данных.
                </p>
              </div>

              {/* 📅 Диапазон */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
                <Calendar size={15} className="text-amber-500" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={bankRange.start}
                    onChange={(e) =>
                      setBankRange({ ...bankRange, start: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={bankRange.end}
                    onChange={(e) =>
                      setBankRange({ ...bankRange, end: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div style={{ width: "1000px", height: 360 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={charts.bankApps.popularApps}
                    margin={{ top: 30, right: 30, left: 20, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#FEF3C7" />
                    <XAxis
                      dataKey="bank"
                      angle={-20}
                      textAnchor="end"
                      height={70}
                      tick={{ fill: "#92400E", fontSize: 12 }}
                    />
                    <YAxis
                      label={{
                        value: "тыс. клиентов",
                        angle: -90,
                        position: "insideLeft",
                        style: { fontSize: 12, fill: "#B45309" },
                      }}
                    />
                    <Tooltip
                      formatter={(v) => `${v} тыс.`}
                      contentStyle={{
                        backgroundColor: "#FFFBEB",
                        borderColor: "#FBBF24",
                      }}
                    />
                    <defs>
                      <linearGradient id="bankGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#FBBF24" />
                      </linearGradient>
                    </defs>
                    <Bar
                      dataKey="clients"
                      fill="url(#bankGradient)"
                      radius={[6, 6, 0, 0]}
                      barSize={60}
                    >
                      <LabelList
                        dataKey="clients"
                        position="top"
                        formatter={(v) => `${v} тыс.`}
                        fill="#78350F"
                        fontSize={12}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ---------------------------------------- */}
      {/* 📱 Количество приложений БВУ у клиентов банка */}
      {/* ---------------------------------------- */}
      {charts.bankApps?.appsCount && charts.bankApps.appsCount.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium mb-1">
                  📱 Количество приложений БВУ у клиентов банка
                </h3>
                <p className="text-sm text-gray-500">
                  Распределение клиентов по количеству установленных банковских
                  приложений.
                </p>
                <p className="text-sm text-gray-400">
                  * Без учета данных Kaspi и Halyk Bank ввиду отсутствия информации в базе данных.
                </p>
              </div>

              {/* 📅 Диапазон */}
              <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
                <Calendar size={15} className="text-amber-500" />
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={appsRange.start}
                    onChange={(e) =>
                      setAppsRange({ ...appsRange, start: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                  <span>–</span>
                  <input
                    type="date"
                    value={appsRange.end}
                    onChange={(e) =>
                      setAppsRange({ ...appsRange, end: e.target.value })
                    }
                    className="bg-transparent outline-none text-gray-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={360}>
              <BarChart
                data={charts.bankApps.appsCount}
                margin={{ top: 30, right: 30, left: 20, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#FEF3C7" />
                <XAxis
                  dataKey="apps"
                  label={{
                    value: "Количество приложений",
                    position: "insideBottom",
                    offset: -5,
                    style: { fontSize: 12, fill: "#92400E" },
                  }}
                  tick={{ fill: "#92400E", fontSize: 12 }}
                />
                <YAxis
                  label={{
                    value: "тыс. клиентов",
                    angle: -90,
                    position: "insideLeft",
                    style: { fontSize: 12, fill: "#B45309" },
                  }}
                />
                <Tooltip
                  formatter={(v) => `${v} тыс.`}
                  contentStyle={{
                    backgroundColor: "#FFFBEB",
                    borderColor: "#FBBF24",
                  }}
                />
                <defs>
                  <linearGradient id="appsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#FDBA74" />
                  </linearGradient>
                </defs>
                <Bar
                  dataKey="clients"
                  fill="url(#appsGradient)"
                  radius={[6, 6, 0, 0]}
                >
                  <LabelList
                    dataKey="clients"
                    position="top"
                    formatter={(v) => `${v} тыс.`}
                    fill="#78350F"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

{/* 📈 Динамика пользовательской активности */}
{charts.userDynamics && charts.userDynamics.length > 0 && (
  <Card>
    <CardContent className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-medium mb-1">
            📊 Динамика пользовательской активности
          </h3>
          <p className="text-sm text-gray-500">
            Изменение количества новых пользователей, MAU и среднего DAU по месяцам.
          </p>
        </div>

        {/* 📅 Диапазон */}
        <div className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 text-gray-700 shadow-sm">
          <Calendar size={15} className="text-amber-500" />
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={userRange.start}
              onChange={(e) =>
                setUserRange({ ...userRange, start: e.target.value })
              }
              className="bg-transparent outline-none text-gray-800 cursor-pointer"
            />
            <span>–</span>
            <input
              type="date"
              value={userRange.end}
              onChange={(e) =>
                setUserRange({ ...userRange, end: e.target.value })
              }
              className="bg-transparent outline-none text-gray-800 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div style={{ width: "1400px", height: 460 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={charts.userDynamics.filter(
                (d) =>
                  new Date(d.date) >= new Date(userRange.start) &&
                  new Date(d.date) <= new Date(userRange.end)
              )}
              margin={{ top: 30, right: 60, left: 40, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#FEF3C7" />

              <XAxis
                dataKey="date"
                tickFormatter={(v) =>
                  new Date(v).toLocaleDateString("ru-RU", {
                    month: "short",
                    year: "2-digit",
                  })
                }
                angle={-25}
                textAnchor="end"
                height={80}
                tickMargin={12}
                tick={{ fill: "#92400E", fontSize: 12 }}
                padding={{ left: 20, right: 20 }}
              />

              <YAxis
                yAxisId="left"
                label={{
                  value: "MAU / DAU (млн пользователей)",
                  angle: -90,
                  position: "insideLeft",
                  dx: -5,
                  dy: 70,
                  style: { fontSize: 12, fill: "#92400E" },
                }}
                tick={{ fill: "#92400E", fontSize: 11 }}
              />

              <YAxis
                yAxisId="right"
                orientation="right"
                label={{
                  value: "Новые пользователи (тыс.)",
                  angle: -90,
                  position: "insideRight",
                  dx: 25,
                  dy: 70,
                  style: { fontSize: 12, fill: "#B45309" },
                }}
                tick={{ fill: "#B45309", fontSize: 11 }}
              />

              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{ paddingTop: "15px" }}
              />

              <defs>
                <linearGradient id="mauGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#FDE68A" />
                </linearGradient>
                <linearGradient id="dauGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>

              {/* 🟨 MAU */}
              <Bar
                yAxisId="left"
                dataKey="mau"
                name="MAU (ежемес.)"
                fill="url(#mauGradient)"
                barSize={30}
                radius={[6, 6, 0, 0]}
                animationDuration={800}
              >
                <LabelList
                  dataKey="mau"
                  position="top"
                  formatter={(v) =>
                    v >= 1_000_000
                      ? `${(v / 1_000_000).toFixed(1)} млн`
                      : v.toLocaleString("ru-RU")
                  }
                  fill="#78350F"
                  fontSize={11}
                />
              </Bar>

              {/* 🟧 DAU */}
              <Bar
                yAxisId="left"
                dataKey="dau"
                name="Средний DAU"
                fill="url(#dauGradient)"
                barSize={30}
                radius={[6, 6, 0, 0]}
                animationDuration={800}
              >
                <LabelList
                  dataKey="dau"
                  position="top"
                  formatter={(v) =>
                    v >= 1_000_000
                      ? `${(v / 1_000_000).toFixed(1)} млн`
                      : v.toLocaleString("ru-RU")
                  }
                  fill="#78350F"
                  fontSize={11}
                />
              </Bar>

              {/* 🟠 Новые пользователи (линия с подписями) */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="newUsers"
                name="Новые пользователи"
                stroke="#CA8A04"
                strokeWidth={3}
                dot={{ r: 5, fill: "#FACC15", strokeWidth: 1 }}
                activeDot={{ r: 7, fill: "#FCD34D" }}
                label={{
                  position: "top",
                  fontSize: 11,
                  fill: "#92400E",
                  formatter: (v) => v.toLocaleString("ru-RU"),
                }}
                animationDuration={1000}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CardContent>
  </Card>
)}




      {/* 💡 Инсайты */}
      {insights && insights.length > 0 && (
        <Card>
          <CardContent className="p-6 space-y-2">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-amber-500" />
              Ключевые инсайты
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {insights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>





  );
  
}
