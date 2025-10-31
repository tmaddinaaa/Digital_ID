# === Этап 1: сборка React-приложения ===
FROM node:18-alpine AS build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальной код и собираем проект
COPY . .
RUN npm run build

# === Этап 2: запуск с помощью nginx ===
FROM nginx:alpine

# Копируем собранный билд из первого этапа
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
