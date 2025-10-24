import React from "react";
import { useNavigate } from "react-router-dom";
import { clients } from "../api/clients";

const Profiles = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-semibold mb-4">Client Profiles</h1>
      <table className="min-w-full bg-white shadow rounded-xl border-collapse">
        <thead className="bg-yellow-50 text-yellow-700">
          <tr>
            <th className="p-3 text-left">ИИН</th>
            <th className="p-3 text-left">Имя</th>
            <th className="p-3 text-left">Регион</th>
            <th className="p-3 text-left">Сегмент</th>
            <th className="p-3 text-left">Статус</th>
            <th className="p-3 text-left">ARPU</th>
            <th className="p-3 text-left">Последняя активность</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((p) => (
            <tr
              key={p.id}
              className="border-t hover:bg-yellow-100 cursor-pointer transition-colors"
              onClick={() => navigate(`/profiles/${p.iin}`)}
            >
              <td className="p-3 font-mono">{p.iin}</td>
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.region}</td>
              <td className="p-3">{p.segment}</td>
              <td className={`p-3 font-medium ${p.status === "Active" ? "text-green-600" : "text-red-500"}`}>
                {p.status}
              </td>
              <td className="p-3">{p.arpu.toLocaleString()}</td>
              <td className="p-3 text-gray-500">{p.lastActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profiles;
