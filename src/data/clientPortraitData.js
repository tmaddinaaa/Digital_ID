// 📊 Расширенные мок-данные для страницы "Портрет клиента по продукту"

export const clientPortraitData = [
  {
    product: "Депозиты",

    baseMetrics: {
      avgAge: 39,
      genderShare: { male: 47, female: 53 },
      maritalStatus: "Женат / Замужем",
      avgIncome: 750000,
      education: "Высшее",
    },

    financial: {
      balance: 1200000,
      avgDepositTerm: 14, // месяцев
      avgReturnRate: 6.3, // %
      incomeFromClient: 87000, // доход банку в среднем
      productShare: 28, // % клиентов с этим продуктом
    },

    digital: {
      devices: [
        { name: "iOS", value: 40000 },
        { name: "Android", value: 50000 },
        { name: "Web", value: 10000 },
      ],
      mobileShare: 90,
      appUsageFreq: 4.8, // раз/неделю
      avgSessionTime: 7.5, // мин
    },

    behavior: {
      rfmScore: 8.1,
      frequency: 5.2, // транзакций в месяц
      avgTransaction: 65000,
      tenureMonths: 60,
      preferredMcc: [
        { name: "Retail", value: 35 },
        { name: "ATM", value: 30 },
        { name: "Transfers", value: 20 },
        { name: "Investments", value: 15 },
      ],
    },

    geoSeasonal: {
      topCities: [
        { name: "Алматы", value: 42 },
        { name: "Астана", value: 28 },
        { name: "Шымкент", value: 15 },
        { name: "Другие", value: 15 },
      ],
      peakMonth: "Декабрь",
      engagementTrend: [
        { month: "Янв", value: 6.2 },
        { month: "Фев", value: 6.4 },
        { month: "Мар", value: 6.8 },
        { month: "Апр", value: 7.1 },
        { month: "Май", value: 7.5 },
        { month: "Июн", value: 7.8 },
        { month: "Июл", value: 8.0 },
        { month: "Авг", value: 7.9 },
        { month: "Сен", value: 8.3 },
        { month: "Окт", value: 8.5 },
        { month: "Ноя", value: 8.6 },
        { month: "Дек", value: 8.9 },
      ],
    },

    ml: {
      ltv: 2200000,
      churnProbability: 0.12,
      retentionScore: 8.7,
      propensityToBuy: 0.63,
      clvGrowthRate: 0.18,
      aiComment: "Клиенты стабильны, низкий риск оттока. Высокая склонность к пополнениям и перекрёстным продуктам.",
    },

    insight:
      "Женщины 35–44 из Алматы активно пополняют депозиты в конце месяца. Часто используют iOS, вовлечённость растёт в декабре.",
  },

  {
    product: "Кредиты",

    baseMetrics: {
      avgAge: 33,
      genderShare: { male: 62, female: 38 },
      maritalStatus: "Холост / Незамужем",
      avgIncome: 580000,
      education: "Средне-специальное",
    },

    financial: {
      balance: 400000,
      avgLoanTerm: 24,
      avgRate: 14.2,
      incomeFromClient: 125000,
      productShare: 35,
    },

    digital: {
      devices: [
        { name: "iOS", value: 30000 },
        { name: "Android", value: 60000 },
        { name: "Web", value: 10000 },
      ],
      mobileShare: 85,
      appUsageFreq: 3.5,
      avgSessionTime: 6.2,
    },

    behavior: {
      rfmScore: 7.1,
      frequency: 4.1,
      avgTransaction: 95000,
      tenureMonths: 42,
      preferredMcc: [
        { name: "Retail", value: 25 },
        { name: "Transfers", value: 40 },
        { name: "ATM", value: 25 },
        { name: "Auto", value: 10 },
      ],
    },

    geoSeasonal: {
      topCities: [
        { name: "Астана", value: 37 },
        { name: "Алматы", value: 33 },
        { name: "Шымкент", value: 20 },
        { name: "Другие", value: 10 },
      ],
      peakMonth: "Сентябрь",
      engagementTrend: [
        { month: "Янв", value: 4.5 },
        { month: "Фев", value: 4.8 },
        { month: "Мар", value: 5.0 },
        { month: "Апр", value: 5.1 },
        { month: "Май", value: 5.4 },
        { month: "Июн", value: 5.7 },
        { month: "Июл", value: 6.0 },
        { month: "Авг", value: 5.9 },
        { month: "Сен", value: 6.1 },
        { month: "Окт", value: 6.3 },
        { month: "Ноя", value: 6.2 },
        { month: "Дек", value: 6.4 },
      ],
    },

    ml: {
      ltv: 1450000,
      churnProbability: 0.27,
      retentionScore: 6.5,
      propensityToBuy: 0.44,
      clvGrowthRate: 0.12,
      aiComment: "Средний риск оттока. Возможен рост CLV при предложении реструктуризации или кэшбэк-карты.",
    },

    insight:
      "Мужчины 25–40, Android-доминирующий сегмент. Пики активности — в сентябре, высокий объём переводов и покупок.",
  },

  {
    product: "Карты",

    baseMetrics: {
      avgAge: 31,
      genderShare: { male: 50, female: 50 },
      maritalStatus: "Холост / Незамужем",
      avgIncome: 680000,
      education: "Высшее",
    },

    financial: {
      balance: 250000,
      avgSpendPerMonth: 180000,
      cashbackShare: 0.72,
      incomeFromClient: 64000,
      productShare: 60,
    },

    digital: {
      devices: [
        { name: "iOS", value: 45000 },
        { name: "Android", value: 50000 },
        { name: "Web", value: 5000 },
      ],
      mobileShare: 95,
      appUsageFreq: 6.2,
      avgSessionTime: 8.1,
    },

    behavior: {
      rfmScore: 8.8,
      frequency: 10.3,
      avgTransaction: 37000,
      tenureMonths: 48,
      preferredMcc: [
        { name: "Retail", value: 45 },
        { name: "Online", value: 25 },
        { name: "Transfers", value: 20 },
        { name: "ATM", value: 10 },
      ],
    },

    geoSeasonal: {
      topCities: [
        { name: "Алматы", value: 44 },
        { name: "Астана", value: 30 },
        { name: "Шымкент", value: 16 },
        { name: "Другие", value: 10 },
      ],
      peakMonth: "Ноябрь",
      engagementTrend: [
        { month: "Янв", value: 7.4 },
        { month: "Фев", value: 7.6 },
        { month: "Мар", value: 7.8 },
        { month: "Апр", value: 8.0 },
        { month: "Май", value: 8.2 },
        { month: "Июн", value: 8.3 },
        { month: "Июл", value: 8.5 },
        { month: "Авг", value: 8.7 },
        { month: "Сен", value: 8.8 },
        { month: "Окт", value: 9.0 },
        { month: "Ноя", value: 9.2 },
        { month: "Дек", value: 9.3 },
      ],
    },

    ml: {
      ltv: 2100000,
      churnProbability: 0.08,
      retentionScore: 9.1,
      propensityToBuy: 0.74,
      clvGrowthRate: 0.23,
      aiComment: "Высокая вовлечённость, минимальный риск оттока. Рекомендовано предлагать премиум-подписки.",
    },

    insight:
      "Онлайн-покупатели 25–35 лет, активно используют Pay-сервисы и кэшбэк. Основной канал — мобильное приложение.",
  },
];
