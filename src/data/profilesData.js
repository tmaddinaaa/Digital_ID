export const profilesData = [

    // 🧍 Профиль АЛМАТА
  // --------------------------------------
  {
    ac_id: 100031731766,
    name: "Жұмағали Алмат",
    iin: "910517300070",
    city: "АЛМАТЫ",
    segment: "HIGH_VALUE_ALL_ROUND", 

    // 🧾 Базовая информация
    basicInfo: {
      fio: "Жұмағали Алмат",
      iin: "910517300070",
      birthDate: "1991-05-17",
      age: 34,
      gender: "Мужской",
      photoUrl: "/images/almat.jpeg", 
      contacts: { phone: "+77016561717" },
      language: "Русский", 
      citizenship: "Казахстан",
      residenceCity: "Алматы",
      activeCity: "Алматы",
      device: { os: "iOS", model: "iPhone16,1", lastLogin: "2025-11-06" },
      status: "Активен",
      isNew: false,
      involvement: "Высокая", 
      maritalStatus: "Женат",
      hasChildren: true,
      childrenCount: 2,
      mobileAppRegistrationDate: "2022-07-11",
      bankRegistrationDate: "2024-07-04",
      mobileAppRegistrationDuration: "3 года 4 месяца",
      bankRegistrationDuration: "1 год 4 месяца",
      hasIP: false,
      hasLegalEntity: false,
      hasAlatauCityInvest: false,
      hasAlatauCityGarant: false,
      serviceChannel: "МП",
      lifeStatus: "Актуальный",
      isPrivate: false,
    },

    // 💰 Финансовая информация --Нету данных--
    financialInfo: {
      revenue: { margin: 120000, commission: 18000, interest: 32000 },
      ltv: 10000,
      clv: 12000,
    },

    geoMaps: {
      all_points: "/maps/almat_all_points.html",
      clustered_points: "/maps/almat_clustered_points.html",
      heatmap: "/maps/almat_heatmap.html",
      time_heatmap: "/maps/almat_time_heatmap.html",
      time_points: "/maps/almat_time_points.html",
    },


    // 🏦 Продукты
    products: {
      bankProducts: {
        title: "Продукты Банка",
        items: [
          {
            type: "Депозит",
            name: "Baytaq",
            term: "6 мес",
            interestRate: "14,5%",
            sum: 5378500, 
            status: "Активен",
          },
          {
            type: "Карта",
            cardType: "MasterCard",
            level: "Premium",
            openDate: "2025-02-13",
            validUntil: "2028-02-14",
            sum: 273907.390,
            status: "Активна",
            isSalaryCard: true
          },
        ],
        history: [],
      },
      groupProducts: {
        title: "Продукты Группы",
        alatauInvest: [],
        alatauGarant: [],
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
        date: "2025-11-06",
        text: "Вам начислен штраф",
        topic: "Штраф",
        status: "Прочитан",
      },
      history: [
        { date: "2025-10-13", text: "Алмат, это предложение только для вас", campaign: "Рекламный", status: "Прочитан" },
        { date: "2025-10-09", text: "Будьте осторожны!", campaign: "Информационный", status: "Клик" },
        { date: "2025-09-14", text: "Будьте осторожны!", campaign: "Информационный", status: "Клик" },
        {date: "2025-10-31", text: "Платите за коммуналку быстро и удобно!", campaign: "Триггерный",  status: "Прочитан"},
      ],
      frequency: { daily: 0.1, weekly: 1, monthly: 3},
      conversion: { overall: "65%", clickRate: "42%" },
      insights: { topics: "платежи" },
      topPush: { text: "Платите за коммуналку быстро и удобно!", or: "82%", ctr: "46%" },
      heatmap: {
  data: {
    Пн: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Вт: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Ср: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Чт: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Пт: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Сб: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Вс: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      { id: 1, date: "2025-10-05", type: "Снятие в банкомате", amount: 90000, location: "AlatauCityBank Алматы", currency: "₸" },
      { id: 2, date: "2025-10-10", type: "Перевод между своими счетами", amount: 150000, location: "Мобильное приложение", currency: "₸" },
      { id: 3, date: "2025-10-12", type: "P2P перевод", amount: 10000, location: "Мобильное приложение", currency: "₸" },
      { id: 4, date: "2025-10-15", type: "P2P перевод", amount: 3000, location: "Мобильное приложение", currency: "₸" },
      { id: 5, date: "2025-10-18", type: "Retail", amount: 12000, location: "Magnum", currency: "₸" },
      { id: 6, date: "2025-10-20", type: "Retail", amount: 54000, location: "Kaspi.kz", currency: "₸" },
        ],
      },

      insights: [],
    },

    // 💵 Финансовые привычки (добавлены expenseFlow и paymentMethods)
    financialHabits: {
      salaryDay: "30-31 число",
      salarySource: "АО «AlatauCityBank»",
      allocation: [
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
        { stage: "Оплата жилья и коммуналки", amount: 20 },
        { stage: "Снятия наличных", amount: 15 },
        { stage: "Покупки и траты", amount: 20 },
        { stage: "Пополнение депозита", amount: 10 },
        { stage: "Свободные средства", amount: 5 },
      ],

      paymentMethods: [
        { name: "Kaspi", value: 24 }, 
        { name: "Apple Pay", value: 44 },
        { name: "Google Pay", value: 0 },
        { name: "Карта банка", value: 42 },
      ],
    },
    tags: [],
    // 👨‍👩‍👧‍👦 Родственники
    relatedClients: [
      {
        name: "Менетаева Алтыншаш Куанышевна",
        type: "Супруга",
        birthDate: "1996-01-08",
        jointProducts: ["-"],
        status: "Активен",
        lastActivity: "2025-11-06",
        ac_id: 100031196251,
      },
      {
        name: "Алматкызы Азэль",
        type: "Дочь",
        birthDate: "2021-07-03",
        jointProducts: [],
        status: "Неактивен",
        lastActivity: [],
        ac_id: [],
      },
      {
        name: "Алматкызы Хадиджа",
        type: "Дочь",
        birthDate: "2024-10-14",
        jointProducts: [],
        status: "Неактивен",
        lastActivity: [],
        ac_id: [],
      },
    ],
  },

    // 🧍 Профиль АЛТЫНШАШ
  // --------------------------------------
  {
    ac_id: 100031196251,
    name: "Менетаева Алтыншаш Куанышевна",
    iin: "960108450643",
    city: "АЛМАТЫ",
    segment: "DEPOSIT_ORIENTED",

    // 🧾 Базовая информация
    basicInfo: {
      fio: "Менетаева Алтыншаш Куанышевна",
      iin: "960108450643",
      birthDate: "1996-01-08",
      age: 29,
      gender: "Женский",
      photoUrl: "/images/altynwaw.jpeg", 
      contacts: { phone: "+77021477496" },
      language: "Русский",
      citizenship: "Казахстан",
      residenceCity: "Алматы",
      activeCity: "Алматы",
      device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-06" },
      status: "Активен",
      isNew: true,
      maritalStatus: "Замужем",
      hasChildren: true,
      childrenCount: 2,
      mobileAppRegistrationDate: "2025-06-27",
      bankRegistrationDate: "2025-06-27",
      mobileAppRegistrationDuration: "4 месяца",
      bankRegistrationDuration: "4 месяца",
      hasIP: true,
      hasLegalEntity: false,
      hasAlatauCityInvest: false,
      hasAlatauCityGarant: false,
      serviceChannel: "МП",
      lifeStatus: "Актуальный",
      isPrivate: false,
    },

    // 💰 Финансовая информация --Нету данных--
    financialInfo: {
      revenue: { margin: 120000, commission: 18000, interest: 32000 },
      ltv: 24000,
      clv: 29000,
    },

    geoMaps: {
      all_points: "/maps/altynwaw_all_points.html",
      clustered_points: "/maps/altynwaw_clustered_points.html",
      heatmap: "/maps/altynwaw_heatmap.html",
      time_heatmap: "/maps/altynwaw_time_heatmap.html",
      time_points: "/maps/altynwaw_time_points.html",
    },

    // 🏦 Продукты
    products: {
      bankProducts: {
        title: "Продукты Банка",
        items: [
          {
            type: "Карта",
            cardType: "MasterCard",
            level: "Gold",
            openDate: "2025-06-27",
            validUntil: "2028-06-28",
            sum: 308336.450,
            status: "Активна",
            isSalaryCard: false
          },
        ],
        history: [
          {
            type: "Карта",
            cardType: "MasterCard",
            sum: 0,
            openDate: "2021-01-15",
            closeDate: "2023-01-15",
            status: "Закрыта",
          },
        ],
      },
      groupProducts: {
        title: "Продукты Группы",
        alatauInvest: [],
        alatauGarant: [],
      },
      mlIndicators: {
        churnRisk: "Нет",
        creditInterest: "Да",
        depositInterest: "Да",
      },
    },

    communications: {
      pushStatus: "Да",
      campaigns: "Да",
      lastPush: {
        date: "2025-11-01",
        text: "Пора в отпуск!",
        topic: "Бонусы",
        status: "Клик",
      },
      history: [
        { date: "2025-11-01", text: "Часто бываете в кафе и ресторанах? Получайте 3% бонусами!", campaign: "Рекламный", status: "Прочитан" },
        { date: "2025-11-01", text: "Бонусы за доставку еды!", campaign: "Рекламный", status: "Прочитан" },
        { date: "2025-11-01", text: "Следите за здоровьем с бонусами", campaign: "Рекламный", status: "Прочитан" },
      ],
      frequency: { daily: 0.3, weekly: 2, monthly: 6 },
      conversion: { overall: "65%", clickRate: "42%" },
      insights: { topics: "бонусы, акции" },
      topPush: { text: "Следите за здоровьем с бонусами", or: "82%", ctr: "46%" },
      heatmap: {
  data: {
    Пн: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Вт: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Ср: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Чт: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Пт: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Сб: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    Вс: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
          { mcc: "Детские товары", share: "22%" },
          { mcc: "Бакалейные магазины и товары", share: "30%" },
          { mcc: "Медецинские услуги", share: "10%" },
          { mcc: "АЗС", share: "25%" },
          { mcc: "Маркетплейсы", share: "13%" },
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

      insights: [],
    },

    // 💵 Финансовые привычки (добавлены expenseFlow и paymentMethods)
    financialHabits: {
      salaryDay: "",
      salarySource: "", 
      allocation: [
        "Покупки (63%)",
        "Переводы друзьям (20%)",
        "Прочее (17%)",
      ],
      mlInsight: "Около 63% карточных поступлений идут на Retail",
      habitScore: 85,

      expenseFlow: [
        { stage: "Снятия наличных", amount: 15 },
        { stage: "Покупки и траты", amount: 78 },
        { stage: "Свободные средства", amount: 55 },
      ],

      paymentMethods: [
        { name: "Kaspi QR", value: 0 }, 
        { name: "Apple Pay", value: 83 },
        { name: "Google Pay", value: 0 },
        { name: "Карта банка", value: 17 },
      ],
    },
    tags: [],
    // 👨‍👩‍👧‍👦 Родственники
    relatedClients: [
      {
        name: "Жұмағали Алмат",
        type: "Супруг",
        birthDate: "1991-05-17",
        jointProducts: ["-"],
        status: "Активен",
        lastActivity: "2025-11-06",
        ac_id: 100031731766,
      },
      {
        name: "Алматкызы Азэль",
        type: "Дочь",
        birthDate: "2021-07-03",
        jointProducts: [],
        status: "Неактивен",
        lastActivity: [],
        ac_id: [],
      },
      {
        name: "Алматкызы Хадиджа",
        type: "Дочь",
        birthDate: "2024-10-14",
        jointProducts: [],
        status: "Неактивен",
        lastActivity: [],
        ac_id: [],
      },
    ],
  },
];
