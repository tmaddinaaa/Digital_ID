import React, { useState } from "react";
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
  LabelList,
} from "recharts";

const COLORS = [
  "#FACC15",
  "#4ADE80",
  "#60A5FA",
  "#A78BFA",
  "#F472B6",
  "#FB923C",
  "#34D399",
  "#FCD34D",
];

const FinancialProfile = ({ data, financialInfo }) => {
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  if (!data)
    return <p className="text-gray-500">Нет данных о финансовом профиле</p>;

  // --- 🔹 Подготовка данных ---
  const mccData =
    data.operations?.retailPurchases?.map((item) => ({
      name: item.mcc,
      value:
        typeof item.share === "string"
          ? parseFloat(item.share)
          : item.share || 0,
    })) || [];

  const incomeAllocation = (data.allocation || []).map((a) => {
    const match = a.match(/(\d+)%/);
    return {
      name: a.replace(/\(\d+%\)/, "").trim(),
      value: match ? parseFloat(match[1]) : 0,
    };
  });

  const funnelData =
    data.expenseFlow?.map((f) => ({
      stage: f.stage,
      amount: f.amount,
    })) || [];

  const paymentMethods =
    data.paymentMethods?.map((p) => ({
      name: p.name,
      value: p.value,
    })) || [];

  const transactions = data.operations?.transactions || [];

  const formatNumber = (num) =>
    num !== undefined && !isNaN(num) ? `₸${num.toLocaleString("ru-RU")}` : "—";

  // --- Фильтрация транзакций ---
  const filteredTransactions = transactions.filter((t) => {
    if (!dateRange.from && !dateRange.to) return true;
    const opDate = new Date(t.date);
    const from = dateRange.from ? new Date(dateRange.from) : null;
    const to = dateRange.to ? new Date(dateRange.to) : null;
    return (!from || opDate >= from) && (!to || opDate <= to);
  });

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-8 overflow-auto">
      {/* --- Финансовые метрики --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Доходность с клиента</p>
          <p className="font-semibold text-lg">
            {formatNumber(financialInfo?.revenue?.margin)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Комиссия</p>
          <p className="font-semibold text-lg">
            {formatNumber(financialInfo?.revenue?.commission)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">Проценты</p>
          <p className="font-semibold text-lg">
            {formatNumber(financialInfo?.revenue?.interest)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">LTV</p>
          <p className="font-semibold text-lg">
            {formatNumber(financialInfo?.ltv)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-sm text-gray-500">CLV</p>
          <p className="font-semibold text-lg">
            {formatNumber(financialInfo?.clv)}
          </p>
        </div>
      </div>

      {/* --- Таблица операций --- */}
      {data.operations && (
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">💳 Операции</h3>
          <table className="w-full border border-gray-200 rounded-lg text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-3 text-left">Тип операции</th>
                <th className="py-2 px-3 text-left">Частота</th>
                <th className="py-2 px-3 text-left">Средний чек</th>
                <th className="py-2 px-3 text-left">Тренд</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.operations)
                .filter(([key]) => key !== "retailPurchases" && key !== "transactions")
                .map(([key, val]) => (
                  <tr key={key} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-3 font-medium capitalize">
                      {(() => {
                        switch (key) {
                          case "atmWithdrawals":
                            return "Снятия в банкоматах";
                          case "ownTransfers":
                            return "Переводы между своими счетами";
                          case "internalTransfers":
                            return "Переводы клиентам банка";
                          case "externalTransfers":
                            return "Переводы в другие банки";
                          case "internationalTransfers":
                            return "Международные переводы";
                          default:
                            return key;
                        }
                      })()}
                    </td>
                    <td className="py-2 px-3">{val.freq || "—"}×</td>
                    <td className="py-2 px-3">
                      {val.avgSum ? formatNumber(val.avgSum) : "—"}
                    </td>
                    <td className="py-2 px-3">{val.trend || "—"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* --- 📅 Операции за период (новая таблица с фильтрацией) --- */}
      {transactions.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3 text-gray-700 flex items-center gap-2">
            📅 Операции за период
            <span className="text-xs text-gray-500"></span>
          </h3>

          {/* Фильтры */}
          <div className="flex flex-wrap items-end gap-3 mb-4">
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">С</label>
              <input
                type="date"
                value={dateRange.from}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, from: e.target.value }))
                }
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 mb-1">По</label>
              <input
                type="date"
                value={dateRange.to}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, to: e.target.value }))
                }
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              onClick={() => setDateRange({ from: "", to: "" })}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Сбросить
            </button>
          </div>

          {/* Таблица */}
          <table className="w-full border border-gray-200 rounded-lg text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-3 text-left">Дата</th>
                <th className="py-2 px-3 text-left">Тип операции</th>
                <th className="py-2 px-3 text-left">Локация</th>
                <th className="py-2 px-3 text-left">Сумма</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((t) => (
                  <tr key={t.id} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-3">{t.date}</td>
                    <td className="py-2 px-3">{t.type}</td>
                    <td className="py-2 px-3">{t.location}</td>
                    <td className="py-2 px-3 font-medium text-yellow-700">
                      {formatNumber(t.amount)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-3 text-center text-gray-500 italic">
                    Нет операций за выбранный период
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* --- Распределение доходов --- */}
      {incomeAllocation.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">
            📊 Распределение дохода
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={incomeAllocation}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {incomeAllocation.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* --- Покупки по MCC --- */}
      {mccData.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">🛍 Покупки по MCC</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={mccData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {mccData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* --- 💸 Гистограмма трат --- */}
      {funnelData.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4 text-gray-700 flex items-center gap-2">
            💸 Распределение трат
            <span className="text-xs text-gray-500">(в процентах от зарплаты)</span>
          </h3>

          <div className="bg-gradient-to-b from-yellow-50 to-white p-4 rounded-xl shadow-inner border border-gray-100">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={funnelData}
                margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
              >
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                  formatter={(v) => [`${v}%`, "Доля от зарплаты"]}
                />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  stroke="#555"
                />
                <YAxis
                  type="category"
                  dataKey="stage"
                  width={180}
                  tick={{ fill: "#444", fontSize: 12 }}
                />
                <Bar dataKey="amount" radius={[0, 8, 8, 0]}>
                  <LabelList
                    dataKey="amount"
                    position="insideRight"
                    formatter={(v) => `${v}%`}
                    fill="#fff"
                    fontSize={12}
                  />
                  {funnelData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* --- Методы оплаты --- */}
      {paymentMethods.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3 text-gray-700">💳 Методы оплаты</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={paymentMethods}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#82ca9d"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {paymentMethods.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* --- Инсайты --- */}
      {data.insights?.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2 text-gray-700">💬 Инсайты</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {data.insights.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FinancialProfile;
