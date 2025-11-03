import React from "react";

const Communications = ({ data }) => {
  if (!data) return <p className="text-gray-500">Нет данных о коммуникациях</p>;

  const {
    pushStatus,
    campaigns,
    lastPush,
    history,
    frequency,
    conversion,
    insights,
    topPush,
    heatmap,
  } = data;

  const days = Object.keys(heatmap?.data || {});
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const maxVal = Math.max(1, ...Object.values(heatmap?.data || {}).flat());

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        📩 Коммуникации с клиентом
      </h2>

      {/* Основные флаги */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-xl space-y-2 text-gray-700">
          <p>
            <strong>Включены push-уведомления:</strong>{" "}
            <span
              className={
                pushStatus === "Да" ? "text-green-600" : "text-red-600"
              }
            >
              {pushStatus || "—"}
            </span>
          </p>
          <p>
            <strong>Получал кампании за последний месяц:</strong>{" "}
            <span
              className={
                campaigns === "Да" ? "text-green-600" : "text-red-600"
              }
            >
              {campaigns || "—"}
            </span>
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl space-y-2 text-gray-700">
          <p>
            <strong>Последний push:</strong> {lastPush?.date} — {lastPush?.text} (
            {lastPush?.status})
          </p>
          <p>
            <strong>Тема:</strong> {lastPush?.topic || "—"}
          </p>
        </div>
      </div>

      {/* Метрики */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <h3 className="font-semibold text-gray-800 mb-2">
          📊 Частота и конверсии
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 text-sm">
          <p>
            <strong>Среднедневное:</strong> {frequency?.daily || "—"}
          </p>
          <p>
            <strong>Средненедельное:</strong> {frequency?.weekly || "—"}
          </p>
          <p>
            <strong>Среднемесячное:</strong> {frequency?.monthly || "—"}
          </p>
          <p>
            <strong>Конверсия (OR):</strong> {conversion?.overall || "—"}
          </p>
          <p>
            <strong>Click rate (CTR):</strong> {conversion?.clickRate || "—"}
          </p>
        </div>
      </div>

      {/* 🔥 Тепловая карта */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <h3 className="font-semibold text-gray-800 mb-3 text-center">
          🔥 Тепловая карта активности
        </h3>

        {days.length ? (
          <div className="overflow-x-auto flex justify-center">
            <div
              className="inline-grid justify-items-center"
              style={{
                gridTemplateColumns: `repeat(${
                  hours.length + 1
                }, minmax(2rem, 1fr))`,
              }}
            >
              {/* Заголовки часов */}
              <div></div>
              {hours.map((h) => (
                <div
                  key={h}
                  className="text-[10px] text-gray-500 text-center w-5"
                >
                  {h}
                </div>
              ))}

              {/* Строки по дням */}
              {days.map((day) => (
                <React.Fragment key={day}>
                  <div className="text-xs text-gray-600 font-medium pr-2">
                    {day.slice(0, 3)}
                  </div>
                  {heatmap.data[day].map((val, i) => {
                    const intensity = val / maxVal;
                    const bg = `rgba(255, 193, 7, ${intensity})`;
                    return (
                      <div
                        key={i}
                        title={`${val} пушей`}
                        className="h-5 w-5 rounded-sm text-[9px] text-center transition-all duration-200 hover:scale-110 hover:ring-1 hover:ring-yellow-400"
                        style={{
                          background: bg,
                          color: intensity > 0.6 ? "white" : "#222",
                        }}
                      >
                        {val > 0 ? val : ""}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm text-center">
            Нет данных для отображения
          </p>
        )}
      </div>

      {/* История пушей */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">
          🕓 История push-уведомлений
        </h3>
        {history?.length ? (
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left">Дата</th>
                <th className="p-2 text-left">Кампания</th>
                <th className="p-2 text-left">Текст</th>
                <th className="p-2 text-left">Статус</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-2">{h.date}</td>
                  <td className="p-2">{h.campaign}</td>
                  <td className="p-2">{h.text}</td>
                  <td className="p-2">{h.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-sm">История отсутствует</p>
        )}
      </div>

      {/* Инсайты */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">💡 Инсайты</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
          {insights?.topics && (
            <li>
              Реагирует на темы:{" "}
              <span className="font-medium">{insights.topics}</span>
            </li>
          )}
          {topPush && (
            <li>
              Топ push:{" "}
              <span className="font-medium">{topPush.text}</span> — OR:{" "}
              {topPush.or}, CTR: {topPush.ctr}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Communications;
