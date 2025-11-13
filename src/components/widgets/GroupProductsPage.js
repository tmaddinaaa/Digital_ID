import React, { useState } from "react";

const GroupProductsPage = ({ data }) => {
  // состояние раскрытия
  const [expanded, setExpanded] = useState({
    invest: false,
    garant: false,
  });

  // если вообще нет данных
  if (!data?.products?.groupProducts) {
    return <p className="text-gray-500">Нет данных о продуктах группы</p>;
  }

  // безопасное извлечение
  const {
    alatauInvest = { portfolioType: "", data: [] },
    alatauGarant = [],
  } = data.products.groupProducts || {};

  // гарантированно массив
  const investArray = Array.isArray(alatauInvest?.data)
    ? alatauInvest.data
    : [];

  // фильтруем продукты, исключая share = 0
  const investProducts = investArray.filter((p) => {
    const v = (p.share || "").toString().replace("%", "").trim();
    return v !== "" && v !== "0";
  });

  const investCount = investProducts.length;
  const garantCount = Array.isArray(alatauGarant) ? alatauGarant.length : 0;

  // переключение
  const toggleExpand = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-6 overflow-auto">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">💼 Продукты Группы</h2>
      </div>

      {/* Краткая статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{investCount}</p>
          <p className="text-sm text-gray-500">Alatau Invest</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{garantCount}</p>
          <p className="text-sm text-gray-500">Alatau Garant</p>
        </div>
      </div>

      {/* ===================== INVEST ===================== */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("invest")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>📊 Alatau Invest</span>
          <span>{expanded.invest ? "▲" : "▼"}</span>
        </button>

        {expanded.invest && (
          <div className="max-h-96 overflow-y-auto p-4">
            {/* Размер портфеля */}
            <p className="mb-3 text-gray-700 font-medium">
              Размер портфеля:{" "}
              <span className="text-gray-600">
                {alatauInvest.portfolioType || "Нет продуктов"}
              </span>
            </p>

            {investArray.length > 0 ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Название</th>
                    <th className="p-2 text-left">Доля</th>
                    <th className="p-2 text-left">Дата открытия</th>
                    <th className="p-2 text-left">Статус</th>
                  </tr>
                </thead>

                <tbody>
                  {investArray.map((p, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.share || "—"}</td>
                      <td className="p-2">{p.openDate || "—"}</td>
                      <td className="p-2">{p.status || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">Нет инвестпродуктов</p>
            )}
          </div>
        )}
      </div>

      {/* ===================== GARANT ===================== */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggleExpand("garant")}
          className="w-full text-left bg-gray-100 px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-200"
        >
          <span>🛡 Alatau Garant</span>
          <span>{expanded.garant ? "▲" : "▼"}</span>
        </button>

        {expanded.garant && (
          <div className="max-h-96 overflow-y-auto p-4">
            {garantCount > 0 ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Название</th>
                    <th className="p-2 text-left">Тип</th>
                    <th className="p-2 text-left">Дата открытия</th>
                    <th className="p-2 text-left">Статус</th>
                  </tr>
                </thead>

                <tbody>
                  {alatauGarant.map((p, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.type || "—"}</td>
                      <td className="p-2">{p.openDate || "—"}</td>
                      <td className="p-2">{p.status || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">Нет страховых продуктов</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupProductsPage;
