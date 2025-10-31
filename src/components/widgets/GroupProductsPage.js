import React, { useState } from "react";

const GroupProductsPage = ({ data }) => {
  // ✅ Хук должен быть вызван до любых return или условий
  const [expanded, setExpanded] = useState({
    invest: false,
    garant: false,
  });

  if (!data?.products?.groupProducts)
    return <p className="text-gray-500">Нет данных о продуктах группы</p>;

  const { alatauInvest = [], alatauGarant = [] } = data.products.groupProducts;

  const toggleExpand = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-6 overflow-auto">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          💼 Продукты Группы
        </h2>
      </div>

      {/* Краткая статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{alatauInvest.length}</p>
          <p className="text-sm text-gray-500">Alatau Invest</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl text-center">
          <p className="font-semibold text-lg">{alatauGarant.length}</p>
          <p className="text-sm text-gray-500">Alatau Garant</p>
        </div>
      </div>

      {/* Alatau Invest */}
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
            {alatauInvest.length ? (
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Название</th>
                    <th className="p-2 text-left">Тип</th>
                    <th className="p-2 text-left">Тип портфеля</th>
                    <th className="p-2 text-left">Дата открытия</th>
                    <th className="p-2 text-left">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {alatauInvest.map((p, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-2">{p.name}</td>
                      <td className="p-2">{p.type}</td>
                      <td className="p-2">{p.portfolioType || "—"}</td>
                      <td className="p-2">{p.openDate || "—"}</td>
                      <td className="p-2">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">
                Нет активных инвестпродуктов
              </p>
            )}
          </div>
        )}
      </div>

      {/* Alatau Garant */}
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
            {alatauGarant.length ? (
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
                      <td className="p-2">{p.type}</td>
                      <td className="p-2">{p.openDate || "—"}</td>
                      <td className="p-2">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500 text-sm">
                Нет активных страховых продуктов
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupProductsPage;
