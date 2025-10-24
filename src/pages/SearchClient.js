import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clients } from "../api/clients";

const SearchClient = () => {
  const [iin, setIIN] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setError("");
    setLoading(true);
    const client = clients.find(p => p.iin === iin.trim());
    setLoading(false);

    if (client) {
      navigate(`/profiles/${client.iin}`);
    } else {
      setError("Клиент не найден");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">🔍 Поиск клиента</h2>
      <div className="flex gap-3 mb-5">
        <input
          type="text"
          value={iin}
          onChange={(e) => setIIN(e.target.value)}
          placeholder="Введите ИИН..."
          className="border border-gray-300 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg"
        >
          Найти
        </button>
      </div>
      {loading && <p className="text-gray-500">Загрузка...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SearchClient;
