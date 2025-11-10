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
        status: "Доставлено",
      },
      history: [
        { date: "2025-10-13", text: "Алмат, это предложение только для вас", campaign: "Рекламный", status: "Доставлено" },
        { date: "2025-10-09", text: "Будьте осторожны!", campaign: "Информационный", status: "Доставлено" },
        { date: "2025-09-14", text: "Будьте осторожны!", campaign: "Информационный", status: "Клик" },
        {date: "2025-10-31", text: "Платите за коммуналку быстро и удобно!", campaign: "Триггерный",  status: "Доставлено"},
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
  // 🧍 Профиль АДИЛЬ
// --------------------------------------
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
          level: "Gold",
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
      { date: "2025-10-20", text: "Попробуйте депозит Baytaq 15%", campaign: "Deposit", status: "Клик" },
      { date: "2025-09-25", text: "КАСКО без визита в отделение", campaign: "Garant", status: "Клик" }
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
      status: "Не активен",
      lastActivity: "2025-10-29",
      ac_id: 100052847314
    }
  ]
}

];
