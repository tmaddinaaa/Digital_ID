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
  revenue: { 
    margin: 20000,        // чистая прибыль банка с клиента за год
    commission: 7000,     // комиссионные доходы
    interest: 8000        // процентный доход
  },
  ltv: 175000,            // Lifetime Value за 5 лет
  clv: 200000             // прогнозируемая ценность клиента
},
    geoMaps: {
      all_points: "/maps/almat_all_points.html",
      clustered_points: "/maps/almat_clustered_points.html",
      heatmap: "/maps/almat_heatmap.html",
      time_heatmap: "/maps/almat_time_heatmap.html",
      time_points: "/maps/almat_time_points.html",
      table: "/tables/almat_table.xlsx",
      path_points: "/maps/almat_geo_paths.html",
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
        { date: "2025-09-14", text: "Будьте осторожны!", campaign: "Информационный", status: "Прочитан" },
        {date: "2025-10-31", text: "Платите за коммуналку быстро и удобно!", campaign: "Триггерный",  status: "Доставлен"},
      ],
      frequency: { daily: 0.1, weekly: 1, monthly: 3},
      conversion: { overall: "65%", clickRate: "42%" },
      insights: { topics: "coming" },
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
        "Переводы (10%)",
        "Прочее (35%)",
      ],
      mlInsight: "70% дохода распределяется в первые 2 дня после зарплаты",
      habitScore: 84,

      expenseFlow: [
        
        { stage: "Оплата коммуналки", amount: 3 },
        { stage: "Снятия наличных", amount: 25 },
        { stage: "Пополнение депозита", amount: 20 },
        { stage: "Переводы внутри Банка", amount: 15 },
        { stage: "Свободные средства", amount: 37 },
      ],

      paymentMethods: [
        { name: "Kaspi QR", value: 4 }, 
        { name: "Alatau City QR", value: 20 }, 
        { name: "Apple Pay", value: 44 },
        { name: "Google Pay", value: 0 },
        { name: "Карта Банка через POS", value: 42 },
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
      table: "/tables/altynwaw_table.xlsx" // ✅ путь к таблице
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
        status: "Прочитан",
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
        "Переводы (20%)",
        "Прочее (17%)",
      ],
      mlInsight: "Около 63% карточных поступлений идут на Retail",
      habitScore: 85,

      expenseFlow: [
        { stage: "Снятия наличных", amount: 15 },
        { stage: "Покупки и траты", amount: 30 },
        { stage: "Свободные средства", amount: 55 },
      ],

      paymentMethods: [
        { name: "Kaspi QR", value: 0 }, 
        { name: "Apple Pay", value: 83 },
        { name: "Google Pay", value: 0 },
        { name: "Карта Банка через POS", value: 17 },
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
  ac_id: 100073512190,
  name: "Ахметов Рамиль Ержанович",
  iin: "880621301547",
  city: "АКТАУ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ахметов Рамиль Ержанович",
    iin: "880621301547",
    birthDate: "1988-06-21",
    age: 37,
    gender: "Мужской",
    contacts: { phone: "+77074443322", email: "ramil.akhmetov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актау",
    activeCity: "Актау",
    device: { os: "Android", model: "Samsung Galaxy S23 FE", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-08-05",
    bankRegistrationDate: "2017-03-18",
    mobileAppRegistrationDuration: "5 лет 3 месяца",
    bankRegistrationDuration: "8 лет 8 месяцев",
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
    revenue: { margin: 310000, commission: 90000, interest: 85000 },
    ltv: 1850000,
    clv: 2200000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/ramil_all_points.html",
    clustered_points: "/maps/ramil_clustered_points.html",
    heatmap: "/maps/ramil_heatmap.html",
    time_heatmap: "/maps/ramil_time_heatmap.html",
    time_points: "/maps/ramil_time_points.html"
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
          sum: 2800000,
          openDate: "2023-10-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.2%",
          sum: 1600000,
          openDate: "2025-01-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2021-06-20",
          validUntil: "2025-06-20",
          sum: 210000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-07-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2024-07-01",
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
      text: "Рамиль, пополните депозит Baytaq и получите дополнительный доход",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      {
        date: "2025-11-06",
        text: "Повышенная ставка по Baytaq при пополнении до конца месяца",
        campaign: "Deposit",
        status: "Прочитан"
      },
      {
        date: "2025-10-18",
        text: "Рамиль, следите за выплатами по онлайн кредиту в приложении",
        campaign: "CreditCare",
        status: "Прочитан"
      },
      {
        date: "2025-09-12",
        text: "Акции: новые инструменты для диверсификации",
        campaign: "Invest",
        status: "Прочитан"
      }
    ],
    frequency: { daily: 0.35, weekly: 1.9, monthly: 6.0 },
    conversion: { overall: "58%", clickRate: "32%" },
    insights: { topics: "депозит, инвестиции, управление кредитом, автострахование" },
    topPush: { text: "Повышенная ставка по Baytaq", or: "72%", ctr: "34%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
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
      ownTransfers: { freq: 4, avgSum: 80000 },
      internalTransfers: { freq: 2, avgSum: 90000 },
      externalTransfers: { freq: 2, avgSum: 110000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" },
        { mcc: "Children", share: "10%" },
        { mcc: "Auto", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 26000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Коммуналка", amount: 28000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Погашение кредита", amount: 145000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Пополнение депозита", amount: 120000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-11-01", type: "P2P", amount: 60000, location: "Мобильное приложение", currency: "₸" },
        { id: 6, date: "2025-11-03", type: "Инвестиции", amount: 80000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Смешанный источник дохода: зарплата + доход от ИП",
      "Активно управляет кредитом, депозитом и инвестициями",
      "Использует страховые продукты для защиты авто и семьи"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 и 30 число",
    salarySource: "ИП «Aqtau Marine Service» + контрактные услуги",
    allocation: [
      "Погашение кредита (25%)",
      "Семейные расходы (30%)",
      "Депозит и сбережения (20%)",
      "Инвестиции (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Зрелый клиент со смешанной доходной базой и устойчивой финансовой дисциплиной",
    habitScore: 88,

    expenseFlow: [
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Семейные расходы", amount: 30 },
      { stage: "Депозит и сбережения", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Apple Pay", value: 25 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "смешанный доход",
    "активный пользователь",
    "депозит Baytaq",
    "Акции",
    "страхование авто",
    "семейный клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Ахметова Айзада Серкебаевна",
      type: "Супруга",
      birthDate: "1990-09-02",
      status: "Активен",
      ac_id: 100073512191
    },
    {
      name: "Ахметов Данияр Рамильевич",
      type: "Ребёнок",
      birthDate: "2014-04-15",
      status: "Неактивен",
      ac_id: 100073512192
    },
    {
      name: "Ахметова Алина Рамильевна",
      type: "Ребёнок",
      birthDate: "2019-01-27",
      status: "Неактивен",
      ac_id: 100073512193
    }
  ]
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-08", text: "Ваш депозит Baytaq приносит 15% годовых", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-18", text: "Онлайн Кредит до 8 млн без визита", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-30", text: "Акции — новые возможности", campaign: "Invest", status: "Прочитан" },
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
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
  ac_id: 100073512351,
  name: "Ахметов Дамир Ержанович",
  iin: "910812300411",
  city: "КАРАГАНДА",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ахметов Дамир Ержанович",
    iin: "910812300411",
    birthDate: "1991-08-12",
    age: 34,
    gender: "Мужской",
    contacts: { phone: "+77073332244", email: "damir.akhmetov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung Galaxy S22", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-05-02",
    bankRegistrationDate: "2018-10-10",
    mobileAppRegistrationDuration: "5 лет 6 месяцев",
    bankRegistrationDuration: "7 лет 1 месяц",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 540000, commission: 75000, interest: 110000 },
    ltv: 2300000,
    clv: 2800000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/damir_all_points.html",
    clustered_points: "/maps/damir_clustered_points.html",
    heatmap: "/maps/damir_heatmap.html",
    time_heatmap: "/maps/damir_time_heatmap.html",
    time_points: "/maps/damir_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 3500000,
          openDate: "2023-11-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-09-10",
          validUntil: "2026-09-10",
          sum: 130000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "14.9%",
          sum: 400000,
          openDate: "2022-04-01",
          closeDate: "2023-04-01",
          status: "Закрыт"
        }
      ]
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-02-01",
          status: "Активен"
        }
      ]
    },

    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-09",
      text: "Дамир, досрочное погашение кредита без комиссии до конца месяца!",
      topic: "Кредиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Погасите часть кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-17", text: "Автострахование — проверьте срок действия", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "У вас доступно повышение лимита по карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.5, monthly: 4.3 },
    conversion: { overall: "70%", clickRate: "34%" },
    insights: { topics: "кредиты, страхование, карты" },
    topPush: { text: "Погашение кредита без комиссии", or: "72%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      atmWithdrawals: { freq: 2, avgSum: 60000, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 80000 },
      internalTransfers: { freq: 2, avgSum: 50000 },
      externalTransfers: { freq: 1, avgSum: 120000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Погашение кредита", amount: 130000, location: "Онлайн", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Retail", amount: 23000, location: "ТЦ City Mall", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Автострахование", amount: 90000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Основной фокус на кредитах и страховании",
      "Регулярные погашения и частичное досрочное закрытие",
      "Средний риск, высокая вовлеченность"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Karaganda Service Group»",
    allocation: [
      "Погашение кредита (40%)",
      "Покупки (25%)",
      "Страхование (15%)",
      "Прочее (20%)"
    ],
    mlInsight: "Клиент с кредитной ориентацией и устойчивыми выплатами",
    habitScore: 84,
    expenseFlow: [
      { stage: "Погашение кредита", amount: 40 },
      { stage: "Покупки", amount: 25 },
      { stage: "Страхование", amount: 15 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 5 },
      { name: "Alatau City QR", value: 25 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 10 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "кредитный клиент",
    "Автострахование",
    "Gold карта",
    "рефинансирование",
    "погашение без комиссии"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Ахметова Динара Рустамовна",
      type: "Супруга",
      birthDate: "1993-03-21",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512352
    },
    {
      name: "Ахметов Али Дамирович",
      type: "Сын",
      birthDate: "2019-08-15",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512353
    }
  ]
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-15",
          status: "Активен",
        },
        {
          name: "Страхование жизни",
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
      status: "Прочитан",
    },
    history: [
      {
        date: "2025-11-06",
        text: "Повышенная ставка по Baytaq для премиум-клиентов",
        campaign: "Deposit",
        status: "Прочитан",
      },
      {
        date: "2025-10-22",
        text: "Акции: подбор портфеля под ваш профиль",
        campaign: "Invest",
        status: "Прочитан",
      },
      {
        date: "2025-09-30",
        text: "Продлите Автострахование и Страхование жизни онлайн",
        campaign: "Garant",
        status: "Прочитан",
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
      "Регулярно пополняет депозит и Акции",
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 15 },
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
      jointProducts: ["Совместный депозит", "Автострахование", "Страхование жизни"],
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
  ac_id: 100073512180,
  name: "Тулегенов Адилет Нургалиевич",
  iin: "900405301279",
  city: "АЛМАТЫ",
  segment: "Средний доход, пассивные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тулегенов Адилет Нургалиевич",
    iin: "900405301279",
    birthDate: "1990-04-05",
    age: 35,
    gender: "Мужской",
    contacts: { phone: "+77075558899", email: "adilet.tulegenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S22", lastLogin: "2025-10-25" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-06-10",
    bankRegistrationDate: "2019-11-18",
    mobileAppRegistrationDuration: "4 года 5 месяцев",
    bankRegistrationDuration: "6 лет",
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
    revenue: { margin: 160000, commission: 20000, interest: 40000 },
    ltv: 750000,
    clv: 900000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/adilet_all_points.html",
    clustered_points: "/maps/adilet_clustered_points.html",
    heatmap: "/maps/adilet_heatmap.html",
    time_heatmap: "/maps/adilet_time_heatmap.html",
    time_points: "/maps/adilet_time_points.html"
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
          openDate: "2020-09-10",
          validUntil: "2025-09-10",
          sum: 95000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.0%",
          sum: 450000,
          openDate: "2024-10-01",
          status: "Активен"
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Низкий",
      depositInterest: "Средний"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-10-30",
      text: "Адилет, продлите депозит Baytaq на выгодных условиях",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-10-30", text: "Продление депозита Baytaq без потери процентов", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-18", text: "Инвестируйте с Alatau Invest от 20 000 ₸", campaign: "Invest", status: "Не прочитан" },
      { date: "2025-08-20", text: "Узнайте о бонусах за онлайн-платежи", campaign: "Card", status: "Не прочитан" }
    ],
    frequency: { daily: 0.1, weekly: 0.6, monthly: 2.2 },
    conversion: { overall: "18%", clickRate: "10%" },
    insights: { topics: "депозит, инвестиции, информативные рассылки" },
    topPush: { text: "Продление депозита без потери процентов", or: "35%", ctr: "15%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 35000, trend: "-5%" },
      ownTransfers: { freq: 2, avgSum: 45000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 16000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Коммуналка", amount: 20000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-22", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Пассивное поведение, но сохраняет депозитную активность",
      "Низкий отПрочитан на коммуникации",
      "Редкие, но стабильные операции по карте"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "20 число",
    salarySource: "ТОО «Almaty Logistics»",
    allocation: [
      "Коммуналка (25%)",
      "Покупки (35%)",
      "Сбережения (25%)",
      "Прочее (15%)"
    ],
    mlInsight: "Пассивный клиент со стабильным, но ограниченным доходом",
    habitScore: 65,

    expenseFlow: [
      
      { stage: "Коммуналка", amount: 25 },
      { stage: "Покупки", amount: 35 },
      { stage: "Сбережения", amount: 25 },
      { stage: "Свободные средства", amount: 15 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 40 },
      { name: "Google Pay", value: 15 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "пассивный клиент",
    "средний доход",
    "депозит Baytaq",
    "низкий отПрочитан",
    "редкая активность"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
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
          name: "Страхование жизни",
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-06", text: "Досрочное погашение без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-20", text: "Страховка Страхование жизни онлайн за 2 минуты", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-15", text: "Оплачивайте коммуналку в приложении", campaign: "Service", status: "Прочитан" },
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 15 },
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
      jointProducts: ["Страхование жизни"],
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-07", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Получайте до 15% годовых по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-05", text: "Оплачивайте коммунальные в приложении", campaign: "Service", status: "Прочитан" },
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
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Покупки и повседневные расходы", amount: 30 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 25 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-05",
          status: "Активен",
        },
        {
          name: "Страхование жизни",
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-06", text: "Бонусная ставка по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-18", text: "Автострахование продлено", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Акции: новые возможности", campaign: "Invest", status: "Прочитан" },
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 10 },
    ],
  },

  tags: ["премиум клиент", "инвестиции", "страхование", "депозит", "высокий доход"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Тлеубаев Ербол Каирбекович",
      type: "Супруг",
      birthDate: "1973-12-22",
      jointProducts: ["Совместный депозит", "Автострахование"],
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-01",
          status: "Активен",
        },
        {
          name: "Страхование жизни",
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
      status: "Прочитан",
    },
    history: [
      {
        date: "2025-11-05",
        text: "Повышенная ставка по Baytaq для вас",
        campaign: "Deposit",
        status: "Прочитан",
      },
      {
        date: "2025-10-18",
        text: "Акции: новые возможности",
        campaign: "Invest",
        status: "Прочитан",
      },
      {
        date: "2025-09-22",
        text: "Автострахование и Страхование жизни онлайн без визита",
        campaign: "Garant",
        status: "Прочитан",
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
      "Стабильно пополняет депозит и Акции",
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-06", text: "Получайте бонусы за онлайн-оплаты", campaign: "Card", status: "Прочитан" },
      { date: "2025-10-18", text: "Онлайн Кредит до 8 млн без визита", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-12", text: "Оплатите коммунальные в приложении", campaign: "Service", status: "Прочитан" },
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
      "Переводы (15%)",
      "Оплата штрафов и налогов (5%)",
      "Прочее (20%)",
    ],
    mlInsight: "Доход поступает нерегулярно, траты распределены небольшими суммами в течение месяца",
    habitScore: 58,

    expenseFlow: [
      { stage: "Покупки и повседневные траты", amount: 45 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Переводы ", amount: 15 },
      { stage: "Штрафы и налоги", amount: 5 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Google Pay", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
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
  ac_id: 100073512251,
  name: "Жанабекова Алия Муратовна",
  iin: "870902400735",
  city: "АЛМАТЫ",
  segment: "Средний доход, пассивные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жанабекова Алия Муратовна",
    iin: "870902400735",
    birthDate: "1987-09-02",
    age: 38,
    gender: "Женский",
    contacts: { phone: "+77074445566", email: "aliya.zhanabekova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-10-15",
    bankRegistrationDate: "2019-04-20",
    mobileAppRegistrationDuration: "4 года 1 месяц",
    bankRegistrationDuration: "6 лет 7 месяцев",
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
    revenue: { margin: 120000, commission: 20000, interest: 15000 },
    ltv: 700000,
    clv: 950000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/aliya_zhanabekova_all_points.html",
    clustered_points: "/maps/aliya_zhanabekova_clustered_points.html",
    heatmap: "/maps/aliya_zhanabekova_heatmap.html",
    time_heatmap: "/maps/aliya_zhanabekova_time_heatmap.html",
    time_points: "/maps/aliya_zhanabekova_time_points.html"
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
          sum: 850000,
          openDate: "2024-06-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-09-15",
          validUntil: "2026-09-15",
          sum: 95000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      date: "2025-11-06",
      text: "Алия, ваш депозит Baytaq приносит до 15% годовых — проверьте начисления",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Начислены проценты по депозиту Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-12", text: "Акции показал рост доходности +6%", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-20", text: "Добавьте Alatau Invest в приложение для удобного контроля", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.8 },
    conversion: { overall: "58%", clickRate: "33%" },
    insights: { topics: "депозит, инвестиции, сбережения" },
    topPush: { text: "Baytaq — максимальная ставка 15%", or: "72%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "-3%" },
      ownTransfers: { freq: 2, avgSum: 15000 },
      internalTransfers: { freq: 1, avgSum: 20000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "35%" },
        { mcc: "Retail", share: "30%" },
        { mcc: "Education", share: "10%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Children", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 15000, location: "Kaspi Mall", currency: "₸" },
        { id: 2, date: "2025-10-08", type: "Food", amount: 12000, location: "Супермаркет", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Коммуналка", amount: 18000, location: "Онлайн", currency: "₸" },
        { id: 4, date: "2025-10-23", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-10-30", type: "Инвестиции", amount: 50000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Домохозяйка с умеренным доходом семьи, управляет депозитом и инвестициями",
      "Регулярно совершает покупки и коммунальные платежи",
      "Основная цель — накопления и финансовая стабильность семьи"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Доход семьи поступает нерегулярно (такси + депозит)",
    salarySource: "Семейный бюджет, доход супруга, проценты по депозиту",
    allocation: [
      "Домашние расходы (35%)",
      "Сбережения (25%)",
      "Образование детей (15%)",
      "Коммуналка (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Финансово дисциплинированная клиентка, предпочитает накопления и инвестиции",
    habitScore: 82,

    expenseFlow: [
      { stage: "Домашние расходы", amount: 35 },
      { stage: "Сбережения", amount: 25 },
      { stage: "Образование детей", amount: 15 },
      { stage: "Коммуналка", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Карта Банка через POS", value: 35 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "супруга таксиста",
    "средний доход",
    "депозит Baytaq",
    "инвестиции",
    "накопления",
    "домохозяйка"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жанабеков Руслан Ерланович",
      type: "Супруг",
      birthDate: "1985-04-11",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512250
    }
  ]
},
{
  ac_id: 100073512260,
  name: "Ахметова Дана Аскаровна",
  iin: "960713401872",
  city: "ПАВЛОДАР",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ахметова Дана Аскаровна",
    iin: "960713401872",
    birthDate: "1996-07-13",
    age: 29,
    gender: "Женский",
    contacts: { phone: "+77074449922", email: "dana.akhmetova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Павлодар",
    activeCity: "Павлодар",
    device: { os: "iPhone", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-03-12",
    bankRegistrationDate: "2019-10-05",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "6 лет 1 месяц",
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
    revenue: { margin: 240000, commission: 40000, interest: 60000 },
    ltv: 1200000,
    clv: 1500000
  },

  // 🗺 Геоданные / карты
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
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1000000,
          openDate: "2024-12-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-08-10",
          validUntil: "2026-08-10",
          sum: 180000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-06-01",
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
      text: "Дана, откройте дополнительный депозит Baytaq с бонусной ставкой +0.5%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Baytaq: бонус +0.5% для постоянных клиентов", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Автострахование — обновите полис на новый сезон", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Ваш Акции в плюсе +4.2% за квартал", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.5, monthly: 5 },
    conversion: { overall: "61%", clickRate: "36%" },
    insights: { topics: "депозиты, страхование, инвестиции" },
    topPush: { text: "Baytaq — бонусная ставка для постоянных клиентов", or: "70%", ctr: "37%" },
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
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 25000 },
      internalTransfers: { freq: 2, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 10000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Insurance", share: "10%" },
        { mcc: "Travel", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 25000, location: "Mall City", currency: "₸" },
        { id: 2, date: "2025-10-08", type: "Путешествия", amount: 120000, location: "Booking.com", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Пополнение депозита", amount: 50000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-22", type: "Инвестиции", amount: 60000, location: "Alatau Invest", currency: "₸" },
        { id: 5, date: "2025-10-30", type: "Автострахование", amount: 85000, location: "Alatau Garant", currency: "₸" }
      ]
    },
    insights: [
      "Замужем, супруг не является клиентом банка",
      "Имеет стабильный доход и активные сбережения",
      "Предпочитает депозиты и инвестиции, интересуется страхованием"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число каждого месяца",
    salarySource: "ТОО «Pavlodar Group Service»",
    allocation: [
      "Сбережения (25%)",
      "Путешествия (20%)",
      "Инвестиции (20%)",
      "Покупки (20%)",
      "Прочее (15%)"
    ],
    mlInsight: "Финансово устойчивая клиентка, проявляет интерес к инвестиционным и страховым продуктам",
    habitScore: 84,

    expenseFlow: [
      { stage: "Сбережения", amount: 25 },
      { stage: "Путешествия", amount: 20 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки", amount: 20 },
      { stage: "Свободные средства", amount: 15 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "замужем",
    "активная клиентка",
    "депозит Baytaq",
    "Акции",
    "страхование Автострахование",
    "средний доход"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Супруг (не клиент банка)",
      type: "Супруг",
      birthDate: [],
      jointProducts: [],
      status: "Неактивен",
      lastActivity: [],
      ac_id: []
    }
  ]
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
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
      text: "Сауле, обновите страховку Страхование жизни до конца месяца",
      topic: "Страхование",
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-04", text: "Обновите страховку Страхование жизни", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-15", text: "Проверьте доходность по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-08", text: "Инвестиции без риска — Alatau Invest", campaign: "Invest", status: "Прочитан" },
    ],
    frequency: { daily: 0.3, weekly: 1.5, monthly: 4 },
    conversion: { overall: "58%", clickRate: "36%" },
    insights: { topics: "депозит, страхование, инвестиции" },
    topPush: { text: "Обновите страховку Страхование жизни", or: "75%", ctr: "40%" },
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 10 },
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
  ac_id: 100073512317,
  name: "Турлыбеков Асхат Ерланулы",
  iin: "950410300844",
  city: "АЛМАТЫ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Турлыбеков Асхат Ерланулы",
    iin: "950410300844",
    birthDate: "1995-04-10",
    age: 30,
    gender: "Мужской",
    contacts: { phone: "+77071113344", email: "askhat.turlybekov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2020-08-05",
    bankRegistrationDate: "2019-10-20",
    mobileAppRegistrationDuration: "5 лет 3 месяца",
    bankRegistrationDuration: "6 лет 1 месяц",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 420000, commission: 60000, interest: 85000 },
    ltv: 2100000,
    clv: 2550000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/askhat_all_points.html",
    clustered_points: "/maps/askhat_clustered_points.html",
    heatmap: "/maps/askhat_heatmap.html",
    time_heatmap: "/maps/askhat_time_heatmap.html",
    time_points: "/maps/askhat_time_points.html"
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
          sum: 2400000,
          openDate: "2024-08-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-09-12",
          validUntil: "2027-09-12",
          sum: 160000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
    },

    mlIndicators: {
      churnRisk: "Средний",
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
      text: "Асхат, проверьте новые предложения по инвестициям в AlatauCity Invest",
      topic: "Инвестиции",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Инвестиции с доходностью до 18%", campaign: "Invest", status: "Прочитан" },
      { date: "2025-10-23", text: "Скидка 2% на кредит при досрочном погашении", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-29", text: "Попробуйте новый формат инвестиций", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.8, monthly: 4.5 },
    conversion: { overall: "68%", clickRate: "34%" },
    insights: { topics: "инвестиции, кредиты, цифровые сервисы" },
    topPush: { text: "Инвестиции до 18%", or: "74%", ctr: "36%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      atmWithdrawals: { freq: 1, avgSum: 25000, trend: "-2%" },
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 21000, location: "ТЦ Mega", currency: "₸" },
        { id: 2, date: "2025-10-16", type: "Погашение кредита", amount: 80000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Инвестиции", amount: 60000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Активный пользователь мобильного банка",
      "Интересуется инвестициями и кредитными предложениями",
      "Регулярные платежи и онлайн-активность"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ИП «Turlybekov Media»",
    allocation: [
      "Погашение кредита (25%)",
      "Инвестиции (20%)",
      "Покупки и услуги (35%)",
      "Прочее (20%)"
    ],
    mlInsight: "Клиент с устойчивым доходом и активной цифровой активностью, склонен к инвестициям",
    habitScore: 84,
    expenseFlow: [
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки и услуги", amount: 35 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "средний доход",
    "активный клиент",
    "онлайн кредит",
    "инвестиции",
    "Gold карта",
    "ИП клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512303,
  name: "Канатов Асет Канатулы",
  iin: "930821301945",
  city: "АСТАНА",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Канатов Асет Канатулы",
    iin: "930821301945",
    birthDate: "1993-08-21",
    age: 32,
    gender: "Мужской",
    contacts: { phone: "+77071231231", email: "asset.kanatov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "iOS", model: "iPhone 15 Pro", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не женат",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-09-15",
    bankRegistrationDate: "2020-06-10",
    mobileAppRegistrationDuration: "4 года 2 месяца",
    bankRegistrationDuration: "5 лет 5 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 260000, commission: 45000, interest: 60000 },
    ltv: 1200000,
    clv: 1550000
  },

  // 🗺️ Геоданные (заглушки под фронт)
  geoMaps: {
    all_points: "/maps/asset_all_points.html",
    clustered_points: "/maps/asset_clustered_points.html",
    heatmap: "/maps/asset_heatmap.html",
    time_heatmap: "/maps/asset_time_heatmap.html",
    time_points: "/maps/asset_time_points.html"
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
          openDate: "2024-04-05",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 600000,
          openDate: "2025-02-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-03-20",
          validUntil: "2026-03-20",
          sum: 90000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
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
      date: "2025-11-08",
      text: "Асет, пополните депозит Baytaq от 100 000 ₸ и получите бонус +0.5%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      {
        date: "2025-11-08",
        text: "Бонус +0.5% за пополнение Baytaq",
        campaign: "Deposit",
        status: "Прочитан"
      },
      {
        date: "2025-10-25",
        text: "Контролируйте платежи по онлайн-кредиту в приложении",
        campaign: "Credit",
        status: "Прочитан"
      },
      {
        date: "2025-09-18",
        text: "Акции: новые идеи для вложений",
        campaign: "Invest",
        status: "Прочитан"
      }
    ],
    frequency: { daily: 0.5, weekly: 2.0, monthly: 6.5 },
    conversion: { overall: "64%", clickRate: "37%" },
    insights: { topics: "кредиты, депозиты, инвестиции, цифровые сервисы" },
    topPush: {
      text: "Пополнение Baytaq с бонусом",
      or: "75%",
      ctr: "39%"
    },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
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

      ownTransfers: { freq: 4, avgSum: 25000 },
      internalTransfers: { freq: 2, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 40000 },
      internationalTransfers: { freq: 0, avgSum: 0 },

      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Transport", share: "10%" }
      ],

      transactions: [
        {
          id: 1,
          date: "2025-10-04",
          type: "Retail",
          amount: 18000,
          location: "ТРЦ Mega Silk Way",
          currency: "₸"
        },
        {
          id: 2,
          date: "2025-10-10",
          type: "Коммуналка",
          amount: 9000,
          location: "Мобильное приложение",
          currency: "₸"
        },
        {
          id: 3,
          date: "2025-10-16",
          type: "P2P",
          amount: 25000,
          location: "Мобильное приложение",
          currency: "₸"
        },
        {
          id: 4,
          date: "2025-10-22",
          type: "Пополнение депозита",
          amount: 60000,
          location: "Интернет-банк",
          currency: "₸"
        },
        {
          id: 5,
          date: "2025-10-29",
          type: "Погашение кредита",
          amount: 65000,
          location: "Мобильное приложение",
          currency: "₸"
        },
        {
          id: 6,
          date: "2025-11-03",
          type: "Инвестиции",
          amount: 40000,
          location: "AlatauCity Invest",
          currency: "₸"
        }
      ]
    },
    insights: [
      "IT-специалист / консультант, официальная зарплата + доход от проектов через ИП",
      "Активно пользуется мобильным приложением и онлайн-банком",
      "Сбалансированно распределяет средства между кредитом, депозитом и инвестициями",
      "Полностью цифровое поведение, без использования наличных"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 и 25 число (зарплата + проекты)",
    salarySource: "ТОО «Digital Solutions KZ» + ИП «Kanatov Consulting»",
    allocation: [
      "Погашение кредита (20%)",
      "Пополнение депозита (20%)",
      "Инвестиции (15%)",
      "Повседневные расходы (30%)",
      "Резерв и прочее (15%)"
    ],
    mlInsight: "Цифровой, дисциплинированный клиент с растущим потенциалом и интересом к инвестициям",
    habitScore: 89,

    expenseFlow: [
      { stage: "Погашение кредита", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Повседневные расходы", amount: 30 },
      { stage: "Резерв и прочее", amount: 15 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "активный клиент",
    "средний доход",
    "онлайн кредит",
    "депозит Baytaq",
    "Акции",
    "ИП",
    "цифровые платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512335,
  name: "Ахметова Динара Абзаловна",
  iin: "920110400844",
  city: "КАРАГАНДА",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ахметова Динара Абзаловна",
    iin: "920110400844",
    birthDate: "1992-01-10",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77075554477", email: "dinara.akhmetova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-11-25",
    bankRegistrationDate: "2019-10-01",
    mobileAppRegistrationDuration: "5 лет",
    bankRegistrationDuration: "6 лет 1 месяц",
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
    revenue: { margin: 280000, commission: 30000, interest: 40000 },
    ltv: 1200000,
    clv: 1500000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/dinara_all_points.html",
    clustered_points: "/maps/dinara_clustered_points.html",
    heatmap: "/maps/dinara_heatmap.html",
    time_heatmap: "/maps/dinara_time_heatmap.html",
    time_points: "/maps/dinara_time_points.html"
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
          interestRate: "14.9%",
          sum: 850000,
          openDate: "2025-03-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2023-05-15",
          validUntil: "2027-05-15",
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-11-01",
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
      date: "2025-11-07",
      text: "Динара, продлите депозит Baytaq — бонус +0.5% к ставке",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-21", text: "Автострахование — проверьте актуальность страховки", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-28", text: "Бонусы по Gold карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.5, monthly: 4.2 },
    conversion: { overall: "72%", clickRate: "36%" },
    insights: { topics: "депозиты, страхование, бонусы" },
    topPush: { text: "Baytaq — бонус к ставке", or: "80%", ctr: "37%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 12000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 1, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 12000, location: "ТЦ CityMall", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Пополнение депозита", amount: 50000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Автострахование", amount: 75000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Семейная клиентка с депозитом и страховкой",
      "Предпочитает стабильные накопления",
      "Использует Gold карту для покупок"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "5 число каждого месяца",
    salarySource: "ТОО «KaragandaTextile»",
    allocation: [
      "Пополнение депозита (35%)",
      "Покупки и семья (40%)",
      "Страхование и услуги (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Пассивная клиентка с устойчивыми доходами, регулярно пополняет депозит",
    habitScore: 83,
    expenseFlow: [
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Покупки и семья", amount: 40 },
      { stage: "Страхование и услуги", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Gold карта",
    "Автострахование",
    "пассивная, но прибыльная",
    "накопления"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Ахметов Руслан Серикович",
      type: "Супруг",
      birthDate: "1991-03-17",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512334
    },
    {
      name: "Ахметов Арсен Русланович",
      type: "Сын",
      birthDate: "2013-08-30",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512336
    }
  ]
},
{
  ac_id: 100073512334,
  name: "Ахметов Руслан Серикович",
  iin: "910317300255",
  city: "КАРАГАНДА",
  segment: "Средний доход, пассивные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ахметов Руслан Серикович",
    iin: "910317300255",
    birthDate: "1991-03-17",
    age: 34,
    gender: "Мужской",
    contacts: { phone: "+77072223311", email: "ruslan.akhmetov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung Galaxy S22", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-03-10",
    bankRegistrationDate: "2020-01-20",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "5 лет 9 месяцев",
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
    revenue: { margin: 320000, commission: 40000, interest: 60000 },
    ltv: 1800000,
    clv: 2100000
  },

  // 🗺️ Геоданные
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
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1100000,
          openDate: "2024-08-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-03-01",
          validUntil: "2027-03-01",
          sum: 120000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-11-01",
          status: "Активен"
        }
      ]
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
      date: "2025-11-06",
      text: "Руслан, проверьте срок действия Автострахование",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Автострахование — проверка срока", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-15", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-21", text: "Обновите данные профиля", campaign: "Info", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.2 },
    conversion: { overall: "60%", clickRate: "28%" },
    insights: { topics: "депозиты, страхование" },
    topPush: { text: "Продление депозита Baytaq", or: "70%", ctr: "29%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,2,0,0,0,0,0,1,2,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "-1%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "25%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 13000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Пополнение депозита", amount: 50000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Автострахование", amount: 85000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Редко пользуется мобильным приложением",
      "В основном хранит средства на депозите",
      "Не пользуется кредитами"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Karaganda Steel»",
    allocation: [
      "Пополнение депозита (40%)",
      "Семейные расходы (40%)",
      "Прочее (20%)"
    ],
    mlInsight: "Средний доход, предпочтение накопительным продуктам, низкая активность по картам",
    habitScore: 75,
    expenseFlow: [
      { stage: "Пополнение депозита", amount: 40 },
      { stage: "Семейные расходы", amount: 40 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Автострахование",
    "низкая активность",
    "накопления",
    "семейный клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Ахметова Динара Абзаловна",
      type: "Супруга",
      birthDate: "1992-01-10",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512335
    },
    {
      name: "Ахметов Арсен Русланович",
      type: "Сын",
      birthDate: "2013-08-30",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512336
    }
  ]
},
{
  ac_id: 100073512304,
  name: "Есенов Рауан Мейрамбекович",
  iin: "950312301854",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Есенов Рауан Мейрамбекович",
    iin: "950312301854",
    birthDate: "1995-03-12",
    age: 30,
    gender: "Мужской",
    contacts: { phone: "+77075553322", email: "rauan.esenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung A34", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-01-05",
    bankRegistrationDate: "2020-11-20",
    mobileAppRegistrationDuration: "3 года 10 месяцев",
    bankRegistrationDuration: "5 лет",
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
    revenue: { margin: 110000, commission: 15000, interest: 12000 },
    ltv: 400000,
    clv: 520000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/rauan_all_points.html",
    clustered_points: "/maps/rauan_clustered_points.html",
    heatmap: "/maps/rauan_heatmap.html",
    time_heatmap: "/maps/rauan_time_heatmap.html",
    time_points: "/maps/rauan_time_points.html"
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
          effectiveRate: "ГЭСВ 45%",
          sum: 850000,
          openDate: "2024-05-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2022-10-15",
          validUntil: "2026-10-15",
          sum: 60000.00,
          status: "Активна",
          isSalaryCard: true
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
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Рауан, оплатите часть кредита без комиссии — получите бонус!",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Оплата кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-20", text: "Новые предложения по кредитам", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-28", text: "Акции для держателей карт Silver", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.5, monthly: 4.5 },
    conversion: { overall: "57%", clickRate: "32%" },
    insights: { topics: "кредиты, бонусы, карты" },
    topPush: { text: "Оплата кредита без комиссии", or: "68%", ctr: "34%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
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
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "-5%" },
      ownTransfers: { freq: 3, avgSum: 25000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 20000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Utilities", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 9000, location: "Fix Price", currency: "₸" },
        { id: 2, date: "2025-10-08", type: "Коммуналка", amount: 6000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Погашение кредита", amount: 50000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Работает в сфере обслуживания, небольшой доход",
      "Регулярно использует кредит и мобильное приложение",
      "Основные расходы — покупки и еда"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "20 число каждого месяца",
    salarySource: "ТОО «Food Service KZ»",
    allocation: [
      "Погашение кредита (35%)",
      "Питание и покупки (30%)",
      "Транспорт (15%)",
      "Коммуналка (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "Активный клиент с невысоким доходом, но стабильным кредитным поведением",
    habitScore: 74,
    expenseFlow: [
      { stage: "Погашение кредита", amount: 35 },
      { stage: "Питание и покупки", amount: 30 },
      { stage: "Транспорт", amount: 15 },
      { stage: "Коммуналка", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "активный клиент",
    "малодоходный",
    "онлайн кредит",
    "клиент Silver",
    "регулярные платежи",
    "низкий риск"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512318,
  name: "Садыкова Алия Рустемовна",
  iin: "970723400512",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Садыкова Алия Рустемовна",
    iin: "970723400512",
    birthDate: "1997-07-23",
    age: 28,
    gender: "Женский",
    contacts: { phone: "+77073336677", email: "aliya.sadykova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-09-10",
    bankRegistrationDate: "2020-05-22",
    mobileAppRegistrationDuration: "4 года 2 месяца",
    bankRegistrationDuration: "5 лет 6 месяцев",
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
    revenue: { margin: 190000, commission: 15000, interest: 10000 },
    ltv: 620000,
    clv: 790000
  },

  // 🗺️ Геоданные
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
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2022-03-12",
          validUntil: "2026-03-12",
          sum: 55000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "12 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 700000,
          openDate: "2023-02-01",
          closeDate: "2024-02-01",
          status: "Закрыт"
        }
      ]
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: []
    },

    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-05",
      text: "Алия, получите скидку на кредит до 2% при повторном оформлении",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-05", text: "Скидка на повторный кредит", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-21", text: "Обновление мобильного приложения", campaign: "Digital", status: "Прочитан" },
      { date: "2025-09-15", text: "Проверка лимита на карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.5, monthly: 4.0 },
    conversion: { overall: "60%", clickRate: "32%" },
    insights: { topics: "кредиты, карты, цифровые уведомления" },
    topPush: { text: "Скидка на кредит", or: "65%", ctr: "33%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,2,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 10000, trend: "-4%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Transport", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-10", type: "Retail", amount: 12000, location: "ТЦ Mega Park", currency: "₸" },
        { id: 2, date: "2025-10-20", type: "Коммуналка", amount: 5000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "P2P", amount: 15000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Использует мобильное приложение для платежей и переводов",
      "Активна, но имеет ограниченный доход",
      "Часто реагирует на уведомления и акции"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "25 число каждого месяца",
    salarySource: "Кафе «Urban Coffee»",
    allocation: [
      "Питание и покупки (40%)",
      "Коммуналка (20%)",
      "Переводы и подарки (25%)",
      "Прочее (15%)"
    ],
    mlInsight: "Молодая клиентка с низким доходом, активно использует цифровые платежи",
    habitScore: 72,
    expenseFlow: [
      { stage: "Питание и покупки", amount: 40 },
      { stage: "Коммуналка", amount: 20 },
      { stage: "Переводы и подарки", amount: 25 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "молодая клиентка",
    "малодоходная",
    "активное использование приложения",
    "цифровые платежи",
    "Silver карта"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512301,
  name: "Жуматаева Аружан Ермековна",
  iin: "900822401619",
  city: "ШЫМКЕНТ",
  segment: "Средний доход, активные",

  basicInfo: {
    fio: "Жуматаева Аружан Ермековна",
    iin: "900822401619",
    birthDate: "1990-08-22",
    age: 35,
    gender: "Женский",
    contacts: { phone: "+77076668822", email: "aruzhan.zhumatayeva@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-10-12",
    bankRegistrationDate: "2019-05-15",
    mobileAppRegistrationDuration: "5 лет 1 месяц",
    bankRegistrationDuration: "6 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 310000, commission: 35000, interest: 25000 },
    ltv: 1200000,
    clv: 1550000
  },

  geoMaps: {
    all_points: "/maps/aruzhan_all_points.html",
    clustered_points: "/maps/aruzhan_clustered_points.html",
    heatmap: "/maps/aruzhan_heatmap.html",
    time_heatmap: "/maps/aruzhan_time_heatmap.html",
    time_points: "/maps/aruzhan_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 850000,
          openDate: "2024-05-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-03-05",
          validUntil: "2026-03-05",
          sum: 90000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1200000,
          openDate: "2021-02-15",
          status: "Закрыт"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-02-01",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Аружан, настройте автопополнение депозита Baytaq — бонус +0.2%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Бонус при автопополнении депозита", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-14", text: "Автострахование — продление страхового полиса онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-28", text: "Акции показал рост +3.7%", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.3, monthly: 4.0 },
    conversion: { overall: "61%", clickRate: "33%" },
    insights: { topics: "депозиты, инвестиции, страхование" },
    topPush: { text: "Автопополнение депозита Baytaq", or: "70%", ctr: "33%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 25000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 16000, location: "Small Market", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" },
        { id: 3, date: "2025-10-19", type: "Инвестиции", amount: 55000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Активная клиентка, поддерживает инвестиции и сбережения",
      "Часто использует мобильное приложение",
      "Реагирует на кампании по депозитам и инвестициям"
    ]
  },

  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Creative Studio Shym»",
    allocation: [
      "Пополнение депозита (25%)",
      "Инвестиции (20%)",
      "Семейные расходы (25%)",
      "Питание и покупки (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Финансово активная клиентка с умеренной склонностью к инвестициям",
    habitScore: 87,
    expenseFlow: [
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Семейные расходы", amount: 25 },
      { stage: "Питание и покупки", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  tags: [
    "активная клиентка",
    "депозит Baytaq",
    "инвестиции",
    "Автострахование",
    "финансово дисциплинированная",
    "средний доход"
  ],

  relatedClients: [
    {
      name: "Жуматаев Адилет Канатович",
      type: "Супруг",
      birthDate: "1989-03-14",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512300
    },
    {
      name: "Жуматаев Тимур Адилетович",
      type: "Сын",
      birthDate: "2014-11-18",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512302
    }]
},
{
  ac_id: 100073512316,
  name: "Абдрахманова Ляззат Еркиновна",
  iin: "891025400912",
  city: "АКТАУ",
  segment: "Депозитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Абдрахманова Ляззат Еркиновна",
    iin: "891025400912",
    birthDate: "1989-10-25",
    age: 36,
    gender: "Женский",
    contacts: { phone: "+77075558833", email: "lyazzat.abdrakhmanova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актау",
    activeCity: "Актау",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-04-15",
    bankRegistrationDate: "2018-12-01",
    mobileAppRegistrationDuration: "5 лет 7 месяцев",
    bankRegistrationDuration: "6 лет 11 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 620000, commission: 95000, interest: 130000 },
    ltv: 3100000,
    clv: 3850000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/lyazzat_all_points.html",
    clustered_points: "/maps/lyazzat_clustered_points.html",
    heatmap: "/maps/lyazzat_heatmap.html",
    time_heatmap: "/maps/lyazzat_time_heatmap.html",
    time_points: "/maps/lyazzat_time_points.html"
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
          sum: 4000000,
          openDate: "2025-05-05",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-07-10",
          validUntil: "2028-07-10",
          sum: 250000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-02-10",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
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
      date: "2025-11-09",
      text: "Ляззат, продлите депозит Baytaq и получите бонус 1%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Продлите депозит Baytaq — бонус 1%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-19", text: "Автострахование и Страхование жизни — онлайн-оплата без очередей", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-10", text: "Акции доступен в AlatauCity Invest", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.5, weekly: 1.6, monthly: 5.0 },
    conversion: { overall: "74%", clickRate: "42%" },
    insights: { topics: "депозиты, страхование, инвестиции" },
    topPush: { text: "Бонус при продлении депозита", or: "80%", ctr: "43%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,2,0,0,0,0,1,3,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,3,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 70000 },
      internalTransfers: { freq: 2, avgSum: 50000 },
      externalTransfers: { freq: 2, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "20%" },
        { mcc: "Travel", share: "20%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 25000, location: "ТЦ Актау Mall", currency: "₸" },
        { id: 2, date: "2025-10-18", type: "Пополнение депозита", amount: 120000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Автострахование", amount: 95000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Финансово активная клиентка с фокусом на сбережения",
      "Регулярно пополняет депозит",
      "Реагирует на персональные предложения"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Mangystau Energy Service»",
    allocation: [
      "Пополнение депозита (35%)",
      "Путешествия и семья (25%)",
      "Инвестиции (20%)",
      "Прочее (20%)"
    ],
    mlInsight: "Депозитный клиент с высоким уровнем вовлеченности и финансовой дисциплиной",
    habitScore: 91,
    expenseFlow: [
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Путешествия и семья", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Premium карта",
    "Автострахование и Страхование жизни",
    "инвестиции",
    "активный депозитный клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Абдрахманов Мурат Канатович",
      type: "Супруг",
      birthDate: "1987-02-19",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512315
    },
    {
      name: "Абдрахманов Нуркен Муратович",
      type: "Сын",
      birthDate: "2012-08-15",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512317
    }
  ]
},
{
  ac_id: 100073512315,
  name: "Абдрахманов Мурат Канатович",
  iin: "870219301144",
  city: "АКТАУ",
  segment: "Ценные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Абдрахманов Мурат Канатович",
    iin: "870219301144",
    birthDate: "1987-02-19",
    age: 38,
    gender: "Мужской",
    contacts: { phone: "+77075558822", email: "murat.abdrakhmanov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актау",
    activeCity: "Актау",
    device: { os: "iOS", model: "iPhone 15 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2019-11-25",
    bankRegistrationDate: "2018-06-13",
    mobileAppRegistrationDuration: "6 лет",
    bankRegistrationDuration: "7 лет 5 месяцев",
    hasIP: true,
    hasLegalEntity: true,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: true
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 980000, commission: 180000, interest: 210000 },
    ltv: 5600000,
    clv: 6700000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/murat_all_points.html",
    clustered_points: "/maps/murat_clustered_points.html",
    heatmap: "/maps/murat_heatmap.html",
    time_heatmap: "/maps/murat_time_heatmap.html",
    time_points: "/maps/murat_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43%",
          sum: 5500000,
          openDate: "2024-01-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 3000000,
          openDate: "2025-04-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-03-05",
          validUntil: "2028-03-05",
          sum: 500000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-02-10",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-03-01",
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
      date: "2025-11-09",
      text: "Мурат, получите персональный бонус на вклад Baytaq до 16%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Бонусная ставка до 16%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Автострахование и Страхование жизни в одном пакете", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-17", text: "Инвестиционный портфель обновлен", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.6, weekly: 2.0, monthly: 6.5 },
    conversion: { overall: "79%", clickRate: "45%" },
    insights: { topics: "инвестиции, депозиты, страхование, премиум-продукты" },
    topPush: { text: "Персональный бонус по Baytaq", or: "83%", ctr: "46%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,4,3,2,0,0,0,0,2,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,2,0,0,0,0,1,3,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,2,3,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 25000, trend: "-2%" },
      ownTransfers: { freq: 4, avgSum: 80000 },
      internalTransfers: { freq: 3, avgSum: 60000 },
      externalTransfers: { freq: 3, avgSum: 120000 },
      internationalTransfers: { freq: 1, avgSum: 250000 },
      retailPurchases: [
        { mcc: "Retail", share: "20%" },
        { mcc: "Food", share: "15%" },
        { mcc: "Travel", share: "25%" },
        { mcc: "Utilities", share: "10%" },
        { mcc: "Entertainment", share: "30%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Инвестиции", amount: 200000, location: "AlatauCity Invest", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Пополнение депозита", amount: 500000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Retail", amount: 90000, location: "Duty Free", currency: "₸" }
      ]
    },
    insights: [
      "Премиальный клиент с высокой активностью",
      "Использует все каналы банка, включая страхование и инвестиции",
      "Регулярно путешествует и проводит транзакции за рубежом"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Caspian Logistics» и ИП «Abdrakhmanov Group»",
    allocation: [
      "Инвестиции (30%)",
      "Пополнение депозита (25%)",
      "Путешествия и семья (30%)",
      "Прочее (15%)"
    ],
    mlInsight: "Премиум-клиент с диверсифицированными источниками дохода и активным финансовым управлением",
    habitScore: 93,
    expenseFlow: [
      { stage: "Инвестиции", amount: 30 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Путешествия и семья", amount: 30 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 25 },
      { name: "Google Pay", value: 15 },
      { name: "Kaspi QR", value: 15 },
      { name: "Карта Банка через POS", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "премиальный клиент",
    "инвестиции",
    "депозит Baytaq",
    "Автострахование и Страхование жизни",
    "Premium карта",
    "ИП и юрлицо",
    "путешествия"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Абдрахманова Ляззат Еркиновна",
      type: "Супруга",
      birthDate: "1989-10-25",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512316
    },
    {
      name: "Абдрахманов Нуркен Муратович",
      type: "Сын",
      birthDate: "2012-08-15",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512317
    }
  ]
},
{
  ac_id: 100073512300,
  name: "Жуматаев Адилет Канатович",
  iin: "890314300512",
  city: "ШЫМКЕНТ",
  segment: "Пассивные, но прибыльные",

  basicInfo: {
    fio: "Жуматаев Адилет Канатович",
    iin: "890314300512",
    birthDate: "1989-03-14",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77078884455", email: "adilet.zhumataev@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung S22 Ultra", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-08-10",
    bankRegistrationDate: "2020-03-05",
    mobileAppRegistrationDuration: "4 года 3 месяца",
    bankRegistrationDuration: "5 лет 8 месяцев",
    hasIP: true,
    hasLegalEntity: true,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 580000, commission: 45000, interest: 35000 },
    ltv: 2300000,
    clv: 3100000
  },

  geoMaps: {
    all_points: "/maps/adilet_all_points.html",
    clustered_points: "/maps/adilet_clustered_points.html",
    heatmap: "/maps/adilet_heatmap.html",
    time_heatmap: "/maps/adilet_time_heatmap.html",
    time_points: "/maps/adilet_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 2000000,
          openDate: "2024-09-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2022-01-20",
          validUntil: "2026-01-20",
          sum: 450000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43%",
          sum: 1800000,
          openDate: "2021-05-01",
          status: "Закрыт"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-02-01",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Адилет, продлите ваш депозит Baytaq и получите бонус +0.5%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-18", text: "Автострахование — обновите страховой полис", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Акции вырос на 5.2%", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.2 },
    conversion: { overall: "58%", clickRate: "30%" },
    insights: { topics: "депозиты, инвестиции, страхование" },
    topPush: { text: "Продление депозита Baytaq", or: "62%", ctr: "30%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 2, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 30000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Invest", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-08", type: "Retail", amount: 23000, location: "Магазин Технодом", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Инвестиции", amount: 60000, location: "Alatau Invest", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Пополнение депозита", amount: 80000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Предприниматель с ИП, предпочитает сбережения и инвестиции",
      "Редко пользуется приложением, но стабильно поддерживает активные продукты",
      "Высокая прибыль при низкой активности"
    ]
  },

  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ИП «Adilet Logistics»",
    allocation: [
      "Инвестиции (25%)",
      "Пополнение депозита (25%)",
      "Семья и быт (20%)",
      "Налоги и обслуживание ИП (15%)",
      "Прочее (15%)"
    ],
    mlInsight: "Пассивный, но устойчиво прибыльный клиент с предпринимательским доходом",
    habitScore: 91,
    expenseFlow: [
      { stage: "Инвестиции", amount: 25 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Семья и быт", amount: 20 },
      { stage: "Налоги и обслуживание ИП", amount: 15 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "Google Pay", value: 10 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "предприниматель",
    "ИП",
    "депозит Baytaq",
    "инвестиции",
    "Автострахование",
    "прибыльный клиент"
  ],

  relatedClients: [
    {
      name: "Жуматаева Аружан Ермековна",
      type: "Супруга",
      birthDate: "1990-08-22",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512301
    },
    {
      name: "Жуматаев Тимур Адилетович",
      type: "Сын",
      birthDate: "2014-11-18",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512302
    }
  ]
},
{
  ac_id: 100073512285,
  name: "Рахимов Амир Даниярович",
  iin: "980629301845",
  city: "АЛМАТЫ",
  segment: "Прочие источники дохода",

  basicInfo: {
    fio: "Рахимов Амир Даниярович",
    iin: "980629301845",
    birthDate: "1998-06-29",
    age: 27,
    gender: "Мужской",
    contacts: { phone: "+77075557799", email: "amir.rahimov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-03-15",
    bankRegistrationDate: "2021-11-01",
    mobileAppRegistrationDuration: "3 года 8 месяцев",
    bankRegistrationDuration: "4 года",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 110000, commission: 15000, interest: 0 },
    ltv: 320000,
    clv: 420000
  },

  geoMaps: {
    all_points: "/maps/amir_all_points.html",
    clustered_points: "/maps/amir_clustered_points.html",
    heatmap: "/maps/amir_heatmap.html",
    time_heatmap: "/maps/amir_time_heatmap.html",
    time_points: "/maps/amir_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2022-03-20",
          validUntil: "2026-03-20",
          sum: 60000.00,
          status: "Активна",
          isSalaryCard: false
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "12 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 300000,
          openDate: "2025-05-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
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
      creditInterest: "Да",
      depositInterest: "Низкий"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Амир, получите кэшбэк до 2.5% за покупки экипировки и абонементов",
      topic: "Карта",
      status: "Прочитан"
    },
    history: [
      {
        date: "2025-11-06",
        text: "Кэшбэк до 2.5% за оплату спортивных магазинов и студий танцев",
        campaign: "Card",
        status: "Прочитан"
      },
      {
        date: "2025-10-18",
        text: "Контролируйте платежи по онлайн кредиту в мобильном приложении",
        campaign: "Credit",
        status: "Прочитан"
      },
      {
        date: "2025-09-25",
        text: "Попробуйте накопить на турнир с помощью автоперевода",
        campaign: "Savings",
        status: "Прочитан"
      }
    ],
    frequency: { daily: 0.4, weekly: 1.8, monthly: 6 },
    conversion: { overall: "59%", clickRate: "34%" },
    insights: { topics: "карта, кредит, lifestyle" },
    topPush: {
      text: "Кэшбэк за спортивные покупки",
      or: "72%",
      ctr: "36%"
    },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 15000 },
      internalTransfers: { freq: 2, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "50%" },
        { mcc: "Retail", share: "20%" }, // спорттовары, костюмы
        { mcc: "Retail", share: "10%" }, // студийные услуги
        { mcc: "Коммуналка", share: "10%" },
        { mcc: "Прочее", share: "10%" }
      ],
      transactions: [
        {
          id: 1,
          date: "2025-10-03",
          type: "Retail",
          amount: 18000,
          location: "Магазин танцевальной одежды",
          currency: "₸"
        },
        {
          id: 2,
          date: "2025-10-09",
          type: "Retail",
          amount: 12000,
          location: "Аренда зала (онлайн оплата)",
          currency: "₸"
        },
        {
          id: 3,
          date: "2025-10-15",
          type: "P2P",
          amount: 8000,
          location: "Мобильное приложение",
          currency: "₸"
        },
        {
          id: 4,
          date: "2025-10-21",
          type: "Коммуналка",
          amount: 9000,
          location: "Онлайн",
          currency: "₸"
        },
        {
          id: 5,
          date: "2025-10-28",
          type: "Погашение кредита",
          amount: 27000,
          location: "Мобильное приложение",
          currency: "₸"
        }
      ]
    },
    insights: [
      "Профессиональный танцор, доход из шоу, мастер-классов и ИП",
      "Тратит на аренду залов, костюмы, перелёты на выступления",
      "Использует только безналичные и QR-платежи, активно ведёт соцсети"
    ]
  },

  financialHabits: {
    salaryDay: "Нерегулярно (гонорары за выступления и обучение)",
    salarySource: "ИП «DanceMotion» (постановки, мастер-классы, выступления)",
    allocation: [
      "Профессиональные расходы (костюмы, зал) (35%)",
      "Личные расходы и питание (25%)",
      "Путешествия и фестивали (20%)",
      "Погашение кредита (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Творческий профи с нерегулярным доходом, дисциплинирован по кредиту, открыт к офферам по кэшбэку и travel",
    habitScore: 79,
    expenseFlow: [
      { stage: "Проф.расходы", amount: 35 },
      { stage: "Личные расходы", amount: 25 },
      { stage: "Путешествия и фестивали", amount: 20 },
      { stage: "Погашение кредита", amount: 15 },
      { stage: "Свободные средства", amount: 5 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 15 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "профессиональный танцор",
    "нерегулярный доход",
    "онлайн кредит",
    "активные digital-платежи",
    "lifestyle сегмент",
    "прочие источники дохода"
  ],

  relatedClients: []
},
{
  ac_id: 100073512305,
  name: "Смагулова Айдана Ерболовна",
  iin: "980519400238",
  city: "КОКШЕТАУ",
  segment: "Пассивные низкодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Смагулова Айдана Ерболовна",
    iin: "980519400238",
    birthDate: "1998-05-19",
    age: 27,
    gender: "Женский",
    contacts: { phone: "+77076554433", email: "aidana.smagulova@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Кокшетау",
    activeCity: "Кокшетау",
    device: { os: "Android", model: "Xiaomi Redmi Note 11", lastLogin: "2025-10-20" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-04-02",
    bankRegistrationDate: "2020-12-15",
    mobileAppRegistrationDuration: "3 года 7 месяцев",
    bankRegistrationDuration: "4 года 11 месяцев",
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
    revenue: { margin: 60000, commission: 5000, interest: 0 },
    ltv: 180000,
    clv: 250000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/aidana_all_points.html",
    clustered_points: "/maps/aidana_clustered_points.html",
    heatmap: "/maps/aidana_heatmap.html",
    time_heatmap: "/maps/aidana_time_heatmap.html",
    time_points: "/maps/aidana_time_points.html"
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
          openDate: "2021-08-10",
          validUntil: "2025-08-10",
          sum: 30000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "14.7%",
          sum: 200000,
          openDate: "2022-03-01",
          closeDate: "2022-09-01",
          status: "Закрыт"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Нет",
    campaigns: "Нет",
    lastPush: {
      date: "2024-07-15",
      text: "Айдана, ваш депозит Baytaq был закрыт. Возвращайтесь и получите бонус 0.5%",
      topic: "Реактивация",
      status: "Не доставлен"
    },
    history: [
      { date: "2024-07-15", text: "Возврат в банк с бонусом за новый депозит", campaign: "Reactivation", status: "Не доставлен" },
      { date: "2023-05-20", text: "Истёк срок действия карты VISA Silver", campaign: "Card", status: "Не прочитан" },
      { date: "2022-09-02", text: "Депозит Baytaq успешно закрыт", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0, weekly: 0.2, monthly: 0.5 },
    conversion: { overall: "5%", clickRate: "2%" },
    insights: { topics: "реактивация, депозиты, карты" },
    topPush: { text: "Возврат с бонусом", or: "0%", ctr: "0%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 8000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "30%" }
      ],
      transactions: [
        { id: 1, date: "2025-09-05", type: "Retail", amount: 5000, location: "Small Market", currency: "₸" },
        { id: 2, date: "2025-09-10", type: "Коммуналка", amount: 3000, location: "Онлайн", currency: "₸" }
      ]
    },
    insights: [
      "Невысокая активность, минимальные расходы",
      "Не использует кредитные и инвестиционные продукты",
      "Потенциальный кандидат для кампаний по реактивации"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "",
    salarySource: "Подработка в магазине",
    allocation: [
      "Питание и покупки (50%)",
      "Коммуналка (20%)",
      "Прочее (30%)"
    ],
    mlInsight: "Малодоходная клиентка, не использует сложные банковские продукты",
    habitScore: 42,
    expenseFlow: [
      { stage: "Питание и покупки", amount: 50 },
      { stage: "Коммуналка", amount: 20 },
      { stage: "Свободные средства", amount: 30 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 40 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "пассивная клиентка",
    "низкий доход",
    "реактивация",
    "закрытый депозит",
    "клиент Silver"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512311,
  name: "Касенов Арман Даулетулы",
  iin: "940118300611",
  city: "КОСТАНАЙ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Касенов Арман Даулетулы",
    iin: "940118300611",
    birthDate: "1994-01-18",
    age: 31,
    gender: "Мужской",
    contacts: { phone: "+77074449900", email: "arman.kasenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Костанай",
    activeCity: "Костанай",
    device: { os: "Android", model: "Samsung Galaxy A55", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-03-11",
    bankRegistrationDate: "2020-07-01",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "5 лет 4 месяца",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 340000, commission: 50000, interest: 65000 },
    ltv: 1450000,
    clv: 1850000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/arman_all_points.html",
    clustered_points: "/maps/arman_clustered_points.html",
    heatmap: "/maps/arman_heatmap.html",
    time_heatmap: "/maps/arman_time_heatmap.html",
    time_points: "/maps/arman_time_points.html"
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
          sum: 1600000,
          openDate: "2024-06-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 800000,
          openDate: "2025-01-25",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-09-15",
          validUntil: "2026-09-15",
          sum: 110000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      text: "Арман, узнайте о новых инвестиционных идеях от AlatauCity Invest",
      topic: "Инвестиции",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Инвестиционные идеи ноября", campaign: "Invest", status: "Прочитан" },
      { date: "2025-10-24", text: "Повышенная ставка по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-15", text: "Контроль погашения кредита онлайн", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.8, monthly: 5.2 },
    conversion: { overall: "65%", clickRate: "33%" },
    insights: { topics: "инвестиции, кредиты, депозиты" },
    topPush: { text: "Baytaq со ставкой 15.5%", or: "70%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      ownTransfers: { freq: 4, avgSum: 30000 },
      internalTransfers: { freq: 2, avgSum: 25000 },
      externalTransfers: { freq: 1, avgSum: 20000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Transport", share: "10%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 18000, location: "Магазин Small", currency: "₸" },
        { id: 2, date: "2025-10-17", type: "Пополнение депозита", amount: 50000, location: "Онлайн-банк", currency: "₸" },
        { id: 3, date: "2025-10-29", type: "Инвестиции", amount: 70000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Совмещает доход от ИП и основного места работы",
      "Регулярно инвестирует часть средств",
      "Аккуратен в кредитных платежах"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ИП «Kasenov Media»",
    allocation: [
      "Погашение кредита (25%)",
      "Пополнение депозита (20%)",
      "Инвестиции (20%)",
      "Покупки и услуги (25%)",
      "Прочее (10%)"
    ],
    mlInsight: "Сбалансированный клиент с диверсифицированным доходом и устойчивыми финансовыми привычками",
    habitScore: 87,
    expenseFlow: [

      { stage: "Погашение кредита", amount: 25 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки и услуги", amount: 25 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Apple Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "смешанный доход",
    "инвестиции",
    "депозит Baytaq",
    "онлайн кредит",
    "Gold карта",
    "ИП клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512297,
  name: "Серикбаев Арман Бауыржанович",
  iin: "910507300611",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

  basicInfo: {
    fio: "Серикбаев Арман Бауыржанович",
    iin: "910507300611",
    birthDate: "1991-05-07",
    age: 34,
    gender: "Мужской",
    contacts: { phone: "+77072220033", email: "arman.serikbaev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-03-15",
    bankRegistrationDate: "2020-10-20",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "5 лет 1 месяц",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 420000, commission: 60000, interest: 95000 },
    ltv: 1800000,
    clv: 2300000
  },

  geoMaps: {
    all_points: "/maps/arman_all_points.html",
    clustered_points: "/maps/arman_clustered_points.html",
    heatmap: "/maps/arman_heatmap.html",
    time_heatmap: "/maps/arman_time_heatmap.html",
    time_points: "/maps/arman_time_points.html"
  },

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
          sum: 3800000,
          openDate: "2024-04-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-07-05",
          validUntil: "2026-07-05",
          sum: 120000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-15",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-09",
      text: "Арман, получите бонус за своевременное погашение кредита!",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Бонус за своевременное погашение кредита", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-22", text: "Автострахование — продление полиса онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Погашение кредита без комиссии", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.5, monthly: 4.8 },
    conversion: { overall: "68%", clickRate: "38%" },
    insights: { topics: "кредиты, страхование, бонусы" },
    topPush: { text: "Бонус за погашение кредита", or: "73%", ctr: "37%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 40000, trend: "-10%" },
      ownTransfers: { freq: 4, avgSum: 60000 },
      internalTransfers: { freq: 2, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 40000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 18000, location: "Sulpak", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Погашение кредита", amount: 120000, location: "Мобильное приложение", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Коммуналка", amount: 15000, location: "Онлайн", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Автострахование", amount: 85000, location: "Alatau Garant", currency: "₸" }
      ]
    },
    insights: [
      "Работает в сфере логистики, имеет активный кредит",
      "Регулярно совершает платежи и пользуется страховкой",
      "Ориентирован на надежность и бонусные программы банка"
    ]
  },

  financialHabits: {
    salaryDay: "20 число каждого месяца",
    salarySource: "ТОО «Almaty Logistics Group»",
    allocation: [
      "Погашение кредита (35%)",
      "Семейные расходы (25%)",
      "Коммунальные услуги (15%)",
      "Страхование и транспорт (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Кредитоориентированный клиент с высокой дисциплиной платежей",
    habitScore: 86,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 35 },
      { stage: "Семейные расходы", amount: 25 },
      { stage: "Коммунальные услуги", amount: 15 },
      { stage: "Страхование и транспорт", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 40 },
      { name: "Kaspi QR", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "Apple Pay", value: 10 },
      { name: "Google Pay", value: 5 }
    ]
  },

  tags: [
    "активный кредитный клиент",
    "Автострахование",
    "логистика",
    "пунктуальные платежи",
    "бонусные программы",
    "средний доход"
  ],

  relatedClients: [
    {
      name: "Серикбаева Айгуль Маратовна",
      type: "Супруга",
      birthDate: "1992-04-28",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512298
    },
    {
      name: "Серикбаева Амина Армановна",
      type: "Дочь",
      birthDate: "2016-09-12",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512299
    }
  ]
},
{
  ac_id: 100073512298,
  name: "Серикбаева Айгуль Маратовна",
  iin: "920428401214",
  city: "АЛМАТЫ",
  segment: "Средний доход, пассивные",

  basicInfo: {
    fio: "Серикбаева Айгуль Маратовна",
    iin: "920428401214",
    birthDate: "1992-04-28",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77075556622", email: "aigul.serikbaeva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung A55", lastLogin: "2025-11-07" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-12-01",
    bankRegistrationDate: "2019-08-10",
    mobileAppRegistrationDuration: "4 года 11 месяцев",
    bankRegistrationDuration: "6 лет 3 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 170000, commission: 25000, interest: 10000 },
    ltv: 600000,
    clv: 850000
  },

  geoMaps: {
    all_points: "/maps/aigul_all_points.html",
    clustered_points: "/maps/aigul_clustered_points.html",
    heatmap: "/maps/aigul_heatmap.html",
    time_heatmap: "/maps/aigul_time_heatmap.html",
    time_points: "/maps/aigul_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2021-04-15",
          validUntil: "2025-04-15",
          sum: 50000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "14.7%",
          sum: 400000,
          openDate: "2024-09-01",
          status: "Активен"
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-15",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-05",
      text: "Айгуль, продлите депозит Baytaq и получите бонус +0.3%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-05", text: "Бонус при продлении депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Автострахование — продление страхового полиса онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Скидки на безналичные покупки в супермаркетах", campaign: "Retail", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.0 },
    conversion: { overall: "55%", clickRate: "28%" },
    insights: { topics: "депозиты, страхование, покупки" },
    topPush: { text: "Продление депозита Baytaq", or: "60%", ctr: "28%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 15000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 10000, location: "Green Mart", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 7000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Пополнение депозита", amount: 25000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Домохозяйка, имеет стабильный доход от семьи",
      "Использует депозит Baytaq и страхование Автострахование",
      "Активна в покупках и онлайн-оплатах"
    ]
  },

  financialHabits: {
    salaryDay: "Доход через семью (супруг и совместный бюджет)",
    salarySource: "Совместные средства семьи Серикбаевых",
    allocation: [
      "Семейные расходы (35%)",
      "Питание и покупки (25%)",
      "Пополнение депозита (20%)",
      "Коммуналка (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "Пассивный, но стабильный клиент с депозитом и страховыми продуктами",
    habitScore: 79,
    expenseFlow: [
      
      { stage: "Семейные расходы", amount: 35 },
      { stage: "Питание и покупки", amount: 25 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Коммуналка", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "домохозяйка",
    "депозит Baytaq",
    "Автострахование",
    "семейный клиент",
    "пассивная активность",
    "онлайн-оплаты"
  ],

  relatedClients: [
    {
      name: "Серикбаев Арман Бауыржанович",
      type: "Супруг",
      birthDate: "1991-05-07",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512297
    },
    {
      name: "Серикбаева Амина Армановна",
      type: "Дочь",
      birthDate: "2016-09-12",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512299
    }
  ]
},
{
  ac_id: 100073512312,
  name: "Тлеубаева Сауле Армановна",
  iin: "860913400722",
  city: "ПАВЛОДАР",
  segment: "Пассивные низкодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тлеубаева Сауле Армановна",
    iin: "860913400722",
    birthDate: "1986-09-13",
    age: 39,
    gender: "Женский",
    contacts: { phone: "+77076669911", email: "saule.tleubaeva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Павлодар",
    activeCity: "Павлодар",
    device: { os: "Android", model: "Xiaomi Redmi Note 10", lastLogin: "2025-10-14" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Разведена",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2022-02-22",
    bankRegistrationDate: "2021-01-10",
    mobileAppRegistrationDuration: "3 года 9 месяцев",
    bankRegistrationDuration: "4 года 10 месяцев",
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
    revenue: { margin: 90000, commission: 5000, interest: 0 },
    ltv: 250000,
    clv: 320000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/saule_all_points.html",
    clustered_points: "/maps/saule_clustered_points.html",
    heatmap: "/maps/saule_heatmap.html",
    time_heatmap: "/maps/saule_time_heatmap.html",
    time_points: "/maps/saule_time_points.html"
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
          openDate: "2021-03-01",
          validUntil: "2025-03-01",
          sum: 40000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "18 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 46%",
          sum: 700000,
          openDate: "2022-04-01",
          closeDate: "2023-10-01",
          status: "Закрыт"
        }
      ]
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: []
    },

    mlIndicators: {
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Нет",
    campaigns: "Нет",
    lastPush: {
      date: "2024-12-01",
      text: "Сауле, у вас закончился срок действия карты VISA Silver",
      topic: "Карты",
      status: "Не доставлен"
    },
    history: [
      { date: "2024-12-01", text: "Срок действия карты истёк", campaign: "Card", status: "Не доставлен" },
      { date: "2023-09-20", text: "Предложение по новому кредиту", campaign: "Credit", status: "Не прочитан" },
      { date: "2022-10-01", text: "Погашен кредит, добро пожаловать обратно", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0, weekly: 0.1, monthly: 0.5 },
    conversion: { overall: "8%", clickRate: "3%" },
    insights: { topics: "реактивация, карты" },
    topPush: { text: "Продлите карту VISA", or: "0%", ctr: "0%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "-10%" },
      ownTransfers: { freq: 1, avgSum: 8000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "45%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "25%" }
      ],
      transactions: [
        { id: 1, date: "2025-09-10", type: "Retail", amount: 6000, location: "Магазин «Анвар»", currency: "₸" },
        { id: 2, date: "2025-09-20", type: "Коммуналка", amount: 4000, location: "Онлайн", currency: "₸" }
      ]
    },
    insights: [
      "Редко использует банковские сервисы",
      "Закрыла старый кредит, новых продуктов не открывает",
      "Потенциал реактивации низкий"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "",
    salarySource: "Небольшая подработка в салоне красоты",
    allocation: [
      "Питание и покупки (50%)",
      "Коммуналка (20%)",
      "Прочее (30%)"
    ],
    mlInsight: "Клиентка с низкой активностью, без кредитной и депозитной нагрузки",
    habitScore: 41,
    expenseFlow: [
      
      { stage: "Питание и покупки", amount: 50 },
      { stage: "Коммуналка", amount: 20 },
      { stage: "Свободные средства", amount: 30 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 40 },
      { name: "Kaspi QR", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "низкий доход",
    "пассивная клиентка",
    "закрытый кредит",
    "реактивация",
    "Silver карта"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Тлеубаева Аружан Саулевна",
      type: "Дочь",
      birthDate: "2010-07-18",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512313
    }
  ]
},

{
  ac_id: 100073512314,
  name: "Жумабекова Гульмира Сейтбековна",
  iin: "900912400877",
  city: "ТАРАЗ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жумабекова Гульмира Сейтбековна",
    iin: "900912400877",
    birthDate: "1990-09-12",
    age: 35,
    gender: "Женский",
    contacts: { phone: "+77079992244", email: "gulmira.zhumabekova@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Тараз",
    activeCity: "Тараз",
    device: { os: "Android", model: "Samsung Galaxy A54", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-02-10",
    bankRegistrationDate: "2020-03-22",
    mobileAppRegistrationDuration: "4 года 9 месяцев",
    bankRegistrationDuration: "5 лет 8 месяцев",
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
    revenue: { margin: 230000, commission: 20000, interest: 40000 },
    ltv: 950000,
    clv: 1150000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/gulmira_all_points.html",
    clustered_points: "/maps/gulmira_clustered_points.html",
    heatmap: "/maps/gulmira_heatmap.html",
    time_heatmap: "/maps/gulmira_time_heatmap.html",
    time_points: "/maps/gulmira_time_points.html"
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
          interestRate: "14.9%",
          sum: 750000,
          openDate: "2024-07-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-05-01",
          validUntil: "2026-05-01",
          sum: 60000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      date: "2025-11-06",
      text: "Гульмира, ставка по депозиту Baytaq повышена до 15%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Baytaq — новая ставка 15%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Акции открыт успешно", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-20", text: "Попробуйте оплату Google Pay", campaign: "Digital", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 3.8 },
    conversion: { overall: "70%", clickRate: "39%" },
    insights: { topics: "депозиты, инвестиции, цифровые сервисы" },
    topPush: { text: "Повышенная ставка Baytaq", or: "78%", ctr: "41%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 25000 },
      externalTransfers: { freq: 1, avgSum: 30000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-10", type: "Retail", amount: 17000, location: "Магазин Small", currency: "₸" },
        { id: 2, date: "2025-10-17", type: "Пополнение депозита", amount: 60000, location: "Онлайн-банк", currency: "₸" },
        { id: 3, date: "2025-10-28", type: "Инвестиции", amount: 50000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Использует депозит и Акции",
      "Реагирует на финансовые уведомления",
      "Редко совершает снятие наличных"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «MarketLine Group»",
    allocation: [
      "Пополнение депозита (30%)",
      "Инвестиции (20%)",
      "Покупки и семья (35%)",
      "Прочее (15%)"
    ],
    mlInsight: "Финансово грамотная клиентка, использует сбережения и инвестиции",
    habitScore: 86,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки и семья", amount: 35 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 25 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "инвестиции",
    "Gold карта",
    "пассивная прибыльная клиентка",
    "стабильный доход"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жумабеков Ерлан Нурболатович",
      type: "Супруг",
      birthDate: "1988-04-05",
      jointProducts: [],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512313
    },
    {
      name: "Жумабеков Нурсултан Ерланович",
      type: "Сын",
      birthDate: "2013-06-03",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512315
    }
  ]
},
{
  ac_id: 100073512308,
  name: "Абдилова Мадина Жанатовна",
  iin: "990427400336",
  city: "АЛМАТЫ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Абдилова Мадина Жанатовна",
    iin: "990427400336",
    birthDate: "1999-04-27",
    age: 26,
    gender: "Женский",
    contacts: { phone: "+77076668855", email: "madina.abdilova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-02-18",
    bankRegistrationDate: "2020-06-15",
    mobileAppRegistrationDuration: "4 года 9 месяцев",
    bankRegistrationDuration: "5 лет 5 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 310000, commission: 50000, interest: 70000 },
    ltv: 1200000,
    clv: 1600000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/madina_all_points.html",
    clustered_points: "/maps/madina_clustered_points.html",
    heatmap: "/maps/madina_heatmap.html",
    time_heatmap: "/maps/madina_time_heatmap.html",
    time_points: "/maps/madina_time_points.html"
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
          effectiveRate: "ГЭСВ 45%",
          sum: 1800000,
          openDate: "2024-05-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 600000,
          openDate: "2025-01-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-08-12",
          validUntil: "2027-08-12",
          sum: 120000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
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
      date: "2025-11-08",
      text: "Мадина, откройте новый депозит Baytaq и получите бонус +0.5%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Бонус +0.5% по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-22", text: "Инвестиции: идеи ноября", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-14", text: "Оплатите часть кредита досрочно без комиссии", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0.6, weekly: 2.0, monthly: 6.0 },
    conversion: { overall: "67%", clickRate: "35%" },
    insights: { topics: "депозиты, кредиты, инвестиции" },
    topPush: { text: "Бонус по Baytaq", or: "73%", ctr: "38%" },
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
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Transport", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 20000, location: "ТРЦ Mega Park", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Погашение кредита", amount: 65000, location: "Мобильное приложение", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Пополнение депозита", amount: 70000, location: "Онлайн-банк", currency: "₸" }
      ]
    },
    insights: [
      "Активно использует банковские продукты: кредит, депозит, инвестиции",
      "Регулярные онлайн-транзакции",
      "Дисциплинированное финансовое поведение, высокий потенциал для апсейла"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число",
    salarySource: "ТОО «DigitalLab Agency»",
    allocation: [
      "Погашение кредита (25%)",
      "Пополнение депозита (20%)",
      "Инвестиции (15%)",
      "Покупки и услуги (30%)",
      "Прочее (10%)"
    ],
    mlInsight: "Финансово зрелая клиентка с устойчивыми доходами и активным использованием цифровых каналов",
    habitScore: 86,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Покупки и услуги", amount: 30 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "активный клиент",
    "средний доход",
    "онлайн кредит",
    "депозит Baytaq",
    "Акции",
    "цифровые платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-05", text: "Погасите часть кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-18", text: "Следите за расходами в приложении", campaign: "Service", status: "Прочитан" },
      { date: "2025-09-25", text: "Онлайн-кредит до 8 млн", campaign: "Credit", status: "Прочитан" },
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
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
  ac_id: 100073512348,
  name: "Нургалиев Арман Жомартович",
  iin: "900517300914",
  city: "ШАЙМКЕНТ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Нургалиев Арман Жомартович",
    iin: "900517300914",
    birthDate: "1990-05-17",
    age: 35,
    gender: "Мужской",
    contacts: { phone: "+77078889922", email: "arman.nurgaliev@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-06-05",
    bankRegistrationDate: "2019-02-12",
    mobileAppRegistrationDuration: "5 лет 5 месяцев",
    bankRegistrationDuration: "6 лет 9 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 480000, commission: 60000, interest: 85000 },
    ltv: 2100000,
    clv: 2600000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/arman_all_points.html",
    clustered_points: "/maps/arman_clustered_points.html",
    heatmap: "/maps/arman_heatmap.html",
    time_heatmap: "/maps/arman_time_heatmap.html",
    time_points: "/maps/arman_time_points.html"
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
          sum: 2000000,
          openDate: "2024-03-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 700000,
          openDate: "2024-09-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2023-06-12",
          validUntil: "2027-06-12",
          sum: 150000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      date: "2025-11-09",
      text: "Арман, получите бонус при продлении депозита Baytaq",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Бонус за продление депозита", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Инвестиции — рост доходности", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-30", text: "Кредит: частичное досрочное погашение без комиссии", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.4, monthly: 4.2 },
    conversion: { overall: "68%", clickRate: "32%" },
    insights: { topics: "депозиты, кредиты, инвестиции" },
    topPush: { text: "Продление депозита Baytaq", or: "70%", ctr: "33%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      atmWithdrawals: { freq: 2, avgSum: 30000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 50000 },
      internalTransfers: { freq: 2, avgSum: 30000 },
      externalTransfers: { freq: 1, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Transport", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 21000, location: "Mega Shymkent", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Пополнение депозита", amount: 50000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Инвестиции", amount: 70000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Регулярно пользуется онлайн-сервисами банка",
      "Сбалансированное распределение между кредитом, депозитом и инвестициями",
      "Средний уровень вовлеченности"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ИП «Нургалиев Трейд»",
    allocation: [
      "Погашение кредита (30%)",
      "Пополнение депозита (25%)",
      "Инвестиции (20%)",
      "Покупки и транспорт (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Активный клиент среднего дохода, с рациональным управлением средствами",
    habitScore: 87,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 30 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки и транспорт", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "активный клиент",
    "средний доход",
    "депозит Baytaq",
    "инвестиции",
    "онлайн кредит"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Нургалиева Аружан Талгатовна",
      type: "Супруга",
      birthDate: "1992-11-02",
      jointProducts: ["Акции"],
      status: "Активен",
      lastActivity: "2025-11-10",
      ac_id: 100073512349
    },
    {
      name: "Нургалиев Ернур Арманович",
      type: "Сын",
      birthDate: "2017-06-08",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512350
    }
  ]
},
{
  ac_id: 100073512349,
  name: "Нургалиева Аружан Талгатовна",
  iin: "921102401266",
  city: "ШАЙМКЕНТ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Нургалиева Аружан Талгатовна",
    iin: "921102401266",
    birthDate: "1992-11-02",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77079992244", email: "aruzhan.nurgalieva@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung A53", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-03-22",
    bankRegistrationDate: "2020-05-15",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "5 лет 6 месяцев",
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
    revenue: { margin: 310000, commission: 40000, interest: 50000 },
    ltv: 1250000,
    clv: 1500000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/aruzhan_all_points.html",
    clustered_points: "/maps/aruzhan_clustered_points.html",
    heatmap: "/maps/aruzhan_heatmap.html",
    time_heatmap: "/maps/aruzhan_time_heatmap.html",
    time_points: "/maps/aruzhan_time_points.html"
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
          sum: 500000,
          openDate: "2024-08-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2023-01-14",
          validUntil: "2027-01-14",
          sum: 70000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      text: "Аружан, продлите депозит Baytaq и получите бонус 2,5%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Бонус при продлении депозита", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Акции обновлён", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-15", text: "Карта Silver — обновите до Gold", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.5 },
    conversion: { overall: "61%", clickRate: "28%" },
    insights: { topics: "депозиты, инвестиции" },
    topPush: { text: "Продление депозита Baytaq", or: "68%", ctr: "29%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "45%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 14000, location: "Shymkent Plaza", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Пополнение депозита", amount: 30000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Инвестиции", amount: 40000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Редко использует кредитные продукты",
      "Предпочитает депозиты и инвестиции",
      "Пользуется онлайн-каналами для всех операций"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Beauty Home Decor»",
    allocation: [
      "Пополнение депозита (35%)",
      "Инвестиции (25%)",
      "Покупки (25%)",
      "Прочее (15%)"
    ],
    mlInsight: "Клиентка с устойчивыми сбережениями и умеренной активностью",
    habitScore: 81,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Инвестиции", amount: 25 },
      { stage: "Покупки", amount: 25 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Акции",
    "пассивная, но прибыльная",
    "онлайн-оплаты",
    "Silver карта"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Нургалиев Арман Жомартович",
      type: "Супруг",
      birthDate: "1990-05-17",
      jointProducts: ["Акции"],
      status: "Активен",
      lastActivity: "2025-11-10",
      ac_id: 100073512348
    },
    {
      name: "Нургалиев Ернур Арманович",
      type: "Сын",
      birthDate: "2017-06-08",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512350
    }
  ]
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
      
      { stage: "Покупки и траты", amount: 40 },
      { stage: "Коммунальные платежи", amount: 30 },
      { stage: "Свободные средства", amount: 30 },
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 40 },
      { name: "Google Pay", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "Apple Pay", value: 10 },
      { name: "Карта Банка через POS", value: 5 },
    ],
  },

  tags: ["низкая активность", "мало транзакций", "коммунальные платежи"],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512307,
  name: "Жумабекова Жанар Кайратовна",
  iin: "910615400523",
  city: "КАРАГАНДА",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жумабекова Жанар Кайратовна",
    iin: "910615400523",
    birthDate: "1991-06-15",
    age: 34,
    gender: "Женский",
    contacts: { phone: "+77075557766", email: "zhanar.jumabekova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-10-28" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-11-05",
    bankRegistrationDate: "2019-08-01",
    mobileAppRegistrationDuration: "5 лет",
    bankRegistrationDuration: "6 лет 3 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Контакт-центр",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 240000, commission: 65000, interest: 90000 },
    ltv: 1750000,
    clv: 2100000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/zhanar_all_points.html",
    clustered_points: "/maps/zhanar_clustered_points.html",
    heatmap: "/maps/zhanar_heatmap.html",
    time_heatmap: "/maps/zhanar_time_heatmap.html",
    time_points: "/maps/zhanar_time_points.html"
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
          interestRate: "15.3%",
          sum: 2000000,
          openDate: "2024-09-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2022-12-05",
          validUntil: "2027-12-05",
          sum: 300000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
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
      date: "2025-11-09",
      text: "Жанар, продлите Автострахование и получите скидку 5%",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Продление Автострахование со скидкой", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-22", text: "Инвестиции: новые инструменты", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-30", text: "Повышенная ставка по Baytaq", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.2, monthly: 3.5 },
    conversion: { overall: "70%", clickRate: "38%" },
    insights: { topics: "страхование, инвестиции, депозиты" },
    topPush: { text: "Продление Автострахование", or: "80%", ctr: "41%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 1, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Transport", share: "10%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 23000, location: "ТРЦ Абзал", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Инвестиции", amount: 60000, location: "AlatauCity Invest", currency: "₸" },
        { id: 3, date: "2025-10-28", type: "Пополнение депозита", amount: 90000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Держит крупный депозит и Акции",
      "Редко совершает покупки, но активно управляет сбережениями",
      "Низкая операционная активность при высокой прибыльности"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «KazFinance Consulting»",
    allocation: [
      "Инвестиции (25%)",
      "Пополнение депозита (30%)",
      "Покупки и путешествия (20%)",
      "Прочие расходы (25%)"
    ],
    mlInsight: "Клиентка с низкой активностью, но высокой маржинальностью и устойчивыми сбережениями",
    habitScore: 88,
    expenseFlow: [
      
      { stage: "Инвестиции", amount: 25 },
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Покупки и путешествия", amount: 20 },
      { stage: "Прочие расходы", amount: 25 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "высокая прибыльность",
    "низкая активность",
    "депозит Baytaq",
    "Акции",
    "Автострахование",
    "Premium клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жумабеков Даурен Серикович",
      type: "Супруг",
      birthDate: "1988-04-11",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512308
    },
    {
      name: "Жумабекова Аружан Дауреновна",
      type: "Дочь",
      birthDate: "2016-10-19",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512309
    }
  ]
},
{
  ac_id: 100073512313,
  name: "Жумабеков Ерлан Нурболатович",
  iin: "880405300912",
  city: "ТАРАЗ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жумабеков Ерлан Нурболатович",
    iin: "880405300912",
    birthDate: "1988-04-05",
    age: 37,
    gender: "Мужской",
    contacts: { phone: "+77074448822", email: "yerlan.zhumabekov@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Тараз",
    activeCity: "Тараз",
    device: { os: "Android", model: "Samsung Galaxy A34", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-06-18",
    bankRegistrationDate: "2019-02-11",
    mobileAppRegistrationDuration: "5 лет 5 месяцев",
    bankRegistrationDuration: "6 лет 9 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 180000, commission: 30000, interest: 20000 },
    ltv: 650000,
    clv: 820000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/yerlan_all_points.html",
    clustered_points: "/maps/yerlan_clustered_points.html",
    heatmap: "/maps/yerlan_heatmap.html",
    time_heatmap: "/maps/yerlan_time_heatmap.html",
    time_points: "/maps/yerlan_time_points.html"
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
          openDate: "2024-05-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2022-11-11",
          validUntil: "2026-11-11",
          sum: 80000.00,
          status: "Активна",
          isSalaryCard: true
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
      text: "Ерлан, оплатите часть кредита без комиссии до конца недели",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Оплата кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-25", text: "Бонусы за оплату коммунальных услуг", campaign: "Utilities", status: "Прочитан" },
      { date: "2025-09-22", text: "Узнайте об обновлении приложения", campaign: "App", status: "Прочитан" }
    ],
    frequency: { daily: 0.5, weekly: 1.7, monthly: 5.1 },
    conversion: { overall: "66%", clickRate: "35%" },
    insights: { topics: "кредиты, коммунальные, бонусы" },
    topPush: { text: "Оплата кредита без комиссии", or: "73%", ctr: "38%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
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
      atmWithdrawals: { freq: 2, avgSum: 20000, trend: "+3%" },
      ownTransfers: { freq: 2, avgSum: 25000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 20000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "25%" },
        { mcc: "Transport", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 15000, location: "Магазин Small", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Коммуналка", amount: 8000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Погашение кредита", amount: 60000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Активно пользуется мобильным банком",
      "Доход стабильный, но небольшой",
      "Регулярно оплачивает коммунальные услуги"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "5 число каждого месяца",
    salarySource: "ТОО «TarazLogistics»",
    allocation: [
      "Погашение кредита (30%)",
      "Коммуналка (20%)",
      "Покупки и семья (35%)",
      "Прочее (15%)"
    ],
    mlInsight: "Клиент с устойчивым, но невысоким доходом. Регулярные платежи и высокая дисциплина.",
    habitScore: 74,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 30 },
      { stage: "Коммуналка", amount: 20 },
      { stage: "Покупки и семья", amount: 35 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 5 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "активный клиент",
    "малодоходный",
    "погашение кредита",
    "коммунальные услуги",
    "Silver карта"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жумабекова Гульмира Сейтбековна",
      type: "Супруга",
      birthDate: "1990-09-12",
      jointProducts: [],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512314
    },
    {
      name: "Жумабеков Нурсултан Ерланович",
      type: "Сын",
      birthDate: "2013-06-03",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512315
    }
  ]
},
{
  ac_id: 100073512295,
  name: "Кадыров Нурлан Ермекович",
  iin: "830902300415",
  city: "КАРАГАНДА",
  segment: "Смешанный доход",

  basicInfo: {
    fio: "Кадыров Нурлан Ермекович",
    iin: "830902300415",
    birthDate: "1983-09-02",
    age: 42,
    gender: "Мужской",
    contacts: { phone: "+77075558833", email: "nurlan.kadyrov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung S22", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-05-12",
    bankRegistrationDate: "2018-09-22",
    mobileAppRegistrationDuration: "5 лет 6 месяцев",
    bankRegistrationDuration: "7 лет 2 месяца",
    hasIP: false,
    hasLegalEntity: true,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 390000, commission: 60000, interest: 55000 },
    ltv: 2000000,
    clv: 2500000
  },

  geoMaps: {
    all_points: "/maps/nurlan_all_points.html",
    clustered_points: "/maps/nurlan_clustered_points.html",
    heatmap: "/maps/nurlan_heatmap.html",
    time_heatmap: "/maps/nurlan_time_heatmap.html",
    time_points: "/maps/nurlan_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 2800000,
          openDate: "2023-07-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 700000,
          openDate: "2024-11-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2021-06-01",
          validUntil: "2025-06-01",
          sum: 180000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-10",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Нурлан, получите бонус при частичном погашении кредита!",
      topic: "Кредиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Бонус за частичное погашение кредита", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-12", text: "Продление Страхование жизни — скидка 10%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Акции показал рост на +4.5%", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 3.8 },
    conversion: { overall: "65%", clickRate: "34%" },
    insights: { topics: "кредиты, инвестиции, страхование" },
    topPush: { text: "Бонус за погашение кредита", or: "72%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 80000 },
      internalTransfers: { freq: 2, avgSum: 40000 },
      externalTransfers: { freq: 2, avgSum: 60000 },
      internationalTransfers: { freq: 1, avgSum: 100000 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 30000, location: "Sulpak", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Оплата штрафа", amount: 12000, location: "eGov", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Инвестиции", amount: 80000, location: "Alatau Invest", currency: "₸" },
        { id: 4, date: "2025-10-22", type: "Погашение кредита", amount: 60000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Работает руководителем проекта, совмещает наёмную и предпринимательскую деятельность",
      "Активно пользуется инвестиционными и страховыми продуктами",
      "Регулярно гасит кредит, использует онлайн-сервисы"
    ]
  },

  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Karaganda Build Systems»",
    allocation: [
      "Погашение кредита (25%)",
      "Семейные расходы (25%)",
      "Инвестиции (20%)",
      "Пополнение депозита (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Клиент с диверсифицированным доходом, балансирует кредиты, сбережения и инвестиции",
    habitScore: 88,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Семейные расходы", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "руководитель проектов",
    "смешанный доход",
    "кредит и депозит",
    "инвестиции",
    "страхование Страхование жизни",
    "семейный клиент"
  ],

  relatedClients: [
    {
      name: "Кадырова Сауле Нурлановна",
      type: "Супруга",
      birthDate: "1985-07-18",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512294
    },
    {
      name: "Кадырова Алия Нурлановна",
      type: "Дочь",
      birthDate: "2012-06-08",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512296
    }
  ]
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-07", text: "Депозит Baytaq под 15%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-21", text: "Пополни баланс карты и получи бонус", campaign: "Card", status: "Прочитан" },
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
        { id: 4, date: "2025-10-21", type: "Retail", amount: 34000, location: "Kaspi QRStore", currency: "₸" },
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
      "Переводы (15%)",
      "Коммунальные платежи (10%)",
      "Прочее (15%)",
    ],
    mlInsight: "65% дохода распределяется в первые 3 дня после зарплаты",
    habitScore: 81,

    expenseFlow: [
      
      { stage: "Покупки и траты", amount: 35 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Переводы ", amount: 15 },
      { stage: "Коммунальные платежи", amount: 10 },
      { stage: "Свободные средства", amount: 15 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Samsung Pay", value: 30 },
      { name: "Kaspi QR", value: 15 },
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 5 },
    ],
  },

  tags: ["молодой клиент", "активный пользователь", "депозиты", "цифровой канал"],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512271,
  name: "Косжанов Тимур Темирович",
  iin: "940203301548",
  city: "АЛМАТЫ",
  segment: "Пассивные, но прибыльные",

  basicInfo: {
    fio: "Косжанов Тимур Темирович",
    iin: "940203301548",
    birthDate: "1994-02-03",
    age: 31,
    gender: "Мужской",
    contacts: { phone: "+77076668844", email: "timur.koszhanov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-01-20",
    bankRegistrationDate: "2018-04-05",
    mobileAppRegistrationDuration: "5 лет 10 месяцев",
    bankRegistrationDuration: "7 лет 7 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 260000, commission: 35000, interest: 40000 },
    ltv: 1250000,
    clv: 1550000
  },

  geoMaps: {
    all_points: "/maps/timur_all_points.html",
    clustered_points: "/maps/timur_clustered_points.html",
    heatmap: "/maps/timur_heatmap.html",
    time_heatmap: "/maps/timur_time_heatmap.html",
    time_points: "/maps/timur_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "48 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 3200000,
          openDate: "2023-07-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2021-09-15",
          validUntil: "2025-09-15",
          sum: 120000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-20",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Тимур, выгодное предложение по рефинансированию вашего кредита",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Снижение ставки по вашему кредиту", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-15", text: "Акции показал рост +3.8%", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-30", text: "Автострахование для вашего авто продлён", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 4 },
    conversion: { overall: "60%", clickRate: "35%" },
    insights: { topics: "рефинансирование, инвестиции, страховка" },
    topPush: { text: "Снижение ставки по кредиту", or: "72%", ctr: "36%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 40000, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 35000 },
      internalTransfers: { freq: 2, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 25000, location: "Mega Center", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Топливо", amount: 15000, location: "Helios", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Коммуналка", amount: 12000, location: "Онлайн", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "P2P", amount: 15000, location: "AlatauCityBank", currency: "₸" },
        { id: 5, date: "2025-10-30", type: "Инвестиции", amount: 40000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Старший брат Нурлана, помогает с финансами",
      "Активен в кредитных и инвестиционных продуктах",
      "Регулярно совершает переводы родственникам"
    ]
  },

  financialHabits: {
    salaryDay: "20 число каждого месяца",
    salarySource: "ИП, услуги грузоперевозок",
    allocation: [
      "Погашение кредита (35%)",
      "Домашние расходы (25%)",
      "Инвестиции (20%)",
      "Сбережения (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "Клиент с устойчивым доходом от ИП, аккуратен в погашении кредитов",
    habitScore: 80,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 35 },
      { stage: "Домашние расходы", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Сбережения", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Samsung Pay", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Apple Pay", value: 5 }
    ]
  },

  tags: [
    "старший брат клиента",
    "ИП",
    "рефинансирование",
    "инвестиции",
    "страхование",
    "средний доход"
  ],

  relatedClients: [
    {
      name: "Косжанов Нурлан Темирович",
      type: "Брат",
      birthDate: "1997-05-18",
      jointProducts: ["P2P переводы"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512270
    }
  ]
},
{
  ac_id: 100073512342,
  name: "Тулегенов Рауан Еркинович",
  iin: "930912300745",
  city: "АКТОБЕ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тулегенов Рауан Еркинович",
    iin: "930912300745",
    birthDate: "1993-09-12",
    age: 32,
    gender: "Мужской",
    contacts: { phone: "+77076664411", email: "rauan.tulegenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актобе",
    activeCity: "Актобе",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-04-15",
    bankRegistrationDate: "2018-11-01",
    mobileAppRegistrationDuration: "5 лет 7 месяцев",
    bankRegistrationDuration: "7 лет",
    hasIP: true,
    hasLegalEntity: true,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 520000, commission: 70000, interest: 95000 },
    ltv: 2400000,
    clv: 2950000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/rauan_all_points.html",
    clustered_points: "/maps/rauan_clustered_points.html",
    heatmap: "/maps/rauan_heatmap.html",
    time_heatmap: "/maps/rauan_time_heatmap.html",
    time_points: "/maps/rauan_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 2800000,
          openDate: "2023-08-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1000000,
          openDate: "2024-10-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-05-15",
          validUntil: "2026-05-15",
          sum: 210000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2024-09-20",
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
      date: "2025-11-08",
      text: "Рауан, продлите депозит Baytaq и получите бонус!",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Бонус при продлении депозита", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-22", text: "Инвестиции — рост доходности", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-27", text: "Автострахование и Страхование жизни — обновите страховку", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.8, monthly: 5.0 },
    conversion: { overall: "73%", clickRate: "34%" },
    insights: { topics: "депозиты, кредиты, инвестиции" },
    topPush: { text: "Продление депозита Baytaq", or: "78%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 40000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 30000 },
      internalTransfers: { freq: 2, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "25%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 19000, location: "ТЦ Keruen", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Пополнение депозита", amount: 60000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-26", type: "Инвестиции", amount: 90000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Активный предприниматель с диверсифицированными доходами",
      "Использует депозит, кредит и инвестиции",
      "Средний риск, стабильная вовлеченность"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Aktobe Trade Systems» / ИП «Тулегенов»",
    allocation: [
      "Погашение кредита (25%)",
      "Пополнение депозита (25%)",
      "Инвестиции (20%)",
      "Расходы и семья (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Клиент со смешанным доходом, использует все ключевые продукты",
    habitScore: 89,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Расходы и семья", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "смешанный доход",
    "Gold карта",
    "депозит Baytaq",
    "инвестиции",
    "рефинансирование"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Тулегенова Асем Куанышева",
      type: "Супруга",
      birthDate: "1994-02-18",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512343
    },
    {
      name: "Тулегенов Мади Рауанович",
      type: "Сын",
      birthDate: "2018-07-12",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512344
    }
  ]
},
{
  ac_id: 100073512322,
  name: "Бекетаев Мадияр Куанышулы",
  iin: "920218300998",
  city: "ШЫМКЕНТ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Бекетаев Мадияр Куанышулы",
    iin: "920218300998",
    birthDate: "1992-02-18",
    age: 33,
    gender: "Мужской",
    contacts: { phone: "+77078889966", email: "madiyar.beketaev@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy S22", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-03-01",
    bankRegistrationDate: "2019-07-12",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "6 лет 4 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 380000, commission: 40000, interest: 110000 },
    ltv: 1750000,
    clv: 2100000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/madiyar_beketaev_all_points.html",
    clustered_points: "/maps/madiyar_beketaev_clustered_points.html",
    heatmap: "/maps/madiyar_beketaev_heatmap.html",
    time_heatmap: "/maps/madiyar_beketaev_time_heatmap.html",
    time_points: "/maps/madiyar_beketaev_time_points.html"
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
          openDate: "2024-09-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-04-20",
          validUntil: "2027-04-20",
          sum: 190000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-01",
          status: "Активен"
        }
      ]
    },

    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Мадияр, оплатите Автострахование онлайн и получите 5% кэшбэк",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Автострахование онлайн — кэшбэк 5%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-22", text: "Погашение кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-15", text: "Проверка лимита по кредиту", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.6, monthly: 4.8 },
    conversion: { overall: "67%", clickRate: "35%" },
    insights: { topics: "кредиты, страхование, бонусы" },
    topPush: { text: "Автострахование с кэшбэком", or: "72%", ctr: "37%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 2, avgSum: 50000 },
      externalTransfers: { freq: 1, avgSum: 70000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Food", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 20000, location: "ТЦ Шымкент Plaza", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Погашение кредита", amount: 95000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Автострахование", amount: 80000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Активный заемщик с регулярными платежами",
      "Использует страхование автомобиля",
      "Проявляет интерес к бонусным акциям"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Shymkent Logistic Group»",
    allocation: [
      "Погашение кредита (40%)",
      "Покупки и семья (30%)",
      "Страхование и транспорт (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Клиент с кредитной нагрузкой, но стабильными доходами и дисциплиной",
    habitScore: 79,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 40 },
      { stage: "Покупки и семья", amount: 30 },
      { stage: "Страхование и транспорт", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 10 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "кредитный клиент",
    "Автострахование",
    "Gold карта",
    "постоянный заемщик",
    "дисциплинированный плательщик"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Бекетаева Меруерт Даулеткызы",
      type: "Супруга",
      birthDate: "1993-07-05",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512323
    },
    {
      name: "Бекетаев Нурсултан Мадиярович",
      type: "Сын",
      birthDate: "2017-06-15",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512324
    }
  ]
},
{
  ac_id: 100073512323,
  name: "Бекетаева Меруерт Даулеткызы",
  iin: "930705400742",
  city: "ШЫМКЕНТ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Бекетаева Меруерт Даулеткызы",
    iin: "930705400742",
    birthDate: "1993-07-05",
    age: 32,
    gender: "Женский",
    contacts: { phone: "+77079993322", email: "meruert.beketaeva@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-05-10",
    bankRegistrationDate: "2020-02-14",
    mobileAppRegistrationDuration: "4 года 6 месяцев",
    bankRegistrationDuration: "5 лет 9 месяцев",
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
    revenue: { margin: 260000, commission: 25000, interest: 30000 },
    ltv: 900000,
    clv: 1100000
  },

  // 🗺️ Геоданные
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
          interestRate: "14.8%",
          sum: 650000,
          openDate: "2024-12-05",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-06-15",
          validUntil: "2026-06-15",
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-01",
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
      date: "2025-11-08",
      text: "Меруерт, обновите Автострахование и получите скидку 10%",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Автострахование — скидка 10% при онлайн оплате", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-22", text: "Пополните депозит Baytaq и получите бонус", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-18", text: "Проверка условий страхования", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.4, monthly: 4.0 },
    conversion: { overall: "72%", clickRate: "38%" },
    insights: { topics: "депозиты, страхование, уведомления" },
    topPush: { text: "Автострахование онлайн со скидкой", or: "78%", ctr: "40%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 10000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 25000 },
      internalTransfers: { freq: 1, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 12000, location: "ТЦ Mega Planet", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Пополнение депозита", amount: 50000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Автострахование", amount: 85000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Активная участница программы страхования",
      "Редко использует кредитные продукты",
      "Финансово стабильна, предпочитает сбережения"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Shymkent Media Print»",
    allocation: [
      "Пополнение депозита (35%)",
      "Покупки и семья (40%)",
      "Страхование и услуги (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Пассивная, но дисциплинированная клиентка с ориентацией на накопления и страхование",
    habitScore: 83,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Покупки и семья", amount: 40 },
      { stage: "Страхование и услуги", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Автострахование",
    "Gold карта",
    "финансовая стабильность",
    "накопления"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Бекетаев Мадияр Куанышулы",
      type: "Супруг",
      birthDate: "1992-02-18",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512322
    },
    {
      name: "Бекетаев Нурсултан Мадиярович",
      type: "Сын",
      birthDate: "2017-06-15",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512324
    }
  ]
},
{
  ac_id: 100073512343,
  name: "Тулегенова Асем Куанышева",
  iin: "940218401322",
  city: "АКТОБЕ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тулегенова Асем Куанышева",
    iin: "940218401322",
    birthDate: "1994-02-18",
    age: 31,
    gender: "Женский",
    contacts: { phone: "+77074445533", email: "asem.tulegenova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актобе",
    activeCity: "Актобе",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-07-20",
    bankRegistrationDate: "2019-09-15",
    mobileAppRegistrationDuration: "4 года 4 месяца",
    bankRegistrationDuration: "6 лет 2 месяца",
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
    revenue: { margin: 300000, commission: 35000, interest: 40000 },
    ltv: 1300000,
    clv: 1600000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/asem_all_points.html",
    clustered_points: "/maps/asem_clustered_points.html",
    heatmap: "/maps/asem_heatmap.html",
    time_heatmap: "/maps/asem_time_heatmap.html",
    time_points: "/maps/asem_time_points.html"
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
          interestRate: "14.9%",
          sum: 600000,
          openDate: "2024-09-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2022-11-05",
          validUntil: "2026-11-05",
          sum: 55000.00,
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
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2024-09-20",
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
      date: "2025-11-08",
      text: "Асем, продлите свой депозит Baytaq онлайн!",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Проверка страхового полиса Страхование жизни", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Бонусы по Silver карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.1, monthly: 3.0 },
    conversion: { overall: "65%", clickRate: "28%" },
    insights: { topics: "депозиты, страхование" },
    topPush: { text: "Продление депозита Baytaq", or: "70%", ctr: "29%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 10000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "35%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-07", type: "Retail", amount: 10000, location: "ТЦ Aina", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Пополнение депозита", amount: 40000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Страхование жизни", amount: 15000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Редко пользуется кредитами, предпочитает накопления",
      "Активна в депозите Baytaq и страховании",
      "Регулярно оплачивает услуги онлайн"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "7 число каждого месяца",
    salarySource: "ТОО «Aktobe Logistic»",
    allocation: [
      "Пополнение депозита (30%)",
      "Семейные расходы (40%)",
      "Страхование и услуги (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Сбалансированная клиентка с акцентом на депозиты и финансовую стабильность",
    habitScore: 82,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Семейные расходы", amount: 40 },
      { stage: "Страхование и услуги", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Страхование жизни",
    "Silver карта",
    "пассивная, но прибыльная",
    "онлайн-оплаты"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Тулегенов Рауан Еркинович",
      type: "Супруг",
      birthDate: "1993-09-12",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512342
    },
    {
      name: "Тулегенов Мади Рауанович",
      type: "Сын",
      birthDate: "2018-07-12",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512344
    }
  ]
},
{
  ac_id: 100073512270,
  name: "Косжанов Нурлан Темирович",
  iin: "970518301624",
  city: "АЛМАТЫ",
  segment: "Средний доход, активные",

  basicInfo: {
    fio: "Косжанов Нурлан Темирович",
    iin: "970518301624",
    birthDate: "1997-05-18",
    age: 28,
    gender: "Мужской",
    contacts: { phone: "+77075557711", email: "nurlan.koszhanov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2021-08-10",
    bankRegistrationDate: "2020-11-05",
    mobileAppRegistrationDuration: "4 года 3 месяца",
    bankRegistrationDuration: "5 лет",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 210000, commission: 30000, interest: 30000 },
    ltv: 800000,
    clv: 1050000
  },

  geoMaps: {
    all_points: "/maps/nurlan_all_points.html",
    clustered_points: "/maps/nurlan_clustered_points.html",
    heatmap: "/maps/nurlan_heatmap.html",
    time_heatmap: "/maps/nurlan_time_heatmap.html",
    time_points: "/maps/nurlan_time_points.html"
  },

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
          sum: 900000,
          openDate: "2024-04-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.0%",
          sum: 400000,
          openDate: "2025-02-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2021-03-20",
          validUntil: "2025-03-20",
          sum: 60000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Да",
      depositInterest: "Да"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Нурлан, пополните депозит Baytaq и получите бонус +0.3%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Бонус +0.3% при пополнении Baytaq до 30.11", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-18", text: "Контролируйте платежи по онлайн кредиту в приложении", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-25", text: "Акции открыт, начните с 20 000 ₸", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.4, monthly: 4.8 },
    conversion: { overall: "54%", clickRate: "32%" },
    insights: { topics: "кредит, депозит, инвестиции" },
    topPush: { text: "Пополнение Baytaq с бонусом", or: "69%", ctr: "34%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 25000, trend: "-3%" },
      ownTransfers: { freq: 3, avgSum: 30000 },
      internalTransfers: { freq: 2, avgSum: 20000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 18000, location: "Mega Center", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Коммуналка", amount: 16000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Пополнение депозита", amount: 30000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Инвестиции", amount: 20000, location: "Alatau Invest", currency: "₸" },
        { id: 5, date: "2025-11-02", type: "P2P", amount: 15000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Молодой активный клиент с комбинированием кредита, депозита и инвестиций",
      "Основные операции — онлайн, безналичные платежи",
      "Хорошо реагирует на офферы по сбережениям"
    ]
  },

  financialHabits: {
    salaryDay: "15 число",
    salarySource: "ТОО «DigitalPoint Solutions»",
    allocation: [
      "Погашение кредита (25%)",
      "Покупки и повседневные расходы (30%)",
      "Пополнение депозита (20%)",
      "Инвестиции (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Ответственный платёжщик, склонен к накоплению и инвестициям",
    habitScore: 82,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Покупки и расходы", amount: 30 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 25 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 20 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "молодой активный клиент",
    "средний доход",
    "онлайн кредит",
    "депозит Baytaq",
    "Акции",
    "digital-поведение",
    "родственник-клиент банка"
  ],

  relatedClients: [
    {
      name: "Косжанов Тимур Темирович",
      type: "Брат",
      birthDate: "1994-02-03",
      jointProducts: ["P2P переводы"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512271
    }
  ]
},
{
  ac_id: 100073512294,
  name: "Кадырова Сауле Нурлановна",
  iin: "850718400621",
  city: "КАРАГАНДА",
  segment: "Депозитные клиенты",

  basicInfo: {
    fio: "Кадырова Сауле Нурлановна",
    iin: "850718400621",
    birthDate: "1985-07-18",
    age: 40,
    gender: "Женский",
    contacts: { phone: "+77077770088", email: "saule.kadyrova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung S23", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-02-10",
    bankRegistrationDate: "2019-06-15",
    mobileAppRegistrationDuration: "4 года 9 месяцев",
    bankRegistrationDuration: "6 лет 5 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 250000, commission: 40000, interest: 60000 },
    ltv: 1300000,
    clv: 1650000
  },

  geoMaps: {
    all_points: "/maps/saule_all_points.html",
    clustered_points: "/maps/saule_clustered_points.html",
    heatmap: "/maps/saule_heatmap.html",
    time_heatmap: "/maps/saule_time_heatmap.html",
    time_points: "/maps/saule_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 1300000,
          openDate: "2024-07-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-09-05",
          validUntil: "2026-09-05",
          sum: 100000.00,
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
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-10",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Сауле, продлите ваш депозит Baytaq и получите бонус +0.3%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Обновите полис Страхование жизни онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Совет по сбережениям: настройте автопополнение депозита", campaign: "Education", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.0 },
    conversion: { overall: "60%", clickRate: "32%" },
    insights: { topics: "депозиты, страхование, финансовое планирование" },
    topPush: { text: "Продление депозита Baytaq", or: "68%", ctr: "31%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 15000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-07", type: "Retail", amount: 15000, location: "Green Mart", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Коммуналка", amount: 10000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-21", type: "Пополнение депозита", amount: 50000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Работает бухгалтером, стабильный доход",
      "Сфокусирована на сбережениях и депозитах",
      "Пользуется приложением нерегулярно, но активно отПрочитанается на депозитные кампании"
    ]
  },

  financialHabits: {
    salaryDay: "15 число",
    salarySource: "ТОО «Karaganda Logistics»",
    allocation: [
      "Питание и покупки (25%)",
      "Коммунальные услуги (15%)",
      "Пополнение депозита (30%)",
      "Семейные расходы (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Финансово осторожная клиентка, предпочитает накопительные продукты и стабильность",
    habitScore: 84,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Питание и покупки", amount: 25 },
      { stage: "Коммунальные услуги", amount: 15 },
      { stage: "Семейные расходы", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "депозит Baytaq",
    "Страхование жизни",
    "бухгалтер",
    "финансово дисциплинированная",
    "пассивная активность",
    "накопительный клиент"
  ],

  relatedClients: [
    {
      name: "Кадыров Нурлан Ермекович",
      type: "Супруг",
      birthDate: "1983-09-02",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512295
    },
    {
      name: "Кадырова Алия Нурлановна",
      type: "Дочь",
      birthDate: "2012-06-08",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512296
    }
  ]
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
          name: "Страхование жизни",
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-08", text: "Кредит без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-19", text: "Продлите страховку Страхование жизни онлайн", campaign: "Garant", status: "Прочитан" },
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 10 },
    ],
  },

  tags: ["активный клиент", "страхование", "кредит", "онлайн-платежи"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Касенов Даурен Арманович",
      type: "Муж",
      birthDate: "1990-06-18",
      jointProducts: ["Страхование жизни"],
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
  ac_id: 100073512309,
  name: "Байкенов Даурен Ерланович",
  iin: "890715301299",
  city: "ШЫМКЕНТ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Байкенов Даурен Ерланович",
    iin: "890715301299",
    birthDate: "1989-07-15",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77072221144", email: "dauren.baikenov@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy S22", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-09-20",
    bankRegistrationDate: "2019-05-15",
    mobileAppRegistrationDuration: "5 лет 1 месяц",
    bankRegistrationDuration: "6 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 350000, commission: 40000, interest: 95000 },
    ltv: 1900000,
    clv: 2300000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/dauren_all_points.html",
    clustered_points: "/maps/dauren_clustered_points.html",
    heatmap: "/maps/dauren_heatmap.html",
    time_heatmap: "/maps/dauren_time_heatmap.html",
    time_points: "/maps/dauren_time_points.html"
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
          openDate: "2024-02-01",
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
          sum: 2500000,
          openDate: "2023-08-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-03-15",
          validUntil: "2026-03-15",
          sum: 200000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-20",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-02-10",
          status: "Активен"
        }
      ]
    },

    mlIndicators: {
      churnRisk: "Средний",
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
      text: "Даурен, погасите часть кредита без комиссии до конца недели",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Оплата кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-20", text: "Автострахование со скидкой 10%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Страхование жизни — онлайн-продление за 3 минуты", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.5, weekly: 1.8, monthly: 5.5 },
    conversion: { overall: "68%", clickRate: "36%" },
    insights: { topics: "кредиты, страхование, бонусы" },
    topPush: { text: "Оплата кредита без комиссии", or: "74%", ctr: "39%" },
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
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "-2%" },
      ownTransfers: { freq: 3, avgSum: 45000 },
      internalTransfers: { freq: 1, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 25000, location: "Магазин Magnum", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Коммуналка", amount: 12000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Погашение кредита", amount: 95000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Основной доход — зарплата и кредиты",
      "Регулярно оплачивает кредит вовремя",
      "Использует страхование Страхование жизни и Автострахование"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «ShymkentTransAuto»",
    allocation: [
      "Погашение кредитов (35%)",
      "Коммунальные услуги (15%)",
      "Покупки и транспорт (30%)",
      "Прочие расходы (20%)"
    ],
    mlInsight: "Активный кредитный клиент, устойчивое поведение и средний уровень цифровизации",
    habitScore: 79,
    expenseFlow: [
      
      { stage: "Погашение кредитов", amount: 35 },
      { stage: "Коммунальные услуги", amount: 15 },
      { stage: "Покупки и транспорт", amount: 30 },
      { stage: "Прочие расходы", amount: 20 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 5 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "активный клиент",
    "кредитный клиент",
    "Автострахование",
    "Страхование жизни",
    "погашение кредита",
    "Gold карта"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Байкенова Айгерим Ерлановна",
      type: "Супруга",
      birthDate: "1991-11-28",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512310
    },
    {
      name: "Байкенова Аружан Дауреновна",
      type: "Дочь",
      birthDate: "2017-02-17",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512311
    }
  ]
},
{
  ac_id: 100073512261,
  name: "Серикбаев Асхат Нурланович",
  iin: "910412300276",
  city: "АЛМАТЫ",
  segment: "Пассивные, но прибыльные",

  basicInfo: {
    fio: "Серикбаев Асхат Нурланович",
    iin: "910412300276",
    birthDate: "1991-04-12",
    age: 34,
    gender: "Мужской",
    contacts: { phone: "+77019998822", email: "askhat.serikbaev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S21", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-05-10",
    bankRegistrationDate: "2018-09-01",
    mobileAppRegistrationDuration: "5 лет 6 месяцев",
    bankRegistrationDuration: "7 лет 2 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 170000, commission: 30000, interest: 45000 },
    ltv: 950000,
    clv: 1200000
  },

  geoMaps: {
    all_points: "/maps/askhat_all_points.html",
    clustered_points: "/maps/askhat_clustered_points.html",
    heatmap: "/maps/askhat_heatmap.html",
    time_heatmap: "/maps/askhat_time_heatmap.html",
    time_points: "/maps/askhat_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 750000,
          openDate: "2024-07-10",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2022-10-01",
          validUntil: "2026-10-01",
          sum: 65000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Асхат, продлите депозит Baytaq и получите бонус +0.3%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Продлите депозит Baytaq онлайн", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-10", text: "Ваш Акции обновлён", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-25", text: "Baytaq — начислены проценты", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.2, monthly: 4 },
    conversion: { overall: "57%", clickRate: "31%" },
    insights: { topics: "депозит, инвестиции" },
    topPush: { text: "Продление депозита Baytaq", or: "70%", ctr: "34%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Travel", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 18000, location: "Mega Center", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Food", amount: 9000, location: "Супермаркет", currency: "₸" },
        { id: 3, date: "2025-10-17", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-23", type: "Инвестиции", amount: 60000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Семейный мужчина, супруга не клиент банка",
      "Пользуется депозитом и инвестиционным счётом",
      "Финансовое поведение стабильное, но неактивное"
    ]
  },

  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «AlmatyBuildTech»",
    allocation: [
      "Семейные расходы (30%)",
      "Пополнение депозита (25%)",
      "Инвестиции (15%)",
      "Покупки (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Сбалансированное поведение, склонность к накоплению и низкой активности",
    habitScore: 76,
    expenseFlow: [
      
      { stage: "Семейные расходы", amount: 30 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Покупки", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "семейный клиент",
    "депозит Baytaq",
    "инвестиции",
    "умеренная активность",
    "супруга не клиент банка"
  ],

  relatedClients: [
    {
      name: "Супруга (не клиент банка)",
      type: "Супруга",
      birthDate: "",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "",
      ac_id: ""
    }
  ]
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-08", text: "Онлайн-кредит за 3 минуты", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-15", text: "Повышение лимита по карте", campaign: "Card", status: "Прочитан" },
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
      "Переводы (10%)",
      "Прочее (10%)",
    ],
    mlInsight: "75% дохода расходуется в первые 3 дня после зарплаты",
    habitScore: 77,

    expenseFlow: [
      
      { stage: "Оплата кредита", amount: 30 },
      { stage: "Покупки и траты", amount: 35 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Переводы ", amount: 10 },
      { stage: "Свободные средства", amount: 10 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 45 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 15 },
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 5 },
    ],
  },

  tags: ["молодая клиентка", "кредит", "мобильное приложение", "активная пользовательница"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512291,
  name: "Меруетова Айгерим Сандыбековна",
  iin: "980714401926",
  city: "АСТАНА",
  segment: "Средний доход, активные",

  basicInfo: {
    fio: "Меруетова Айгерим Сандыбековна",
    iin: "980714401926",
    birthDate: "1998-07-14",
    age: 27,
    gender: "Женский",
    contacts: { phone: "+77079997744", email: "aigerim.meruetova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Астана",
    activeCity: "Астана",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-06-05",
    bankRegistrationDate: "2021-11-15",
    mobileAppRegistrationDuration: "3 года 5 месяцев",
    bankRegistrationDuration: "4 года",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 160000, commission: 20000, interest: 12000 },
    ltv: 520000,
    clv: 680000
  },

  geoMaps: {
    all_points: "/maps/aigerim_all_points.html",
    clustered_points: "/maps/aigerim_clustered_points.html",
    heatmap: "/maps/aigerim_heatmap.html",
    time_heatmap: "/maps/aigerim_time_heatmap.html",
    time_points: "/maps/aigerim_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2022-06-10",
          validUntil: "2026-06-10",
          sum: 60000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 350000,
          openDate: "2025-03-01",
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
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Айгерим, пополните Baytaq до 500 000 ₸ и получите бонус +0.5%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Бонус +0.5% при пополнении Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Оплачивайте коммунальные услуги в приложении за пару Прочитанов", campaign: "Utilities", status: "Прочитан" },
      { date: "2025-09-25", text: "Кэшбэк до 2.5% за покупки в Retail при оплате картой", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.4, monthly: 4.5 },
    conversion: { overall: "63%", clickRate: "36%" },
    insights: { topics: "депозиты, кэшбэк, онлайн-платежи" },
    topPush: { text: "Бонус за пополнение Baytaq", or: "72%", ctr: "37%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 10000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 18000, location: "ТРЦ Mega Silk Way", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 12000, location: "Мобильное приложение", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "P2P", amount: 10000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-22", type: "Пополнение депозита", amount: 30000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-10-29", type: "Retail", amount: 9000, location: "Онлайн-магазин", currency: "₸" }
      ]
    },
    insights: [
      "Работает маркетологом в частной компании, получает стабильную зарплату на карту банка",
      "Активно пользуется МП, онлайн-платежами и депозитом Baytaq",
      "Склонна к накоплениям, хорошо реагирует на предложения по кэшбэку"
    ]
  },

  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Astana Digital Media»",
    allocation: [
      "Аренда и жильё (30%)",
      "Питание и покупки (25%)",
      "Коммуналка и связь (15%)",
      "Пополнение депозита (20%)",
      "Развлечения и прочее (10%)"
    ],
    mlInsight: "Финансово осознанная молодая специалистка, наращивает подушку безопасности через депозит",
    habitScore: 83,
    expenseFlow: [
      
      { stage: "Аренда и жильё", amount: 30 },
      { stage: "Питание и покупки", amount: 25 },
      { stage: "Коммуналка и связь", amount: 15 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Развлечения и прочее", amount: 10 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "молодая работающая клиентка",
    "маркетолог",
    "депозит Baytaq",
    "зарплатная карта",
    "активное использование МП",
    "цифровые платежи",
    "средний доход"
  ],

  relatedClients: []
},
{
  ac_id: 100073512326,
  name: "Калдыбаева Асем Бекеновна",
  iin: "880517400642",
  city: "КОСТАНАЙ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Калдыбаева Асем Бекеновна",
    iin: "880517400642",
    birthDate: "1988-05-17",
    age: 37,
    gender: "Женский",
    contacts: { phone: "+77079991144", email: "asem.kaldybayeva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Костанай",
    activeCity: "Костанай",
    device: { os: "Android", model: "Samsung Galaxy A55", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-02-20",
    bankRegistrationDate: "2019-07-10",
    mobileAppRegistrationDuration: "5 лет 9 месяцев",
    bankRegistrationDuration: "6 лет 4 месяца",
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
    revenue: { margin: 240000, commission: 20000, interest: 35000 },
    ltv: 900000,
    clv: 1150000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/asem_all_points.html",
    clustered_points: "/maps/asem_clustered_points.html",
    heatmap: "/maps/asem_heatmap.html",
    time_heatmap: "/maps/asem_time_heatmap.html",
    time_points: "/maps/asem_time_points.html"
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
          sum: 600000,
          openDate: "2024-09-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-06-25",
          validUntil: "2026-06-25",
          sum: 80000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-01",
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
      date: "2025-11-08",
      text: "Асем, продлите Автострахование онлайн и получите бонус 5%",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Автострахование онлайн — бонус 5%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-20", text: "Baytaq — ставка 15%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-10", text: "Проверка доступного остатка", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.4, monthly: 4.0 },
    conversion: { overall: "71%", clickRate: "38%" },
    insights: { topics: "депозиты, страхование, уведомления" },
    topPush: { text: "Автострахование с бонусом", or: "78%", ctr: "39%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "-2%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 13000, location: "ТЦ Mart", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Пополнение депозита", amount: 50000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-23", type: "Автострахование", amount: 95000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Редко использует кредитные продукты",
      "Планомерно пополняет депозит",
      "Реагирует на предложения по страхованию"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Kostanay Agro»",
    allocation: [
      "Пополнение депозита (30%)",
      "Покупки и семья (40%)",
      "Страхование и услуги (20%)",
      "Прочее (10%)"
    ],
    mlInsight: "Стабильная клиентка с депозитным поведением, предпочитает спокойные финансовые решения",
    habitScore: 82,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Покупки и семья", amount: 40 },
      { stage: "Страхование и услуги", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Автострахование",
    "Gold карта",
    "финансовая стабильность",
    "накопления"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Калдыбаев Ерлан Талгатович",
      type: "Супруг",
      birthDate: "1986-09-23",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512325
    },
    {
      name: "Калдыбаев Али Ерланович",
      type: "Сын",
      birthDate: "2015-12-02",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512327
    }
  ]
},
{
  ac_id: 100073512346,
  name: "Сарсенова Алия Мухтаровна",
  iin: "910914401733",
  city: "АЛМАТЫ",
  segment: "Депозитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сарсенова Алия Мухтаровна",
    iin: "910914401733",
    birthDate: "1991-09-14",
    age: 34,
    gender: "Женский",
    contacts: { phone: "+77074442299", email: "aliya.sarsenova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-03-25",
    bankRegistrationDate: "2018-10-01",
    mobileAppRegistrationDuration: "5 лет 8 месяцев",
    bankRegistrationDuration: "7 лет 1 месяц",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 610000, commission: 85000, interest: 130000 },
    ltv: 3400000,
    clv: 4100000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/aliya_sarsenova_all_points.html",
    clustered_points: "/maps/aliya_sarsenova_clustered_points.html",
    heatmap: "/maps/aliya_sarsenova_heatmap.html",
    time_heatmap: "/maps/aliya_sarsenova_time_heatmap.html",
    time_points: "/maps/aliya_sarsenova_time_points.html"
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
          sum: 1800000,
          openDate: "2024-05-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2023-03-15",
          validUntil: "2027-03-15",
          sum: 220000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-07-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-01-15",
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
      date: "2025-11-09",
      text: "Алия, ваш депозит Baytaq скоро истекает — продлите онлайн и получите бонус!",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Продлите депозит Baytaq с бонусом", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-23", text: "Автострахование — проверьте срок действия", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-28", text: "Инвестиции — доход +3.8%", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.6, monthly: 4.5 },
    conversion: { overall: "75%", clickRate: "38%" },
    insights: { topics: "депозиты, инвестиции, страхование" },
    topPush: { text: "Продление депозита Baytaq", or: "82%", ctr: "39%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,2,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,2,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 25000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 30000 },
      internalTransfers: { freq: 2, avgSum: 25000 },
      externalTransfers: { freq: 1, avgSum: 40000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 18000, location: "ТЦ Esentai Mall", currency: "₸" },
        { id: 2, date: "2025-10-16", type: "Пополнение депозита", amount: 80000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-28", type: "Инвестиции", amount: 100000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Пассивный клиент с упором на депозиты и инвестиции",
      "Регулярно пополняет депозит и следит за доходностью",
      "Минимальная кредитная активность"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Alma Decor»",
    allocation: [
      "Пополнение депозита (35%)",
      "Инвестиции (25%)",
      "Покупки и семья (25%)",
      "Прочее (15%)"
    ],
    mlInsight: "Клиентка с высоким доверием к сбережениям и инвестициям",
    habitScore: 90,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Инвестиции", amount: 25 },
      { stage: "Покупки и семья", amount: 25 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Samsung Pay", value: 10 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "инвестиции",
    "Gold карта",
    "Автострахование и Страхование жизни",
    "стабильные накопления"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Сарсенов Нурбек Канатович",
      type: "Супруг",
      birthDate: "1989-06-03",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-10",
      ac_id: 100073512345
    },
    {
      name: "Сарсенов Ерхан Нурбекович",
      type: "Сын",
      birthDate: "2015-08-25",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512347
    }
  ]
},
{
  ac_id: 100073512345,
  name: "Сарсенов Нурбек Канатович",
  iin: "890603300512",
  city: "АЛМАТЫ",
  segment: "Ценные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сарсенов Нурбек Канатович",
    iin: "890603300512",
    birthDate: "1989-06-03",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77071118855", email: "nurbek.sarsenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15 Pro Max", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Очень высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2019-09-05",
    bankRegistrationDate: "2017-10-20",
    mobileAppRegistrationDuration: "6 лет 2 месяца",
    bankRegistrationDuration: "8 лет 1 месяц",
    hasIP: true,
    hasLegalEntity: true,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк, Web-портал",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 920000, commission: 150000, interest: 180000 },
    ltv: 5800000,
    clv: 7200000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/nurbek_all_points.html",
    clustered_points: "/maps/nurbek_clustered_points.html",
    heatmap: "/maps/nurbek_heatmap.html",
    time_heatmap: "/maps/nurbek_time_heatmap.html",
    time_points: "/maps/nurbek_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "60 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 7000000,
          openDate: "2022-10-05",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 2000000,
          openDate: "2024-03-12",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2023-02-18",
          validUntil: "2028-02-18",
          sum: 450000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-07-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-01-15",
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
      date: "2025-11-09",
      text: "Нурбек, откройте новый инвестиционный портфель с доходностью до 18%",
      topic: "Инвестиции",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Инвестиции до 18%", campaign: "Invest", status: "Прочитан" },
      { date: "2025-10-24", text: "Автострахование — обновите страховку", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Бонусы по Premium карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.7, weekly: 2.4, monthly: 6.8 },
    conversion: { overall: "80%", clickRate: "41%" },
    insights: { topics: "инвестиции, премиальные карты, страхование" },
    topPush: { text: "Инвестпортфель до 18%", or: "86%", ctr: "42%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,2,3,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,2,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,3,2,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 80000, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 100000 },
      internalTransfers: { freq: 3, avgSum: 50000 },
      externalTransfers: { freq: 2, avgSum: 150000 },
      internationalTransfers: { freq: 1, avgSum: 300000 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Fuel", share: "15%" },
        { mcc: "Entertainment", share: "20%" },
        { mcc: "Travel", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Инвестиции", amount: 250000, location: "AlatauCity Invest", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Погашение кредита", amount: 120000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-22", type: "Автострахование", amount: 95000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Высокий уровень дохода и диверсифицированные активы",
      "Использует кредит, депозит, инвестиции и страхование",
      "Премиальный клиент с высокой вовлеченностью"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Global Build Group» / ИП «Sarsenov Consulting»",
    allocation: [
      "Инвестиции (30%)",
      "Погашение кредита (20%)",
      "Пополнение депозита (20%)",
      "Путешествия и отдых (15%)",
      "Прочее (15%)"
    ],
    mlInsight: "Премиальный клиент с устойчивым доходом и активным управлением капиталом",
    habitScore: 94,
    expenseFlow: [
      
      { stage: "Инвестиции", amount: 30 },
      { stage: "Погашение кредита", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Путешествия и отдых", amount: 15 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "премиальный клиент",
    "инвестиции",
    "депозит Baytaq",
    "онлайн кредит",
    "Автострахование и Страхование жизни"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Сарсенова Алия Мухтаровна",
      type: "Супруга",
      birthDate: "1991-09-14",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-10",
      ac_id: 100073512346
    },
    {
      name: "Сарсенов Ерхан Нурбекович",
      type: "Сын",
      birthDate: "2015-08-25",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512347
    }
  ]
},
{
  ac_id: 100073512325,
  name: "Калдыбаев Ерлан Талгатович",
  iin: "860923300214",
  city: "КОСТАНАЙ",
  segment: "Депозитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Калдыбаев Ерлан Талгатович",
    iin: "860923300214",
    birthDate: "1986-09-23",
    age: 39,
    gender: "Мужской",
    contacts: { phone: "+77071234456", email: "erlan.kaldybaev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Костанай",
    activeCity: "Костанай",
    device: { os: "iOS", model: "iPhone 14 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-04-11",
    bankRegistrationDate: "2019-05-20",
    mobileAppRegistrationDuration: "5 лет 7 месяцев",
    bankRegistrationDuration: "6 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 550000, commission: 85000, interest: 125000 },
    ltv: 3100000,
    clv: 3650000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/erlan_all_points.html",
    clustered_points: "/maps/erlan_clustered_points.html",
    heatmap: "/maps/erlan_heatmap.html",
    time_heatmap: "/maps/erlan_time_heatmap.html",
    time_points: "/maps/erlan_time_points.html"
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
          sum: 4200000,
          openDate: "2025-03-05",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2022-11-15",
          validUntil: "2027-11-15",
          sum: 350000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-01",
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
      date: "2025-11-07",
      text: "Ерлан, ставка по депозиту Baytaq увеличена до 15.5%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Повышенная ставка по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-25", text: "Автострахование — обновите страховку со скидкой 10%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-10", text: "Инвестиционные возможности с AlatauCity Invest", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.8, monthly: 5.1 },
    conversion: { overall: "75%", clickRate: "41%" },
    insights: { topics: "депозиты, страхование, инвестиции" },
    topPush: { text: "Baytaq — 15.5%", or: "82%", ctr: "43%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,3,2,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,1,0,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "-1%" },
      ownTransfers: { freq: 3, avgSum: 45000 },
      internalTransfers: { freq: 1, avgSum: 25000 },
      externalTransfers: { freq: 2, avgSum: 55000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Travel", share: "20%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-10", type: "Retail", amount: 25000, location: "ТЦ Kostanay Plaza", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Пополнение депозита", amount: 100000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-22", type: "Инвестиции", amount: 90000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Финансово устойчивый клиент с крупным депозитом",
      "Активно инвестирует часть накоплений",
      "Пользуется страховыми услугами и премиальной картой"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "5 число каждого месяца",
    salarySource: "ТОО «AgroTech Group»",
    allocation: [
      "Пополнение депозита (30%)",
      "Инвестиции (20%)",
      "Семья и путешествия (30%)",
      "Прочее (20%)"
    ],
    mlInsight: "Премиальный депозитный клиент с высоким уровнем сбережений и умеренной активностью",
    habitScore: 90,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Семья и путешествия", amount: 30 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Premium карта",
    "инвестиции",
    "Автострахование",
    "финансовая стабильность"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Калдыбаева Асем Бекеновна",
      type: "Супруга",
      birthDate: "1988-05-17",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512326
    },
    {
      name: "Калдыбаев Али Ерланович",
      type: "Сын",
      birthDate: "2015-12-02",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512327
    }
  ]
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
      { date: "2025-09-15", text: "Пополни карту — получи бонус", campaign: "Card", status: "Прочитан" },
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
      
      { stage: "Покупки и траты", amount: 40 },
      { stage: "Коммунальные платежи", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Свободные средства", amount: 20 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 15 },
    ],
  },

  tags: ["молодой клиент", "низкая активность", "депозит", "редкие транзакции"],

  // 👨‍👩‍👦 Родственники
  relatedClients: [],
},
{
  ac_id: 100073512292,
  name: "Абдуллаев Руслан Ермекович",
  iin: "880219300871",
  city: "ШЫМКЕНТ",
  segment: "Пассивные, но прибыльные",

  basicInfo: {
    fio: "Абдуллаев Руслан Ермекович",
    iin: "880219300871",
    birthDate: "1988-02-19",
    age: 37,
    gender: "Мужской",
    contacts: { phone: "+77077773399", email: "ruslan.abdullayev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung S22 Ultra", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2019-07-12",
    bankRegistrationDate: "2017-11-03",
    mobileAppRegistrationDuration: "6 лет 4 месяца",
    bankRegistrationDuration: "8 лет",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 370000, commission: 70000, interest: 85000 },
    ltv: 1900000,
    clv: 2300000
  },

  geoMaps: {
    all_points: "/maps/ruslan_all_points.html",
    clustered_points: "/maps/ruslan_clustered_points.html",
    heatmap: "/maps/ruslan_heatmap.html",
    time_heatmap: "/maps/ruslan_time_heatmap.html",
    time_points: "/maps/ruslan_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 2000000,
          openDate: "2024-10-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-05-20",
          validUntil: "2026-05-20",
          sum: 150000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-02-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Редко",
    lastPush: {
      date: "2025-10-28",
      text: "Руслан, продлите депозит Baytaq и получите бонус +0.3%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-10-28", text: "Бонус за продление депозита", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-20", text: "Автострахование — продлите полис на следующий год", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.1, weekly: 0.5, monthly: 1.5 },
    conversion: { overall: "40%", clickRate: "18%" },
    insights: { topics: "депозиты, страхование" },
    topPush: { text: "Бонус за продление депозита", or: "55%", ctr: "20%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 50000 },
      internalTransfers: { freq: 1, avgSum: 40000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Fuel", share: "20%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 25000, location: "Технодом", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Коммуналка", amount: 15000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Пополнение депозита", amount: 100000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Редко использует МП, но хранит крупный депозит",
      "Инвестирует часть средств, финансово стабилен",
      "Пассивный тип клиента, реагирует только на депозитные предложения"
    ]
  },

  financialHabits: {
    salaryDay: "20 число",
    salarySource: "ТОО «South Construction Group»",
    allocation: [
      "Пополнение депозита (30%)",
      "Бытовые расходы (25%)",
      "Питание и покупки (20%)",
      "Коммунальные платежи (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Пассивный, но надёжный клиент с акцентом на накопления и депозиты",
    habitScore: 78,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Бытовые расходы", amount: 25 },
      { stage: "Питание и покупки", amount: 20 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 40 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 5 }
    ]
  },

  tags: [
    "депозитный клиент",
    "инвестор",
    "низкая активность",
    "пассивный пользователь",
    "Автострахование",
    "прибыльный клиент"
  ],

  relatedClients: [
    {
      name: "Абдуллаева Алия Руслановна",
      type: "Дочь",
      birthDate: "2013-04-05",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512293
    }
  ]
},
{
  ac_id: 100073512281,
  name: "Поляков Максим Андреевич",
  iin: "890905301476",
  city: "КОСТАНАЙ",
  segment: "Пассивные, но прибыльные",

  basicInfo: {
    fio: "Поляков Максим Андреевич",
    iin: "890905301476",
    birthDate: "1989-09-05",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77079991122", email: "maxim.polyakov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Костанай",
    activeCity: "Костанай",
    device: { os: "iOS", model: "iPhone 12", lastLogin: "2025-11-07" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-03-10",
    bankRegistrationDate: "2018-06-20",
    mobileAppRegistrationDuration: "5 лет 8 месяцев",
    bankRegistrationDuration: "7 лет 5 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 280000, commission: 20000, interest: 70000 },
    ltv: 1300000,
    clv: 1600000
  },

  geoMaps: {
    all_points: "/maps/maxim_all_points.html",
    clustered_points: "/maps/maxim_clustered_points.html",
    heatmap: "/maps/maxim_heatmap.html",
    time_heatmap: "/maps/maxim_time_heatmap.html",
    time_points: "/maps/maxim_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 2000000,
          openDate: "2024-09-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-04-01",
          validUntil: "2026-04-01",
          sum: 150000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Да"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-05",
      text: "Максим, проверьте начисленные проценты по депозиту Baytaq",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-05", text: "Проценты по депозиту Baytaq начислены", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-18", text: "Акции вырос на +4.5%", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-20", text: "Обновите приложение для новых возможностей", campaign: "AppUpdate", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.1, monthly: 3.5 },
    conversion: { overall: "52%", clickRate: "29%" },
    insights: { topics: "депозит, инвестиции" },
    topPush: { text: "Baytaq — стабильный доход 15%", or: "68%", ctr: "31%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,1,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 1, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "20%" },
        { mcc: "Food", share: "10%" },
        { mcc: "Utilities", share: "10%" },
        { mcc: "Invest", share: "60%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-01", type: "Пополнение депозита", amount: 100000, location: "Мобильное приложение", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Инвестиции", amount: 150000, location: "Alatau Invest", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Retail", amount: 20000, location: "Sulpak", currency: "₸" }
      ]
    },
    insights: [
      "Редко совершает операции, основная активность — депозиты и инвестиции",
      "Не использует наличные, предпочитает мобильные переводы",
      "Клиент с устойчивыми накоплениями и низким риском оттока"
    ]
  },

  financialHabits: {
    salaryDay: "20 число каждого месяца",
    salarySource: "АО «KazAgroTech»",
    allocation: [
      "Сбережения (40%)",
      "Инвестиции (30%)",
      "Покупки (15%)",
      "Прочее (15%)"
    ],
    mlInsight: "Пассивный, но стабильный вкладчик; предпочитает накопление и низкий риск",
    habitScore: 79,
    expenseFlow: [
      
      { stage: "Сбережения", amount: 40 },
      { stage: "Инвестиции", amount: 30 },
      { stage: "Покупки", amount: 15 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Карта Банка через POS", value: 40 },
      { name: "Apple Pay", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "пассивный клиент",
    "депозит Baytaq",
    "инвестиции",
    "стабильный доход",
    "низкая активность"
  ],

  relatedClients: []
},
{
  ac_id: 100073512310,
  name: "Байкенова Айгерим Ерлановна",
  iin: "911128400455",
  city: "ШЫМКЕНТ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Байкенова Айгерим Ерлановна",
    iin: "911128400455",
    birthDate: "1991-11-28",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77075556688", email: "aigerim.baikenova@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-05-05",
    bankRegistrationDate: "2020-03-12",
    mobileAppRegistrationDuration: "4 года 6 месяцев",
    bankRegistrationDuration: "5 лет 8 месяцев",
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
    revenue: { margin: 280000, commission: 30000, interest: 50000 },
    ltv: 1350000,
    clv: 1650000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/aigerim_all_points.html",
    clustered_points: "/maps/aigerim_clustered_points.html",
    heatmap: "/maps/aigerim_heatmap.html",
    time_heatmap: "/maps/aigerim_time_heatmap.html",
    time_points: "/maps/aigerim_time_points.html"
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
          sum: 900000,
          openDate: "2024-11-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-09-01",
          validUntil: "2027-09-01",
          sum: 100000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-20",
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
      date: "2025-11-08",
      text: "Айгерим, продлите Автострахование онлайн и получите бонус 5%",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Продление Автострахование со скидкой 5%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-17", text: "Акции: подбор инструментов", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-21", text: "Baytaq — ставка до 15.5%", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.0, monthly: 3.5 },
    conversion: { overall: "72%", clickRate: "40%" },
    insights: { topics: "страхование, инвестиции, депозиты" },
    topPush: { text: "Продление Автострахование онлайн", or: "80%", ctr: "41%" },
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
      ownTransfers: { freq: 3, avgSum: 30000 },
      internalTransfers: { freq: 1, avgSum: 25000 },
      externalTransfers: { freq: 1, avgSum: 20000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 23000, location: "ТРЦ ShymCity", currency: "₸" },
        { id: 2, date: "2025-10-16", type: "Пополнение депозита", amount: 70000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Инвестиции", amount: 40000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Регулярно пользуется депозитом и инвестициями",
      "Активно реагирует на push-уведомления по страхованию",
      "Цифровое поведение выше среднего"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "20 число каждого месяца",
    salarySource: "ТОО «Retail Trade Group»",
    allocation: [
      "Пополнение депозита (30%)",
      "Инвестиции (15%)",
      "Покупки и семья (35%)",
      "Прочее (20%)"
    ],
    mlInsight: "Клиентка со стабильным доходом, активно использует депозиты и страховые продукты",
    habitScore: 84,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Покупки и семья", amount: 35 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Акции",
    "Автострахование",
    "активный клиент",
    "Gold карта",
    "цифровая клиентка"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Байкенов Даурен Ерланович",
      type: "Супруг",
      birthDate: "1989-07-15",
      jointProducts: ["Автострахование"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512309
    },
    {
      name: "Байкенова Аружан Дауреновна",
      type: "Дочь",
      birthDate: "2017-02-17",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512311
    }
  ]
},
{
  ac_id: 100073512282,
  name: "Семенов Дмитрий Павлович",
  iin: "950927301238",
  city: "КАРАГАНДА",
  segment: "Низкая активность и доход",

  basicInfo: {
    fio: "Семенов Дмитрий Павлович",
    iin: "950927301238",
    birthDate: "1995-09-27",
    age: 30,
    gender: "Мужской",
    contacts: { phone: "+77075553322", email: "dmitriy.semenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung A52", lastLogin: "2024-12-15" },
    status: "Неактивен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2020-07-12",
    bankRegistrationDate: "2019-02-20",
    mobileAppRegistrationDuration: "5 лет 4 месяца",
    bankRegistrationDuration: "6 лет 9 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 0, commission: 0, interest: 0 },
    ltv: 0,
    clv: 0
  },

  geoMaps: {
    all_points: "/maps/dmitriy_all_points.html",
    clustered_points: "/maps/dmitriy_clustered_points.html",
    heatmap: "/maps/dmitriy_heatmap.html",
    time_heatmap: "/maps/dmitriy_time_heatmap.html",
    time_points: "/maps/dmitriy_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [],
      history: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 600000,
          openDate: "2021-05-10",
          closeDate: "2023-05-10",
          status: "Закрыт"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2020-01-01",
          validUntil: "2024-01-01",
          sum: 0,
          status: "Закрыта"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Нет",
    campaigns: "Нет",
    lastPush: {
      date: "2023-11-10",
      text: "Дмитрий, вернитесь в банк — для вас персональное предложение!",
      topic: "Реактивация",
      status: "Не доставлен"
    },
    history: [
      { date: "2023-11-10", text: "Персональное предложение для возвращения в банк", campaign: "Reactivation", status: "Не доставлен" },
      { date: "2022-06-20", text: "Срок действия карты истёк — оформите новую", campaign: "Card", status: "Не прочитан" },
      { date: "2021-08-05", text: "Завершено погашение кредита", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0, weekly: 0, monthly: 0.2 },
    conversion: { overall: "0%", clickRate: "0%" },
    insights: { topics: "реактивация, старые клиенты" },
    topPush: { text: "Персональное предложение для возвращения", or: "0%", ctr: "0%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 0, avgSum: 0 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [],
      transactions: []
    },
    insights: [
      "Клиент ранее пользовался услугами банка, но сейчас полностью неактивен",
      "Нет действующих продуктов",
      "Рекомендован для реактивационной кампании"
    ]
  },

  financialHabits: {
    salaryDay: "",
    salarySource: "",
    allocation: [],
    mlInsight: "Неактивный клиент без текущих финансовых операций",
    habitScore: 20,
    expenseFlow: [],
    paymentMethods: []
  },

  tags: [
    "неактивный клиент",
    "закрытые продукты",
    "реактивация",
    "низкая активность"
  ],

  relatedClients: []
},
{
  ac_id: 100073512288,
  name: "Садыров Ербол Маратович",
  iin: "900304301927",
  city: "АЛМАТЫ",
  segment: "Ценные клиенты",

  basicInfo: {
    fio: "Садыров Ербол Маратович",
    iin: "900304301927",
    birthDate: "1990-03-04",
    age: 35,
    gender: "Мужской",
    contacts: { phone: "+77071112233", email: "erbol.sadyrov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15 Pro", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не женат",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2019-11-05",
    bankRegistrationDate: "2018-03-15",
    mobileAppRegistrationDuration: "6 лет",
    bankRegistrationDuration: "7 лет 8 месяцев",
    hasIP: true,
    hasLegalEntity: true,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 680000, commission: 95000, interest: 120000 },
    ltv: 3400000,
    clv: 4200000
  },

  geoMaps: {
    all_points: "/maps/erbol_all_points.html",
    clustered_points: "/maps/erbol_clustered_points.html",
    heatmap: "/maps/erbol_heatmap.html",
    time_heatmap: "/maps/erbol_time_heatmap.html",
    time_points: "/maps/erbol_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 43%",
          sum: 3500000,
          openDate: "2023-10-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 1500000,
          openDate: "2024-06-20",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2022-05-01",
          validUntil: "2026-05-01",
          sum: 280000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-02-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-15",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-09",
      text: "Ербол, откройте бизнес-депозит с повышенной ставкой 16%",
      topic: "Бизнес",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Бизнес-депозит с повышенной ставкой 16%", campaign: "BusinessDeposit", status: "Прочитан" },
      { date: "2025-10-25", text: "Автострахование — продление страхового полиса", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Акции показывает рост +5.3%", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.5, monthly: 4.5 },
    conversion: { overall: "70%", clickRate: "42%" },
    insights: { topics: "бизнес, инвестиции, страхование, депозиты" },
    topPush: { text: "Бизнес-депозит 16%", or: "78%", ctr: "41%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 5, avgSum: 200000 },
      internalTransfers: { freq: 3, avgSum: 80000 },
      externalTransfers: { freq: 2, avgSum: 100000 },
      internationalTransfers: { freq: 1, avgSum: 150000 },
      retailPurchases: [
        { mcc: "Retail", share: "20%" },
        { mcc: "BusinessServices", share: "25%" },
        { mcc: "Investments", share: "20%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Инвестиции", amount: 150000, location: "Alatau Invest", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Retail", amount: 80000, location: "Apple Store", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "Оплата услуг", amount: 50000, location: "ТОО «DigitalBoost»", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Погашение кредита", amount: 130000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-10-31", type: "Коммуналка", amount: 20000, location: "Онлайн", currency: "₸" }
      ]
    },
    insights: [
      "ИП с устойчивым оборотом, пользуется бизнес-услугами банка",
      "Инвестирует через AlatauCity Invest и страхует бизнес-авто",
      "Предпочитает digital-каналы, безналичные операции и онлайн-депозиты"
    ]
  },

  financialHabits: {
    salaryDay: "Нерегулярно (по оборотам бизнеса)",
    salarySource: "ИП «Sadyrov Trade» (услуги и дистрибуция)",
    allocation: [
      "Бизнес-расходы (40%)",
      "Инвестиции (25%)",
      "Погашение кредита (15%)",
      "Сбережения (10%)",
      "Личные расходы (10%)"
    ],
    mlInsight: "Предприниматель с высоким доверием к банку, пользуется полным пакетом услуг и активно инвестирует",
    habitScore: 90,
    expenseFlow: [
      
      { stage: "Бизнес-расходы", amount: 40 },
      { stage: "Инвестиции", amount: 25 },
      { stage: "Погашение кредита", amount: 15 },
      { stage: "Сбережения", amount: 10 },
      { stage: "Личные расходы", amount: 10 }
    ],
    paymentMethods: [
      { name: "Google Pay", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Kaspi QR", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "ИП клиент",
    "бизнес-депозит",
    "инвестиции",
    "Автострахование и Страхование жизни",
    "активный предприниматель",
    "премиальный сегмент"
  ],

  relatedClients: []
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-08", text: "Продлите депозит Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Откройте Акции", campaign: "Invest", status: "Прочитан" },
      { date: "2025-09-15", text: "Продление страховки Страхование жизни", campaign: "Garant", status: "Прочитан" },
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
      "Поддерживает активный депозит и Акции"
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
    ],
  },
  tags: ["депозиты", "инвестиции", "коммунальные платежи", "активный клиент"],

  // 👨‍👩‍👧‍👦 Родственники
  relatedClients: [
    {
      name: "Касенова Айнур Ермековна",
      type: "Супруга",
      birthDate: "1992-07-22",
      jointProducts: ["Страхование жизни"],
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
  ac_id: 100073512320,
  name: "Жаксылыкова Алия Ермековна",
  iin: "910418400677",
  city: "КАРАГАНДА",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жаксылыкова Алия Ермековна",
    iin: "910418400677",
    birthDate: "1991-04-18",
    age: 34,
    gender: "Женский",
    contacts: { phone: "+77076665522", email: "aliya.zhaksylikova@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung Galaxy A53", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-02-11",
    bankRegistrationDate: "2020-05-22",
    mobileAppRegistrationDuration: "4 года 9 месяцев",
    bankRegistrationDuration: "5 лет 6 месяцев",
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
    revenue: { margin: 210000, commission: 20000, interest: 35000 },
    ltv: 980000,
    clv: 1180000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/aliya_zhaks_all_points.html",
    clustered_points: "/maps/aliya_zhaks_clustered_points.html",
    heatmap: "/maps/aliya_zhaks_heatmap.html",
    time_heatmap: "/maps/aliya_zhaks_time_heatmap.html",
    time_points: "/maps/aliya_zhaks_time_points.html"
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
          interestRate: "14.7%",
          sum: 500000,
          openDate: "2025-03-05",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-07-10",
          validUntil: "2026-07-10",
          sum: 70000.00,
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
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-04-05",
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
      text: "Алия, продлите депозит Baytaq и получите бонус 0.5%",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Бонус при продлении депозита", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-17", text: "Обновите полис Страхование жизни онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-20", text: "Проверка остатка по депозиту", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.3, monthly: 4.2 },
    conversion: { overall: "69%", clickRate: "38%" },
    insights: { topics: "депозиты, страхование, уведомления" },
    topPush: { text: "Бонус 0.5% при продлении Baytaq", or: "72%", ctr: "39%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 10000, trend: "-1%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 30000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "25%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 14000, location: "ТЦ Абзал", currency: "₸" },
        { id: 2, date: "2025-10-16", type: "Пополнение депозита", amount: 40000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Страхование жизни", amount: 9000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Предпочитает хранить средства на депозите",
      "Редко пользуется кредитными продуктами",
      "Реагирует на уведомления о ставках и бонусах"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Central Market Group»",
    allocation: [
      "Пополнение депозита (35%)",
      "Покупки и семья (40%)",
      "Прочее (25%)"
    ],
    mlInsight: "Пассивная, но финансово дисциплинированная клиентка с устойчивыми накоплениями",
    habitScore: 82,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Покупки и семья", amount: 40 },
      { stage: "Свободные средства", amount: 25 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Страхование жизни",
    "Gold карта",
    "пассивная клиентка",
    "финансовая стабильность"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жаксылыков Нурбол Ермекулы",
      type: "Супруг",
      birthDate: "1989-09-15",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512319
    },
    {
      name: "Жаксылыков Диас Нурболович",
      type: "Сын",
      birthDate: "2018-11-07",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512321
    }
  ]
},
{
  ac_id: 100073512331,
  name: "Смагулов Айболат Канатович",
  iin: "890214300599",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Смагулов Айболат Канатович",
    iin: "890214300599",
    birthDate: "1989-02-14",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77015557711", email: "aibolat.smagulov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Xiaomi 13T", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-03-15",
    bankRegistrationDate: "2018-10-01",
    mobileAppRegistrationDuration: "5 лет 8 месяцев",
    bankRegistrationDuration: "7 лет 1 месяц",
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
    revenue: { margin: 180000, commission: 25000, interest: 15000 },
    ltv: 600000,
    clv: 800000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/aibolat_all_points.html",
    clustered_points: "/maps/aibolat_clustered_points.html",
    heatmap: "/maps/aibolat_heatmap.html",
    time_heatmap: "/maps/aibolat_time_heatmap.html",
    time_points: "/maps/aibolat_time_points.html"
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
          effectiveRate: "ГЭСВ 43%",
          sum: 900000,
          openDate: "2024-08-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2022-09-12",
          validUntil: "2026-09-12",
          sum: 40000.00,
          status: "Активна",
          isSalaryCard: false
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
      text: "Айболат, погашайте кредит без комиссии в приложении",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Погашение кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-25", text: "Попробуйте Baytaq — депозит с доходом 15%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-18", text: "Оплата коммунальных услуг в 1 Прочитан", campaign: "Utilities", status: "Прочитан" }
    ],
    frequency: { daily: 0.5, weekly: 2.0, monthly: 6.0 },
    conversion: { overall: "62%", clickRate: "32%" },
    insights: { topics: "кредиты, платежи, депозиты" },
    topPush: { text: "Погашение кредита без комиссии", or: "70%", ctr: "33%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,2,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 30000, trend: "+5%" },
      ownTransfers: { freq: 3, avgSum: 35000 },
      internalTransfers: { freq: 2, avgSum: 20000 },
      externalTransfers: { freq: 2, avgSum: 25000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 15000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "P2P", amount: 20000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Погашение кредита", amount: 45000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Часто совершает мелкие переводы",
      "Основные расходы — еда и коммунальные услуги",
      "Редко пользуется долгосрочными продуктами"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Urban Delivery»",
    allocation: [
      "Погашение кредита (40%)",
      "Покупки и питание (40%)",
      "Прочее (20%)"
    ],
    mlInsight: "Активный пользователь, но с ограниченным доходом и ориентацией на краткосрочные расходы",
    habitScore: 68,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 40 },
      { stage: "Покупки и питание", amount: 40 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Samsung Pay", value: 20 },
      { name: "Apple Pay", value: 10 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "малодоходный клиент",
    "активные переводы",
    "оплата коммуналки",
    "онлайн кредит",
    "ежемесячные платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Смагулова Алия Ерлановна",
      type: "Супруга",
      birthDate: "1990-06-25",
      jointProducts: [],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512332
    },
    {
      name: "Смагулов Еркен Айболатович",
      type: "Сын",
      birthDate: "2015-09-12",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512333
    }
  ]
},
{
  ac_id: 100073512340,
  name: "Калдыбаев Али Рустемович",
  iin: "950714300623",
  city: "ШЫМКЕНТ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Калдыбаев Али Рустемович",
    iin: "950714300623",
    birthDate: "1995-07-14",
    age: 30,
    gender: "Мужской",
    contacts: { phone: "+77075553322", email: "ali.kaldybaev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Samsung Galaxy A55", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-05-22",
    bankRegistrationDate: "2021-09-10",
    mobileAppRegistrationDuration: "3 года 6 месяцев",
    bankRegistrationDuration: "4 года 2 месяца",
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
    revenue: { margin: 160000, commission: 25000, interest: 12000 },
    ltv: 450000,
    clv: 600000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/ali_all_points.html",
    clustered_points: "/maps/ali_clustered_points.html",
    heatmap: "/maps/ali_heatmap.html",
    time_heatmap: "/maps/ali_time_heatmap.html",
    time_points: "/maps/ali_time_points.html"
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
          openDate: "2023-04-15",
          validUntil: "2027-04-15",
          sum: 35000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 600000,
          openDate: "2024-05-12",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
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
      text: "Али, погашайте кредит досрочно и уменьшайте переплату!",
      topic: "Кредиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Погашение кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-18", text: "Бонусы по карте Silver", campaign: "Card", status: "Прочитан" },
      { date: "2025-09-22", text: "Обновите данные профиля", campaign: "Info", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 3.8 },
    conversion: { overall: "62%", clickRate: "31%" },
    insights: { topics: "кредиты, бонусы, карта" },
    topPush: { text: "Досрочное погашение кредита", or: "74%", ctr: "32%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 3, avgSum: 20000, trend: "+2%" },
      ownTransfers: { freq: 2, avgSum: 25000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 1, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 9000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Коммуналка", amount: 12000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-19", type: "Погашение кредита", amount: 50000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Молодой клиент с низким доходом, активно пользуется мобильным банком",
      "Регулярно погашает кредит и совершает повседневные покупки",
      "Основная активность в digital-каналах"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Shymkent Logistics»",
    allocation: [
      "Погашение кредита (35%)",
      "Покупки (40%)",
      "Коммунальные услуги (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Активный, но малодоходный клиент, кредитная нагрузка средняя",
    habitScore: 70,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 35 },
      { stage: "Покупки", amount: 40 },
      { stage: "Коммунальные услуги", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Samsung Pay", value: 15 },
      { name: "Apple Pay", value: 10 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "онлайн кредит",
    "Silver карта",
    "низкий доход",
    "активный digital клиент",
    "ежемесячное погашение"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512341,
  name: "Сейткалиева Жанель Нуржановна",
  iin: "980428400912",
  city: "КОСТАНАЙ",
  segment: "Средний доход, активные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сейткалиева Жанель Нуржановна",
    iin: "980428400912",
    birthDate: "1998-04-28",
    age: 27,
    gender: "Женский",
    contacts: { phone: "+77073335577", email: "zhanel.seitkalieva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Костанай",
    activeCity: "Костанай",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-06-10",
    bankRegistrationDate: "2020-12-01",
    mobileAppRegistrationDuration: "3 года 5 месяцев",
    bankRegistrationDuration: "4 года 11 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: false,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 410000, commission: 45000, interest: 50000 },
    ltv: 1900000,
    clv: 2300000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/zhanel_all_points.html",
    clustered_points: "/maps/zhanel_clustered_points.html",
    heatmap: "/maps/zhanel_heatmap.html",
    time_heatmap: "/maps/zhanel_time_heatmap.html",
    time_points: "/maps/zhanel_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-03-15",
          validUntil: "2027-03-15",
          sum: 125000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 700000,
          openDate: "2024-07-05",
          status: "Активен"
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      text: "Жанель, откройте Акции и получите бонус!",
      topic: "Инвестиции",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Откройте Акции", campaign: "Invest", status: "Прочитан" },
      { date: "2025-10-19", text: "Пополните депозит Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-25", text: "Бонусы по Gold карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.7, monthly: 4.8 },
    conversion: { overall: "70%", clickRate: "35%" },
    insights: { topics: "депозиты, инвестиции, карты" },
    topPush: { text: "Акции + бонус", or: "80%", ctr: "36%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,2,2,3,2,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 15000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 20000 },
      internalTransfers: { freq: 2, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 20000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 12000, location: "ТЦ Mart", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Пополнение депозита", amount: 50000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-25", type: "Инвестиции", amount: 40000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Регулярно пользуется депозитом и инвестициями",
      "Активна в мобильном приложении",
      "Финансово грамотная и дисциплинированная клиентка"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "Фриланс / SMM агентство",
    allocation: [
      "Пополнение депозита (30%)",
      "Инвестиции (20%)",
      "Покупки и услуги (35%)",
      "Прочее (15%)"
    ],
    mlInsight: "Активная клиентка, грамотно распределяет средства между накоплениями и расходами",
    habitScore: 87,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки и услуги", amount: 35 },
      { stage: "Свободные средства", amount: 15 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Samsung Pay", value: 10 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Gold карта",
    "инвестиции",
    "активная клиентка",
    "финансово дисциплинированная"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512332,
  name: "Смагулова Алия Ерлановна",
  iin: "900625401733",
  city: "АЛМАТЫ",
  segment: "Пассивные низкодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Смагулова Алия Ерлановна",
    iin: "900625401733",
    birthDate: "1990-06-25",
    age: 35,
    gender: "Женский",
    contacts: { phone: "+77076667744", email: "aliya.smagulova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 12", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-06-10",
    bankRegistrationDate: "2020-04-01",
    mobileAppRegistrationDuration: "4 года 5 месяцев",
    bankRegistrationDuration: "5 лет 7 месяцев",
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
    revenue: { margin: 120000, commission: 15000, interest: 10000 },
    ltv: 400000,
    clv: 550000
  },

  // 🗺️ Геоданные
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
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2023-09-10",
          validUntil: "2027-09-10",
          sum: 30000.00,
          status: "Активна",
          isSalaryCard: true
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
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Редко",
    lastPush: {
      date: "2025-11-05",
      text: "Алия, получите 2.5% бонусов по карте Mastercard",
      topic: "Карта",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-05", text: "Бонусы по карте Mastercard", campaign: "Card", status: "Прочитан" },
      { date: "2025-09-10", text: "Попробуйте депозит Baytaq", campaign: "Deposit", status: "Не прочитан" }
    ],
    frequency: { daily: 0.1, weekly: 0.5, monthly: 1.5 },
    conversion: { overall: "30%", clickRate: "10%" },
    insights: { topics: "карты, бонусы" },
    topPush: { text: "Бонусы по карте", or: "40%", ctr: "12%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "-2%" },
      ownTransfers: { freq: 1, avgSum: 15000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 1, avgSum: 10000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "40%" },
        { mcc: "Utilities", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 8000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Коммуналка", amount: 12000, location: "Онлайн", currency: "₸" }
      ]
    },
    insights: [
      "Редко пользуется мобильным приложением",
      "Основная активность — оплата товаров и коммунальных услуг",
      "Низкий доход, базовая банковская активность"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «HomeCare Service»",
    allocation: [
      "Бытовые нужды (60%)",
      "Коммунальные услуги (30%)",
      "Прочее (10%)"
    ],
    mlInsight: "Клиентка с низким доходом, ограниченно использует банковские продукты",
    habitScore: 60,
    expenseFlow: [
      
      { stage: "Бытовые нужды", amount: 60 },
      { stage: "Коммунальные услуги", amount: 30 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 35 },
      { name: "Samsung Pay", value: 15 },
      { name: "Apple Pay", value: 10 },
      { name: "Google Pay", value: 5 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "низкий доход",
    "пассивная активность",
    "коммунальные платежи",
    "карта Silver"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Смагулов Айболат Канатович",
      type: "Супруг",
      birthDate: "1989-02-14",
      jointProducts: [],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512331
    },
    {
      name: "Смагулов Еркен Айболатович",
      type: "Сын",
      birthDate: "2015-09-12",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512333
    }
  ]
},
{
  ac_id: 100073512319,
  name: "Жаксылыков Нурбол Ермекулы",
  iin: "890915300421",
  city: "КАРАГАНДА",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жаксылыков Нурбол Ермекулы",
    iin: "890915300421",
    birthDate: "1989-09-15",
    age: 36,
    gender: "Мужской",
    contacts: { phone: "+77074441155", email: "nurbek.zhaksylykov@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung Galaxy S23 Ultra", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-01-22",
    bankRegistrationDate: "2018-08-10",
    mobileAppRegistrationDuration: "5 лет 10 месяцев",
    bankRegistrationDuration: "7 лет 3 месяца",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 480000, commission: 40000, interest: 90000 },
    ltv: 2100000,
    clv: 2600000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/nurbol_all_points.html",
    clustered_points: "/maps/nurbol_clustered_points.html",
    heatmap: "/maps/nurbol_heatmap.html",
    time_heatmap: "/maps/nurbol_time_heatmap.html",
    time_points: "/maps/nurbol_time_points.html"
  },

  // 🏦 Продукты
  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Кредит",
          name: "Рефинансирование",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 2600000,
          openDate: "2024-02-12",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 800000,
          openDate: "2025-06-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-09-01",
          validUntil: "2026-09-01",
          sum: 120000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-04-05",
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
      date: "2025-11-08",
      text: "Нурбол, обновите Страхование жизни онлайн и получите 5% кэшбэк",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Страхование жизни онлайн — кэшбэк 5%", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-20", text: "Baytaq — повышенная ставка до 15.5%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-25", text: "Инвестиционные идеи от AlatauCity Invest", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.6, monthly: 5.2 },
    conversion: { overall: "70%", clickRate: "37%" },
    insights: { topics: "страхование, депозиты, инвестиции" },
    topPush: { text: "Страхование жизни онлайн", or: "76%", ctr: "39%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "+1%" },
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 2, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 50000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Transport", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 28000, location: "ТЦ City Mall", currency: "₸" },
        { id: 2, date: "2025-10-15", type: "Погашение кредита", amount: 95000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Инвестиции", amount: 70000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Комбинирует доход от ИП и основного места работы",
      "Активно использует страхование и инвестиции",
      "Сбалансированное финансовое поведение"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ИП «Жаксылыков Trade» и ТОО «Karaganda Build»",
    allocation: [
      "Погашение кредита (25%)",
      "Инвестиции (20%)",
      "Пополнение депозита (20%)",
      "Покупки и семья (25%)",
      "Прочее (10%)"
    ],
    mlInsight: "Сбалансированный клиент с активным участием в инвестициях и страховании",
    habitScore: 88,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Покупки и семья", amount: 25 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "смешанный доход",
    "рефинансирование",
    "инвестиции",
    "депозит Baytaq",
    "Страхование жизни",
    "активный клиент"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жаксылыкова Алия Ермековна",
      type: "Супруга",
      birthDate: "1991-04-18",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512320
    },
    {
      name: "Жаксылыков Диас Нурболович",
      type: "Сын",
      birthDate: "2018-11-07",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512321
    }
  ]
},
{
  ac_id: 100073512287,
  name: "Касенова Жанар Ерболатовна",
  iin: "920903400811",
  city: "КОКШЕТАУ",
  segment: "Средний доход, активные",

  basicInfo: {
    fio: "Касенова Жанар Ерболатовна",
    iin: "920903400811",
    birthDate: "1992-09-03",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77079995522", email: "zhanar.kasenova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Кокшетау",
    activeCity: "Кокшетау",
    device: { os: "Android", model: "Samsung Galaxy S23", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-06-18",
    bankRegistrationDate: "2018-11-01",
    mobileAppRegistrationDuration: "5 лет 5 месяцев",
    bankRegistrationDuration: "7 лет",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 230000, commission: 35000, interest: 55000 },
    ltv: 1100000,
    clv: 1450000
  },

  geoMaps: {
    all_points: "/maps/zhanar_all_points.html",
    clustered_points: "/maps/zhanar_clustered_points.html",
    heatmap: "/maps/zhanar_heatmap.html",
    time_heatmap: "/maps/zhanar_time_heatmap.html",
    time_points: "/maps/zhanar_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2021-03-20",
          validUntil: "2026-03-20",
          sum: 130000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 800000,
          openDate: "2024-07-01",
          status: "Активен"
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 700000,
          openDate: "2023-08-12",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-12",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Жанар, досрочное пополнение депозита Baytaq с бонусом 1%",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Бонус за пополнение депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Автострахование — скидка на продление", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Акции доступен онлайн", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.7, monthly: 5 },
    conversion: { overall: "65%", clickRate: "38%" },
    insights: { topics: "депозиты, кредиты, страхование, инвестиции" },
    topPush: { text: "Бонус за пополнение депозита", or: "74%", ctr: "39%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 25000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 2, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "25%" },
        { mcc: "Food", share: "20%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Education", share: "15%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 20000, location: "Sulpak", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Коммуналка", amount: 12000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Погашение кредита", amount: 35000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Инвестиции", amount: 40000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Бухгалтер в частной компании, стабильный доход",
      "Регулярно использует депозиты и страхование",
      "Активна в мобильном приложении, предпочитает планировать расходы заранее"
    ]
  },

  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Finance Plus Audit»",
    allocation: [
      "Семейные расходы (35%)",
      "Погашение кредита (25%)",
      "Сбережения и депозиты (20%)",
      "Покупки и питание (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Бухгалтер, планирующий тип поведения, финансовая дисциплина высокая, склонна к накоплению",
    habitScore: 88,
    expenseFlow: [
      
      { stage: "Семейные расходы", amount: 35 },
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Сбережения и депозиты", amount: 20 },
      { stage: "Покупки и питание", amount: 15 },
      { stage: "Свободные средства", amount: 5 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Google Pay", value: 20 },
      { name: "Samsung Pay", value: 15 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "бухгалтер",
    "депозит Baytaq",
    "инвестиции",
    "Автострахование",
    "финансовая дисциплина",
    "семейный клиент"
  ],

  relatedClients: [
    {
      name: "Касенов Айдос Ерланович",
      type: "Супруг",
      birthDate: "1990-02-11",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512286
    }
  ]
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
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2024-05-01",
          status: "Активен"
        },
        {
          name: "Автострахование",
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
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Кредит под 37%", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-18", text: "Страховка Страхование жизни продлена", campaign: "Garant", status: "Прочитан" },
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 5 }
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
      jointProducts: ["Автострахование"],
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
  ac_id: 100073512280,
  name: "Исаева Алина Ержановна",
  iin: "000412401965",
  city: "ШЫМКЕНТ",
  segment: "Активные, но малодоходные",

  basicInfo: {
    fio: "Исаева Алина Ержановна",
    iin: "000412401965",
    birthDate: "2000-04-12",
    age: 25,
    gender: "Женский",
    contacts: { phone: "+77079994411", email: "alisa.isaeva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "Android", model: "Xiaomi 13", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-05-18",
    bankRegistrationDate: "2021-03-10",
    mobileAppRegistrationDuration: "3 года 6 месяцев",
    bankRegistrationDuration: "4 года 8 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 140000, commission: 10000, interest: 5000 },
    ltv: 400000,
    clv: 550000
  },

  geoMaps: {
    all_points: "/maps/alina_all_points.html",
    clustered_points: "/maps/alina_clustered_points.html",
    heatmap: "/maps/alina_heatmap.html",
    time_heatmap: "/maps/alina_time_heatmap.html",
    time_points: "/maps/alina_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2022-02-10",
          validUntil: "2026-02-10",
          sum: 35000.00,
          status: "Активна",
          isSalaryCard: true
        },
        {
          type: "Кредит",
          name: "Онлайн Кредит",
          term: "18 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 45%",
          sum: 500000,
          openDate: "2024-09-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: [
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-05-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Алина, до конца месяца погасите часть кредита и получите бонус 2%",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Погашение кредита с бонусом 2%", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-22", text: "Оформите страховку Страхование жизни онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-29", text: "Узнайте как повысить уровень карты до Gold", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.6, monthly: 5 },
    conversion: { overall: "65%", clickRate: "37%" },
    insights: { topics: "кредиты, страховка, карты" },
    topPush: { text: "Погашение кредита с бонусом 2%", or: "73%", ctr: "38%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 20000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 15000 },
      internalTransfers: { freq: 2, avgSum: 10000 },
      externalTransfers: { freq: 1, avgSum: 12000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 12000, location: "Mega Planet", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Food", amount: 8000, location: "Супермаркет", currency: "₸" },
        { id: 3, date: "2025-10-14", type: "P2P", amount: 5000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-23", type: "Коммуналка", amount: 10000, location: "Онлайн", currency: "₸" },
        { id: 5, date: "2025-10-30", type: "Погашение кредита", amount: 20000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Молодая активная клиентка с небольшим доходом",
      "Регулярно использует карту и мобильное приложение",
      "Своевременно погашает кредит и участвует в акциях банка"
    ]
  },

  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "Кафе «Bon Appetit»",
    allocation: [
      "Покупки и питание (40%)",
      "Погашение кредита (25%)",
      "Коммуналка (15%)",
      "Сбережения (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "Активная пользовательница, низкий доход, но высокая дисциплина по платежам",
    habitScore: 74,
    expenseFlow: [
      
      { stage: "Покупки и питание", amount: 40 },
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Коммуналка", amount: 15 },
      { stage: "Сбережения", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Samsung Pay", value: 20 },
      { name: "Google Pay", value: 10 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "молодая клиентка",
    "низкий доход",
    "онлайн кредит",
    "активное использование приложения",
    "страхование Страхование жизни",
    "поведенческая дисциплина"
  ],

  relatedClients: []
},
{
  ac_id: 100073512289,
  name: "Нургалиева Асель Бекжанкызы",
  iin: "940915401822",
  city: "АЛМАТЫ",
  segment: "Ценные клиенты",

  basicInfo: {
    fio: "Нургалиева Асель Бекжанкызы",
    iin: "940915401822",
    birthDate: "1994-09-15",
    age: 31,
    gender: "Женский",
    contacts: { phone: "+77076667711", email: "assel.nurgalieva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 15 Pro", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2020-08-01",
    bankRegistrationDate: "2019-04-10",
    mobileAppRegistrationDuration: "5 лет 3 месяца",
    bankRegistrationDuration: "6 лет 7 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 520000, commission: 80000, interest: 90000 },
    ltv: 2800000,
    clv: 3500000
  },

  geoMaps: {
    all_points: "/maps/assel_all_points.html",
    clustered_points: "/maps/assel_clustered_points.html",
    heatmap: "/maps/assel_heatmap.html",
    time_heatmap: "/maps/assel_time_heatmap.html",
    time_points: "/maps/assel_time_points.html"
  },

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
          openDate: "2024-02-10",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15.5%",
          sum: 1200000,
          openDate: "2024-09-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Premium",
          openDate: "2022-06-15",
          validUntil: "2026-06-15",
          sum: 220000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-03-01",
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

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-09",
      text: "Асель, для вашего ИП доступен Акции с гибкими пополнениями",
      topic: "Инвестиции",
      status: "Прочитан"
    },
    history: [
      {
        date: "2025-11-09",
        text: "Акции для предпринимателей — начните с 50 000 ₸",
        campaign: "Invest",
        status: "Прочитан"
      },
      {
        date: "2025-10-18",
        text: "Baytaq: бонус +0.5% при пополнении свыше 500 000 ₸",
        campaign: "Deposit",
        status: "Прочитан"
      },
      {
        date: "2025-09-25",
        text: "Кэшбэк до 2.5% за безналичную оплату услуг и Retail",
        campaign: "Card",
        status: "Прочитан"
      }
    ],
    frequency: { daily: 0.5, weekly: 2.0, monthly: 6.5 },
    conversion: { overall: "67%", clickRate: "40%" },
    insights: { topics: "бизнес-расчёты, депозиты, инвестиции, страхование" },
    topPush: {
      text: "Акции для предпринимателей",
      or: "76%",
      ctr: "39%"
    },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 6, avgSum: 90000 },
      internalTransfers: { freq: 3, avgSum: 70000 },
      externalTransfers: { freq: 2, avgSum: 80000 },
      internationalTransfers: { freq: 1, avgSum: 150000 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Retail", share: "20%" }, // офис, техника
        { mcc: "Retail", share: "10%" }, // услуги для бизнеса
        { mcc: "Коммуналка", share: "15%" },
        { mcc: "Прочее", share: "15%" }
      ],
      transactions: [
        {
          id: 1,
          date: "2025-10-03",
          type: "Retail",
          amount: 95000,
          location: "Офисное оборудование",
          currency: "₸"
        },
        {
          id: 2,
          date: "2025-10-09",
          type: "P2P",
          amount: 60000,
          location: "Мобильное приложение",
          currency: "₸"
        },
        {
          id: 3,
          date: "2025-10-15",
          type: "Пополнение депозита",
          amount: 200000,
          location: "Интернет-банк",
          currency: "₸"
        },
        {
          id: 4,
          date: "2025-10-22",
          type: "Инвестиции",
          amount: 150000,
          location: "Alatau Invest",
          currency: "₸"
        },
        {
          id: 5,
          date: "2025-10-30",
          type: "Погашение кредита",
          amount: 120000,
          location: "Мобильное приложение",
          currency: "₸"
        }
      ]
    },
    insights: [
      "Предпринимательница (онлайн-магазин и услуги маркетинга), активные безналичные обороты",
      "Комбинирует кредит, депозит и Акции",
      "Использует страхование авто и ответственности, полностью цифровое поведение"
    ]
  },

  financialHabits: {
    salaryDay: "Нерегулярно (по выручке ИП)",
    salarySource: "ИП «Assel Media & Store»",
    allocation: [
      "Бизнес-расходы (40%)",
      "Инвестиции и депозит (25%)",
      "Погашение кредита (15%)",
      "Личные расходы (15%)",
      "Резерв (5%)"
    ],
    mlInsight: "Ценный клиент: дисциплинированно гасит кредит, наращивает сбережения и инвестирует",
    habitScore: 92,
    expenseFlow: [
      
      { stage: "Бизнес-расходы", amount: 40 },
      { stage: "Инвестиции и депозит", amount: 25 },
      { stage: "Погашение кредита", amount: 15 },
      { stage: "Личные расходы", amount: 15 },
      { stage: "Резерв", amount: 5 }
    ],
    paymentMethods: [
      { name: "Google Pay", value: 30 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 20 },
      { name: "Kaspi QR", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "предпринимательница",
    "ИП клиент",
    "Premium",
    "депозит Baytaq",
    "Акции",
    "страхование Автострахование и Страхование жизни",
    "digital-поведение",
    "ценный клиент"
  ],

  relatedClients: []
},
{
  ac_id: 100073512283,
  name: "Кузнецова Елена Сергеевна",
  iin: "960412401955",
  city: "АКТОБЕ",
  segment: "Низкая активность и доход",

  basicInfo: {
    fio: "Кузнецова Елена Сергеевна",
    iin: "960412401955",
    birthDate: "1996-04-12",
    age: 29,
    gender: "Женский",
    contacts: { phone: "+77076661100", email: "elena.kuznetsova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актобе",
    activeCity: "Актобе",
    device: { os: "Android", model: "Samsung A32", lastLogin: "2024-10-30" },
    status: "Неактивен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2020-02-15",
    bankRegistrationDate: "2019-05-01",
    mobileAppRegistrationDuration: "5 лет 9 месяцев",
    bankRegistrationDuration: "6 лет 6 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 0, commission: 0, interest: 0 },
    ltv: 0,
    clv: 0
  },

  geoMaps: {
    all_points: "/maps/elena_all_points.html",
    clustered_points: "/maps/elena_clustered_points.html",
    heatmap: "/maps/elena_heatmap.html",
    time_heatmap: "/maps/elena_time_heatmap.html",
    time_points: "/maps/elena_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [],
      history: [
        {
          type: "Карта",
          cardType: "VISA",
          level: "Silver",
          openDate: "2020-04-10",
          validUntil: "2024-04-10",
          sum: 0,
          status: "Закрыта"
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "14.7%",
          sum: 300000,
          openDate: "2021-03-01",
          closeDate: "2021-09-01",
          status: "Закрыт"
        }
      ]
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: [],
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Нет",
    campaigns: "Нет",
    lastPush: {
      date: "2023-10-05",
      text: "Елена, ваш профиль неактивен — вернитесь в AlatauCity и получите бонус при повторном открытии депозита",
      topic: "Реактивация",
      status: "Не доставлен"
    },
    history: [
      { date: "2023-10-05", text: "Вернитесь в банк и получите бонус за новый депозит", campaign: "Reactivation", status: "Не доставлен" },
      { date: "2022-08-15", text: "Истёк срок действия карты", campaign: "Card", status: "Не прочитан" },
      { date: "2021-09-02", text: "Депозит Baytaq успешно закрыт", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0, weekly: 0, monthly: 0.1 },
    conversion: { overall: "0%", clickRate: "0%" },
    insights: { topics: "реактивация, депозиты, неактивные клиенты" },
    topPush: { text: "Вернитесь в банк с бонусом", or: "0%", ctr: "0%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 0, avgSum: 0 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [],
      transactions: []
    },
    insights: [
      "Бывшая активная клиентка, сейчас полностью неактивна",
      "Все продукты закрыты",
      "Входит в целевую аудиторию кампаний по возвращению клиентов"
    ]
  },

  financialHabits: {
    salaryDay: "",
    salarySource: "",
    allocation: [],
    mlInsight: "Неактивная клиентка без текущих операций",
    habitScore: 18,
    expenseFlow: [],
    paymentMethods: []
  },

  tags: [
    "неактивная клиентка",
    "закрытые продукты",
    "депозит Baytaq (в прошлом)",
    "реактивация"
  ],

  relatedClients: []
},
{
  ac_id: 100073512338,
  name: "Нургалиева Амина Ермековна",
  iin: "890830401255",
  city: "АЛМАТЫ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Нургалиева Амина Ермековна",
    iin: "890830401255",
    birthDate: "1989-08-30",
    age: 36,
    gender: "Женский",
    contacts: { phone: "+77071112244", email: "amina.nurgalieva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13 Pro", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-03-01",
    bankRegistrationDate: "2019-10-15",
    mobileAppRegistrationDuration: "4 года 8 месяцев",
    bankRegistrationDuration: "6 лет 1 месяц",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 350000, commission: 40000, interest: 55000 },
    ltv: 1600000,
    clv: 1950000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/amina_all_points.html",
    clustered_points: "/maps/amina_clustered_points.html",
    heatmap: "/maps/amina_heatmap.html",
    time_heatmap: "/maps/amina_time_heatmap.html",
    time_points: "/maps/amina_time_points.html"
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
          sum: 700000,
          openDate: "2025-01-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2023-06-25",
          validUntil: "2027-06-25",
          sum: 95000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-10",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2024-10-01",
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
      date: "2025-11-09",
      text: "Амина, ваш Акции вырос на 4.3% за месяц!",
      topic: "Инвестиции",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Рост инвестиционного счёта +4.3%", campaign: "Invest", status: "Прочитан" },
      { date: "2025-10-21", text: "Автострахование — продлите онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Пополнение депозита Baytaq", campaign: "Deposit", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 4.5 },
    conversion: { overall: "68%", clickRate: "33%" },
    insights: { topics: "депозиты, инвестиции, страхование" },
    topPush: { text: "Инвестиционный рост", or: "78%", ctr: "35%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,2,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,3,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 10000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 1, avgSum: 15000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 15000, location: "ТЦ Forum", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Инвестиции", amount: 45000, location: "AlatauCity Invest", currency: "₸" },
        { id: 3, date: "2025-10-24", type: "Пополнение депозита", amount: 60000, location: "Онлайн", currency: "₸" }
      ]
    },
    insights: [
      "Регулярно пополняет депозит и инвестиции",
      "Активна в финансовых продуктах группы",
      "Стабильное поведение без рисков"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "12 число каждого месяца",
    salarySource: "ТОО «DesignGroup KZ»",
    allocation: [
      "Инвестиции (30%)",
      "Пополнение депозита (25%)",
      "Покупки (25%)",
      "Прочее (20%)"
    ],
    mlInsight: "Финансово дисциплинированная клиентка с акцентом на накопления и инвестиции",
    habitScore: 88,
    expenseFlow: [
      
      { stage: "Инвестиции", amount: 30 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Покупки", amount: 25 },
      { stage: "Свободные средства", amount: 20 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Samsung Pay", value: 25 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "инвестиции",
    "депозит Baytaq",
    "Gold карта",
    "Автострахование и Страхование жизни",
    "стабильное накопительное поведение"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Нургалиев Асхат Муратович",
      type: "Супруг",
      birthDate: "1987-06-21",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-10",
      ac_id: 100073512337
    },
    {
      name: "Нургалиев Тимур Асхатович",
      type: "Сын",
      birthDate: "2016-05-25",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512339
    }
  ]
},
{
  ac_id: 100073512329,
  name: "Омарова Жанара Мараткызы",
  iin: "920922400744",
  city: "АКТОБЕ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Омарова Жанара Мараткызы",
    iin: "920922400744",
    birthDate: "1992-09-22",
    age: 33,
    gender: "Женский",
    contacts: { phone: "+77076661122", email: "zhanara.omarova@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Актобе",
    activeCity: "Актобе",
    device: { os: "iOS", model: "iPhone 13", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-01-15",
    bankRegistrationDate: "2020-02-12",
    mobileAppRegistrationDuration: "4 года 10 месяцев",
    bankRegistrationDuration: "5 лет 9 месяцев",
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
    revenue: { margin: 210000, commission: 20000, interest: 25000 },
    ltv: 700000,
    clv: 950000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/zhanara_all_points.html",
    clustered_points: "/maps/zhanara_clustered_points.html",
    heatmap: "/maps/zhanara_heatmap.html",
    time_heatmap: "/maps/zhanara_time_heatmap.html",
    time_points: "/maps/zhanara_time_points.html"
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
          interestRate: "14.7%",
          sum: 550000,
          openDate: "2025-03-05",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2023-07-15",
          validUntil: "2027-07-15",
          sum: 60000.00,
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
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-03-05",
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
      text: "Жанара, продлите страховку Страхование жизни онлайн и получите скидку",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Страхование жизни — скидка при продлении", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-20", text: "Baytaq — начислены проценты", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-25", text: "Скидка на страхование авто", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.3, monthly: 4.2 },
    conversion: { overall: "68%", clickRate: "35%" },
    insights: { topics: "депозиты, страхование, уведомления" },
    topPush: { text: "Страхование жизни со скидкой", or: "75%", ctr: "37%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 10000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 15000 },
      externalTransfers: { freq: 1, avgSum: 20000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "40%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 11000, location: "ТЦ Keruen City", currency: "₸" },
        { id: 2, date: "2025-10-13", type: "Пополнение депозита", amount: 40000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-21", type: "Страхование жизни", amount: 60000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Редко пользуется кредитами, предпочитает накопления",
      "Регулярно продлевает страхование",
      "Аккуратный пользователь банковских сервисов"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «Aktobe Retail Group»",
    allocation: [
      "Пополнение депозита (35%)",
      "Покупки и семья (40%)",
      "Страхование и услуги (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Семейная клиентка, активно пользуется депозитом и страховыми продуктами",
    habitScore: 84,
    expenseFlow: [
      
      { stage: "Пополнение депозита", amount: 35 },
      { stage: "Покупки и семья", amount: 40 },
      { stage: "Страхование и услуги", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "депозит Baytaq",
    "Страхование жизни",
    "накопления",
    "пассивная, но прибыльная",
    "стабильная клиентка"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Омаров Данияр Ерланулы",
      type: "Супруг",
      birthDate: "1990-04-05",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512328
    },
    {
      name: "Омаров Айдар Даниярович",
      type: "Сын",
      birthDate: "2016-11-05",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512330
    }
  ]
},
{
  ac_id: 100073512328,
  name: "Омаров Данияр Ерланулы",
  iin: "900405300633",
  city: "АКТОБЕ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Омаров Данияр Ерланулы",
    iin: "900405300633",
    birthDate: "1990-04-05",
    age: 35,
    gender: "Мужской",
    contacts: { phone: "+77075559988", email: "daniyar.omarov@example.kz" },
    language: "Казахский",
    citizenship: "Казахстан",
    residenceCity: "Актобе",
    activeCity: "Актобе",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2020-10-20",
    bankRegistrationDate: "2019-04-10",
    mobileAppRegistrationDuration: "5 лет 1 месяц",
    bankRegistrationDuration: "6 лет 7 месяцев",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: true,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 470000, commission: 60000, interest: 100000 },
    ltv: 2500000,
    clv: 3100000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/daniyar_all_points.html",
    clustered_points: "/maps/daniyar_clustered_points.html",
    heatmap: "/maps/daniyar_heatmap.html",
    time_heatmap: "/maps/daniyar_time_heatmap.html",
    time_points: "/maps/daniyar_time_points.html"
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
          sum: 2800000,
          openDate: "2024-07-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "12 мес",
          interestRate: "15%",
          sum: 700000,
          openDate: "2025-02-15",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2023-05-01",
          validUntil: "2027-05-01",
          sum: 150000.00,
          status: "Активна",
          isSalaryCard: true
        }
      ],
      history: []
    },

    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2025-03-05",
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
      text: "Данияр, продлите депозит Baytaq и получите +0.5% к ставке",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Бонусная ставка по депозиту", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-20", text: "Страхование жизни онлайн — продление без визита", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-25", text: "Инвестиционные возможности с AlatauCity Invest", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.6, monthly: 5.0 },
    conversion: { overall: "70%", clickRate: "37%" },
    insights: { topics: "депозиты, инвестиции, страхование" },
    topPush: { text: "Повышенная ставка по депозиту", or: "78%", ctr: "39%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "+3%" },
      ownTransfers: { freq: 3, avgSum: 40000 },
      internalTransfers: { freq: 2, avgSum: 25000 },
      externalTransfers: { freq: 1, avgSum: 35000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Transport", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-06", type: "Retail", amount: 22000, location: "ТЦ Keruen", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Пополнение депозита", amount: 70000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-22", type: "Инвестиции", amount: 80000, location: "AlatauCity Invest", currency: "₸" }
      ]
    },
    insights: [
      "Комбинирует доход от предпринимательской деятельности и работы",
      "Использует все основные продукты банка",
      "Дисциплинированный клиент с высоким уровнем вовлеченности"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ИП «Омаров Services»",
    allocation: [
      "Погашение кредита (25%)",
      "Пополнение депозита (20%)",
      "Инвестиции (15%)",
      "Покупки и семья (30%)",
      "Прочее (10%)"
    ],
    mlInsight: "Активный клиент с устойчивыми доходами, распределяет средства между кредитом и накоплениями",
    habitScore: 88,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 25 },
      { stage: "Пополнение депозита", amount: 20 },
      { stage: "Инвестиции", amount: 15 },
      { stage: "Покупки и семья", amount: 30 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Apple Pay", value: 25 },
      { name: "Карта Банка через POS", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "смешанный доход",
    "ИП клиент",
    "депозит Baytaq",
    "Страхование жизни",
    "инвестиции",
    "активный заемщик"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Омарова Жанара Мараткызы",
      type: "Супруга",
      birthDate: "1992-09-22",
      jointProducts: ["Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512329
    },
    {
      name: "Омаров Айдар Даниярович",
      type: "Сын",
      birthDate: "2016-11-05",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512330
    }
  ]
},
{
  ac_id: 100073512337,
  name: "Нургалиев Асхат Муратович",
  iin: "870621300914",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Нургалиев Асхат Муратович",
    iin: "870621300914",
    birthDate: "1987-06-21",
    age: 38,
    gender: "Мужской",
    contacts: { phone: "+77017776622", email: "askhat.nurgaliev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S24", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-08-12",
    bankRegistrationDate: "2019-03-15",
    mobileAppRegistrationDuration: "5 лет 3 месяца",
    bankRegistrationDuration: "6 лет 8 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП, Интернет-банк",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 480000, commission: 65000, interest: 120000 },
    ltv: 2800000,
    clv: 3200000
  },

  // 🗺️ Геоданные
  geoMaps: {
    all_points: "/maps/askhat_all_points.html",
    clustered_points: "/maps/askhat_clustered_points.html",
    heatmap: "/maps/askhat_heatmap.html",
    time_heatmap: "/maps/askhat_time_heatmap.html",
    time_points: "/maps/askhat_time_points.html"
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
          sum: 4200000,
          openDate: "2023-11-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-02-10",
          validUntil: "2026-02-10",
          sum: 160000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-10",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование ответственности",
          openDate: "2024-10-01",
          status: "Активен"
        }
      ]
    },

    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-09",
      text: "Асхат, погашайте кредит досрочно без комиссии!",
      topic: "Кредиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-09", text: "Погашение кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-22", text: "Автострахование — продлите онлайн", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Новый лимит по кредитной карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.5, weekly: 2.0, monthly: 6.5 },
    conversion: { overall: "75%", clickRate: "40%" },
    insights: { topics: "кредиты, страхование, карта" },
    topPush: { text: "Досрочное погашение кредита", or: "85%", ctr: "42%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,2,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,2,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,2,3,3,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,2,3,4,3,2,0,0,0,0,1,3,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,2,0,0,0,0,1,2,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 40000, trend: "0%" },
      ownTransfers: { freq: 4, avgSum: 50000 },
      internalTransfers: { freq: 2, avgSum: 30000 },
      externalTransfers: { freq: 2, avgSum: 60000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Fuel", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Food", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 20000, location: "ТЦ Mega Park", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Погашение кредита", amount: 85000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-23", type: "Автострахование", amount: 90000, location: "AlatauCity Garant", currency: "₸" }
      ]
    },
    insights: [
      "Активный заемщик, регулярно совершает платежи",
      "Пользуется страховыми услугами",
      "Стабильный клиент с хорошей кредитной историей"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число каждого месяца",
    salarySource: "ТОО «TransLogistics Asia»",
    allocation: [
      "Погашение кредита (40%)",
      "Покупки и семья (35%)",
      "Страхование и услуги (15%)",
      "Прочее (10%)"
    ],
    mlInsight: "Клиент с фокусом на кредитные продукты, активен в мобильном приложении",
    habitScore: 86,
    expenseFlow: [
      
      { stage: "Погашение кредита", amount: 40 },
      { stage: "Покупки и семья", amount: 35 },
      { stage: "Страхование и услуги", amount: 15 },
      { stage: "Свободные средства", amount: 10 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 10 }
    ]
  },

  // 🏷️ Теги
  tags: [
    "онлайн кредит",
    "Автострахование и Страхование жизни",
    "активный заемщик",
    "Gold карта",
    "стабильные платежи"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Нургалиева Амина Ермековна",
      type: "Супруга",
      birthDate: "1989-08-30",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-10",
      ac_id: 100073512338
    },
    {
      name: "Нургалиев Тимур Асхатович",
      type: "Сын",
      birthDate: "2016-05-25",
      jointProducts: [],
      status: "Неактивен",
      lastActivity: "—",
      ac_id: 100073512339
    }
  ]
},
{
  ac_id: 100073512284,
  name: "Тлеуберген Артур Асхатович",
  iin: "060718501234",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  basicInfo: {
    fio: "Тлеуберген Артур Асхатович",
    iin: "060718501234",
    birthDate: "2006-07-18",
    age: 19,
    gender: "Мужской",
    contacts: { phone: "+77087776655", email: "artur.tleubergen@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Не женат",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-09-10",
    bankRegistrationDate: "2023-06-15",
    mobileAppRegistrationDuration: "2 года 2 месяца",
    bankRegistrationDuration: "2 года 5 месяцев",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 90000, commission: 5000, interest: 0 },
    ltv: 250000,
    clv: 320000
  },

  geoMaps: {
    all_points: "/maps/artur_all_points.html",
    clustered_points: "/maps/artur_clustered_points.html",
    heatmap: "/maps/artur_heatmap.html",
    time_heatmap: "/maps/artur_time_heatmap.html",
    time_points: "/maps/artur_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2023-07-01",
          validUntil: "2027-07-01",
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
      alatauGarant: []
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Артур, открой депозит Baytaq и начни копить с 1000 ₸!",
      topic: "Депозиты",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Открой депозит Baytaq с выгодой 15%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-25", text: "Кэшбэк на покупки через QR до 2%", campaign: "Card", status: "Прочитан" },
      { date: "2025-09-15", text: "Проверь свою активность в приложении", campaign: "Engagement", status: "Прочитан" }
    ],
    frequency: { daily: 0.6, weekly: 2.5, monthly: 8 },
    conversion: { overall: "68%", clickRate: "42%" },
    insights: { topics: "молодежные карты, lifestyle, бонусы" },
    topPush: { text: "Кэшбэк на покупки через QR", or: "80%", ctr: "41%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,4,4,2,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,3,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 10000, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 8000 },
      internalTransfers: { freq: 2, avgSum: 7000 },
      externalTransfers: { freq: 1, avgSum: 5000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "35%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Entertainment", share: "25%" },
        { mcc: "Utilities", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-04", type: "Retail", amount: 8000, location: "Mega Center", currency: "₸" },
        { id: 2, date: "2025-10-12", type: "Food", amount: 6000, location: "KFC", currency: "₸" },
        { id: 3, date: "2025-10-18", type: "P2P", amount: 5000, location: "AlatauCityBank", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Коммуналка", amount: 4000, location: "Онлайн", currency: "₸" },
        { id: 5, date: "2025-10-30", type: "Entertainment", amount: 7000, location: "Кинотеатр Chaplin", currency: "₸" }
      ]
    },
    insights: [
      "Молодой клиент, совмещает учёбу и фриланс",
      "Активен в онлайн-платежах и QR-оплате",
      "Популярен в соцсетях, ведёт блог о студенческой жизни"
    ]
  },

  financialHabits: {
    salaryDay: "Нерегулярно (по проектам)",
    salarySource: "Фриланс (дизайн, блог)",
    allocation: [
      "Еда и покупки (40%)",
      "Техника и гаджеты (25%)",
      "Путешествия и контент (20%)",
      "Сбережения (10%)",
      "Прочее (5%)"
    ],
    mlInsight: "Фрилансер, активен в цифровой среде, нестабильный доход",
    habitScore: 77,
    expenseFlow: [
      
      { stage: "Еда и покупки", amount: 40 },
      { stage: "Техника и гаджеты", amount: 25 },
      { stage: "Контент и путешествия", amount: 20 },
      { stage: "Сбережения", amount: 10 },
      { stage: "Свободные средства", amount: 5 }
    ],
    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "молодой клиент",
    "фрилансер",
    "блогер",
    "активный пользователь",
    "низкий доход",
    "цифровые платежи"
  ],

  relatedClients: []
},
{
  ac_id: 100052847312,
  name: "Сулейменов Адиль Ермекович",
  iin: "890911301245",
  city: "АЛМАТЫ",
  segment: "Кредитные клиенты",

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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-02-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
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
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Снижение ставки по Онлайн Кредиту", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-20", text: "Попробуйте депозит Baytaq 15%", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-25", text: "Автострахование без визита в отделение", campaign: "Garant", status: "Прочитан" }
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 10 }
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
      jointProducts: ["Автострахование"],
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
  ac_id: 100073512290,
  name: "Ахметов Адиль Ерланович",
  iin: "060412300912",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  basicInfo: {
    fio: "Ахметов Адиль Ерланович",
    iin: "060412300912",
    birthDate: "2006-04-12",
    age: 19,
    gender: "Мужской",
    contacts: { phone: "+77082221144", email: "adil.ahmetov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung A34", lastLogin: "2025-11-10" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Не женат",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-02-20",
    bankRegistrationDate: "2022-08-10",
    mobileAppRegistrationDuration: "2 года 9 месяцев",
    bankRegistrationDuration: "3 года 3 месяца",
    hasIP: false,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: false,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  financialInfo: {
    revenue: { margin: 50000, commission: 5000, interest: 2000 },
    ltv: 90000,
    clv: 120000
  },

  geoMaps: {
    all_points: "/maps/adil_all_points.html",
    clustered_points: "/maps/adil_clustered_points.html",
    heatmap: "/maps/adil_heatmap.html",
    time_heatmap: "/maps/adil_time_heatmap.html",
    time_points: "/maps/adil_time_points.html"
  },

  products: {
    bankProducts: {
      title: "Продукты Банка",
      items: [
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2023-03-15",
          validUntil: "2027-03-15",
          sum: 35000.00,
          status: "Активна",
          isSalaryCard: false
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
      depositInterest: "Нет"
    }
  },

  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Адиль, попробуйте оплату через Google Pay и получите 2% кэшбэк!",
      topic: "Платежи",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Кэшбэк за оплату QR!", campaign: "Payments", status: "Прочитан" },
      { date: "2025-10-20", text: "Попробуйте оплату коммуналки онлайн", campaign: "Utilities", status: "Прочитан" },
      { date: "2025-09-15", text: "Скидки студентам в кафе — расплачивайтесь картой", campaign: "Retail", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.2 },
    conversion: { overall: "58%", clickRate: "30%" },
    insights: { topics: "QR, Retail, Коммуналка" },
    topPush: { text: "Кэшбэк за оплату QR", or: "65%", ctr: "30%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,1,2,2,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,1,2,1,1,0,0,0,0,1,0,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,2,2,1,1,0,0,0,0,0,1,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,1,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0]
      }
    }
  },

  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 10000, trend: "-5%" },
      ownTransfers: { freq: 3, avgSum: 15000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "40%" },
        { mcc: "Retail", share: "30%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Utilities", share: "10%" },
        { mcc: "Transport", share: "5%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 4000, location: "Magnum", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "Коммуналка", amount: 3000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-16", type: "P2P", amount: 8000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-28", type: "Retail", amount: 7000, location: "Кафе CoffeeLab", currency: "₸" }
      ]
    },
    insights: [
      "Студент 2 курса КБТУ, активен в мобильном приложении",
      "Использует карту для повседневных расходов и P2P-переводов",
      "Интерес к кэшбэку и QR-оплатам"
    ]
  },

  financialHabits: {
    salaryDay: "Нерегулярный доход (подработка, фриланс)",
    salarySource: "Частичная занятость — бариста в кафе",
    allocation: [
      "Питание и кафе (40%)",
      "Транспорт и связь (20%)",
      "Учёба и материалы (20%)",
      "Личные расходы (15%)",
      "Сбережения (5%)"
    ],
    mlInsight: "Молодой клиент, высокая вовлечённость в цифровые сервисы, низкий доход, растущий потенциал",
    habitScore: 76,
    expenseFlow: [
      
      { stage: "Питание и кафе", amount: 40 },
      { stage: "Транспорт и связь", amount: 20 },
      { stage: "Учёба и материалы", amount: 20 },
      { stage: "Личные расходы", amount: 15 },
      { stage: "Сбережения", amount: 5 }
    ],
    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 10 }
    ]
  },

  tags: [
    "студент",
    "молодой клиент",
    "активный пользователь МП",
    "низкий доход",
    "цифровые платежи",
    "ростовой потенциал"
  ],

  relatedClients: []
},
{
  ac_id: 100073512221,
  name: "Смагулова Гаухар Нуртаевна",
  iin: "770820400692",
  city: "ШАМКЕНТ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Смагулова Гаухар Нуртаевна",
    iin: "770820400692",
    birthDate: "1977-08-20",
    age: 48,
    gender: "Женский",
    contacts: { phone: "+77076667755", email: "gauhar.smagulova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "iOS", model: "iPhone 14", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-04-10",
    bankRegistrationDate: "2016-11-15",
    mobileAppRegistrationDuration: "5 лет 7 месяцев",
    bankRegistrationDuration: "9 лет",
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
    revenue: { margin: 180000, commission: 35000, interest: 90000 },
    ltv: 1750000,
    clv: 2100000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/gauhar_all_points.html",
    clustered_points: "/maps/gauhar_clustered_points.html",
    heatmap: "/maps/gauhar_heatmap.html",
    time_heatmap: "/maps/gauhar_time_heatmap.html",
    time_points: "/maps/gauhar_time_points.html"
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
          interestRate: "15.4%",
          sum: 2800000,
          openDate: "2024-11-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Gold",
          openDate: "2022-05-01",
          validUntil: "2026-05-01",
          sum: 300000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-09-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2024-09-01",
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
      date: "2025-11-07",
      text: "Гаухар, ваш депозит Baytaq достиг максимальной доходности, проверьте начисления",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Baytaq: начислены проценты по вашему вкладу", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Обновите полис Страхование жизни перед поездкой", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-28", text: "Акции — стабильный рост дохода", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.25, weekly: 1.0, monthly: 4.2 },
    conversion: { overall: "57%", clickRate: "29%" },
    insights: { topics: "депозиты, страхование, инвестиции" },
    topPush: { text: "Baytaq — максимальная доходность", or: "72%", ctr: "31%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 0, avgSum: 0, trend: "0%" },
      ownTransfers: { freq: 3, avgSum: 70000 },
      internalTransfers: { freq: 1, avgSum: 90000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 1, avgSum: 200000 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Travel", share: "30%" },
        { mcc: "Restaurants", share: "15%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Insurance", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Путешествия", amount: 180000, location: "Airbnb", currency: "₸" },
        { id: 2, date: "2025-10-11", type: "Retail", amount: 45000, location: "Duty Free", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Пополнение депозита", amount: 90000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-27", type: "Инвестиции", amount: 120000, location: "Alatau Invest", currency: "₸" }
      ]
    },
    insights: [
      "Активно управляет депозитами и инвестициями",
      "Путешествует с супругом, использует премиальные карты",
      "Предпочитает безналичные платежи и страховые продукты"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Ежемесячная пенсия + доход от инвестиций",
    salarySource: "Инвестиции и накопления семьи",
    allocation: [
      "Путешествия (35%)",
      "Сбережения (25%)",
      "Инвестиции (20%)",
      "Покупки (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Финансово устойчивая клиентка, предпочитает накопления и путешествия",
    habitScore: 88,

    expenseFlow: [
      
      { stage: "Путешествия", amount: 35 },
      { stage: "Сбережения", amount: 25 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Покупки", amount: 15 },
      { stage: "Свободные средства", amount: 5 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Kaspi QR", value: 15 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "путешественница",
    "пассивный доход",
    "Акции",
    "депозит Baytaq",
    "Premium клиентка",
    "страхование"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Смагулов Алихан Бекболатович",
      type: "Супруг",
      birthDate: "1975-03-19",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-08",
      ac_id: 100073512220
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
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
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Погасите часть кредита без комиссии", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-25", text: "Автострахование — обновите страховку", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-20", text: "Акции активен", campaign: "Invest", status: "Прочитан" }
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 }
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
      jointProducts: ["Автострахование"],
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      { date: "2025-10-12", text: "Онлайн Кредит — новые условия", campaign: "Credit", status: "Прочитан" },
      { date: "2025-09-01", text: "Инвестируйте с Alatau Invest", campaign: "Invest", status: "Прочитан" }
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
      
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Погашение кредитов", amount: 20 },
      { stage: "Покупки", amount: 30 },
      { stage: "Свободные средства", amount: 25 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Samsung Pay", value: 20 },
      { name: "Kaspi QR", value: 15 },
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 20 }
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
  ac_id: 100073512230,
  name: "Тлеубергенов Ержан Арманович",
  iin: "970812301945",
  city: "КОСТАНАЙ",
  segment: "Низкая активность и доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Тлеубергенов Ержан Арманович",
    iin: "970812301945",
    birthDate: "1997-08-12",
    age: 28,
    gender: "Мужской",
    contacts: { phone: "+77083335566", email: "yerzhan.tleubergenov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Костанай",
    activeCity: "Костанай",
    device: { os: "Android", model: "Redmi Note 11", lastLogin: "2025-10-15" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2022-07-10",
    bankRegistrationDate: "2020-09-20",
    mobileAppRegistrationDuration: "3 года 4 месяца",
    bankRegistrationDuration: "5 лет 2 месяца",
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
    revenue: { margin: 15000, commission: 3000, interest: 0 },
    ltv: 70000,
    clv: 90000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/yerzhan_all_points.html",
    clustered_points: "/maps/yerzhan_clustered_points.html",
    heatmap: "/maps/yerzhan_heatmap.html",
    time_heatmap: "/maps/yerzhan_time_heatmap.html",
    time_points: "/maps/yerzhan_time_points.html"
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
          openDate: "2022-07-20",
          validUntil: "2026-07-20",
          sum: 5000.00,
          status: "Активна",
          isSalaryCard: false
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
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-09-28",
      text: "Ержан, держите баланс на карте выше 10 000 ₸ и получайте бонусы",
      topic: "Карта",
      status: "Не прочитан"
    },
    history: [
      { date: "2025-09-28", text: "Пополните карту и активируйте бонусную программу", campaign: "Loyalty", status: "Не прочитан" },
      { date: "2025-08-20", text: "Оплачивайте коммуналку без комиссии", campaign: "Utilities", status: "Прочитан" },
      { date: "2025-07-12", text: "Добавьте карту в Apple Pay для удобных платежей", campaign: "Digital", status: "Не прочитан" }
    ],
    frequency: { daily: 0.1, weekly: 0.4, monthly: 1.2 },
    conversion: { overall: "12%", clickRate: "5%" },
    insights: { topics: "бонусы, базовые операции" },
    topPush: { text: "Бонусы за активность по карте", or: "15%", ctr: "7%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 7000, trend: "-10%" },
      ownTransfers: { freq: 1, avgSum: 5000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "60%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Utilities", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-09-10", type: "Retail", amount: 2500, location: "Магазин «Стимул»", currency: "₸" },
        { id: 2, date: "2025-09-15", type: "Food", amount: 3200, location: "Супермаркет", currency: "₸" },
        { id: 3, date: "2025-09-27", type: "Коммуналка", amount: 4000, location: "Онлайн", currency: "₸" }
      ]
    },
    insights: [
      "Безработный, пользуется картой для повседневных покупок",
      "Редко взаимодействует с банком, низкий отПрочитан на коммуникации",
      "Основные траты — еда и коммунальные платежи"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Нерегулярно (помощь от семьи, временные подработки)",
    salarySource: "Нет постоянного дохода",
    allocation: [
      "Питание (50%)",
      "Коммуналка (20%)",
      "Прочее (30%)"
    ],
    mlInsight: "Клиент без постоянного дохода, потенциальный получатель социальных предложений",
    habitScore: 35,

    expenseFlow: [
      
      { stage: "Питание", amount: 50 },
      { stage: "Коммуналка", amount: 20 },
      { stage: "Свободные средства", amount: 30 }
    ],

    paymentMethods: [
      { name: "Карта Банка через POS", value: 60 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "безработный",
    "низкий доход",
    "низкая активность",
    "базовые траты",
    "потенциал удержания"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
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
          name: "Страхование жизни",
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
      text: "Нурлан, контролируйте выплаты по кредиту в один Прочитан",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      {
        date: "2025-11-07",
        text: "Узнайте график погашения онлайн",
        campaign: "CreditCare",
        status: "Прочитан"
      },
      {
        date: "2025-10-18",
        text: "Предодобренный онлайн кредит на улучшение условий",
        campaign: "Credit",
        status: "Прочитан"
      },
      {
        date: "2025-09-05",
        text: "Оформите Страхование жизни онлайн за 2 минуты",
        campaign: "Garant",
        status: "Прочитан"
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 20 }
    ]
  },

  tags: [
    "кредитный клиент",
    "активный пользователь МП",
    "онлайн-платежи",
    "страхование Страхование жизни",
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
  ac_id: 100073512250,
  name: "Жанабеков Руслан Ерланович",
  iin: "850411300845",
  city: "АЛМАТЫ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жанабеков Руслан Ерланович",
    iin: "850411300845",
    birthDate: "1985-04-11",
    age: 40,
    gender: "Мужской",
    contacts: { phone: "+77071112255", email: "ruslan.zhanabekov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy S22 Ultra", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-02-18",
    bankRegistrationDate: "2017-08-10",
    mobileAppRegistrationDuration: "5 лет 9 месяцев",
    bankRegistrationDuration: "8 лет 3 месяца",
    hasIP: true,
    hasLegalEntity: false,
    hasAlatauCityInvest: false,
    hasAlatauCityGarant: true,
    serviceChannel: "МП",
    lifeStatus: "Актуальный",
    isPrivate: false
  },

  // 💰 Финансовая информация
  financialInfo: {
    revenue: { margin: 190000, commission: 25000, interest: 15000 },
    ltv: 900000,
    clv: 1150000
  },

  // 🗺 Геоданные / карты
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
          name: "Рефинансирование",
          term: "36 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 1800000,
          openDate: "2023-11-01",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2022-03-20",
          validUntil: "2026-03-20",
          sum: 120000.00,
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
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-04-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-05",
      text: "Руслан, получите кэшбэк 2% при оплате топлива картой AlatauCity!",
      topic: "Бонусы",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-05", text: "Кэшбэк 2% на заправках до конца месяца", campaign: "Fuel", status: "Прочитан" },
      { date: "2025-10-22", text: "Оформите страховку Страхование жизни онлайн за 5 минут", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-30", text: "Рефинансируйте кредит и снижайте ежемесячный платёж", campaign: "Credit", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.6, monthly: 5 },
    conversion: { overall: "63%", clickRate: "38%" },
    insights: { topics: "топливо, кредиты, страховка" },
    topPush: { text: "Кэшбэк на топливо 2%", or: "75%", ctr: "40%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,4,4,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 2, avgSum: 40000, trend: "-2%" },
      ownTransfers: { freq: 3, avgSum: 20000 },
      internalTransfers: { freq: 1, avgSum: 10000 },
      externalTransfers: { freq: 1, avgSum: 5000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Fuel", share: "40%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" },
        { mcc: "Retail", share: "10%" },
        { mcc: "Transport", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-01", type: "Топливо", amount: 15000, location: "Helios", currency: "₸" },
        { id: 2, date: "2025-10-06", type: "Food", amount: 8000, location: "Супермаркет Magnum", currency: "₸" },
        { id: 3, date: "2025-10-12", type: "P2P", amount: 12000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-20", type: "Коммуналка", amount: 10000, location: "Онлайн", currency: "₸" },
        { id: 5, date: "2025-10-28", type: "Топливо", amount: 16000, location: "Sinooil", currency: "₸" }
      ]
    },
    insights: [
      "Таксист, имеет стабильный доход через ИП",
      "Основные расходы — топливо, еда, коммунальные услуги",
      "Активно пользуется картой и акциями на кэшбэк"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Ежедневный доход (по завершению смен)",
    salarySource: "ИП, услуги такси (Bolt, Yandex)",
    allocation: [
      "Топливо (35%)",
      "Бытовые расходы (25%)",
      "Коммуналка (15%)",
      "Семья и дети (15%)",
      "Сбережения (10%)"
    ],
    mlInsight: "Активный клиент с регулярным оборотом, фокус на программах лояльности и страховании",
    habitScore: 78,

    expenseFlow: [
      
      { stage: "Топливо", amount: 35 },
      { stage: "Бытовые расходы", amount: 25 },
      { stage: "Коммуналка", amount: 15 },
      { stage: "Семья и дети", amount: 15 },
      { stage: "Сбережения", amount: 10 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Samsung Pay", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Apple Pay", value: 5 }
    ]
  },

  tags: [
    "таксист",
    "ИП",
    "стабильный доход",
    "топливо",
    "кредит и карта",
    "страхование авто"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Жанабекова Алия Муратовна",
      type: "Супруга",
      birthDate: "1987-09-02",
      status: "Активен",
      ac_id: 100073512251
    }
  ]
},
{
  ac_id: 100073512240,
  name: "Садыкова Алия Рустемовна",
  iin: "000224400512",
  city: "АКТОБЕ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Садыкова Алия Рустемовна",
    iin: "000224400512",
    birthDate: "2000-02-24",
    age: 25,
    gender: "Женский",
    contacts: { phone: "+77079992233", email: "aliya.sadykova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актобе",
    activeCity: "Актобе",
    device: { os: "Android", model: "Samsung Galaxy S21", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Не замужем",
    hasChildren: true,
    childrenCount: 1,
    mobileAppRegistrationDate: "2021-05-12",
    bankRegistrationDate: "2020-03-25",
    mobileAppRegistrationDuration: "4 года 6 месяцев",
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
    revenue: { margin: 70000, commission: 10000, interest: 0 },
    ltv: 250000,
    clv: 320000
  },

  // 🗺 Геоданные / карты
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
          term: "24 мес",
          interestRate: "37%",
          effectiveRate: "ГЭСВ 44%",
          sum: 600000,
          openDate: "2024-03-15",
          status: "Погашается",
          overdue: false,
          overdueSum: 0
        },
        {
          type: "Карта",
          cardType: "MASTERCARD",
          level: "Silver",
          openDate: "2023-06-10",
          validUntil: "2027-06-10",
          sum: 40000.00,
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
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2025-05-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Средний",
      creditInterest: "Да",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-06",
      text: "Алия, сниженная ставка по онлайн кредиту до 35% только до конца месяца",
      topic: "Кредит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Сниженная ставка по кредиту до 35%", campaign: "Credit", status: "Прочитан" },
      { date: "2025-10-20", text: "Оплатите коммунальные услуги без комиссии", campaign: "Utilities", status: "Прочитан" },
      { date: "2025-09-25", text: "Автострахование — защита вашего авто и семьи", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 4.5 },
    conversion: { overall: "52%", clickRate: "30%" },
    insights: { topics: "кредит, коммунальные платежи, страхование" },
    topPush: { text: "Сниженная ставка по кредиту", or: "68%", ctr: "32%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,1,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 20000, trend: "-5%" },
      ownTransfers: { freq: 2, avgSum: 10000 },
      internalTransfers: { freq: 1, avgSum: 5000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "45%" },
        { mcc: "Retail", share: "25%" },
        { mcc: "Utilities", share: "20%" },
        { mcc: "Children", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 7000, location: "Магазин одежды", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Коммуналка", amount: 15000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "P2P", amount: 8000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-10-25", type: "Food", amount: 12000, location: "Супермаркет", currency: "₸" },
        { id: 5, date: "2025-11-01", type: "Погашение кредита", amount: 25000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Мать-одиночка с одним ребёнком, основной доход — зарплатный и пособия",
      "Регулярно оплачивает коммуналку и кредит",
      "Предпочитает онлайн-платежи и небольшие траты на ребёнка"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "15 число каждого месяца",
    salarySource: "ТОО «Clean&Go Service» + пособие на ребёнка",
    allocation: [
      "Коммуналка (25%)",
      "Кредит (30%)",
      "Питание (25%)",
      "Ребёнок (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "Ответственный клиент с небольшим доходом, приоритет — стабильность и семья",
    habitScore: 65,

    expenseFlow: [
      
      { stage: "Кредит", amount: 30 },
      { stage: "Коммуналка", amount: 25 },
      { stage: "Питание", amount: 25 },
      { stage: "Ребёнок", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 35 },
      { name: "Google Pay", value: 25 },
      { name: "Карта Банка через POS", value: 25 },
      { name: "Samsung Pay", value: 10 },
      { name: "Apple Pay", value: 5 }
    ]
  },

  tags: [
    "мать-одиночка",
    "активная клиентка",
    "низкий доход",
    "кредитный клиент",
    "социальные выплаты"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Садыков Арсен Алиевич",
      type: "Ребёнок",
      birthDate: "2020-06-10",
      status: "Неактивен",
      ac_id: 100073512241
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-03-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
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
      text: "Алия, обновите страховку Автострахование с выгодой 10%",
      topic: "Страхование",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-06", text: "Автострахование — обновите страховку", campaign: "Garant", status: "Прочитан" },
      { date: "2025-10-14", text: "Baytaq — начислены проценты", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-28", text: "Совет недели: защита семьи", campaign: "Garant", status: "Прочитан" }
    ],
    frequency: { daily: 0.25, weekly: 1.2, monthly: 4.5 },
    conversion: { overall: "55%", clickRate: "33%" },
    insights: { topics: "депозиты, страхование, семья" },
    topPush: { text: "Автострахование — скидка 10%", or: "65%", ctr: "34%" },
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 15 }
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2025-04-10",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
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
      status: "Прочитан"
    },
    history: [
      {
        date: "2025-11-08",
        text: "Эксклюзивное повышение ставки по Baytaq для премиум-клиентов",
        campaign: "DepositVIP",
        status: "Прочитан"
      },
      {
        date: "2025-10-22",
        text: "Меруерт, новые идеи для диверсификации инвестиций",
        campaign: "Invest",
        status: "Прочитан"
      },
      {
        date: "2025-09-15",
        text: "Автострахование: напоминание о продлении полиса",
        campaign: "Garant",
        status: "Прочитан"
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
      
      { stage: "Сбережения и депозиты", amount: 30 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Путешествия и досуг", amount: 20 },
      { stage: "Повседневные расходы", amount: 20 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 15 },
      { name: "Samsung Pay", value: 10 }
    ]
  },

  tags: [
    "премиальный клиент",
    "высокий доход",
    "депозит Baytaq",
    "Акции",
    "Автострахование и Страхование жизни",
    "активный digital-пользователь"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512210,
  name: "Жуматаева Аружан Нурболатовна",
  iin: "040714400825",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Жуматаева Аружан Нурболатовна",
    iin: "040714400825",
    birthDate: "2004-07-14",
    age: 21,
    gender: "Женский",
    contacts: { phone: "+77076665544", email: "aruzhan.jumataeva@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "iOS", model: "iPhone 13 Mini", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Не замужем",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-04-12",
    bankRegistrationDate: "2022-09-05",
    mobileAppRegistrationDuration: "2 года 7 месяцев",
    bankRegistrationDuration: "3 года 2 месяца",
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
    revenue: { margin: 45000, commission: 8000, interest: 0 },
    ltv: 150000,
    clv: 180000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/aruzhan_all_points.html",
    clustered_points: "/maps/aruzhan_clustered_points.html",
    heatmap: "/maps/aruzhan_heatmap.html",
    time_heatmap: "/maps/aruzhan_time_heatmap.html",
    time_points: "/maps/aruzhan_time_points.html"
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
          openDate: "2023-04-15",
          validUntil: "2027-04-15",
          sum: 32000.00,
          status: "Активна",
          isSalaryCard: false
        },
        {
          type: "Депозит",
          name: "Baytaq",
          term: "6 мес",
          interestRate: "14.7%",
          sum: 100000,
          openDate: "2025-05-01",
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
      date: "2025-11-08",
      text: "Аружан, оплачивайте покупки через QR и получайте бонусы до 2%",
      topic: "QR-платежи",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Бонусы за оплату через Google Pay", campaign: "QR", status: "Прочитан" },
      { date: "2025-10-25", text: "Пополните депозит Baytaq и получите +0.5% годовых", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-10", text: "Акции для студентов в кафе и кинотеатрах", campaign: "Retail", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.2, monthly: 4.8 },
    conversion: { overall: "56%", clickRate: "32%" },
    insights: { topics: "QR, покупки, студенческие акции, депозит" },
    topPush: { text: "Бонусы для студентов до 2%", or: "68%", ctr: "33%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 8000, trend: "+2%" },
      ownTransfers: { freq: 2, avgSum: 12000 },
      internalTransfers: { freq: 1, avgSum: 8000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "35%" },
        { mcc: "Retail", share: "30%" },
        { mcc: "Transport", share: "15%" },
        { mcc: "Entertainment", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Retail", amount: 4000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-08", type: "Food", amount: 5500, location: "Кафе", currency: "₸" },
        { id: 3, date: "2025-10-15", type: "Коммуналка", amount: 3500, location: "Онлайн", currency: "₸" },
        { id: 4, date: "2025-10-22", type: "P2P", amount: 8000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-10-30", type: "Пополнение депозита", amount: 10000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Молодая активная клиентка, студентка с подработкой",
      "Использует QR-платежи и небольшие депозиты",
      "Хорошо реагирует на молодежные кампании и бонусы"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Нерегулярно (каждые 10–15 дней)",
    salarySource: "Подработка в кафе «LatteGo»",
    allocation: [
      "Питание (35%)",
      "Покупки и одежда (25%)",
      "Развлечения (20%)",
      "Сбережения (10%)",
      "Прочее (10%)"
    ],
    mlInsight: "Молодая клиентка, делает первые шаги в накоплениях, предпочитает мобильные платежи",
    habitScore: 68,

    expenseFlow: [
      
      { stage: "Питание", amount: 35 },
      { stage: "Покупки", amount: 25 },
      { stage: "Развлечения", amount: 20 },
      { stage: "Сбережения", amount: 10 },
      { stage: "Свободные средства", amount: 10 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 30 },
      { name: "Kaspi QR", value: 30 },
      { name: "Google Pay", value: 20 },
      { name: "Карта Банка через POS", value: 15 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "студентка",
    "подработка",
    "активная клиентка",
    "депозит Baytaq",
    "QR-платежи",
    "низкий доход"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512220,
  name: "Смагулов Алихан Бекболатович",
  iin: "750319300564",
  city: "ШАМКЕНТ",
  segment: "Пассивные, но прибыльные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Смагулов Алихан Бекболатович",
    iin: "750319300564",
    birthDate: "1975-03-19",
    age: 50,
    gender: "Мужской",
    contacts: { phone: "+77075556644", email: "alikhan.smagulov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Шымкент",
    activeCity: "Шымкент",
    device: { os: "iOS", model: "iPhone 14 Pro Max", lastLogin: "2025-11-08" },
    status: "Активен",
    isNew: false,
    involvement: "Средняя",
    maritalStatus: "Женат",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2020-03-10",
    bankRegistrationDate: "2015-06-25",
    mobileAppRegistrationDuration: "5 лет 8 месяцев",
    bankRegistrationDuration: "10 лет 5 месяцев",
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
    revenue: { margin: 220000, commission: 45000, interest: 110000 },
    ltv: 1950000,
    clv: 2450000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/alikhan_all_points.html",
    clustered_points: "/maps/alikhan_clustered_points.html",
    heatmap: "/maps/alikhan_heatmap.html",
    time_heatmap: "/maps/alikhan_time_heatmap.html",
    time_points: "/maps/alikhan_time_points.html"
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
          openDate: "2025-03-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Premium",
          openDate: "2022-06-15",
          validUntil: "2026-06-15",
          sum: 480000.00,
          status: "Активна",
          isSalaryCard: false
        }
      ],
      history: []
    },
    groupProducts: {
      title: "Продукты Группы",
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
      alatauGarant: [
        {
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-09-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2024-09-01",
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
      date: "2025-11-05",
      text: "Алихан, планируете путешествие? Оплачивайте картой VISA Premium и получайте кэшбэк 2.5%",
      topic: "Путешествия",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-05", text: "Кэшбэк 2.5% при оплате авиабилетов и отелей картой VISA Premium", campaign: "Travel", status: "Прочитан" },
      { date: "2025-10-12", text: "Обновите полис Автострахование перед зимним сезоном", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-18", text: "Ваш Акции принёс +7% за квартал", campaign: "Invest", status: "Прочитан" }
    ],
    frequency: { daily: 0.2, weekly: 1.0, monthly: 3.5 },
    conversion: { overall: "60%", clickRate: "34%" },
    insights: { topics: "путешествия, премиальные сервисы, инвестиции" },
    topPush: { text: "Кэшбэк 2.5% при оплате за границей", or: "75%", ctr: "38%" },
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
      ownTransfers: { freq: 3, avgSum: 90000 },
      internalTransfers: { freq: 2, avgSum: 110000 },
      externalTransfers: { freq: 1, avgSum: 150000 },
      internationalTransfers: { freq: 2, avgSum: 300000 },
      retailPurchases: [
        { mcc: "Travel", share: "40%" },
        { mcc: "Retail", share: "25%" },
        { mcc: "Entertainment", share: "15%" },
        { mcc: "Restaurants", share: "10%" },
        { mcc: "Insurance", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-02", type: "Путешествия", amount: 240000, location: "Booking.com", currency: "₸" },
        { id: 2, date: "2025-10-10", type: "Инвестиции", amount: 180000, location: "Alatau Invest", currency: "₸" },
        { id: 3, date: "2025-10-20", type: "Retail", amount: 60000, location: "Duty Free", currency: "₸" },
        { id: 4, date: "2025-10-28", type: "P2P", amount: 100000, location: "Мобильное приложение", currency: "₸" },
        { id: 5, date: "2025-11-01", type: "Пополнение депозита", amount: 200000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Бывший спортсмен, получает пенсию и доход от инвестиций",
      "Регулярно путешествует и использует премиальную карту за границей",
      "Редко тратит внутри страны, предпочитает digital-платежи"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Ежемесячная пенсия 25 числа",
    salarySource: "Министерство спорта + инвестиционный доход",
    allocation: [
      "Путешествия (40%)",
      "Инвестиции (20%)",
      "Сбережения (20%)",
      "Покупки и развлечения (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Клиент с высоким финансовым потенциалом, предпочитает премиальные сервисы и инвестиции",
    habitScore: 90,

    expenseFlow: [
      
      { stage: "Путешествия", amount: 40 },
      { stage: "Инвестиции", amount: 20 },
      { stage: "Сбережения", amount: 20 },
      { stage: "Покупки и развлечения", amount: 15 },
      { stage: "Свободные средства", amount: 5 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 40 },
      { name: "Карта Банка через POS", value: 30 },
      { name: "Kaspi QR", value: 15 },
      { name: "Google Pay", value: 10 },
      { name: "Samsung Pay", value: 5 }
    ]
  },

  tags: [
    "пенсионер",
    "путешествия",
    "инвестиционный доход",
    "депозит Baytaq",
    "Premium карта",
    "бывший спортсмен"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Смагулова Гаухар Нуртаевна",
      type: "Супруга",
      birthDate: "1977-08-20",
      status: "Активен",
      ac_id: 100073512221
    }
  ]
},
{
  ac_id: 100073512170,
  name: "Калиев Берик Маратович",
  iin: "850912301845",
  city: "КАРАГАНДА",
  segment: "Пассивные низкодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Калиев Берик Маратович",
    iin: "850912301845",
    birthDate: "1985-09-12",
    age: 40,
    gender: "Мужской",
    contacts: { phone: "+77078881212", email: "berik.kaliyev@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Караганда",
    activeCity: "Караганда",
    device: { os: "Android", model: "Samsung Galaxy A34", lastLogin: "2025-10-18" },
    status: "Активен",
    isNew: false,
    involvement: "Низкая",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2023-04-05",
    bankRegistrationDate: "2021-07-22",
    mobileAppRegistrationDuration: "2 года 7 месяцев",
    bankRegistrationDuration: "4 года 3 месяца",
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
    revenue: { margin: 25000, commission: 5000, interest: 0 },
    ltv: 90000,
    clv: 120000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/berik_all_points.html",
    clustered_points: "/maps/berik_clustered_points.html",
    heatmap: "/maps/berik_heatmap.html",
    time_heatmap: "/maps/berik_time_heatmap.html",
    time_points: "/maps/berik_time_points.html"
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
          openDate: "2023-04-10",
          validUntil: "2027-04-10",
          sum: 12000.00,
          status: "Активна",
          isSalaryCard: true
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
      churnRisk: "Высокий",
      creditInterest: "Нет",
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-09-30",
      text: "Берик, получайте зарплату на карту AlatauCity и пользуйтесь бонусами",
      topic: "Карта",
      status: "Не прочитан"
    },
    history: [
      {
        date: "2025-09-30",
        text: "Переведите зарплатный проект и получайте бонусы",
        campaign: "SalaryCard",
        status: "Не прочитан"
      },
      {
        date: "2025-08-15",
        text: "Оплатите коммунальные услуги в приложении за 10 секунд",
        campaign: "Utilities",
        status: "Не прочитан"
      }
    ],
    frequency: { daily: 0.05, weekly: 0.3, monthly: 1.0 },
    conversion: { overall: "5%", clickRate: "3%" },
    insights: { topics: "низкий отПрочитан, базовые сервисы" },
    topPush: { text: "Оплатите коммунальные услуги онлайн", or: "10%", ctr: "4%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      ownTransfers: { freq: 1, avgSum: 15000 },
      internalTransfers: { freq: 0, avgSum: 0 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "60%" },
        { mcc: "Food", share: "25%" },
        { mcc: "Utilities", share: "15%" }
      ],
      transactions: [
        { id: 1, date: "2025-09-05", type: "Retail", amount: 4500, location: "Small", currency: "₸" },
        { id: 2, date: "2025-09-12", type: "Retail", amount: 3800, location: "Small", currency: "₸" },
        { id: 3, date: "2025-09-25", type: "Коммуналка", amount: 6200, location: "Онлайн", currency: "₸" },
        { id: 4, date: "2025-10-10", type: "Retail", amount: 5100, location: "Small", currency: "₸" }
      ]
    },
    insights: [
      "Минимальная активность по карте",
      "Оплата только базовых нужд",
      "Высокий риск ухода при отсутствии релевантных выгод"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "5 число",
    salarySource: "ТОО «СтройСервис KZ»",
    allocation: [
      "Базовые расходы (60%)",
      "Коммуналка (20%)",
      "Прочее (20%)"
    ],
    mlInsight: "Пассивный низкодоходный клиент, ключевой потенциал — удержание через простые выгодные офферы",
    habitScore: 40,

    expenseFlow: [
      
      { stage: "Базовые расходы", amount: 60 },
      { stage: "Коммуналка", amount: 20 },
      { stage: "Свободные средства", amount: 20 }
    ],

    paymentMethods: [
      { name: "Карта Банка через POS", value: 70 },
      { name: "Kaspi QR", value: 20 },
      { name: "Google Pay", value: 10 }
    ]
  },

  tags: [
    "пассивный клиент",
    "низкий доход",
    "низкий отПрочитан",
    "только базовые операции"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: []
},
{
  ac_id: 100073512200,
  name: "Сейдахметов Азамат Ерланович",
  iin: "070506301482",
  city: "АЛМАТЫ",
  segment: "Активные, но малодоходные",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Сейдахметов Азамат Ерланович",
    iin: "070506301482",
    birthDate: "2007-05-06",
    age: 18,
    gender: "Мужской",
    contacts: { phone: "+77082223311", email: "azamat.seidahmetov@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Алматы",
    activeCity: "Алматы",
    device: { os: "Android", model: "Samsung Galaxy A15", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: true,
    involvement: "Средняя",
    maritalStatus: "Холост",
    hasChildren: false,
    childrenCount: 0,
    mobileAppRegistrationDate: "2024-09-01",
    bankRegistrationDate: "2024-06-15",
    mobileAppRegistrationDuration: "1 год 2 месяца",
    bankRegistrationDuration: "1 год 5 месяцев",
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
    revenue: { margin: 15000, commission: 3000, interest: 0 },
    ltv: 60000,
    clv: 80000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/azamat_all_points.html",
    clustered_points: "/maps/azamat_clustered_points.html",
    heatmap: "/maps/azamat_heatmap.html",
    time_heatmap: "/maps/azamat_time_heatmap.html",
    time_points: "/maps/azamat_time_points.html"
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
          openDate: "2024-06-20",
          validUntil: "2028-06-20",
          sum: 15000.00,
          status: "Активна",
          isSalaryCard: false
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
      depositInterest: "Нет"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-07",
      text: "Азамат, оплачивайте транспорт и покупки с картой AlatauCity и получайте бонусы",
      topic: "Карта",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-07", text: "Оплачивайте через AlatauCity QR — бонусы для студентов", campaign: "QR", status: "Прочитан" },
      { date: "2025-10-25", text: "Подключите оплату через мобильное приложение", campaign: "App", status: "Прочитан" },
      { date: "2025-10-05", text: "Скидки на кино и кафе при оплате картой", campaign: "Retail", status: "Прочитан" }
    ],
    frequency: { daily: 0.4, weekly: 1.8, monthly: 5.5 },
    conversion: { overall: "58%", clickRate: "35%" },
    insights: { topics: "карта, молодежные бонусы, QR-платежи" },
    topPush: { text: "Бонусы для студентов", or: "70%", ctr: "38%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,3,1,0,0,0,0,1,2,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,2,2,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 5000, trend: "0%" },
      ownTransfers: { freq: 2, avgSum: 10000 },
      internalTransfers: { freq: 1, avgSum: 8000 },
      externalTransfers: { freq: 0, avgSum: 0 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Food", share: "40%" },
        { mcc: "Transport", share: "20%" },
        { mcc: "Entertainment", share: "20%" },
        { mcc: "Retail", share: "20%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-03", type: "Retail", amount: 2500, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-09", type: "P2P", amount: 3000, location: "Мобильное приложение", currency: "₸" },
        { id: 3, date: "2025-10-12", type: "Коммуналка", amount: 2000, location: "Онлайн", currency: "₸" },
        { id: 4, date: "2025-10-19", type: "Retail", amount: 3500, location: "Small", currency: "₸" },
        { id: 5, date: "2025-10-25", type: "Entertainment", amount: 4000, location: "Кинотеатр", currency: "₸" }
      ]
    },
    insights: [
      "Молодой клиент, активный пользователь цифровых сервисов",
      "Основные расходы — питание, развлечения, транспорт",
      "ОтПрочитанается на акции и бонусные программы для студентов"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "Нерегулярный доход (помощь родителей + подработка)",
    salarySource: "Подработка (кафе, курьер)",
    allocation: [
      "Питание (40%)",
      "Развлечения (25%)",
      "Транспорт (20%)",
      "Прочее (15%)"
    ],
    mlInsight: "Студент, начинающий клиент банка, с цифровыми привычками и активностью в QR-платежах",
    habitScore: 60,

    expenseFlow: [
      
      { stage: "Питание", amount: 40 },
      { stage: "Развлечения", amount: 25 },
      { stage: "Транспорт", amount: 20 },
      { stage: "Свободные средства", amount: 15 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 40 },
      { name: "Google Pay", value: 25 },
      { name: "Samsung Pay", value: 20 },
      { name: "Карта Банка через POS", value: 15 }
    ]
  },

  tags: [
    "молодой клиент",
    "студент",
    "цифровые платежи",
    "QR-активность",
    "низкий доход"
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
      alatauInvest: {
        portfolioType: "Средний",
        data: [
          {
            name: "Акции",
            type: "Инвестиции",
            portfolioType: "Средний",
            share: "30%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Облигации",
            type: "Инвестиции",
            portfolioType: "Малый",
            share: "10%",
            openDate: "2024-10-12",
            status: "Активен",
          },
          {
            name: "Валюта",
            share: "60%",
            openDate: "2024-12-12",
            status: "Активен",
          },
          {
            name: "Денежные средства",
            share: "0%",
            openDate: "-",
            status: "Не активен",
          },
        ],
      },
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
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Минимальный порог инвестиций снижен до 10 000 ₸", campaign: "Invest", status: "Прочитан" },
      { date: "2025-10-20", text: "Пополните депозит Baytaq и получите бонус", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-30", text: "Обновите мобильное приложение", campaign: "Tech", status: "Прочитан" }
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
      "Хороший отПрочитан на push-кампании"
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
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 }
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
      text: "Дана, продлите депозит Baytaq в пару Прочитанов",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-10-25", text: "Продлите депозит Baytaq онлайн", campaign: "Deposit", status: "Прочитан" },
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
      
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Покупки и повседневные траты", amount: 35 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 25 }
    ],

    paymentMethods: [
      { name: "Kaspi QR", value: 30 },
      { name: "Apple Pay", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 15 }
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
      status: "Прочитан",
    },
    history: [
      { date: "2025-11-07", text: "Продление депозита Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-15", text: "Получайте до 15% годовых по Baytaq", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-05", text: "Оплачивайте коммунальные в приложении", campaign: "Service", status: "Прочитан" },
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
      
      { stage: "Пополнение депозита", amount: 30 },
      { stage: "Покупки и повседневные расходы", amount: 30 },
      { stage: "Коммунальные платежи", amount: 15 },
      { stage: "Свободные средства", amount: 25 },
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Samsung Pay", value: 15 },
      { name: "Google Pay", value: 15 },
      { name: "Карта Банка через POS", value: 10 },
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
          name: "Страхование жизни",
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
      { date: "2025-10-14", text: "Baytaq — начислены проценты", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-09-28", text: "Оформите Страхование жизни за 2 минуты", campaign: "Garant", status: "Прочитан" }
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
      { name: "Google Pay", value: 10 },
      { name: "Карта Банка через POS", value: 20 }
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
      jointProducts: ["Страхование жизни"],
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
},
{
  ac_id: 100073512191,
  name: "Ахметова Айзада Серкебаевна",
  iin: "900902401832",
  city: "АКТАУ",
  segment: "Смешанный доход",

  // 🧾 Базовая информация
  basicInfo: {
    fio: "Ахметова Айзада Серкебаевна",
    iin: "900902401832",
    birthDate: "1990-09-02",
    age: 35,
    gender: "Женский",
    contacts: { phone: "+77074445566", email: "aizada.akhmetova@example.kz" },
    language: "Русский",
    citizenship: "Казахстан",
    residenceCity: "Актау",
    activeCity: "Актау",
    device: { os: "iOS", model: "iPhone 14 Pro", lastLogin: "2025-11-09" },
    status: "Активен",
    isNew: false,
    involvement: "Высокая",
    maritalStatus: "Замужем",
    hasChildren: true,
    childrenCount: 2,
    mobileAppRegistrationDate: "2021-05-12",
    bankRegistrationDate: "2019-02-10",
    mobileAppRegistrationDuration: "4 года 6 месяцев",
    bankRegistrationDuration: "6 лет 9 месяцев",
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
    revenue: { margin: 180000, commission: 25000, interest: 60000 },
    ltv: 900000,
    clv: 1150000
  },

  // 🗺 Геоданные / карты
  geoMaps: {
    all_points: "/maps/aizada_all_points.html",
    clustered_points: "/maps/aizada_clustered_points.html",
    heatmap: "/maps/aizada_heatmap.html",
    time_heatmap: "/maps/aizada_time_heatmap.html",
    time_points: "/maps/aizada_time_points.html"
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
          interestRate: "15.3%",
          sum: 900000,
          openDate: "2024-11-01",
          status: "Активен"
        },
        {
          type: "Карта",
          cardType: "VISA",
          level: "Gold",
          openDate: "2021-10-01",
          validUntil: "2025-10-01",
          sum: 150000.00,
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
          name: "Автострахование",
          type: "Страхование авто",
          openDate: "2024-07-01",
          status: "Активен"
        },
        {
          name: "Страхование жизни",
          type: "Страхование гражданской ответственности",
          openDate: "2024-07-01",
          status: "Активен"
        }
      ]
    },
    mlIndicators: {
      churnRisk: "Низкий",
      creditInterest: "Низкий",
      depositInterest: "Да"
    }
  },

  // 📲 Коммуникации
  communications: {
    pushStatus: "Да",
    campaigns: "Да",
    lastPush: {
      date: "2025-11-08",
      text: "Айзада, ваш депозит Baytaq приносит доход выше среднего",
      topic: "Депозит",
      status: "Прочитан"
    },
    history: [
      { date: "2025-11-08", text: "Baytaq — начислены проценты по вкладу", campaign: "Deposit", status: "Прочитан" },
      { date: "2025-10-12", text: "Автострахование — напоминание о продлении полиса", campaign: "Garant", status: "Прочитан" },
      { date: "2025-09-20", text: "Проверьте начисления по карте", campaign: "Card", status: "Прочитан" }
    ],
    frequency: { daily: 0.3, weekly: 1.4, monthly: 5.0 },
    conversion: { overall: "55%", clickRate: "30%" },
    insights: { topics: "депозиты, страхование, карта" },
    topPush: { text: "Baytaq — стабильный доход", or: "68%", ctr: "33%" },
    heatmap: {
      data: {
        Пн: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вт: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Ср: [0,0,0,0,0,0,0,1,3,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Чт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Пт: [0,0,0,0,0,0,0,1,3,3,2,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Сб: [0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,1,1,1,0,0,0,0,0],
        Вс: [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0]
      }
    }
  },

  // 💳 Поведение
  behavior: {
    operations: {
      atmWithdrawals: { freq: 1, avgSum: 30000, trend: "-1%" },
      ownTransfers: { freq: 2, avgSum: 60000 },
      internalTransfers: { freq: 1, avgSum: 40000 },
      externalTransfers: { freq: 1, avgSum: 70000 },
      internationalTransfers: { freq: 0, avgSum: 0 },
      retailPurchases: [
        { mcc: "Retail", share: "30%" },
        { mcc: "Food", share: "30%" },
        { mcc: "Children", share: "20%" },
        { mcc: "Health", share: "10%" },
        { mcc: "Utilities", share: "10%" }
      ],
      transactions: [
        { id: 1, date: "2025-10-05", type: "Retail", amount: 18000, location: "Small", currency: "₸" },
        { id: 2, date: "2025-10-14", type: "Коммуналка", amount: 22000, location: "Онлайн", currency: "₸" },
        { id: 3, date: "2025-10-23", type: "Пополнение депозита", amount: 40000, location: "Мобильное приложение", currency: "₸" },
        { id: 4, date: "2025-11-01", type: "P2P", amount: 50000, location: "Мобильное приложение", currency: "₸" }
      ]
    },
    insights: [
      "Регулярно вносит средства на депозит",
      "Использует страховые продукты Alatau Garant",
      "Высокая реакция на коммуникации о вкладах"
    ]
  },

  // 💵 Финансовые привычки
  financialHabits: {
    salaryDay: "10 число",
    salarySource: "ТОО «Aktau Fashion Studio»",
    allocation: [
      "Семейные расходы (40%)",
      "Пополнение депозита (25%)",
      "Коммуналка (15%)",
      "Покупки (15%)",
      "Прочее (5%)"
    ],
    mlInsight: "Клиент с устойчивым финансовым поведением и приверженностью к накоплениям",
    habitScore: 83,

    expenseFlow: [
      
      { stage: "Семейные расходы", amount: 40 },
      { stage: "Пополнение депозита", amount: 25 },
      { stage: "Коммуналка", amount: 15 },
      { stage: "Покупки", amount: 15 },
      { stage: "Свободные средства", amount: 5 }
    ],

    paymentMethods: [
      { name: "Apple Pay", value: 35 },
      { name: "Kaspi QR", value: 25 },
      { name: "Google Pay", value: 15 },
      { name: "Samsung Pay", value: 10 },
      { name: "Карта Банка через POS", value: 15 }
    ]
  },

  tags: [
    "смешанный доход",
    "депозит Baytaq",
    "страхование Автострахование и Страхование жизни",
    "активная клиентка",
    "регулярные операции"
  ],

  // 👨‍👩‍👦 Родственники
  relatedClients: [
    {
      name: "Ахметов Рамиль Ержанович",
      type: "Супруг",
      birthDate: "1988-06-21",
      jointProducts: ["Автострахование", "Страхование жизни"],
      status: "Активен",
      lastActivity: "2025-11-09",
      ac_id: 100073512190
    },
    {
      name: "Ахметов Данияр Рамильевич",
      type: "Ребёнок",
      birthDate: "2014-04-15",
      status: "Неактивен",
      ac_id: 100073512192
    },
    {
      name: "Ахметова Алина Рамильевна",
      type: "Ребёнок",
      birthDate: "2019-01-27",
      status: "Неактивен",
      ac_id: 100073512193
    }
  ]
}


];
