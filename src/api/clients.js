// src/data/clients.js

export const clients = [
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
