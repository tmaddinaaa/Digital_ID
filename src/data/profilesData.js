export const profilesData = [

    // 🧍 Профиль АЛМАТА
  // --------------------------------------
  {
    ac_id: 100031731766,
    name: "Жұмағали Алмат",
    iin: "910517300070",
    city: "АЛМАТЫ",
    segment: "Ценные клиенты", 

    // 🧾 Базовая информация
    basicInfo: {
      fio: "Жұмағали Алмат",
      iin: "910517300070",
      birthDate: "1991-05-17",
      age: 34,
      gender: "Мужской",
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
        status: "Доставлен",
      },
      history: [
        { date: "2025-10-13", text: "Алмат, это предложение только для вас", campaign: "Рекламный", status: "Доставлен" },
        { date: "2025-10-09", text: "Будьте осторожны!", campaign: "Информационный", status: "Доставлен" },
        { date: "2025-09-14", text: "Будьте осторожны!", campaign: "Информационный", status: "Клик" },
        {date: "2025-10-31", text: "Платите за коммуналку быстро и удобно!", campaign: "Триггерный",  status: "Доставлен"},
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
        { stage: "Поступления", amount: 100 },
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
    segment: "Депозитные клиенты",

    // 🧾 Базовая информация
    basicInfo: {
      fio: "Менетаева Алтыншаш Куанышевна",
      iin: "960108450643",
      birthDate: "1996-01-08",
      age: 29,
      gender: "Женский",
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
        { date: "2025-11-01", text: "Часто бываете в кафе и ресторанах? Получайте 3% бонусами!", campaign: "Рекламный", status: "Клик" },
        { date: "2025-11-01", text: "Бонусы за доставку еды!", campaign: "Рекламный", status: "Клик" },
        { date: "2025-11-01", text: "Следите за здоровьем с бонусами", campaign: "Рекламный", status: "Клик" },
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

{
  ac_id: 100073512018,
  name: "Баймуханов Асхат Серикович",
  iin: "970716300212",
  city: "АЛМАТЫ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Баймуханов Асхат Серикович",
    iin: "970716300212",
    birthDate: "1997-07-16",
    age: 28,
    gender: "Мужской",
    contacts: { phone: "+77019884566" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-03-22",
    bankRegistrationDate: "2021-07-15",
    mobileAppRegistrationDuration: "3 года 7 месяцев",
    bankRegistrationDuration: "4 года 4 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 160000, commission: 25000, interest: 40000 },
    ltv: 700000,
    clv: 950000,
  },

  geoMaps: {
    all_points: "/maps/askhat_all_points.html",
    clustered_points: "/maps/askhat_clustered_points.html",
    heatmap: "/maps/askhat_heatmap.html",
    time_heatmap: "/maps/askhat_time_heatmap.html",
    time_points: "/maps/askhat_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1200000,
          openDate: "2024-05-12",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "15%",
          sum: 800000,
          status: "Активен",
        },
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Gold",
          openDate: "2023-11-05",
          validUntil: "2027-11-05",
          sum: 95000.30,
          status: "Активна",
          isSalaryCard: true
        },
      ],
      history: [],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-09-12",
          status: "Активен",
        },
      ],
      alatauGarant: [],
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Асхат, ваш депозит Baytaq приносит до 15% годовых",
      topic: "Депозит",
      status: "Доставлен",
    },
    history: [
      { date: "2025-11-08", text: "Ваш депозит Baytaq приносит 15% годовых", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-10-18", text: "Онлайн Кредит до 8 млн без визита", campaign: "Credit", status: "Клик" },
      { date: "2025-09-30", text: "Инвестиционный счёт — новые возможности", campaign: "Invest", status: "Доставлен" },
    ],
    frequency: { daily: 0.25, weekly: 1.2, monthly: 4 },
    conversion: { overall: "55%", clickRate: "33%" },
    insights: { topics: "депозиты, кредиты, инвестиции" },
    topPush: { text: "Онлайн Кредит до 8 млн без визита", or: "68%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 40000, trend: "+2%" },
      ownTransfers: { freq: 3, avgSum: 60000 },
      internalTransfers: { freq: 1, avgSum: 50000 },
      externalTransfers: { freq: 2, avgSum: 70000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Entertainment", share: "20%" },
        { mcc: "Services", share: "15%" },
        { mcc: "Education", share: "10%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 18000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-07", type: "Оплата штрафа", amount: 12000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "P2P перевод", amount: 20000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-22", type: "Пополнение депозита", amount: 60000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Чередует кредитные и депозитные операции",
      "Регулярно пользуется P2P и онлайн-сервисами",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «DigitalCraft Solutions»",
    allocation: [
      "Погашение кредита (20%)",
      "Пополнение депозита (20%)",
      "Покупки (30%)",
      "Коммуналка и штрафы (10%)",
      "Прочее (20%)",
    ],
    mlInsight: "Финансовое поведение сбалансированное — кредит, сбережения и текущие расходы в равной пропорции",
    habitScore: 78,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Погашение кредита", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Покупки и повседневные расходы", amount: 30 },
      { stage: "Коммуналка и штрафы", amount: 10 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "холост",
    "смешанный доход",
    "активные транзакции",
    "депозит и кредит",
    "инвестиции"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512017,
  name: "Тлеубаев Ербол Каирбекович",
  iin: "731222300519",
  city: "АЛМАТЫ",
  segment: "Высокий доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тлеубаев Ербол Каирбекович",
    iin: "731222300519",
    birthDate: "1973-12-22",
    age: 51,
    gender: "Мужской",
    contacts: { phone: "+77017776655" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15 Pro Max", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-11-15",
    bankRegistrationDate: "2017-06-01",
    mobileAppRegistrationDuration: "4 года 11 месяцев",
    bankRegistrationDuration: "8 лет 5 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 620000, commission: 80000, interest: 190000 },
    ltv: 3200000,
    clv: 3800000,
  },

  geoMaps: {
    all_points: "/maps/erbol_all_points.html",
    clustered_points: "/maps/erbol_clustered_points.html",
    heatmap: "/maps/erbol_heatmap.html",
    time_heatmap: "/maps/erbol_time_heatmap.html",
    time_points: "/maps/erbol_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15,3%",
          sum: 7000000,
          status: "Активен",
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 2500000,
          openDate: "2024-05-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-02-20",
          validUntil: "2027-02-20",
          sum: 285000.90,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Рефинансирование",
          name: "Рефинансирование 2019",
          term: "60 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 4000000,
          openDate: "2019-03-01",
          closeDate: "2023-03-01",
          status: "Закрыт",
        }
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2023-09-01",
          status: "Активен",
        }
      ],
      alatauGarant: [
        {
          name: "КАСКО Premium",
          type: "Страхование авто",
          openDate: "2025-03-15",
          status: "Активен",
        },
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-15",
          status: "Активен",
        }
      ],
    },
    mlIndicators: {
      churnRisk: "Низкий",
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
      text: "Ербол, для вас доступна повышенная ставка по депозиту Baytaq",
      topic: "Депозит",
      status: "Клик",
    },
    history: [
      {
        date: "2025-11-06",
        text: "Повышенная ставка по Baytaq для премиум-клиентов",
        campaign: "Deposit",
        status: "Клик",
      },
      {
        date: "2025-10-22",
        text: "Инвестиционный счёт: подбор портфеля под ваш профиль",
        campaign: "Invest",
        status: "Доставлен",
      },
      {
        date: "2025-09-30",
        text: "Продлите КАСКО и ОГПО онлайн",
        campaign: "Garant",
        status: "Доставлен",
      }
    ],
    frequency: { daily: 0.25, weekly: 1.4, monthly: 4 },
    conversion: { overall: "68%", clickRate: "43%" },
    insights: { topics: "депозиты, инвестиции, страховка, премиум-сервис" },
    topPush: {
      text: "Повышенная ставка по Baytaq для премиум-клиентов",
      or: "82%",
      ctr: "46%",
    },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 90000, trend: "-3%" },
      ownTransfers: { freq: 3, avgSum: 180000 },
      internalTransfers: { freq: 2, avgSum: 120000 },
      externalTransfers: { freq: 2, avgSum: 150000 },
      internationalTransfers: { freq: 1, avgSum: 300000 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Travel", share: "25%" },
        { mcc: "Fuel", share: "15%" },
        { mcc: "Restaurants", share: "15%" },
        { mcc: "Services", share: "20%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 32000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 26000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-14", type: "Инвестиции", amount: 150000, location: "AlatauCity Invest", currency: "₸" },
        { id: 4, date: "2025-10-20", type: "Оплата страховки", amount: 60000, location: "AlatauCity Garant", currency: "₸" },
        { id: 5, date: "2025-10-27", type: "Пополнение депозита", amount: 120000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Регулярно пополняет депозит и инвестиционный счёт",
      "Использует страховые продукты и онлайн-сервисы, поведение стабильное и премиальное",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "ТОО «Construction Group KZ»",
    allocation: [
      "Пополнение депозита (25%)",
      "Инвестиции (20%)",
      "Коммуналка и услуги (10%)",
      "Покупки и lifestyle (25%)",
      "Страховка и налоги (10%)",
      "Прочее (10%)",
    ],
    mlInsight: "Сначала формирует сбережения, затем расходует на комфорт и путешествия",
    habitScore: 90,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки и lifestyle", amount: 25 },
      { stage: "Коммуналка и услуги", amount: 10 },
      { stage: "Страховка и налоги", amount: 10 },
      { stage: "Свободные средства", amount: 10 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 15 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 15 },
    ],
  },

  tags: [
    "высокий доход",
    "премиум клиент",
    "инвестиции",
    "депозит Baytaq",
    "страхование",
    "стабильная активность"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Тлеубаева Гульмира Кайратовна",
      type: "Супруга",
      birthDate: "1975-03-05",
      jointProducts: ["Совместный депозит", "КАСКО Premium", "ОГПО"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100073512016,
    },
    {
      name: "Тлеубаев Айдос Ерболович",
      type: "Сын",
      birthDate: "2004-07-18",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
    {
      name: "Тлеубаева Адина Ерболовна",
      type: "Дочь",
      birthDate: "2007-11-02",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
  ],
},
{
  ac_id: 100073512020,
  name: "Жанибеков Рауан Асетович",
  iin: "930304300145",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жанибеков Рауан Асетович",
    iin: "930304300145",
    birthDate: "1993-03-04",
    age: 32,
    gender: "Мужской",
    contacts: { phone: "+77015553322" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2022-05-10",
    bankRegistrationDate: "2020-02-18",
    mobileAppRegistrationDuration: "3 года 6 месяцев",
    bankRegistrationDuration: "5 лет 9 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 210000, commission: 30000, interest: 90000 },
    ltv: 980000,
    clv: 1250000,
  },

  geoMaps: {
    all_points: "/maps/rauan_all_points.html",
    clustered_points: "/maps/rauan_clustered_points.html",
    heatmap: "/maps/rauan_heatmap.html",
    time_heatmap: "/maps/rauan_time_heatmap.html",
    time_points: "/maps/rauan_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 3200000,
          openDate: "2024-03-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1500000,
          openDate: "2023-06-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Gold",
          openDate: "2023-02-20",
          validUntil: "2027-02-20",
          sum: 112000.60,
          status: "Активна",
          isSalaryCard: true,
        },
      ],
      history: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "15%",
          sum: 400000,
          openDate: "2022-01-10",
          closeDate: "2022-07-10",
          status: "Закрыт",
        },
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-04-05",
          status: "Активен",
        },
      ],
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Слабый",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Рауан, погасите часть онлайн-кредита без комиссии",
      topic: "Кредит",
      status: "Клик",
    },
    history: [
      { date: "2025-11-06", text: "Досрочное погашение без комиссии", campaign: "Credit", status: "Клик" },
      { date: "2025-10-20", text: "Страховка ОГПО онлайн за 2 минуты", campaign: "Garant", status: "Доставлен" },
      { date: "2025-09-15", text: "Оплачивайте коммуналку в приложении", campaign: "Service", status: "Доставлен" },
    ],
    frequency: { daily: 0.35, weekly: 2, monthly: 5 },
    conversion: { overall: "57%", clickRate: "38%" },
    insights: { topics: "кредиты, сервисные уведомления" },
    topPush: { text: "Досрочное погашение без комиссии", or: "74%", ctr: "40%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 50000, trend: "+3%" },
      ownTransfers: { freq: 4, avgSum: 80000 },
      internalTransfers: { freq: 2, avgSum: 60000 },
      externalTransfers: { freq: 3, avgSum: 90000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Fuel", share: "15%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 23000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-08", type: "Коммуналка", amount: 14000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-12", type: "P2P перевод", amount: 18000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-19", type: "Оплата штрафа", amount: 9000, location: "eGov", currency: "₸" },
        { id: 5, date: "2025-10-25", type: "Пополнение кредита", amount: 60000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Сильно завязан на кредитные продукты",
      "Регулярно пользуется онлайн-сервисами для платежей и P2P",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "20 число",
    salarySource: "ТОО «CityLogistics KZ»",
    allocation: [
      "Погашение кредитов (35%)",
      "Покупки (25%)",
      "Коммуналка и штрафы (10%)",
      "Переводы семье (10%)",
      "Прочее (20%)",
    ],
    mlInsight: "Высокая кредитная нагрузка, приоритет — своевременное погашение",
    habitScore: 72,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Погашение кредитов", amount: 35 },
      { stage: "Покупки и повседневные траты", amount: 25 },
      { stage: "Коммуналка и штрафы", amount: 10 },
      { stage: "Переводы семье", amount: 10 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 15 },
    ],
  },

  tags: [
    "кредитный клиент",
    "Gold карта",
    "онлайн-платежи",
    "своевременное погашение"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Жанибекова Айдана Руслановна",
      type: "Супруга",
      birthDate: "1994-08-11",
      jointProducts: ["ОГПО"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100073512021,
    },
    {
      name: "Жанибекова Алуа Рауановна",
      type: "Дочь",
      birthDate: "2018-05-03",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
  ],
},
{
  ac_id: 100073512019,
  name: "Сатыбалдиева Айжан Нургалиевна",
  iin: "950612400257",
  city: "АЛМАТЫ",
  segment: "Депозитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сатыбалдиева Айжан Нургалиевна",
    iin: "950612400257",
    birthDate: "1995-06-12",
    age: 30,
    gender: "Женский",
    contacts: { phone: "+77017770044" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-09-05",
    bankRegistrationDate: "2021-03-18",
    mobileAppRegistrationDuration: "3 года 2 месяца",
    bankRegistrationDuration: "4 года 8 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 150000, commission: 22000, interest: 60000 },
    ltv: 650000,
    clv: 820000,
  },

  geoMaps: {
    all_points: "/maps/aizhan_all_points.html",
    clustered_points: "/maps/aizhan_clustered_points.html",
    heatmap: "/maps/aizhan_heatmap.html",
    time_heatmap: "/maps/aizhan_time_heatmap.html",
    time_points: "/maps/aizhan_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1200000,
          status: "Активен",
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-06-10",
          validUntil: "2027-06-10",
          sum: 68000.40,
          status: "Активна",
          isSalaryCard: true,
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
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Айжан, продлите депозит Baytaq онлайн за 1 минуту",
      topic: "Депозит",
      status: "Клик",
    },
    history: [
      { date: "2025-11-07", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Клик" },
      { date: "2025-10-15", text: "Получайте до 15% годовых по Baytaq", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-05", text: "Оплачивайте коммунальные в приложении", campaign: "Service", status: "Доставлен" },
    ],
    frequency: { daily: 0.25, weekly: 1.2, monthly: 3 },
    conversion: { overall: "63%", clickRate: "40%" },
    insights: { topics: "депозиты, онлайн-оплаты" },
    topPush: { text: "Продление депозита Baytaq", or: "78%", ctr: "42%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 50000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Beauty", share: "15%" },
        { mcc: "Utilities", share: "20%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 16000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 12000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Пополнение депозита", amount: 50000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Фокус на сбережениях через депозит Baytaq",
      "Платежи и покупки проходят через мобильное приложение",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «FinConsult Group»",
    allocation: [
      "Пополнение депозита (30%)",
      "Покупки (30%)",
      "Коммуналка (15%)",
      "Прочее (25%)",
    ],
    mlInsight: "Регулярно откладывает фиксированную долю дохода на депозит",
    habitScore: 82,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Покупки и повседневные расходы", amount: 30 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 25 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "депозит Baytaq",
    "депозитный клиент",
    "онлайн-платежи",
    "молодой без семьи"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512016,
  name: "Тлеубаева Гульмира Кайратовна",
  iin: "750305400126",
  city: "АЛМАТЫ",
  segment: "Высокий доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тлеубаева Гульмира Кайратовна",
    iin: "750305400126",
    birthDate: "1975-03-05",
    age: 50,
    gender: "Женский",
    contacts: { phone: "+77015557788" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14 Pro", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-06-12",
    bankRegistrationDate: "2018-09-05",
    mobileAppRegistrationDuration: "4 года 5 месяцев",
    bankRegistrationDuration: "7 лет 2 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 480000, commission: 60000, interest: 150000 },
    ltv: 2400000,
    clv: 3100000,
  },

  geoMaps: {
    all_points: "/maps/gulmira_all_points.html",
    clustered_points: "/maps/gulmira_clustered_points.html",
    heatmap: "/maps/gulmira_heatmap.html",
    time_heatmap: "/maps/gulmira_time_heatmap.html",
    time_points: "/maps/gulmira_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15,5%",
          sum: 5200000,
          status: "Активен",
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-05-05",
          validUntil: "2027-05-05",
          sum: 340000.00,
          status: "Активна",
          isSalaryCard: true
        },
      ],
      history: [
        {
          type: "Кредит",
          name: "Рефинансирование 2020",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 3000000,
          openDate: "2020-03-01",
          closeDate: "2023-03-01",
          status: "Закрыт",
        },
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-03-10",
          status: "Активен",
        },
      ],
      alatauGarant: [
        {
          name: "КАСКО Premium",
          type: "Страхование авто",
          openDate: "2025-04-05",
          status: "Активен",
        },
        {
          name: "ОГПО",
          type: "Страхование ответственности",
          openDate: "2025-04-05",
          status: "Активен",
        },
      ],
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Гульмира, увеличьте сумму депозита Baytaq — получите +0.5% к ставке",
      topic: "Депозит",
      status: "Клик",
    },
    history: [
      { date: "2025-11-06", text: "Бонусная ставка по Baytaq", campaign: "Deposit", status: "Клик" },
      { date: "2025-10-18", text: "КАСКО Premium продлено", campaign: "Garant", status: "Доставлен" },
      { date: "2025-09-25", text: "Инвестиционный счёт: новые возможности", campaign: "Invest", status: "Доставлен" },
    ],
    frequency: { daily: 0.2, weekly: 1, monthly: 3 },
    conversion: { overall: "70%", clickRate: "40%" },
    insights: { topics: "депозит, страхование, инвестиции" },
    topPush: { text: "Бонусная ставка по Baytaq", or: "80%", ctr: "42%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 80000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 100000 },
      externalTransfers: { freq: 1, avgSum: 70000 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Travel", share: "30%" },
        { mcc: "Health", share: "20%" },
        { mcc: "Services", share: "25%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-10", type: "Retail", amount: 25000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-13", type: "Оплата страховки", amount: 45000, location: "Alatau Garant", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Инвестиции", amount: 90000, location: "Alatau Invest", currency: "₸" },
      ],
    },
    insights: [
      "Регулярно оплачивает страховые услуги и делает инвестиционные переводы",
      "Активно использует карту Premium для повседневных покупок",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "1 число",
    salarySource: "АО «KazEnergy Service»",
    allocation: [
      "Пополнение депозита (25%)",
      "Покупки (25%)",
      "Коммуналка (10%)",
      "Инвестиции (20%)",
      "Прочее (20%)",
    ],
    mlInsight: "Высокая доля сбережений и инвестиций, рациональное распределение бюджета",
    habitScore: 89,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Покупки и услуги", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Коммуналка", amount: 10 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: ["премиум клиент", "инвестиции", "страхование", "депозит", "высокий доход"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Тлеубаев Ербол Каирбекович",
      type: "Супруг",
      birthDate: "1973-12-22",
      jointProducts: ["Совместный депозит", "КАСКО"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100073512017,
    },
  ],
},
{
  ac_id: 100073512015,
  name: "Кабылов Марат Ерланович",
  iin: "940521300418",
  city: "АСТАНА",
  segment: "Ценные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Кабылов Марат Ерланович",
    iin: "940521300418",
    birthDate: "1994-05-21",
    age: 31,
    gender: "Мужской",
    contacts: { phone: "+77019992233" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "iOS", model: "iPhone 15 Pro", lastLogin: "2025-11-07" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-10-05",
    bankRegistrationDate: "2020-07-18",
    mobileAppRegistrationDuration: "3 года 1 месяц",
    bankRegistrationDuration: "5 лет 4 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 260000, commission: 48000, interest: 90000 },
    ltv: 1300000,
    clv: 1650000,
  },

  geoMaps: {
    all_points: "/maps/marat_all_points.html",
    clustered_points: "/maps/marat_clustered_points.html",
    heatmap: "/maps/marat_heatmap.html",
    time_heatmap: "/maps/marat_time_heatmap.html",
    time_points: "/maps/marat_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15,2%",
          sum: 1800000,
          status: "Активен",
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43,5%",
          sum: 1200000,
          openDate: "2024-02-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-03-01",
          validUntil: "2027-03-01",
          sum: 165000.80,
          status: "Активна",
          isSalaryCard: true,
        },
      ],
      history: [
        {
          type: "Рефинансирование",
          name: "Рефинансирование 2021",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 2000000,
          openDate: "2021-05-15",
          closeDate: "2023-05-15",
          status: "Закрыт",
        },
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-06-20",
          status: "Активен",
        },
      ],
      alatauGarant: [
        {
          name: "КАСКО",
          type: "Страхование авто",
          openDate: "2025-04-01",
          status: "Активен",
        },
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-04-01",
          status: "Активен",
        },
      ],
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Да",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-05",
      text: "Марат, увеличьте сумму на депозите Baytaq и получите повышенную ставку",
      topic: "Депозит",
      status: "Клик",
    },
    history: [
      {
        date: "2025-11-05",
        text: "Повышенная ставка по Baytaq для вас",
        campaign: "Deposit",
        status: "Клик",
      },
      {
        date: "2025-10-18",
        text: "Инвестиционный счёт: новые возможности",
        campaign: "Invest",
        status: "Доставлен",
      },
      {
        date: "2025-09-22",
        text: "КАСКО и ОГПО онлайн без визита",
        campaign: "Garant",
        status: "Доставлен",
      },
    ],
    frequency: { daily: 0.3, weekly: 1.8, monthly: 4 },
    conversion: { overall: "63%", clickRate: "41%" },
    insights: { topics: "депозиты, инвестиции, страховка" },
    topPush: {
      text: "Повышенная ставка по Baytaq для вас",
      or: "81%",
      ctr: "44%",
    },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 60000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 120000 },
      internalTransfers: { freq: 2, avgSum: 60000 },
      externalTransfers: { freq: 2, avgSum: 90000 },
      internationalTransfers: { freq: 1, avgSum: 250000 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Fuel", share: "15%" },
        { mcc: "Services", share: "15%" },
        { mcc: "Utilities", share: "15%" },
      ],
      transactions: [
        {
          id: 1,
          date: "2025-10-04",
          type: "Retail",
          amount: 22000,
          location: "Magnum",
          currency: "₸",
        },
        {
          id: 2,
          date: "2025-10-08",
          type: "Коммуналка",
          amount: 18000,
          location: "eGov",
          currency: "₸",
        },
        {
          id: 3,
          date: "2025-10-12",
          type: "P2P перевод",
          amount: 30000,
          location: "Мобильное приложение",
          currency: "₸",
        },
        {
          id: 4,
          date: "2025-10-18",
          type: "Пополнение депозита",
          amount: 70000,
          location: "Мобильное приложение",
          currency: "₸",
        },
        {
          id: 5,
          date: "2025-10-25",
          type: "Инвестиции",
          amount: 120000,
          location: "AlatauCity Invest",
          currency: "₸",
        },
      ],
    },
    insights: [
      "Стабильно пополняет депозит и инвестиционный счёт",
      "Использует онлайн-сервисы для платежей и переводов",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "АО «AstanaTech Group»",
    allocation: [
      "Пополнение депозита (20%)",
      "Инвестиции (15%)",
      "Коммуналка (10%)",
      "Покупки (30%)",
      "Страховка и услуги (10%)",
      "Прочее (15%)",
    ],
    mlInsight: "Сначала формирует сбережения и инвестиции, затем расходует на lifestyle",
    habitScore: 83,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Коммунальные платежи", amount: 10 },
      { stage: "Покупки и траты", amount: 30 },
      { stage: "Страховка и услуги", amount: 10 },
      { stage: "Свободные средства", amount: 15 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "совместный депозит",
    "инвестиции",
    "страхование",
    "активный цифровой клиент",
    "ценный клиент"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Кабылова Сауле Еркиновна",
      type: "Супруга",
      birthDate: "1996-09-27",
      jointProducts: ["Совместный депозит"],
      status: "Активен",
      lastActivity: "2025-11-07",
      ac_id: 100073512014,
    },
  ],
},
{
  ac_id: 100073512013,
  name: "Орманов Денис Русланович",
  iin: "010221300457",
  city: "КАРАГАНДА",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Орманов Денис Русланович",
    iin: "010221300457",
    birthDate: "2001-02-21",
    age: 24,
    gender: "Мужской",
    contacts: { phone: "+77018882255" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung Galaxy S23 FE", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-06-10",
    bankRegistrationDate: "2021-09-05",
    mobileAppRegistrationDuration: "3 года 5 месяцев",
    bankRegistrationDuration: "4 года 2 месяца",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 75000, commission: 15000, interest: 28000 },
    ltv: 260000,
    clv: 320000,
  },

  geoMaps: {
    all_points: "/maps/denis_all_points.html",
    clustered_points: "/maps/denis_clustered_points.html",
    heatmap: "/maps/denis_heatmap.html",
    time_heatmap: "/maps/denis_time_heatmap.html",
    time_points: "/maps/denis_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Silver",
          openDate: "2023-03-15",
          validUntil: "2027-03-15",
          sum: 32000.75,
          status: "Активна",
          isSalaryCard: false
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "18 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43,5%",
          sum: 600000,
          openDate: "2025-01-20",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
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
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Денис, оплачивайте услуги онлайн и получайте бонусы по карте",
      topic: "Карты",
      status: "Доставлен",
    },
    history: [
      { date: "2025-11-06", text: "Получайте бонусы за онлайн-оплаты", campaign: "Card", status: "Доставлен" },
      { date: "2025-10-18", text: "Онлайн Кредит до 8 млн без визита", campaign: "Credit", status: "Клик" },
      { date: "2025-09-12", text: "Оплатите коммунальные в приложении", campaign: "Service", status: "Доставлен" },
    ],
    frequency: { daily: 0.5, weekly: 3, monthly: 8 },
    conversion: { overall: "52%", clickRate: "34%" },
    insights: { topics: "мелкие платежи, онлайн-оплаты, кредит" },
    topPush: { text: "Онлайн Кредит до 8 млн без визита", or: "70%", ctr: "38%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,4,3,2,1,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,4,2,2,1,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,1,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,2,1,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,4,5,4,2,1,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,1,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 15000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 2, avgSum: 18000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "35%" },
        { mcc: "Retail", share: "30%" },
        { mcc: "Transport", share: "20%" },
        { mcc: "Services", share: "15%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 6000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-05", type: "P2P перевод", amount: 8000, location: "Мобильное приложение", currency: "₸" },
        { id: 3, date: "2025-10-09", type: "Коммуналка", amount: 9000, location: "eGov", currency: "₸" },
        { id: 4, date: "2025-10-14", type: "Retail", amount: 7000, location: "Magnum", currency: "₸" },
        { id: 5, date: "2025-10-21", type: "P2P перевод", amount: 5000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Высокая частота мелких транзакций",
      "Основные операции — P2P и небольшие покупки, маржинальность низкая",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "12-15 число",
    salarySource: "Фриланс (SMM / дизайн)",
    allocation: [
      "Покупки и траты (45%)",
      "Коммуналка (15%)",
      "Переводы друзьям (15%)",
      "Оплата штрафов и налогов (5%)",
      "Прочее (20%)",
    ],
    mlInsight: "Доход поступает нерегулярно, траты распределены небольшими суммами в течение месяца",
    habitScore: 58,

    expenseFlow: [
      { stage: "Поступление дохода", amount: 100 },
      { stage: "Покупки и повседневные траты", amount: 45 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Переводы друзьям", amount: 15 },
      { stage: "Штрафы и налоги", amount: 5 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "AlatauCityBank QR", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "активный пользователь",
    "малые чеки",
    "онлайн-операции",
    "кредитный продукт с низкой нагрузкой"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512014,
  name: "Кабылова Сауле Еркиновна",
  iin: "960927400372",
  city: "АСТАНА",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Кабылова Сауле Еркиновна",
    iin: "960927400372",
    birthDate: "1996-09-27",
    age: 29,
    gender: "Женский",
    contacts: { phone: "+77012233445" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "iOS", model: "iPhone 15", lastLogin: "2025-11-07" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-12-01",
    bankRegistrationDate: "2020-09-15",
    mobileAppRegistrationDuration: "2 года 11 месяцев",
    bankRegistrationDuration: "5 лет 2 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 180000, commission: 35000, interest: 55000 },
    ltv: 950000,
    clv: 1200000,
  },

  geoMaps: {
    all_points: "/maps/saule_all_points.html",
    clustered_points: "/maps/saule_clustered_points.html",
    heatmap: "/maps/saule_heatmap.html",
    time_heatmap: "/maps/saule_time_heatmap.html",
    time_points: "/maps/saule_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1200000,
          status: "Активен",
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-07-12",
          validUntil: "2027-07-12",
          sum: 85000.50,
          status: "Активна",
          isSalaryCard: true,
        },
      ],
      history: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 700000,
          openDate: "2022-06-01",
          closeDate: "2024-06-01",
          status: "Закрыт",
        },
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-02-11",
          status: "Активен",
        },
      ],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование авто",
          openDate: "2025-04-01",
          status: "Активен",
        },
      ],
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-04",
      text: "Сауле, обновите страховку ОГПО до конца месяца",
      topic: "Страхование",
      status: "Клик",
    },
    history: [
      { date: "2025-11-04", text: "Обновите страховку ОГПО", campaign: "Garant", status: "Клик" },
      { date: "2025-10-15", text: "Проверьте доходность по Baytaq", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-08", text: "Инвестиции без риска — Alatau Invest", campaign: "Invest", status: "Доставлен" },
    ],
    frequency: { daily: 0.3, weekly: 1.5, monthly: 4 },
    conversion: { overall: "58%", clickRate: "36%" },
    insights: { topics: "депозит, страхование, инвестиции" },
    topPush: { text: "Обновите страховку ОГПО", or: "75%", ctr: "40%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,1,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,1,2,3,2,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,2,3,3,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 50000, trend: "-5%" },
      ownTransfers: { freq: 2, avgSum: 30000 },
      internalTransfers: { freq: 1, avgSum: 25000 },
      externalTransfers: { freq: 1, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Health", share: "15%" },
        { mcc: "Services", share: "20%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 13000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-08", type: "Оплата страховки", amount: 25000, location: "AlatauCity Garant", currency: "₸" },
        { id: 3, date: "2025-10-12", type: "Коммуналка", amount: 11000, location: "eGov", currency: "₸" },
        { id: 4, date: "2025-10-15", type: "Пополнение депозита", amount: 50000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Регулярно оплачивает коммунальные и страховые услуги",
      "Часто пользуется депозитом и бонусами по карте",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "АО «AstanaTech Group»",
    allocation: [
      "Пополнение депозита (20%)",
      "Покупки (35%)",
      "Коммуналка (15%)",
      "Страховка и услуги (15%)",
      "Прочее (15%)",
    ],
    mlInsight: "Основные траты приходятся на период 25–30 числа каждого месяца",
    habitScore: 76,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Покупки и услуги", amount: 35 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Страховка и инвестиции", amount: 15 },
      { stage: "Свободные средства", amount: 15 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "замужем",
    "депозитный клиент",
    "страхование",
    "инвестиции",
    "активная пользовательница"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Кабылов Марат Ерланович",
      type: "Супруг",
      birthDate: "1994-05-21",
      jointProducts: ["Совместный депозит"],
      status: "Активен",
      lastActivity: "2025-11-07",
      ac_id: 100073512015,
    },
  ],
},
{
  ac_id: 100073512013,
  name: "Сейтхан Еркебулан Нуртаевич",
  iin: "990628300457",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные", 

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сейтхан Еркебулан Нуртаевич",
    iin: "990628300457",
    birthDate: "1999-06-28",
    age: 26,
    gender: "Мужской",
    contacts: { phone: "+77018880077" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-06-10",
    bankRegistrationDate: "2021-09-15",
    mobileAppRegistrationDuration: "3 года 5 месяцев",
    bankRegistrationDuration: "4 года 2 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 90000, commission: 18000, interest: 0 },
    ltv: 260000,
    clv: 320000,
  },

  geoMaps: {
    all_points: "/maps/erkebulan_all_points.html",
    clustered_points: "/maps/erkebulan_clustered_points.html",
    heatmap: "/maps/erkebulan_heatmap.html",
    time_heatmap: "/maps/erkebulan_time_heatmap.html",
    time_points: "/maps/erkebulan_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Silver",
          openDate: "2023-03-01",
          validUntil: "2027-03-01",
          sum: 32000.50,
          status: "Активна",
          isSalaryCard: false
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "12 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43%",
          sum: 600000,
          openDate: "2025-06-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [],
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-05",
      text: "Еркебулан, закрой часть Онлайн Кредита без комиссии",
      topic: "Кредит",
      status: "Доставлен",
    },
    history: [
      { date: "2025-11-05", text: "Погасите часть кредита без комиссии", campaign: "Credit", status: "Доставлен" },
      { date: "2025-10-18", text: "Следите за расходами в приложении", campaign: "Service", status: "Клик" },
      { date: "2025-09-25", text: "Онлайн-кредит до 8 млн", campaign: "Credit", status: "Клик" },
    ],
    frequency: { daily: 0.5, weekly: 3, monthly: 8 },
    conversion: { overall: "48%", clickRate: "32%" },
    insights: { topics: "кредиты, контроль расходов" },
    topPush: { text: "Онлайн-кредит до 8 млн", or: "70%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,2,1,1,1,1,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,3,2,1,1,1,1,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,2,1,1,1,1,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,3,3,2,1,1,1,1,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,3,1,1,1,1,1,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,2,1,1,1,1,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "0%" },
      ownTransfers: { freq: 5, avgSum: 30000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 3, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "35%" },
        { mcc: "Retail", share: "30%" },
        { mcc: "Transport", share: "20%" },
        { mcc: "DigitalServices", share: "15%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "P2P перевод", amount: 15000, location: "Мобильное приложение", currency: "₸" },
        { id: 2, date: "2025-10-06", type: "Retail", amount: 8000, location: "Magnum", currency: "₸" },
        { id: 3, date: "2025-10-09", type: "P2P перевод", amount: 12000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-15", type: "Retail", amount: 9000, location: "Small", currency: "₸" },
        { id: 5, date: "2025-10-20", type: "P2P перевод", amount: 18000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Много мелких P2P и Retail-транзакций",
      "Высокая активность при низком среднем чеке",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Плавающая дата",
    salarySource: "Фриланс (дизайн / SMM)",
    allocation: [
      "Покупки и повседневные траты (45%)",
      "Аренда и коммуналка (25%)",
      "Погашение кредита (20%)",
      "Прочее (10%)",
    ],
    mlInsight: "Доход нерегулярный, тратит по мере поступления средств, держит низкий остаток",
    habitScore: 58,

    expenseFlow: [
      { stage: "Поступление дохода", amount: 100 },
      { stage: "Покупки и траты", amount: 45 },
      { stage: "Аренда и коммуналка", amount: 25 },
      { stage: "Оплата кредита", amount: 20 },
      { stage: "Свободные средства", amount: 10 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "фриланс",
    "активный в транзакциях",
    "низкий средний чек",
    "кредитный клиент"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512012,
  name: "Каримова Алина Саматовна",
  iin: "010915400189",
  city: "АЛМАТЫ",
  segment: "Низкая активность и доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Каримова Алина Саматовна",
    iin: "010915400189",
    birthDate: "2001-09-15",
    age: 24,
    gender: "Женский",
    contacts: { phone: "+77014004567" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy A53", lastLogin: "2025-10-30" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-09-10",
    bankRegistrationDate: "2022-05-12",
    mobileAppRegistrationDuration: "2 года 2 месяца",
    bankRegistrationDuration: "3 года 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 45000, commission: 8000, interest: 12000 },
    ltv: 180000,
    clv: 210000,
  },

  geoMaps: {
    all_points: "/maps/alina_all_points.html",
    clustered_points: "/maps/alina_clustered_points.html",
    heatmap: "/maps/alina_heatmap.html",
    time_heatmap: "/maps/alina_time_heatmap.html",
    time_points: "/maps/alina_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2024-02-12",
          validUntil: "2028-02-12",
          sum: 25000.00,
          status: "Активна",
          isSalaryCard: false
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
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-10-22",
      text: "Алина, оплатите коммунальные счета в приложении",
      topic: "Коммуналка",
      status: "Игнор",
    },
    history: [
      { date: "2025-10-22", text: "Оплатите коммунальные счета", campaign: "Service", status: "Игнор" },
      { date: "2025-09-10", text: "Пополните карту и получайте бонусы", campaign: "Card", status: "Игнор" },
    ],
    frequency: { daily: 0.02, weekly: 0.2, monthly: 0.5 },
    conversion: { overall: "12%", clickRate: "5%" },
    insights: { topics: "коммуналка, карты" },
    topPush: { text: "Оплатите коммунальные счета", or: "20%", ctr: "6%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 12000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "70%" },
        { mcc: "Utilities", share: "30%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-15", type: "Коммуналка", amount: 8500, location: "eGov", currency: "₸" },
        { id: 2, date: "2025-10-20", type: "Retail", amount: 12000, location: "Small", currency: "₸" },
      ],
    },
    insights: [
      "Минимальная активность в приложении",
      "Редко проводит операции, в основном — коммуналка и мелкие покупки",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "5 число",
    salarySource: "ТОО «MarketLine KZ»",
    allocation: [
      "Коммуналка (30%)",
      "Покупки (40%)",
      "Прочее (30%)",
    ],
    mlInsight: "Большинство трат совершается в первый день после зарплаты",
    habitScore: 45,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Покупки и траты", amount: 40 },
      { stage: "Коммунальные платежи", amount: 30 },
      { stage: "Свободные средства", amount: 30 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 40 },
      { name: "AlatauCityBank QR", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "Apple Pay", value: 10 },
      { name: "Карта банка", value: 5 },
    ],
  },

  tags: ["низкая активность", "мало транзакций", "коммунальные платежи"],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512009,
  name: "Абдрахманов Руслан Мейрамбекович",
  iin: "980927300142",
  city: "АЛМАТЫ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Абдрахманов Руслан Мейрамбекович",
    iin: "980927300142",
    birthDate: "1998-09-27",
    age: 27,
    gender: "Мужской",
    contacts: { phone: "+77015550999" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-03-14",
    bankRegistrationDate: "2020-08-22",
    mobileAppRegistrationDuration: "3 года 8 месяцев",
    bankRegistrationDuration: "5 лет 3 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 220000, commission: 32000, interest: 70000 },
    ltv: 950000,
    clv: 1200000,
  },

  geoMaps: {
    all_points: "/maps/ruslan_all_points.html",
    clustered_points: "/maps/ruslan_clustered_points.html",
    heatmap: "/maps/ruslan_heatmap.html",
    time_heatmap: "/maps/ruslan_time_heatmap.html",
    time_points: "/maps/ruslan_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2023-05-05",
          validUntil: "2027-05-05",
          sum: 98000.25,
          status: "Активна",
          isSalaryCard: false
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "14,8%",
          sum: 750000,
          status: "Активен",
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [],
    },
    mlIndicators: {
      churnRisk: "Нет",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Открой депозит Baytaq под 15%",
      topic: "Депозит",
      status: "Доставлен",
    },
    history: [
      { date: "2025-11-07", text: "Депозит Baytaq под 15%", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-10-21", text: "Пополни баланс карты и получи бонус", campaign: "Card", status: "Клик" },
      { date: "2025-09-10", text: "Обнови мобильное приложение", campaign: "Service", status: "Игнор" },
    ],
    frequency: { daily: 0.3, weekly: 1.8, monthly: 4 },
    conversion: { overall: "64%", clickRate: "41%" },
    insights: { topics: "депозиты, карты" },
    topPush: { text: "Открой депозит Baytaq", or: "82%", ctr: "45%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 40000, trend: "+1%" },
      ownTransfers: { freq: 4, avgSum: 80000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 100000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Transport", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 21000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Коммуналка", amount: 15000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-17", type: "P2P перевод", amount: 25000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-21", type: "Retail", amount: 34000, location: "Kaspi Store", currency: "₸" },
      ],
    },
    insights: [
      "Преимущественно использует мобильное приложение для платежей",
      "Регулярно оплачивает коммунальные услуги онлайн",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «IT Solutions KZ»",
    allocation: [
      "Покупки и траты (35%)",
      "Пополнение депозита (25%)",
      "Переводы друзьям (15%)",
      "Коммунальные платежи (10%)",
      "Прочее (15%)",
    ],
    mlInsight: "65% дохода распределяется в первые 3 дня после зарплаты",
    habitScore: 81,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Покупки и траты", amount: 35 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Переводы друзьям", amount: 15 },
      { stage: "Коммунальные платежи", amount: 10 },
      { stage: "Свободные средства", amount: 15 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Samsung Pay", value: 30 },
      { name: "Kaspi QR", value: 15 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 5 },
    ],
  },

  tags: ["молодой клиент", "активный пользователь", "депозиты", "цифровой канал"],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100062431790,
  name: "Касенова Айнур Ермековна",
  iin: "920722400156",
  city: "АЛМАТЫ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Касенова Айнур Ермековна",
    iin: "920722400156",
    birthDate: "1992-07-22",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77018883344" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2022-04-10",
    bankRegistrationDate: "2019-03-08",
    mobileAppRegistrationDuration: "3 года 7 месяцев",
    bankRegistrationDuration: "6 лет 8 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 280000, commission: 38000, interest: 80000 },
    ltv: 1450000,
    clv: 1750000,
  },

  geoMaps: {
    all_points: "/maps/ainur_all_points.html",
    clustered_points: "/maps/ainur_clustered_points.html",
    heatmap: "/maps/ainur_heatmap.html",
    time_heatmap: "/maps/ainur_time_heatmap.html",
    time_points: "/maps/ainur_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 2300000,
          openDate: "2024-08-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Silver",
          openDate: "2023-11-20",
          validUntil: "2027-11-20",
          sum: 120000,
          status: "Активна",
          isSalaryCard: true
        },
      ],
      history: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "15%",
          sum: 700000,
          openDate: "2022-05-01",
          closeDate: "2022-11-01",
          status: "Закрыт",
        },
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2024-04-10",
          status: "Активен",
        },
      ],
    },
    mlIndicators: {
      churnRisk: "Нет",
      creditInterest: "Да",
      depositInterest: "Нет",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Акция для постоянных клиентов: кредит без комиссии",
      topic: "Кредит",
      status: "Клик",
    },
    history: [
      { date: "2025-11-08", text: "Кредит без комиссии", campaign: "Credit", status: "Клик" },
      { date: "2025-10-19", text: "Продлите страховку ОГПО онлайн", campaign: "Garant", status: "Доставлен" },
      { date: "2025-09-10", text: "Обновление приложения", campaign: "Service", status: "Игнор" },
    ],
    frequency: { daily: 0.1, weekly: 1.3, monthly: 3 },
    conversion: { overall: "59%", clickRate: "38%" },
    insights: { topics: "кредит, страховка" },
    topPush: { text: "Кредит без комиссии", or: "80%", ctr: "44%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 70000, trend: "+3%" },
      ownTransfers: { freq: 3, avgSum: 85000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 100000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Grocery", share: "25%" },
        { mcc: "Beauty", share: "15%" },
        { mcc: "Health", share: "10%" },
        { mcc: "Utilities", share: "15%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 18000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 12000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-12", type: "Оплата штрафа", amount: 8000, location: "ГЦВП", currency: "₸" },
        { id: 4, date: "2025-10-15", type: "P2P перевод", amount: 20000, location: "МП", currency: "₸" },
        { id: 5, date: "2025-10-20", type: "Retail", amount: 23000, location: "Sulpak", currency: "₸" },
      ],
    },
    insights: [
      "Регулярно оплачивает коммунальные услуги",
      "Активно пользуется мобильным приложением для P2P переводов",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "ТОО «Cosmetica Line KZ»",
    allocation: [
      "Оплата кредита (25%)",
      "Коммунальные платежи (15%)",
      "Покупки (30%)",
      "Пополнение депозита (10%)",
      "Прочее (20%)",
    ],
    mlInsight: "70% зарплаты расходуется в первые 2 дня после поступления",
    habitScore: 79,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Оплата кредита", amount: 25 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Покупки и траты", amount: 30 },
      { stage: "Пополнение депозита", amount: 10 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: ["активный клиент", "страхование", "кредит", "онлайн-платежи"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Касенов Даурен Арманович",
      type: "Муж",
      birthDate: "1990-06-18",
      jointProducts: ["ОГПО"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100062431789,
    },
    {
      name: "Касен Амина",
      type: "Дочь",
      birthDate: "2013-12-05",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
    {
      name: "Касен Алишер",
      type: "Сын",
      birthDate: "2017-05-16",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
  ],
},
{
  ac_id: 100073512010,
  name: "Сагынтаева Айгуль Ерлановна",
  iin: "000317400265",
  city: "АСТАНА",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сагынтаева Айгуль Ерлановна",
    iin: "000317400265",
    birthDate: "2000-03-17",
    age: 25,
    gender: "Женский",
    contacts: { phone: "+77018881144" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-02-15",
    bankRegistrationDate: "2021-04-20",
    mobileAppRegistrationDuration: "2 года 9 месяцев",
    bankRegistrationDuration: "4 года 7 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 190000, commission: 26000, interest: 62000 },
    ltv: 820000,
    clv: 1050000,
  },

  geoMaps: {
    all_points: "/maps/aigul_all_points.html",
    clustered_points: "/maps/aigul_clustered_points.html",
    heatmap: "/maps/aigul_heatmap.html",
    time_heatmap: "/maps/aigul_time_heatmap.html",
    time_points: "/maps/aigul_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1600000,
          openDate: "2024-04-05",
          status: "Погашается",
          overdue: false,
          overdueSum: 0,
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-10-10",
          validUntil: "2027-10-10",
          sum: 76000,
          status: "Активна",
          isSalaryCard: false
        },
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [],
    },
    mlIndicators: {
      churnRisk: "Нет",
      creditInterest: "Да",
      depositInterest: "Нет",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Айгуль, получите онлайн-кредит за 3 минуты!",
      topic: "Кредит",
      status: "Клик",
    },
    history: [
      { date: "2025-11-08", text: "Онлайн-кредит за 3 минуты", campaign: "Credit", status: "Клик" },
      { date: "2025-10-15", text: "Повышение лимита по карте", campaign: "Card", status: "Доставлен" },
      { date: "2025-09-05", text: "Обновите мобильное приложение", campaign: "Service", status: "Игнор" },
    ],
    frequency: { daily: 0.4, weekly: 2, monthly: 5 },
    conversion: { overall: "69%", clickRate: "46%" },
    insights: { topics: "кредиты, карты" },
    topPush: { text: "Онлайн-кредит за 3 минуты", or: "84%", ctr: "48%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,3,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 40000, trend: "+3%" },
      ownTransfers: { freq: 3, avgSum: 60000 },
      internalTransfers: { freq: 1, avgSum: 20000 },
      externalTransfers: { freq: 2, avgSum: 80000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "45%" },
        { mcc: "Beauty", share: "25%" },
        { mcc: "Food", share: "20%" },
        { mcc: "Transport", share: "10%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 19000, location: "LC Waikiki", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Оплата штрафа", amount: 7000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Коммуналка", amount: 15000, location: "ГЦВП", currency: "₸" },
        { id: 4, date: "2025-10-21", type: "P2P перевод", amount: 20000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Регулярно использует онлайн-платежи",
      "Активно реагирует на кредитные предложения",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число",
    salarySource: "ТОО «Beauty Store KZ»",
    allocation: [
      "Оплата кредита (30%)",
      "Покупки (35%)",
      "Коммуналка (15%)",
      "Переводы друзьям (10%)",
      "Прочее (10%)",
    ],
    mlInsight: "75% дохода расходуется в первые 3 дня после зарплаты",
    habitScore: 77,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Оплата кредита", amount: 30 },
      { stage: "Покупки и траты", amount: 35 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Переводы друзьям", amount: 10 },
      { stage: "Свободные средства", amount: 10 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 45 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 15 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 5 },
    ],
  },

  tags: ["молодая клиентка", "кредит", "мобильное приложение", "активная пользовательница"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512011,
  name: "Ермеков Тимур Дастанович",
  iin: "990104300276",
  city: "ШЫМКЕНТ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ермеков Тимур Дастанович",
    iin: "990104300276",
    birthDate: "1999-01-04",
    age: 26,
    gender: "Мужской",
    contacts: { phone: "+77013224466" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-06" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-04-18",
    bankRegistrationDate: "2022-02-20",
    mobileAppRegistrationDuration: "2 года 7 месяцев",
    bankRegistrationDuration: "3 года 9 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 85000, commission: 12000, interest: 30000 },
    ltv: 380000,
    clv: 450000,
  },

  geoMaps: {
    all_points: "/maps/timur_all_points.html",
    clustered_points: "/maps/timur_clustered_points.html",
    heatmap: "/maps/timur_heatmap.html",
    time_heatmap: "/maps/timur_time_heatmap.html",
    time_points: "/maps/timur_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Silver",
          openDate: "2024-01-15",
          validUntil: "2028-01-15",
          sum: 45000.00,
          status: "Активна",
          isSalaryCard: false
        },
      ],
      history: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "15%",
          sum: 500000,
          openDate: "2023-04-01",
          closeDate: "2023-10-01",
          status: "Закрыт",
        },
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [],
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-10-25",
      text: "Продлите депозит Baytaq и получите бонус 0.5%",
      topic: "Депозит",
      status: "Игнор",
    },
    history: [
      { date: "2025-10-25", text: "Продлите депозит Baytaq", campaign: "Deposit", status: "Игнор" },
      { date: "2025-09-15", text: "Пополни карту — получи бонус", campaign: "Card", status: "Доставлен" },
      { date: "2025-08-10", text: "Обнови приложение", campaign: "Service", status: "Игнор" },
    ],
    frequency: { daily: 0.05, weekly: 0.4, monthly: 1 },
    conversion: { overall: "28%", clickRate: "14%" },
    insights: { topics: "депозиты, карты" },
    topPush: { text: "Продлите депозит Baytaq", or: "50%", ctr: "12%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 20000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "50%" },
        { mcc: "Food", share: "20%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Utilities", share: "15%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 12000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Коммуналка", amount: 7000, location: "eGov", currency: "₸" },
      ],
    },
    insights: [
      "Редко использует мобильное приложение",
      "Преимущественно оплачивает покупки и коммунальные услуги",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «LogisticsPro KZ»",
    allocation: [
      "Покупки (40%)",
      "Коммуналка (20%)",
      "Пополнение депозита (20%)",
      "Прочее (20%)",
    ],
    mlInsight: "Более половины дохода тратится в течение первой недели после зарплаты",
    habitScore: 62,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Покупки и траты", amount: 40 },
      { stage: "Коммунальные платежи", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 25 },
      { name: "AlatauCityBank QR", value: 20 },
      { name: "Карта банка", value: 15 },
    ],
  },

  tags: ["молодой клиент", "низкая активность", "депозит", "редкие транзакции"],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100062431789,
  name: "Касенов Даурен Арманович",
  iin: "900618301254",
  city: "АЛМАТЫ",
  segment: "Депозитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Касенов Даурен Арманович",
    iin: "900618301254",
    birthDate: "1990-06-18",
    age: 35,
    gender: "Мужской",
    contacts: { phone: "+77017451258" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-08-11",
    bankRegistrationDate: "2018-05-10",
    mobileAppRegistrationDuration: "4 года 3 месяца",
    bankRegistrationDuration: "7 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 350000, commission: 42000, interest: 90000 },
    ltv: 1850000,
    clv: 2100000,
  },

  geoMaps: {
    all_points: "/maps/dauren_all_points.html",
    clustered_points: "/maps/dauren_clustered_points.html",
    heatmap: "/maps/dauren_heatmap.html",
    time_heatmap: "/maps/dauren_time_heatmap.html",
    time_points: "/maps/dauren_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 4100000,
          status: "Активен",
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-10-12",
          validUntil: "2027-10-12",
          sum: 195000.45,
          status: "Активна",
          isSalaryCard: true
        },
      ],
      history: [
        {
          type: "Кредит",
          name: "Рефинансирование 2022",
          term: "60 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 3500000,
          openDate: "2022-06-01",
          closeDate: "2024-05-30",
          status: "Закрыт",
        }
      ],
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-03-01",
          status: "Активен",
        },
      ],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-01-10",
          status: "Активен",
        },
      ],
    },
    mlIndicators: {
      churnRisk: "Нет",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Продлите свой депозит Baytaq под 15%",
      topic: "Депозит",
      status: "Доставлен",
    },
    history: [
      { date: "2025-11-08", text: "Продлите депозит Baytaq", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-10-20", text: "Откройте инвестиционный счёт", campaign: "Invest", status: "Клик" },
      { date: "2025-09-15", text: "Продление страховки ОГПО", campaign: "Garant", status: "Доставлен" },
    ],
    frequency: { daily: 0.2, weekly: 1.2, monthly: 3 },
    conversion: { overall: "67%", clickRate: "40%" },
    insights: { topics: "депозиты, инвестиции" },
    topPush: { text: "Продлите депозит Baytaq", or: "83%", ctr: "47%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,5,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 60000, trend: "+2%" },
      ownTransfers: { freq: 3, avgSum: 90000 },
      internalTransfers: { freq: 1, avgSum: 40000 },
      externalTransfers: { freq: 2, avgSum: 120000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Grocery", share: "25%" },
        { mcc: "Health", share: "15%" },
        { mcc: "Education", share: "10%" },
        { mcc: "Utilities", share: "20%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 26000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Коммуналка", amount: 18500, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Налог", amount: 47000, location: "ГЦВП", currency: "₸" },
        { id: 4, date: "2025-10-19", type: "P2P перевод", amount: 23000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-10-22", type: "Инвестиции", amount: 100000, location: "Alatau Invest", currency: "₸" },
      ],
    },
    insights: [
      "Регулярно оплачивает коммунальные и налоги онлайн",
      "Поддерживает активный депозит и инвестиционный счёт"
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "АО «ЭнергоСервис KZ»",
    allocation: [
      "Пополнение депозита (25%)",
      "Инвестиции (15%)",
      "Коммунальные платежи (10%)",
      "Покупки (25%)",
      "Налоги и штрафы (10%)",
      "Прочее (15%)",
    ],
    mlInsight: "60% дохода распределяется в первые 3 дня после зарплаты",
    habitScore: 85,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Коммунальные платежи", amount: 10 },
      { stage: "Покупки и траты", amount: 25 },
      { stage: "Налоги и штрафы", amount: 10 },
      { stage: "Свободные средства", amount: 15 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 25 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },
  tags: ["депозиты", "инвестиции", "коммунальные платежи", "активный клиент"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Касенова Айнур Ермековна",
      type: "Супруга",
      birthDate: "1992-07-22",
      jointProducts: ["ОГПО"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100062431790,
    },
    {
      name: "Касен Амина",
      type: "Дочь",
      birthDate: "2013-12-05",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
    {
      name: "Касен Алишер",
      type: "Сын",
      birthDate: "2017-05-16",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: [],
    },
  ],
},
{
  ac_id: 100052847313,
  name: "Сулейменова Алия Ерлановна",
  iin: "910822400137",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сулейменова Алия Ерлановна",
    iin: "910822400137",
    birthDate: "1991-08-22",
    age: 34,
    gender: "Женский",
    contacts: { phone: "+77015567891" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-09-14",
    bankRegistrationDate: "2019-05-12",
    mobileAppRegistrationDuration: "4 года 2 месяца",
    bankRegistrationDuration: "6 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 320000, commission: 45000, interest: 125000 },
    ltv: 1800000,
    clv: 2100000
  },

  geoMaps: {
    all_points: "/maps/aliya_all_points.html",
    clustered_points: "/maps/aliya_clustered_points.html",
    heatmap: "/maps/aliya_heatmap.html",
    time_heatmap: "/maps/aliya_time_heatmap.html",
    time_points: "/maps/aliya_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43,5%",
          sum: 2400000,
          openDate: "2024-04-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "MasterCard",
          level: "Gold",
          bonusLevel: "2.5%",
          openDate: "2023-06-05",
          validUntil: "2027-06-05",
          sum: 152000,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "15%",
          sum: 900000,
          openDate: "2023-03-01",
          closeDate: "2023-09-01",
          status: "Закрыт"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2024-05-01",
          status: "Активен"
        },
        {
          name: "КАСКО",
          type: "Страхование авто",
          openDate: "2024-05-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Нет",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Кредит под 37% для клиентов с идеальной историей",
      topic: "Кредит",
      status: "Клик"
    },
    history: [
      { date: "2025-11-07", text: "Кредит под 37%", campaign: "Credit", status: "Клик" },
      { date: "2025-10-18", text: "Страховка ОГПО продлена", campaign: "Garant", status: "Доставлен" },
      { date: "2025-09-12", text: "Обновите мобильное приложение", campaign: "Service", status: "Игнор" }
    ],
    frequency: { daily: 0.1, weekly: 1, monthly: 3 },
    conversion: { overall: "61%", clickRate: "36%" },
    insights: { topics: "кредит, страховка" },
    topPush: { text: "Кредит под 37%", or: "77%", ctr: "41%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,0,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,4,2,1,0,0,0,0,0,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,0,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,0,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,0,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 50000, trend: "+2%" },
      ownTransfers: { freq: 3, avgSum: 95000 },
      internalTransfers: { freq: 1, avgSum: 40000 },
      externalTransfers: { freq: 2, avgSum: 130000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Grocery", share: "35%" },
        { mcc: "Pharmacy", share: "20%" },
        { mcc: "Retail", share: "25%" },
        { mcc: "Beauty", share: "10%" },
        { mcc: "Education", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 24000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-07", type: "Retail", amount: 15500, location: "LC Waikiki", currency: "₸" },
        { id: 3, date: "2025-10-11", type: "Оплата штрафа", amount: 12500, location: "eGov", currency: "₸" },
        { id: 4, date: "2025-10-15", type: "Налог", amount: 48000, location: "ГЦВП", currency: "₸" },
        { id: 5, date: "2025-10-21", type: "P2P перевод", amount: 20000, location: "МП", currency: "₸" }
      ]
    },
    insights: [
      "Регулярные покупки в ритейле",
      "Использует онлайн-оплаты для налогов и штрафов"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "ТОО «Beauty Line KZ»",
    allocation: [
      "Оплата кредита (25%)",
      "Коммунальные платежи (10%)",
      "Покупки (30%)",
      "Пополнение депозита (15%)",
      "Прочее (20%)"
    ],
    mlInsight: "70% зарплаты расходуется в первые 3 дня после поступления",
    habitScore: 80,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Оплата кредита", amount: 25 },
      { stage: "Коммунальные платежи", amount: 10 },
      { stage: "Покупки", amount: 30 },
      { stage: "Пополнение депозита", amount: 15 },
      { stage: "Свободные средства", amount: 20 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 25 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 5 }
    ]
  },

  tags: [
    "онлайн платежи",
    "кредитный клиент",
    "активная пользовательница",
    "страхование"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Сулейменов Адиль Ермекович",
      type: "Муж",
      birthDate: "1989-09-11",
      jointProducts: ["КАСКО"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100052847312
    },
    {
      name: "Сулеймен Адильевич",
      type: "Сын",
      birthDate: "2012-05-10",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "2025-10-29",
      ac_id: 100052847314
    }
  ]
},
{
  ac_id: 100052847312,
  name: "Сулейменов Адиль Ермекович",
  iin: "890911301245",
  city: "АЛМАТЫ",
  segment: "CREDIT_ORIENTED",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сулейменов Адиль Ермекович",
    iin: "890911301245",
    birthDate: "1989-09-11",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77014561234" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S23 Ultra", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-12-03",
    bankRegistrationDate: "2017-05-14",
    mobileAppRegistrationDuration: "4 года 11 месяцев",
    bankRegistrationDuration: "8 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 420000, commission: 55000, interest: 160000 },
    ltv: 2200000,
    clv: 2700000
  },

  geoMaps: {
    all_points: "/maps/adil_all_points.html",
    clustered_points: "/maps/adil_clustered_points.html",
    heatmap: "/maps/adil_heatmap.html",
    time_heatmap: "/maps/adil_time_heatmap.html",
    time_points: "/maps/adil_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44,5%",
          sum: 4200000,
          openDate: "2024-08-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1500000,
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Classic",
          bonusLevel: "2.5%",
          openDate: "2023-04-22",
          validUntil: "2027-04-22",
          sum: 185000,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Рефинансирование",
          name: "Рефинансирование 2022",
          term: "60 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 5000000,
          openDate: "2022-05-10",
          closeDate: "2024-06-15",
          status: "Закрыт"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2023-10-01",
          status: "Активен"
        }
      ],
      alatauGarant: [
        {
          name: "КАСКО",
          type: "Страхование авто",
          openDate: "2024-02-01",
          status: "Активен"
        },
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2024-02-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Нет",
      creditInterest: "Да",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Снижение ставки по Онлайн Кредиту для лояльных клиентов",
      topic: "Кредит",
      status: "Клик"
    },
    history: [
      { date: "2025-11-08", text: "Снижение ставки по Онлайн Кредиту", campaign: "Credit", status: "Клик" },
      { date: "2025-10-20", text: "Попробуйте депозит Baytaq 15%", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-25", text: "КАСКО без визита в отделение", campaign: "Garant", status: "Доставлен" }
    ],
    frequency: { daily: 0.2, weekly: 1.5, monthly: 4 },
    conversion: { overall: "62%", clickRate: "39%" },
    insights: { topics: "кредит, депозит, страховка" },
    topPush: { text: "Снижение ставки по Онлайн Кредиту", or: "80%", ctr: "44%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,4,2,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,4,5,4,2,1,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 85000, trend: "+3%" },
      ownTransfers: { freq: 4, avgSum: 130000 },
      internalTransfers: { freq: 2, avgSum: 50000 },
      externalTransfers: { freq: 3, avgSum: 175000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Grocery", share: "32%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Health", share: "12%" },
        { mcc: "Online", share: "25%" },
        { mcc: "Travel", share: "11%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-08", type: "Retail", amount: 32500, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Оплата Kaspi QR", amount: 18000, location: "GreenMart", currency: "₸" },
        { id: 3, date: "2025-10-14", type: "Apple Pay", amount: 54000, location: "Melem", currency: "₸" },
        { id: 4, date: "2025-10-17", type: "Kaspi QR", amount: 29000, location: "Sulpak", currency: "₸" },
        { id: 5, date: "2025-10-22", type: "Оплата картой", amount: 41000, location: "Fix Price", currency: "₸" }
      ]
    },
    insights: [
      "Основная активность — FMCG и онлайн покупки",
      "Использует Apple Pay и QR-платежи"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "TOO «City Logistic»",
    allocation: [
      "Оплата кредита (30%)",
      "Коммунальные платежи (10%)",
      "Покупки (25%)",
      "Пополнение депозита (15%)",
      "Инвестиции (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "65% зарплаты распределяется в течение 48 часов после поступления",
    habitScore: 82,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Оплата кредита", amount: 30 },
      { stage: "Коммунальные платежи", amount: 10 },
      { stage: "Покупки", amount: 25 },
      { stage: "Пополнение депозита", amount: 15 },
      { stage: "Инвестиции", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 25 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 10 }
    ]
  },

  tags: [
    "онлайн платежи",
    "активный заемщик",
    "инвестиции",
    "клиент с депозитом"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Сулейменова Алия Ерлановна",
      type: "Супруга",
      birthDate: "1991-08-22",
      jointProducts: ["КАСКО"],
      status: "Активен",
      lastActivity: "2025-11-07",
      ac_id: 100052847313
    },
    {
      name: "Сулеймен Адильевич",
      type: "Сын",
      birthDate: "2012-05-10",
      jointProducts: [],
      status: "Активен",
      lastActivity: "2025-10-29",
      ac_id: 100052847314
    }
  ]
},
{
  ac_id: 100073512023,
  name: "Ермеков Мадияр Русланович",
  iin: "920916300287",
  city: "АСТАНА",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ермеков Мадияр Русланович",
    iin: "920916300287",
    birthDate: "1992-09-16",
    age: 33,
    gender: "Мужской",
    contacts: { phone: "+77014446655" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "iOS", model: "iPhone 15 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-11-11",
    bankRegistrationDate: "2020-05-20",
    mobileAppRegistrationDuration: "4 года",
    bankRegistrationDuration: "5 лет 6 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 280000, commission: 50000, interest: 95000 },
    ltv: 1300000,
    clv: 1650000
  },

  geoMaps: {
    all_points: "/maps/madiyar_all_points.html",
    clustered_points: "/maps/madiyar_clustered_points.html",
    heatmap: "/maps/madiyar_heatmap.html",
    time_heatmap: "/maps/madiyar_time_heatmap.html",
    time_points: "/maps/madiyar_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 2500000,
          openDate: "2024-06-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 900000,
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-09-20",
          validUntil: "2027-09-20",
          sum: 180000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-08-01",
          status: "Активен"
        }
      ],
      alatauGarant: [
        {
          name: "КАСКО",
          type: "Страхование авто",
          openDate: "2025-04-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Да",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Мадияр, досрочное погашение кредита без комиссии",
      topic: "Кредит",
      status: "Клик"
    },
    history: [
      { date: "2025-11-06", text: "Погасите часть кредита без комиссии", campaign: "Credit", status: "Клик" },
      { date: "2025-10-25", text: "КАСКО — обновите страховку", campaign: "Garant", status: "Доставлен" },
      { date: "2025-09-20", text: "Инвестиционный счёт активен", campaign: "Invest", status: "Доставлен" }
    ],
    frequency: { daily: 0.3, weekly: 1.5, monthly: 4 },
    conversion: { overall: "60%", clickRate: "36%" },
    insights: { topics: "кредиты, инвестиции, страхование" },
    topPush: { text: "Погашение кредита без комиссии", or: "75%", ctr: "38%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 70000, trend: "+5%" },
      ownTransfers: { freq: 4, avgSum: 100000 },
      internalTransfers: { freq: 2, avgSum: 50000 },
      externalTransfers: { freq: 3, avgSum: 80000 },
      internationalTransfers: { freq: 1, avgSum: 150000 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Utilities", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 21000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Оплата штрафа", amount: 15000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Пополнение депозита", amount: 50000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-21", type: "Инвестиции", amount: 90000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Активно использует онлайн-каналы для финансовых операций",
      "Сбалансированное распределение между кредитом, депозитом и инвестициями"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число",
    salarySource: "ТОО «TechNova Systems»",
    allocation: [
      "Погашение кредитов (25%)",
      "Пополнение депозита (20%)",
      "Инвестиции (15%)",
      "Покупки (25%)",
      "Прочее (15%)"
    ],
    mlInsight: "Финансовое поведение рациональное, активное участие в инвестиционных продуктах",
    habitScore: 85,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Погашение кредитов", amount: 25 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Покупки", amount: 25 },
      { stage: "Свободные средства", amount: 15 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 }
    ]
  },

  tags: [
    "активный клиент",
    "средний доход",
    "инвестиции",
    "кредит и депозит",
    "цифровые платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Ермекова Алия Кайратовна",
      type: "Супруга",
      birthDate: "1994-07-02",
      jointProducts: ["КАСКО"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512024
    }
  ]
},
{
  ac_id: 100073512130,
  name: "Садыков Руслан Серикович",
  iin: "890503400512",
  city: "ШЫМКЕНТ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Садыков Руслан Серикович",
    iin: "890503400512",
    birthDate: "1989-05-03",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77075551234", email: "ruslan.sadykov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2022-03-10",
    bankRegistrationDate: "2019-08-02",
    mobileAppRegistrationDuration: "3 года 8 месяцев",
    bankRegistrationDuration: "6 лет 3 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 220000, commission: 15000, interest: 60000 },
    ltv: 950000,
    clv: 1250000
  },

  geoMaps: {
    all_points: "/maps/ruslan_all_points.html",
    clustered_points: "/maps/ruslan_clustered_points.html",
    heatmap: "/maps/ruslan_heatmap.html",
    time_heatmap: "/maps/ruslan_time_heatmap.html",
    time_points: "/maps/ruslan_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 3000000,
          openDate: "2023-11-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.2%",
          sum: 1200000,
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2021-05-05",
          validUntil: "2025-05-05",
          sum: 45000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2024-12-10",
          status: "Активен"
        }
      ],
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Руслан, проверь выгодные депозитные предложения",
      topic: "Депозит",
      status: "Открыт"
    },
    history: [
      { date: "2025-11-08", text: "Выгодные депозиты Baytaq", campaign: "Deposit", status: "Открыт" },
      { date: "2025-10-12", text: "Онлайн Кредит — новые условия", campaign: "Credit", status: "Доставлен" },
      { date: "2025-09-01", text: "Инвестируйте с Alatau Invest", campaign: "Invest", status: "Клик" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.8 },
    conversion: { overall: "45%", clickRate: "22%" },
    insights: { topics: "депозиты, кредиты, инвестиции" },
    topPush: { text: "Вклады Baytaq — увеличьте доход", or: "60%", ctr: "25%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 50000, trend: "-2%" },
      ownTransfers: { freq: 3, avgSum: 85000 },
      internalTransfers: { freq: 1, avgSum: 40000 },
      externalTransfers: { freq: 2, avgSum: 70000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Fuel", share: "10%" },
        { mcc: "Entertainment", share: "10%" },
        { mcc: "Utilities", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 18500, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-20", type: "Коммуналка", amount: 22000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-11-02", type: "P2P", amount: 60000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Регулярные отчисления на депозит",
      "Стабильные расходы на семью и коммуналку"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "ТОО «AgroTrade Group»",
    allocation: [
      "Погашение кредитов (20%)",
      "Пополнение депозита (25%)",
      "Инвестиции (10%)",
      "Покупки (30%)",
      "Прочее (15%)"
    ],
    mlInsight: "Консервативный профиль с регулярными накоплениями",
    habitScore: 78,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Погашение кредитов", amount: 20 },
      { stage: "Покупки", amount: 30 },
      { stage: "Свободные средства", amount: 25 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 15 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 20 }
    ]
  },

  tags: [
    "средний доход",
    "семейный",
    "регулярные сбережения",
    "мобильный клиент",
    "депозит и кредит"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Садыкова Алия Руслановна",
      type: "Супруга",
      birthDate: "1991-02-20",
      jointProducts: ["Депозит Baytaq"],
      status: "Активен",
      lastActivity: "2025-11-07",
      ac_id: 100073512131
    },
    {
      name: "Садыков Тимур Русланович",
      type: "Ребёнок",
      birthDate: "2012-09-10",
      status: "Активен",
      ac_id: 100073512132
    },
    {
      name: "Садыкова Лейла Руслановна",
      type: "Ребёнок",
      birthDate: "2018-06-22",
      status: "Неактивен",
      ac_id: 100073512133
    }
  ]
},
{
  ac_id: 100073512140,
  name: "Айдаров Нурлан Ерланович",
  iin: "940712300456",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Айдаров Нурлан Ерланович",
    iin: "940712300456",
    birthDate: "1994-07-12",
    age: 31,
    gender: "Мужской",
    contacts: { phone: "+77075557788", email: "nurlan.aidarov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-02-18",
    bankRegistrationDate: "2018-09-10",
    mobileAppRegistrationDuration: "4 года 9 месяцев",
    bankRegistrationDuration: "7 лет 2 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 260000, commission: 30000, interest: 120000 },
    ltv: 1100000,
    clv: 1450000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/nurlan_all_points.html",
    clustered_points: "/maps/nurlan_clustered_points.html",
    heatmap: "/maps/nurlan_heatmap.html",
    time_heatmap: "/maps/nurlan_time_heatmap.html",
    time_points: "/maps/nurlan_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 3200000,
          openDate: "2024-03-05",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1500000,
          openDate: "2023-08-20",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-06-01",
          validUntil: "2026-06-01",
          sum: 90000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-05-10",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Низкий"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Нурлан, контролируйте выплаты по кредиту в один клик",
      topic: "Кредит",
      status: "Клик"
    },
    history: [
      {
        date: "2025-11-07",
        text: "Узнайте график погашения онлайн",
        campaign: "CreditCare",
        status: "Клик"
      },
      {
        date: "2025-10-18",
        text: "Предодобренный онлайн кредит на улучшение условий",
        campaign: "Credit",
        status: "Доставлен"
      },
      {
        date: "2025-09-05",
        text: "Оформите ОГПО онлайн за 2 минуты",
        campaign: "Garant",
        status: "Доставлен"
      }
    ],
    frequency: { daily: 0.35, weekly: 1.8, monthly: 5.5 },
    conversion: { overall: "48%", clickRate: "29%" },
    insights: { topics: "кредиты, страхование, напоминания о платежах" },
    topPush: { text: "Напоминание о платеже по кредиту", or: "70%", ctr: "32%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 40000, trend: "-3%" },
      ownTransfers: { freq: 4, avgSum: 60000 },
      internalTransfers: { freq: 2, avgSum: 45000 },
      externalTransfers: { freq: 2, avgSum: 80000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Fuel", share: "15%" },
        { mcc: "Utilities", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 23000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 18000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "P2P", amount: 55000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Погашение кредита", amount: 135000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Высокая зависимость от кредитных продуктов",
      "Погашения проходят вовремя, без просрочек",
      "Активно пользуется онлайн-каналами для платежей"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "20 число",
    salarySource: "ТОО «LogiTrans Service»",
    allocation: [
      "Погашение кредитов (35%)",
      "Семейные расходы (35%)",
      "Резерв / подушка (10%)",
      "Покупки (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Кредитно-ориентированный клиент, нуждается в релевантных офферах по рефинансированию",
    habitScore: 73,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Погашение кредитов", amount: 35 },
      { stage: "Семейные расходы", amount: 35 },
      { stage: "Покупки", amount: 15 },
      { stage: "Резерв", amount: 10 },
      { stage: "Свободные средства", amount: 5 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Samsung Pay", value: 15 },
      { name: "Kaspi QR", value: 25 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 20 }
    ]
  },

  tags: [
    "кредитный клиент",
    "активный пользователь МП",
    "онлайн-платежи",
    "страхование ОГПО",
    "регулярные платежи по кредиту"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Айдарова Жанна Алпамысовна",
      type: "Супруга",
      birthDate: "1995-03-30",
      status: "Активен",
      ac_id: 100073512141
    },
    {
      name: "Айдаров Асхат Нурланович",
      type: "Ребёнок",
      birthDate: "2014-11-05",
      status: "Неактивен",
      ac_id: 100073512142
    }
  ]
},
{
  ac_id: 100073512131,
  name: "Садыкова Алия Руслановна",
  iin: "910220450167",
  city: "ШЫМКЕНТ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Садыкова Алия Руслановна",
    iin: "910220450167",
    birthDate: "1991-02-20",
    age: 34,
    gender: "Женский",
    contacts: { phone: "+77082224566", email: "aliya.sadykova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2022-04-12",
    bankRegistrationDate: "2020-03-05",
    mobileAppRegistrationDuration: "3 года 7 месяцев",
    bankRegistrationDuration: "5 лет 8 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 180000, commission: 20000, interest: 55000 },
    ltv: 820000,
    clv: 1040000
  },

  geoMaps: {
    all_points: "/maps/aliya_all_points.html",
    clustered_points: "/maps/aliya_clustered_points.html",
    heatmap: "/maps/aliya_heatmap.html",
    time_heatmap: "/maps/aliya_time_heatmap.html",
    time_points: "/maps/aliya_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 1000000,
          openDate: "2024-05-20",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-08-01",
          validUntil: "2026-08-01",
          sum: 120000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "КАСКО",
          type: "Страхование авто",
          openDate: "2025-03-01",
          status: "Активен"
        },
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Алия, обновите страховку КАСКО с выгодой 10%",
      topic: "Страхование",
      status: "Клик"
    },
    history: [
      { date: "2025-11-06", text: "КАСКО — обновите страховку", campaign: "Garant", status: "Клик" },
      { date: "2025-10-14", text: "Baytaq — начислены проценты", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-28", text: "Совет недели: защита семьи", campaign: "Garant", status: "Доставлен" }
    ],
    frequency: { daily: 0.25, weekly: 1.2, monthly: 4.5 },
    conversion: { overall: "55%", clickRate: "33%" },
    insights: { topics: "депозиты, страхование, семья" },
    topPush: { text: "КАСКО — скидка 10%", or: "65%", ctr: "34%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,2,0,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 50000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 40000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Health", share: "10%" },
        { mcc: "Children", share: "15%" },
        { mcc: "Utilities", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 16000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Коммуналка", amount: 21000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Инвестиции", amount: 35000, location: "Alatau Invest", currency: "₸" },
        { id: 4, date: "2025-10-22", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Активно использует мобильное приложение для управления депозитом",
      "Регулярно оплачивает коммунальные услуги онлайн",
      "Реагирует на страховые кампании"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ИП «BeautyCare Studio»",
    allocation: [
      "Семейные расходы (35%)",
      "Пополнение депозита (20%)",
      "Образование детей (15%)",
      "Покупки и здоровье (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Сбалансированный клиент с фокусом на безопасность и сбережения",
    habitScore: 82,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Семейные расходы", amount: 35 },
      { stage: "Образование детей", amount: 15 },
      { stage: "Покупки и здоровье", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 15 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 15 }
    ]
  },

  tags: [
    "семейный клиент",
    "средний доход",
    "страхование",
    "депозит Baytaq",
    "мобильные платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Садыков Руслан Серикович",
      type: "Супруг",
      birthDate: "1989-05-03",
      jointProducts: ["Депозит Baytaq"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512130
    },
    {
      name: "Садыков Тимур Русланович",
      type: "Ребёнок",
      birthDate: "2012-09-10",
      status: "Активен",
      ac_id: 100073512132
    },
    {
      name: "Садыкова Лейла Руслановна",
      type: "Ребёнок",
      birthDate: "2018-06-22",
      status: "Неактивен",
      ac_id: 100073512133
    }
  ]
},
{
  ac_id: 100073512160,
  name: "Жаксылыкова Меруерт Дауреновна",
  iin: "930815400672",
  city: "АЛМАТЫ",
  segment: "Ценные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жаксылыкова Меруерт Дауреновна",
    iin: "930815400672",
    birthDate: "1993-08-15",
    age: 32,
    gender: "Женский",
    contacts: { phone: "+77012223344", email: "meruert.zh@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15 Pro Max", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2020-09-10",
    bankRegistrationDate: "2018-04-22",
    mobileAppRegistrationDuration: "5 лет 2 месяца",
    bankRegistrationDuration: "7 лет 7 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: true
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 420000, commission: 85000, interest: 160000 },
    ltv: 2300000,
    clv: 2800000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/meruert_all_points.html",
    clustered_points: "/maps/meruert_clustered_points.html",
    heatmap: "/maps/meruert_heatmap.html",
    time_heatmap: "/maps/meruert_time_heatmap.html",
    time_points: "/maps/meruert_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 3500000,
          openDate: "2025-02-01",
          status: "Активен"
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1200000,
          openDate: "2024-06-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-03-20",
          validUntil: "2027-03-20",
          sum: 420000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2023-11-01",
          status: "Активен"
        }
      ],
      alatauGarant: [
        {
          name: "КАСКО",
          type: "Страхование авто",
          openDate: "2025-04-10",
          status: "Активен"
        },
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-04-10",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Умеренный",
      depositInterest: "Высокий"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Меруерт, увеличьте доход по Baytaq с эксклюзивной ставкой",
      topic: "Депозит",
      status: "Клик"
    },
    history: [
      {
        date: "2025-11-08",
        text: "Эксклюзивное повышение ставки по Baytaq для премиум-клиентов",
        campaign: "DepositVIP",
        status: "Клик"
      },
      {
        date: "2025-10-22",
        text: "Меруерт, новые идеи для диверсификации инвестиций",
        campaign: "Invest",
        status: "Доставлен"
      },
      {
        date: "2025-09-15",
        text: "КАСКО: напоминание о продлении полиса",
        campaign: "Garant",
        status: "Доставлен"
      }
    ],
    frequency: { daily: 0.4, weekly: 2.0, monthly: 6.5 },
    conversion: { overall: "62%", clickRate: "35%" },
    insights: { topics: "депозиты, инвестиции, премиальные сервисы, автострахование" },
    topPush: { text: "Эксклюзивная ставка для вас", or: "78%", ctr: "40%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 90000 },
      internalTransfers: { freq: 3, avgSum: 120000 },
      externalTransfers: { freq: 2, avgSum: 150000 },
      internationalTransfers: { freq: 1, avgSum: 300000 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Travel", share: "20%" },
        { mcc: "Utilities", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 38000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Коммуналка", amount: 26000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-19", type: "Инвестиции", amount: 150000, location: "Alatau Invest", currency: "₸" },
        { id: 4, date: "2025-10-26", type: "Пополнение депозита", amount: 200000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-11-02", type: "P2P", amount: 90000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Премиальный цифровой клиент с высоким чеком",
      "Использует депозит и инвестиции как основные инструменты",
      "Положительно реагирует на персональные премиальные офферы"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число",
    salarySource: "АО «Global Consulting Group»",
    allocation: [
      "Сбережения и депозиты (30%)",
      "Инвестиции (20%)",
      "Путешествия и досуг (20%)",
      "Повседневные расходы (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Ценный клиент с устойчивым высоким доходом и развитой финансовой культурой",
    habitScore: 92,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Сбережения и депозиты", amount: 30 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Путешествия и досуг", amount: 20 },
      { stage: "Повседневные расходы", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "премиальный клиент",
    "высокий доход",
    "депозит Baytaq",
    "инвестиционный счёт",
    "КАСКО и ОГПО",
    "активный digital-пользователь"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512150,
  name: "Куанышев Аслан Даниярович",
  iin: "970421301293",
  city: "АСТАНА",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Куанышев Аслан Даниярович",
    iin: "970421301293",
    birthDate: "1997-04-21",
    age: 28,
    gender: "Мужской",
    contacts: { phone: "+77073334455", email: "aslan.kuanyshev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "Android", model: "Xiaomi 14 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-10-15",
    bankRegistrationDate: "2021-02-05",
    mobileAppRegistrationDuration: "3 года 1 месяц",
    bankRegistrationDuration: "4 года 9 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 95000, commission: 12000, interest: 18000 },
    ltv: 420000,
    clv: 560000
  },

  geoMaps: {
    all_points: "/maps/aslan_all_points.html",
    clustered_points: "/maps/aslan_clustered_points.html",
    heatmap: "/maps/aslan_heatmap.html",
    time_heatmap: "/maps/aslan_time_heatmap.html",
    time_points: "/maps/aslan_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2022-12-12",
          validUntil: "2026-12-12",
          sum: 58000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "14.7%",
          sum: 300000,
          openDate: "2025-03-01",
          status: "Активен"
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [
        {
          name: "Инвестиционный счёт",
          type: "Инвестиции",
          openDate: "2025-04-05",
          status: "Активен"
        }
      ],
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Аслан, инвестируйте от 10 000 ₸ в Alatau Invest",
      topic: "Инвестиции",
      status: "Клик"
    },
    history: [
      { date: "2025-11-08", text: "Минимальный порог инвестиций снижен до 10 000 ₸", campaign: "Invest", status: "Клик" },
      { date: "2025-10-20", text: "Пополните депозит Baytaq и получите бонус", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-30", text: "Обновите мобильное приложение", campaign: "Tech", status: "Доставлен" }
    ],
    frequency: { daily: 0.25, weekly: 1.1, monthly: 4.2 },
    conversion: { overall: "52%", clickRate: "27%" },
    insights: { topics: "инвестиции, депозиты, уведомления о балансе" },
    topPush: { text: "Инвестируйте от 10 000 ₸", or: "65%", ctr: "30%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 25000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 45000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "35%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-07", type: "Retail", amount: 12500, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Коммуналка", amount: 19000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Инвестиции", amount: 25000, location: "Alatau Invest", currency: "₸" },
        { id: 4, date: "2025-11-01", type: "Пополнение депозита", amount: 30000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Активно использует онлайн-каналы",
      "Склонен к малым инвестициям и коротким депозитам",
      "Хороший отклик на push-кампании"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «Astana Print House»",
    allocation: [
      "Коммунальные расходы (25%)",
      "Покупки (30%)",
      "Сбережения (20%)",
      "Инвестиции (10%)",
      "Прочее (15%)"
    ],
    mlInsight: "Молодой активный клиент с низким доходом и рациональными тратами",
    habitScore: 70,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Коммунальные расходы", amount: 25 },
      { stage: "Покупки", amount: 30 },
      { stage: "Сбережения", amount: 20 },
      { stage: "Инвестиции", amount: 10 },
      { stage: "Свободные средства", amount: 15 }
    ],

    paymentMethods: [
      { name: "Samsung Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 }
    ]
  },

  tags: [
    "молодой клиент",
    "активный",
    "малодоходный",
    "инвестиции от 10 000 ₸",
    "депозит Baytaq"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512022,
  name: "Оразбекова Дана Маратовна",
  iin: "980421400356",
  city: "ШЫМКЕНТ",
  segment: "Средний доход, пассивные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Оразбекова Дана Маратовна",
    iin: "980421400356",
    birthDate: "1998-04-21",
    age: 27,
    gender: "Женский",
    contacts: { phone: "+77018887766" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy A54", lastLogin: "2025-10-29" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-03-05",
    bankRegistrationDate: "2022-06-10",
    mobileAppRegistrationDuration: "2 года 8 месяцев",
    bankRegistrationDuration: "3 года 5 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 90000, commission: 12000, interest: 18000 },
    ltv: 320000,
    clv: 380000
  },

  geoMaps: {
    all_points: "/maps/dana_all_points.html",
    clustered_points: "/maps/dana_clustered_points.html",
    heatmap: "/maps/dana_heatmap.html",
    time_heatmap: "/maps/dana_time_heatmap.html",
    time_points: "/maps/dana_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2023-07-15",
          validUntil: "2027-07-15",
          sum: 21000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "14,8%",
          sum: 300000,
          status: "Активен"
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-10-25",
      text: "Дана, продлите депозит Baytaq в пару кликов",
      topic: "Депозит",
      status: "Доставлен"
    },
    history: [
      { date: "2025-10-25", text: "Продлите депозит Baytaq онлайн", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-12", text: "Оплачивайте коммунальные в приложении", campaign: "Service", status: "Игнор" }
    ],
    frequency: { daily: 0.1, weekly: 0.6, monthly: 2 },
    conversion: { overall: "38%", clickRate: "22%" },
    insights: { topics: "депозит, коммунальные платежи" },
    topPush: { text: "Продлите депозит Baytaq онлайн", or: "60%", ctr: "28%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 15000 },
      internalTransfers: { freq: 1, avgSum: 20000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "45%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "25%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-08", type: "Коммуналка", amount: 9000, location: "eGov", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Retail", amount: 11000, location: "Small", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Пополнение депозита", amount: 30000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Редкая активность, но поддерживает депозит",
      "Платежи преимущественно через мобильное приложение"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "5 число",
    salarySource: "ТОО «Shymkent Service Center»",
    allocation: [
      "Пополнение депозита (25%)",
      "Покупки (35%)",
      "Коммуналка (15%)",
      "Прочее (25%)"
    ],
    mlInsight: "Часть дохода стабильно уходит в депозит, остальное — базовые расходы",
    habitScore: 69,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Покупки и повседневные траты", amount: 35 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 25 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 15 }
    ]
  },

  tags: [
    "пассивный клиент",
    "депозит Baytaq",
    "низкая активность",
    "цифровые платежи"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512019,
  name: "Сатыбалдиева Айжан Нургалиевна",
  iin: "950612400257",
  city: "АЛМАТЫ",
  segment: "Депозитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сатыбалдиева Айжан Нургалиевна",
    iin: "950612400257",
    birthDate: "1995-06-12",
    age: 30,
    gender: "Женский",
    contacts: { phone: "+77017770044" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-09-05",
    bankRegistrationDate: "2021-03-18",
    mobileAppRegistrationDuration: "3 года 2 месяца",
    bankRegistrationDuration: "4 года 8 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false,
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 150000, commission: 22000, interest: 60000 },
    ltv: 650000,
    clv: 820000,
  },

  geoMaps: {
    all_points: "/maps/aizhan_all_points.html",
    clustered_points: "/maps/aizhan_clustered_points.html",
    heatmap: "/maps/aizhan_heatmap.html",
    time_heatmap: "/maps/aizhan_time_heatmap.html",
    time_points: "/maps/aizhan_time_points.html",
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1200000,
          status: "Активен",
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-06-10",
          validUntil: "2027-06-10",
          sum: 68000.40,
          status: "Активна",
          isSalaryCard: true,
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
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да",
    },
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Айжан, продлите депозит Baytaq онлайн за 1 минуту",
      topic: "Депозит",
      status: "Клик",
    },
    history: [
      { date: "2025-11-07", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Клик" },
      { date: "2025-10-15", text: "Получайте до 15% годовых по Baytaq", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-05", text: "Оплачивайте коммунальные в приложении", campaign: "Service", status: "Доставлен" },
    ],
    frequency: { daily: 0.25, weekly: 1.2, monthly: 3 },
    conversion: { overall: "63%", clickRate: "40%" },
    insights: { topics: "депозиты, онлайн-оплаты" },
    topPush: { text: "Продление депозита Baytaq", or: "78%", ctr: "42%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0],
      },
    },
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 50000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Beauty", share: "15%" },
        { mcc: "Utilities", share: "20%" },
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 16000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 12000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Пополнение депозита", amount: 50000, location: "Мобильное приложение", currency: "₸" },
      ],
    },
    insights: [
      "Фокус на сбережениях через депозит Baytaq",
      "Платежи и покупки проходят через мобильное приложение",
    ],
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «FinConsult Group»",
    allocation: [
      "Пополнение депозита (30%)",
      "Покупки (30%)",
      "Коммуналка (15%)",
      "Прочее (25%)",
    ],
    mlInsight: "Регулярно откладывает фиксированную долю дохода на депозит",
    habitScore: 82,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Покупки и повседневные расходы", amount: 30 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 25 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "AlatauCityBank QR", value: 15 },
      { name: "Карта банка", value: 10 },
    ],
  },

  tags: [
    "депозит Baytaq",
    "депозитный клиент",
    "онлайн-платежи",
    "молодой без семьи"
  ],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512141,
  name: "Айдарова Жанна Алпамысовна",
  iin: "950330300981",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Айдарова Жанна Алпамысовна",
    iin: "950330300981",
    birthDate: "1995-03-30",
    age: 30,
    gender: "Женский",
    contacts: { phone: "+77075559900", email: "zhanna.aidarova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-06-02",
    bankRegistrationDate: "2019-10-11",
    mobileAppRegistrationDuration: "4 года 5 месяцев",
    bankRegistrationDuration: "5 лет 1 месяц",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 140000, commission: 10000, interest: 25000 },
    ltv: 650000,
    clv: 820000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/zhanna_all_points.html",
    clustered_points: "/maps/zhanna_clustered_points.html",
    heatmap: "/maps/zhanna_heatmap.html",
    time_heatmap: "/maps/zhanna_time_heatmap.html",
    time_points: "/maps/zhanna_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 800000,
          openDate: "2024-09-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.0%",
          sum: 600000,
          openDate: "2024-05-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-07-01",
          validUntil: "2026-07-01",
          sum: 65000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "ОГПО",
          type: "Страхование гражданской ответственности",
          openDate: "2025-05-10",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Жанна, не забудьте оплатить часть кредита онлайн",
      topic: "Кредит",
      status: "Открыт"
    },
    history: [
      { date: "2025-11-07", text: "Напоминание: платёж по кредиту", campaign: "CreditCare", status: "Открыт" },
      { date: "2025-10-14", text: "Baytaq — начислены проценты", campaign: "Deposit", status: "Доставлен" },
      { date: "2025-09-28", text: "Оформите ОГПО за 2 минуты", campaign: "Garant", status: "Доставлен" }
    ],
    frequency: { daily: 0.3, weekly: 1.6, monthly: 5.0 },
    conversion: { overall: "50%", clickRate: "30%" },
    insights: { topics: "погашение кредита, депозиты, страхование" },
    topPush: { text: "Baytaq — выгодное пополнение", or: "62%", ctr: "28%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 45000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 70000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Health", share: "15%" },
        { mcc: "Children", share: "10%" },
        { mcc: "Utilities", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 14500, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-20", type: "Коммуналка", amount: 18000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Пополнение депозита", amount: 30000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-11-02", type: "Погашение кредита", amount: 45000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Часто использует мобильное приложение для пополнений депозита",
      "Стабильно оплачивает коммуналку и кредитные платежи",
      "Позитивно реагирует на предложения по депозитам"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число",
    salarySource: "ТОО «LogiTrans Service»",
    allocation: [
      "Погашение кредитов (35%)",
      "Семейные расходы (30%)",
      "Пополнение депозита (15%)",
      "Покупки (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Клиент с кредитными обязательствами, но устойчивым поведением по платежам",
    habitScore: 76,

    expenseFlow: [
      { stage: "Поступления", amount: 100 },
      { stage: "Погашение кредитов", amount: 35 },
      { stage: "Семейные расходы", amount: 30 },
      { stage: "Пополнение депозита", amount: 15 },
      { stage: "Покупки", amount: 15 },
      { stage: "Свободные средства", amount: 5 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 28 },
      { name: "Samsung Pay", value: 22 },
      { name: "Kaspi QR", value: 20 },
      { name: "AlatauCityBank QR", value: 10 },
      { name: "Карта банка", value: 20 }
    ]
  },

  tags: [
    "кредитный клиент",
    "семейный",
    "депозит Baytaq",
    "использует МП",
    "регулярные платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Айдаров Нурлан Ерланович",
      type: "Супруг",
      birthDate: "1994-07-12",
      jointProducts: ["ОГПО"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512140
    },
    {
      name: "Айдаров Асхат Нурланович",
      type: "Ребёнок",
      birthDate: "2014-11-05",
      status: "Неактивен",
      ac_id: 100073512142
    }
  ]
}

];
