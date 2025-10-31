export const overviewData = {
  meta: {
    filtersApplied: {
      city: "Алматы",
      segment: "Премиум",
      device: "iOS",
      period: "2025-01-01 — 2025-10-31",
    },
    updatedAt: "2025-10-31T10:00:00Z",
  },
  kpi: {
    totalProfiles: 128530,
    activeProfiles: 82410,
    newProfiles: 2150,
    churnedProfiles: 560,
    avgRevenue: 64000,
    ltv: 2400000,
    arpu: 29000,
    retention30: 82,
    retention90: 63,
  },
  charts: {
    newClients: [
      { month: "Май", count: 1500 },
      { month: "Июн", count: 1800 },
      { month: "Июл", count: 2200 },
      { month: "Авг", count: 2500 },
      { month: "Сен", count: 2300 },
      { month: "Окт", count: 2150 },
    ],
    sourceDistribution: [
      { source: "CRM", value: 42000 },
      { source: "Мобильное приложение", value: 56000 },
      { source: "Веб", value: 30530 },
    ],
    cityDistribution: [
      { city: "Алматы", count: 56000 },
      { city: "Астана", count: 40000 },
      { city: "Шымкент", count: 15000 },
      { city: "Другие", count: 17450 },
    ],
  },
  insights: [
    "Сегмент «Digital активные» растёт на 12%",
    "Low spenders теряют активность (-5%)",
    "Пользователи iOS чаще открывают push (+8%)",
  ],
};
