export const pushData = {
  meta: { period: "2025-01–10", segment: "Премиум" },
  charts: {
    pushPerformance: {
      sent: 520000,
      delivered: 480000,
      opened: 210000,
      ctr: 40.3,
      conversion: 18.4,
    },
    ctrByHour: [
      { hour: "08", ctr: 12 },
      { hour: "12", ctr: 28 },
      { hour: "18", ctr: 41 },
      { hour: "20", ctr: 48 },
      { hour: "22", ctr: 45 },
    ],
    ctrHeatmap: [
      { day: "Пн", "08": 10, "12": 25, "18": 40, "20": 45, "22": 42 },
      { day: "Вт", "08": 11, "12": 26, "18": 39, "20": 47, "22": 41 },
      { day: "Ср", "08": 12, "12": 28, "18": 42, "20": 50, "22": 46 },
    ],
  },
  insights: [
    "Push в 20–21 ч дают CTR +18 % у клиентов 25–34 лет",
    "Средний CTR выше на Android (+5%)",
    "Клиенты Астаны открывают push чаще, чем Алматы (+12%)",
  ],
};
