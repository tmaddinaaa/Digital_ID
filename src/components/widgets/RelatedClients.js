import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Calendar, Link2, Activity } from "lucide-react";

const RelatedClients = ({ related }) => {
  const navigate = useNavigate();

  if (!related?.length)
    return (
      <div className="text-gray-500 bg-white rounded-xl shadow p-6 text-center">
        Нет связанных клиентов
      </div>
    );

  const handleClick = (ac_id) => navigate(`/profiles/${ac_id}`);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-5">
      {/* Заголовок */}
      <div className="flex items-center gap-2 mb-2">
        <Users className="w-5 h-5 text-yellow-600" />
        <h2 className="text-lg font-semibold text-gray-800">
           Связанные клиенты
        </h2>
      </div>

      {/* Список карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((r, index) => (
          <div
            key={index}
            onClick={() => handleClick(r.ac_id)}
            className="group bg-gray-50 hover:bg-yellow-50 transition-all cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-yellow-300 shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            {/* Имя + тип связи */}
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-md font-semibold text-gray-900 group-hover:text-yellow-800 transition-colors">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <Link2 className="w-4 h-4 text-gray-400" />
                  {r.type || "—"}
                </p>
              </div>
              {r.photoUrl ? (
                <img
                  src={r.photoUrl}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 font-medium border border-yellow-200">
                  {r.name?.charAt(0) || "?"}
                </div>
              )}
            </div>

            {/* Данные */}
            <div className="text-sm text-gray-700 space-y-1">
              <p className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>
                  <strong>Дата рождения:</strong> {r.birthDate || "—"}
                </span>
              </p>
              <p>
                <strong>Совместные продукты:</strong>{" "}
                {r.jointProducts?.length
                  ? r.jointProducts.join(", ")
                  : "—"}
              </p>
              <p className="flex items-center gap-1">
                <Activity className="w-4 h-4 text-gray-400" />
                <span>
                  <strong>Активность:</strong> {r.lastActivity || "—"}
                </span>
              </p>
            </div>

            {/* Статус */}
            <div className="mt-3">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  r.status === "Активен"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {r.status || "—"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Примечание */}
      <div className="text-xs text-gray-400 mt-3 text-center">
        🔗 Нажмите на карточку, чтобы открыть профиль клиента
      </div>
    </div>
  );
};

export default RelatedClients;
