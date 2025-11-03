export const overviewAllData = {
  meta: {
    scope: "all",
    updatedAt: "2025-11-03T09:00:00Z",
  },
  kpi: {
    totalProfiles: 523400,
    activeProfiles: 385200,
    newProfiles: 28400,
    churnedProfiles: 4200,
    avgRevenue: 64000,
    ltv: 2400000,
    arpu: 29000,
    retention30: 84,
    retention90: 68,
  },
  charts: {
    newClients: [
      { month: "Янв", count: 22000 },
      { month: "Фев", count: 26000 },
      { month: "Мар", count: 31000 },
      { month: "Апр", count: 34000 },
      { month: "Май", count: 37000 },
      { month: "Июн", count: 35500 },
      { month: "Июл", count: 38000 },
      { month: "Авг", count: 41000 },
      { month: "Сен", count: 39000 },
      { month: "Окт", count: 40500 },
    ],
    sourceDistribution: [
      { source: "CRM", value: 180000 },
      { source: "Мобильное приложение", value: 220000 },
      { source: "Веб", value: 123400 },
    ],
    cityDistribution: [
      { city: "Алматы", count: 200000 },
      { city: "Астана", count: 160000 },
      { city: "Шымкент", count: 80000 },
      { city: "Другие", count: 83400 },
    ],
  },
  insights: [
    "Активная база выросла на 7% за квартал.",
    "Самый высокий прирост в Алматы и Астане.",
    "Сегмент Digital увеличился на 12%.",
  ],
};
