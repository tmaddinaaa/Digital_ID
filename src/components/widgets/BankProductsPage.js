import React, { useState } from "react";

const BankProductsPage = ({ data }) => {
  const [expanded, setExpanded] = useState({
    credits: false,
    deposits: false,
    cards: false,
    mlIndicators: false,
    history: false,
  });

  if (!data?.products?.bankProducts)
    return <p className="text-gray-500">Нет данных о продуктах банка</p>;

  const { items = [], history = [] } = data.products.bankProducts;
  const ml = data.products?.mlIndicators || {};

  // Разделяем по типам
  const credits = items.filter((p) => p.type === "Кредит");
  const deposits = items.filter((p) => p.type === "Депозит");
  const cards = items.filter((p) => p.type === "Карта");

  const toggleExpand = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  // Подсчёт totals
  const totalCards = cards.length;
  const totalDeposits = deposits.length;
  const totalCredits = credits.length;
  const totalCardSum = cards.reduce((acc, c) => acc + (c.sum || 0), 0);
  const totalDepositSum = deposits.reduce((acc, d) => acc + (d.sum || 0), 0);
  const totalCreditSum = credits.reduce((acc, c) => acc + (c.sum || 0), 0);

  // Вспомогательная функция для цвета бонуса
  const getBonusColor = (bonusLevel) => {
    if (!bonusLevel) return "bg-gray-100 text-gray-600";
    const num = parseFloat(bonusLevel);
    if (num >= 10) return "bg-yellow-200 text-yellow-900";
    if (num >= 5) return "bg-green-100 text-green-700";
    return "bg-gray-50 text-gray-600";
  };

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-6 overflow-auto">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">🏦 Продукты Банка</h2>
      </div>

      {/* Краткая статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{totalCards}</p>
          <p className="text-sm text-gray-500">Карты</p>
          <p className="text-sm text-gray-600">₸{totalCardSum.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{totalDeposits}</p>
          <p className="text-sm text-gray-500">Депозиты</p>
          <p className="text-sm text-gray-600">₸{totalDepositSum.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{totalCredits}</p>
          <p className="text-sm text-gray-500">Кредиты</p>
          <p className="text-sm text-gray-600">₸{totalCreditSum.toLocaleString()}</p>
        </div>
      </div>

      {/* 💰 Кредиты */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("credits")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>💰 Кредиты</span>
          <span>{expanded.credits ? "▲" : "▼"}</span>
        </button>
        {expanded.credits && (
          <div className="max-h-96 overflow-y-auto p-4">
            {credits.length ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Название</th>
                    <th className="p-2 text-left">Сумма</th>
                    <th className="p-2 text-left">Срок</th>
                    <th className="p-2 text-left">Процент</th>
                    <th className="p-2 text-left">Дата открытия</th>
                    <th className="p-2 text-left">Статус</th>
                    <th className="p-2 text-left">Просрочка</th>
                  </tr>
                </thead>
                <tbody>
                  {credits.map((c, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{c.name}</td>
                      <td className="p-2">₸{c.sum.toLocaleString()}</td>
                      <td className="p-2">{c.term}</td>
                      <td className="p-2">{c.interestRate}</td>
                      <td className="p-2">{c.openDate}</td>
                      <td className="p-2">{c.status}</td>
                      <td className="p-2">
                        {c.overdue
                          ? `Да (${c.overdueSum?.toLocaleString()} ₸)`
                          : "Нет"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">Нет активных кредитов</p>
            )}
          </div>
        )}
      </div>

      {/* 💎 Депозиты */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("deposits")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>💎 Депозиты</span>
          <span>{expanded.deposits ? "▲" : "▼"}</span>
        </button>
        {expanded.deposits && (
          <div className="max-h-96 overflow-y-auto p-4">
            {deposits.length ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Название</th>
                    <th className="p-2 text-left">Сумма</th>
                    <th className="p-2 text-left">Срок</th>
                    <th className="p-2 text-left">Процент</th>
                    <th className="p-2 text-left">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {deposits.map((d, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{d.name}</td>
                      <td className="p-2">₸{d.sum.toLocaleString()}</td>
                      <td className="p-2">{d.term}</td>
                      <td className="p-2">{d.interestRate}</td>
                      <td className="p-2">{d.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">Нет активных депозитов</p>
            )}
          </div>
        )}
      </div>

      {/* 💳 Карты */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("cards")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>💳 Карты</span>
          <span>{expanded.cards ? "▲" : "▼"}</span>
        </button>

        {expanded.cards && (
          <div className="max-h-96 overflow-y-auto p-4">
            {cards.length ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Тип</th>
                    <th className="p-2 text-left">Уровень</th>
                    <th className="p-2 text-left">Категория</th>
                    <th className="p-2 text-left">Уровень бонуса</th>
                    <th className="p-2 text-left">Дата открытия</th>
                    <th className="p-2 text-left">Действует до</th>
                    <th className="p-2 text-left">Сумма</th>
                    <th className="p-2 text-left">Зарплатный проект</th>
                    <th className="p-2 text-left">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {cards.map((c, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{c.cardType}</td>
                      <td className="p-2">{c.level}</td>
                      <td className="p-2">{c.category || "—"}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-semibold ${getBonusColor(
                            c.bonusLevel
                          )}`}
                        >
                          {c.bonusLevel || "—"}
                        </span>
                      </td>
                      <td className="p-2">{c.openDate}</td>
                      <td className="p-2">{c.validUntil}</td>
                      <td className="p-2">₸{c.sum.toLocaleString()}</td>
                      <td className="p-2">
                        {c.isSalaryCard ? (
                          <span className="text-green-600 font-medium">Да</span>
                        ) : (
                          <span className="text-gray-400">Нет</span>
                        )}
                      </td>
                      <td className="p-2">{c.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">Нет активных карт</p>
            )}
          </div>
        )}
      </div>

      {/* 🤖 ML Indicators */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("mlIndicators")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>🤖 ML-показатели</span>
          <span>{expanded.mlIndicators ? "▲" : "▼"}</span>
        </button>

        {expanded.mlIndicators && (
          <div className="p-5 bg-gradient-to-r from-gray-50 to-white shadow-inner">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-xl text-center ${
                  ml.churnRisk === "Да"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-50 text-green-700"
                }`}
              >
                <p className="font-semibold text-sm">Склонность к оттоку</p>
                <p className="text-lg font-bold">{ml.churnRisk || "—"}</p>
              </div>
              <div
                className={`p-4 rounded-xl text-center ${
                  ml.creditInterest === "Да"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <p className="font-semibold text-sm">Склонность к кредитам</p>
                <p className="text-lg font-bold">{ml.creditInterest || "—"}</p>
              </div>
              <div
                className={`p-4 rounded-xl text-center ${
                  ml.depositInterest === "Да"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <p className="font-semibold text-sm">Склонность к депозиту</p>
                <p className="text-lg font-bold">{ml.depositInterest || "—"}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 📜 История */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("history")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>📜 История продуктов</span>
          <span>{expanded.history ? "▲" : "▼"}</span>
        </button>
        {expanded.history && (
          <div className="max-h-96 overflow-y-auto p-4">
            {history.length ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Тип</th>
                    <th className="p-2 text-left">Название</th>
                    <th className="p-2 text-left">Сумма</th>
                    <th className="p-2 text-left">Дата открытия</th>
                    <th className="p-2 text-left">Дата закрытия</th>
                    <th className="p-2 text-left">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{h.type}</td>
                      <td className="p-2">{h.name || h.cardType}</td>
                      <td className="p-2">
                        {h.sum ? `₸${h.sum.toLocaleString()}` : "—"}
                      </td>
                      <td className="p-2">{h.openDate || "—"}</td>
                      <td className="p-2">{h.closeDate || "—"}</td>
                      <td className="p-2">{h.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">История отсутствует</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BankProductsPage;
