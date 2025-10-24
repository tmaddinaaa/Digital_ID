// src/components/ProfileCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ client }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow hover:shadow-lg transition rounded-xl p-4 cursor-pointer"
      onClick={() => navigate(`/profiles/${client.iin}`)}
    >
      <h2 className="text-lg font-semibold mb-1">{client.name}</h2>
      <p className="text-gray-600 text-sm mb-1">Регион: {client.region}</p>
      <p className="text-gray-600 text-sm mb-1">Тип: {client.type}</p>
      <p className="text-gray-600 text-sm mb-1">Сегмент: {client.segment}</p>
      <p className="text-gray-500 text-xs mt-2">ИИН: {client.iin}</p>
    </div>
  );
};

export default ProfileCard;
