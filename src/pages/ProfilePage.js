import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  const { iin } = useParams();
  const navigate = useNavigate();

  // ⚙️ Имитация данных (в реальном проекте можно тянуть через API)
  const profiles = [
    {
      id: 1,
      iin: "990112345678",
      msisdn: "77011234567",
      name: "Айгерим С.",
      segment: "High Value",
      status: "Active",
      region: "Алматы",
      arpu: 4500,
      lastActivity: "2025-10-15",
      email: "aigerim@example.com",
      deviceId: "dev12345",
      events: [
        { date: "2025-10-01", type: "Регистрация" },
        { date: "2025-10-05", type: "Покупка" },
        { date: "2025-10-10", type: "Вход в приложение" },
      ],
      products: ["Product A", "Product B"],
    },
    {
      id: 2,
      iin: "990298765432",
      msisdn: "77029876543",
      name: "Данияр К.",
      segment: "Mass Market",
      status: "Inactive",
      region: "Астана",
      arpu: 2300,
      lastActivity: "2025-09-28",
      email: "daniyar@example.com",
      deviceId: "dev98765",
      events: [
        { date: "2025-09-01", type: "Регистрация" },
        { date: "2025-09-10", type: "Вход в приложение" },
      ],
      products: ["Product C"],
    },
    
  ];

  const profile = profiles.find((p) => p.iin === iin);

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <p className="text-xl mb-4">Профиль с ИИН {iin} не найден</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md transition"
        >
          Назад
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <div className="flex-1 p-6 overflow-auto">
        {/* Кнопка назад */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Назад к списку профилей</span>
        </button>

        {/* Заголовок */}
        <h1 className="text-2xl font-semibold mb-4">
          Карточка клиента — {profile.name}
        </h1>

        {/* Основная информация */}
        <div className="bg-white shadow rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium mb-4 text-yellow-700">
            Общая информация
          </h2>
          <div className="grid grid-cols-2 gap-y-3">
            <p><strong>ИИН:</strong> {profile.iin}</p>
            <p><strong>MSISDN:</strong> {profile.msisdn}</p>
            <p><strong>Регион:</strong> {profile.region}</p>
            <p><strong>Сегмент:</strong> {profile.segment}</p>
            <p>
              <strong>Статус:</strong>{" "}
              <span
                className={`font-medium ${
                  profile.status === "Active" ? "text-green-600" : "text-red-500"
                }`}
              >
                {profile.status}
              </span>
            </p>
            <p><strong>ARPU:</strong> {profile.arpu.toLocaleString()} ₸</p>
            <p><strong>Последняя активность:</strong> {profile.lastActivity}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Device ID:</strong> {profile.deviceId}</p>
          </div>
        </div>

        {/* Секция событий */}
        <div className="bg-white shadow rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium mb-4 text-yellow-700">
            История событий
          </h2>
          <table className="min-w-full border-collapse text-gray-700">
            <thead className="bg-yellow-50 text-yellow-700">
              <tr>
                <th className="p-3 text-left">Дата</th>
                <th className="p-3 text-left">Тип события</th>
              </tr>
            </thead>
            <tbody>
              {profile.events.map((event, index) => (
                <tr key={index} className="border-t hover:bg-yellow-100">
                  <td className="p-3">{event.date}</td>
                  <td className="p-3">{event.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Секция продуктов */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4 text-yellow-700">
            Продукты клиента
          </h2>
          {profile.products.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {profile.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Нет активных продуктов</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
