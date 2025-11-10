// Разделённые данные клиента по продуктам
// 4 экспорта: loyaltyData, depositsData, creditsData, cardsData

export const loyaltyData = [
  {
    "product": "Лояльность",
    "tier": "Silver",
    "baseMetrics": {
      "clientsCount": 186939,
      "avgAge": 37.5,
      "genderShare": { "male": 55, "female": 45 }
    },
    "metrics": {
      "transactionsSum": 57047306616.91,
      "transactionsCount": 6454533,
      "turnoverPerClient": 305172.76,
      "transactionsPerClient": 34.52,
      "avgTransaction": 8839.04,
      "avgIncome": 677984.42
    },
    "top5Branches": [
      { "name": "Алматинский филиал", "value": 16425638581 },
      { "name": "Столичный филиал", "value": 14065010091 },
      { "name": "Неизвестно", "value": 9932258561 },
      { "name": "Карагандинский филиал", "value": 2765432431 },
      { "name": "Павлодарский филиал", "value": 2122308189 }
    ],
    "top5MccGroups": [
      { "name": "Одежда и обувь", "value": 5324371369 },
      { "name": "Супермаркеты", "value": 5151000000 },
      { "name": "Кафе и рестораны", "value": 4312000000 },
      { "name": "Доставка еды", "value": 3894000000 },
      { "name": "Путешествия", "value": 3328000000 }
    ],

  },
  {
    "product": "Лояльность",
    "tier": "Gold",
    "baseMetrics": {
      "clientsCount": 24923,
      "avgAge": 39.1,
      "genderShare": { "male": 53, "female": 47 }
    },
    "metrics": {
      "transactionsSum": 69308107525.19,
      "transactionsCount": 5362183,
      "turnoverPerClient": 2780889.44,
      "transactionsPerClient": 215.15,
      "avgTransaction": 12925.35,
      "avgIncome": 1071078.41
    },
    "top5Branches": [
      { "name": "Алматинский филиал", "value": 20486707215 },
      { "name": "Столичный филиал", "value": 13177164463 },
      { "name": "Неизвестно", "value": 10657719062 },
      { "name": "Карагандинский филиал", "value": 2727679140 },
      { "name": "Павлодарский филиал", "value": 2150913991 }
    ],
    "top5MccGroups": [
      { "name": "Одежда и обувь", "value": 7677024621 },
      { "name": "Кафе и рестораны", "value": 6359792319 },
      { "name": "Супермаркеты", "value": 5950856769 },
      { "name": "Доставка еды", "value": 5826979753 },
      { "name": "Путешествия", "value": 4945521541 }
    ],

  },
  {
    "product": "Лояльность",
    "tier": "Premium",
    "baseMetrics": {
      "clientsCount": 288319,
      "avgAge": 39.2,
      "genderShare": { "male": 55, "female": 45 }
    },
    "metrics": {
      "transactionsSum": 96354353443.52,
      "transactionsCount": 13379313,
      "turnoverPerClient": 334193.56,
      "transactionsPerClient": 46.4,
      "avgTransaction": 7201.74,
      "avgIncome": 667499.79
    },
    "top5Branches": [
      { "name": "Неизвестно", "value": 17975004270 },
      { "name": "Столичный филиал", "value": 17205813377 },
      { "name": "Алматинский филиал", "value": 16889370340 },
      { "name": "Карагандинский филиал", "value": 3011958231 },
      { "name": "Павлодарский филиал", "value": 2530113780 }
    ],
    "top5MccGroups": [
      { "name": "Супермаркеты", "value": 17436262043 },
      { "name": "Кафе и рестораны", "value": 14350615321 },
      { "name": "Одежда и обувь", "value": 13285097032 },
      { "name": "Доставка еды", "value": 11805101213 },
      { "name": "Путешествия", "value": 10849823670 }
    ],

  }
];