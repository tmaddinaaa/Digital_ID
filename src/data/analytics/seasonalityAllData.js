export const seasonalityAllData = {
  meta: { scope: "all", updatedAt: "2025-11-03T09:00:00Z" },
  charts: {
    cohort: [
      { cohort: "Янв", M1: 100, M2: 85, M3: 70, M4: 61 },
      { cohort: "Фев", M1: 100, M2: 82, M3: 68, M4: 59 },
      { cohort: "Мар", M1: 100, M2: 84, M3: 71, M4: 63 },
    ],
    funnel: [
      { stage: "Регистрация", value: 1000 },
      { stage: "Активен", value: 820 },
      { stage: "Оформление продукта", value: 530 },
      { stage: "Оформление следующего продукта", value: 350 },
    ],
    path: {
      nodes: [
        { name: "Главная" },
        { name: "Продукт" },
        { name: "Оплата" },
        { name: "Подтверждение" },
      ],
      links: [
        { source: 0, target: 1, value: 1400 },
        { source: 1, target: 2, value: 900 },
        { source: 2, target: 3, value: 700 },
      ],
    },
  },
  insights: [
    "Снижение удержания наблюдается в апреле–мае.",
    "Пик покупательской активности в марте.",
    "На 12% увеличился возврат клиентов после push-кампаний.",
  ],
};
