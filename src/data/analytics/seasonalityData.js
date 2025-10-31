export const seasonalityData = {
  meta: { period: "2025-01-01 — 2025-10-31", updatedAt: "2025-10-31" },
  charts: {
    cohort: [
      { cohort: "Янв", M1: 100, M2: 85, M3: 70, M4: 60 },
      { cohort: "Фев", M1: 100, M2: 80, M3: 66, M4: 55 },
      { cohort: "Мар", M1: 100, M2: 83, M3: 69, M4: 52 },
    ],
    funnel: [
      { stage: "Регистрация", value: 1000 },
      { stage: "Активен", value: 800 },
      { stage: "Совершил покупку", value: 500 },
      { stage: "Повторная активность", value: 300 },
    ],
    path: {
      nodes: [
        { name: "Вход" },
        { name: "Главная" },
        { name: "Продукт" },
        { name: "Оплата" },
        { name: "Выход" },
      ],
      links: [
        { source: 0, target: 1, value: 1200 },
        { source: 1, target: 2, value: 800 },
        { source: 2, target: 3, value: 500 },
        { source: 3, target: 4, value: 450 },
      ],
    },
    monthlyOperations: [
      { month: "Янв", atm: 32000, transfers: 28000, retail: 41000 },
      { month: "Фев", atm: 30000, transfers: 26000, retail: 42000 },
      { month: "Мар", atm: 34000, transfers: 31000, retail: 45000 },
      { month: "Апр", atm: 33000, transfers: 29500, retail: 47000 },
      { month: "Май", atm: 31000, transfers: 29000, retail: 46000 },
    ],
  },
  insights: [
    "Летом ↑ travel +40 %, ↓ ATM –12 %",
    "Перед праздниками рост трат MCC Gifts +45%",
  ],
};
