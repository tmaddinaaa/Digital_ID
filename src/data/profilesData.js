export const profilesData = [
  // --------------------------------------
  // 🧍 Профиль Ерлана
  // --------------------------------------
  {
    ac_id: 1000123,
    name: "Айдаров Ерлан Сакенович",
    iin: "900512301234",
    city: "Алматы",
    segment: "Credit-oriented",

    // 🧾 Базовая информация
    basicInfo: {
      fio: "Айдаров Ерлан Сакенович",
      iin: "900512301234",
      birthDate: "1990-05-12",
      age: 35,
      gender: "Мужской",
      photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      contacts: { phone: "+7 701 123 4567" },
      language: "Русский",
      citizenship: "Казахстан",
      residenceCity: "Алматы",
      activeCity: "Алматы",
      device: { os: "iOS", model: "iPhone 14 Pro", lastLogin: "2025-10-27" },
      status: "Активен",
      isNew: false,
      involvement: "Высокая",
      maritalStatus: "Женат",
      hasChildren: true,
      childrenCount: 2,
      mobileAppRegistrationDate: "2022-08-25",
      bankRegistrationDate: "2018-06-10",
      mobileAppRegistrationDuration: "3 года 2 месяца",
      bankRegistrationDuration: "7 лет 4 месяца",
      hasIP: false,
      hasAlatauCityInvest: true,
      hasAlatauCityGarant: true,
      serviceChannel: "МП",
      lifeStatus: "Жив",
      isPrivate: true,
    },

    // 💰 Финансовая информация
    financialInfo: {
      revenue: { margin: 1200000, commission: 180000, interest: 320000 },
      ltv: 2400000,
      clv: 2900000,
    },

    // 🏦 Продукты
    products: {
      bankProducts: {
        title: "Продукты Банка",
        items: [
          {
            type: "Кредит",
            name: "Потребительский кредит",
            term: "36 мес",
            interestRate: "14%",
            sum: 1500000,
            openDate: "2024-03-01",
            years: 3,
            status: "Погашается",
            overdue: false,
            overdueSum: 0,
          },
          {
            type: "Депозит",
            name: "Депозит Акыл",
            term: "12 мес",
            interestRate: "9%",
            sum: 500000,
            status: "Активен",
          },
          {
            type: "Карта",
            cardType: "Visa",
            level: "Gold",
            category: "Premium Travel",    
            bonusLevel: "5%",
            openDate: "2023-05-20",
            validUntil: "2026-05-20",
            sum: 200000,
            status: "Активна",
            isSalaryCard: true
          },
        ],
        history: [
          {
            type: "Кредит",
            name: "Кредит наличными 2022",
            sum: 800000,
            openDate: "2022-03-01",
            closeDate: "2023-02-28",
            status: "Закрыт",
          },
          {
            type: "Карта",
            cardType: "MasterCard",
            sum: 0,
            openDate: "2021-01-15",
            closeDate: "2023-01-15",
            status: "Закрыта",
          },
          {
            type: "Депозит",
            name: "Депозит Стандарт",
            sum: 300000,
            openDate: "2020-02-01",
            closeDate: "2021-02-01",
            status: "Закрыт",
          },
        ],
      },
      groupProducts: {
        title: "Продукты Группы",
        alatauInvest: [
          {
            name: "Инвестпортфель №1",
            type: "Инвестиции",
            portfolioType: "Крупный",
            openDate: "2024-06-10",
            status: "Активен",
          },
        ],
        alatauGarant: [
          {
            name: "КАСКО Premium",
            type: "Страхование авто",
            openDate: "2025-01-15",
            status: "Активен",
          },
        ],
      },
      mlIndicators: {
        churnRisk: "Нет",
        creditInterest: "Да",
        depositInterest: "Да",
      },
    },

    // 📲 Коммуникации
    communications: {
      pushStatus: "Да",
      campaigns: "Да",
      lastPush: {
        date: "2025-10-20",
        text: "Верни 10% за покупки в Small",
        topic: "Бонусы",
        status: "Прочитан",
      },
      history: [
        { date: "2025-10-20", text: "Бонус 10%", campaign: "Loyalty", status: "Прочитан" },
        { date: "2025-09-15", text: "Вклад под 11%", campaign: "Deposit", status: "Клик" },
        { date: "2025-08-28", text: "Обновите приложение", campaign: "Service", status: "Игнор" },
      ],
      frequency: { daily: 2.3, weekly: 12, monthly: 46, interval: "11 часов" },
      conversion: { overall: "65%", clickRate: "42%" },
      insights: { topics: "бонусы, акции" },
      topPush: { text: "Верни 10% за покупки в Small", or: "82%", ctr: "46%" },
      heatmap: {
  data: {
    Пн: [2, 1, 0, 0, 0, 0, 0, 1, 3, 5, 2, 1, 0, 0, 0, 0, 1, 4, 2, 0, 0, 0, 0, 0],
    Вт: [1, 0, 0, 0, 0, 0, 0, 2, 4, 6, 3, 2, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0],
    Ср: [0, 0, 0, 0, 0, 0, 1, 3, 5, 7, 3, 1, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0],
    Чт: [0, 0, 0, 0, 0, 0, 0, 1, 4, 8, 5, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    Пт: [1, 0, 0, 0, 0, 0, 0, 3, 6, 9, 7, 3, 1, 0, 0, 0, 0, 2, 3, 1, 0, 0, 0, 0],
    Сб: [0, 0, 0, 0, 0, 0, 1, 2, 5, 6, 4, 2, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
    Вс: [0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 2, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  },
},
    },

    // 💳 Поведение
    behavior: {
      operations: {
        atmWithdrawals: { freq: 3, avgSum: 90000, trend: "+10%" },
        ownTransfers: { freq: 5, avgSum: 150000 },
        internalTransfers: { freq: 2, avgSum: 60000 },
        externalTransfers: { freq: 3, avgSum: 180000 },
        internationalTransfers: { freq: 1, avgSum: 250000, trend: "+5%" },
        retailPurchases: [
          { mcc: "Travel", share: "22%" },
          { mcc: "Food", share: "30%" },
          { mcc: "Health", share: "10%" },
          { mcc: "Entertainment", share: "25%" },
          { mcc: "Education", share: "13%" },
        ],
        transactions: [
      { id: 1, date: "2025-10-05", type: "Снятие в банкомате", amount: 90000, location: "Kaspi Bank Алматы", currency: "₸" },
      { id: 2, date: "2025-10-10", type: "Перевод между своими счетами", amount: 150000, location: "Мобильное приложение", currency: "₸" },
      { id: 3, date: "2025-10-12", type: "Перевод клиенту банка", amount: 80000, location: "Онлайн-банк", currency: "₸" },
      { id: 4, date: "2025-10-15", type: "Международный перевод", amount: 320000, location: "SWIFT", currency: "₸" },
      { id: 5, date: "2025-10-18", type: "Покупка по карте", amount: 12000, location: "Magnum", currency: "₸" },
      { id: 6, date: "2025-10-20", type: "Онлайн-покупка", amount: 54000, location: "Kaspi.kz", currency: "₸" },
      { id: 7, date: "2025-10-22", type: "Инвестиции", amount: 150000, location: "Alatau Invest", currency: "₸" },
        ],
      },

      insights: [
        "Перед праздниками рост MCC Gifts +45%",
        "После 25 числа — рост снятий через АТМ +30%",
      ],
    },

    // 💵 Финансовые привычки (добавлены expenseFlow и paymentMethods)
    financialHabits: {
      salaryDay: "25 число",
      salarySource: "АО «КазМинБанк»",
      allocation: [
        "Оплата кредита (25%)",
        "Пополнение депозита (20%)",
        "Коммуналка (10%)",
        "Покупки (25%)",
        "Переводы друзьям (10%)",
        "Прочее (10%)",
      ],
      mlInsight: "70% дохода распределяется в первые 2 дня после зарплаты",
      habitScore: 84,

      expenseFlow: [
        { stage: "Зарплата", amount: 100 },
        { stage: "Погашение кредитов", amount: 25 },
        { stage: "Оплата жилья и коммуналки", amount: 20 },
        { stage: "Снятия наличных", amount: 15 },
        { stage: "Покупки и траты", amount: 20 },
        { stage: "Пополнение депозита", amount: 10 },
        { stage: "Инвестиции", amount: 5 },
        { stage: "Свободные средства", amount: 5 },
      ],

      paymentMethods: [
        { name: "Kaspi", value: 45 },
        { name: "Apple Pay", value: 25 },
        { name: "Google Pay", value: 15 },
        { name: "Карта банка", value: 10 },
        { name: "Наличные", value: 5 },
      ],
    },
    tags: [
    "путешествия",
    "активный пользователь",
    "инвестиции",
    "онлайн-покупки",
    "премиум клиент",
    ],
    // 👨‍👩‍👧‍👦 Родственники
    relatedClients: [
      {
        name: "Айдарова Алия Муратовна",
        type: "Супруга",
        birthDate: "1992-03-08",
        jointProducts: ["Ипотека"],
        status: "Активен",
        lastActivity: "2025-10-25",
        ac_id: 1000124,
      },
      {
        name: "Айдаров Тимур Ерланович",
        type: "Сын",
        birthDate: "2015-07-10",
        jointProducts: [],
        status: "Активен",
        lastActivity: "2025-10-26",
        ac_id: 1000125,
      },
      {
        name: "Айдарова Лаура Ерлановна",
        type: "Дочь",
        birthDate: "2018-11-12",
        jointProducts: [],
        status: "Активен",
        lastActivity: "2025-10-26",
        ac_id: 1000126,
      },
    ],
  },

  // --------------------------------------
  // 👧 Профиль Лауры (дочери)
  // --------------------------------------
  {
    ac_id: 1000126,
    name: "Айдарова Лаура Ерлановна",
    iin: "181118301234",
    city: "Алматы",
    segment: "Семейный",

    basicInfo: {
      fio: "Айдарова Лаура Ерлановна",
      iin: "181118301234",
      birthDate: "2018-11-12",
      age: 7,
      gender: "Женский",
      photoUrl: "https://randomuser.me/api/portraits/women/66.jpg",
      contacts: {},
      language: "Русский",
      citizenship: "Казахстан",
      residenceCity: "Алматы",
      activeCity: "Алматы",
      device: { os: "Android", model: "Samsung A52", lastLogin: "2025-10-28" },
      status: "Активен",
      isNew: false,
      involvement: "Низкая",
      maritalStatus: "Не замужем",
      hasChildren: false,
      childrenCount: 0,
      serviceChannel: "МП",
      lifeStatus: "Жив",
      isPrivate: false,
    },

    financialInfo: { revenue: { margin: 0, commission: 0, interest: 0 }, ltv: 0, clv: 0 },

    products: {
      bankProducts: { title: "Продукты Банка", items: [], history: [] },
      groupProducts: { title: "Продукты Группы", alatauInvest: [], alatauGarant: [] },
      mlIndicators: { churnRisk: "Нет", creditInterest: "Нет", depositInterest: "Нет" },
    },

    communications: {
      pushStatus: "Нет",
      campaigns: "Нет",
      lastPush: {
        date: "2025-09-10",
        text: "Детская викторина: выиграй приз!",
        topic: "Развлечения",
        status: "Прочитан",
      },
      history: [
        { date: "2025-09-10", text: "Викторина для детей", campaign: "Kids", status: "Прочитан" },
      ],
      frequency: { daily: 0.3, weekly: 2, monthly: 8, interval: "3 дня" },
      conversion: { overall: "50%", clickRate: "20%" },
      insights: { topics: "детские активности, игры" },
      topPush: { text: "Участвуй в детской акции", or: "68%", ctr: "22%" },
    },

    behavior: {
      operations: {
        retailPurchases: [
          { mcc: "Toys", share: "40%" },
          { mcc: "Books", share: "30%" },
          { mcc: "Entertainment", share: "30%" },
        ],
      },
      insights: ["Активность родителей через детскую карту в выходные."],
    },

    financialHabits: {
      salaryDay: "",
      salarySource: "",
      allocation: ["Подарки от родителей (70%)", "Игрушки (20%)", "Прочее (10%)"],
      mlInsight: "Детская карта используется в основном по выходным.",
      habitScore: 60,

      expenseFlow: [
        { stage: "Подарки", amount: 70 },
        { stage: "Игрушки и развлечения", amount: 20 },
        { stage: "Прочее", amount: 10 },
      ],

      paymentMethods: [
        { name: "Kaspi Kids", value: 60 },
        { name: "Наличные", value: 25 },
        { name: "Подарочные карты", value: 15 },
      ],
    },
    tags: [],
    relatedClients: [
      {
        name: "Айдаров Ерлан Сакенович",
        type: "Отец",
        birthDate: "1990-05-12",
        jointProducts: ["Детская карта"],
        status: "Активен",
        lastActivity: "2025-10-27",
        ac_id: 1000123,
      },
      {
        name: "Айдарова Алия Муратовна",
        type: "Мать",
        birthDate: "1992-03-08",
        jointProducts: ["Детская страховка"],
        status: "Активен",
        lastActivity: "2025-10-27",
        ac_id: 1000124,
      },
    ],
  },
];
