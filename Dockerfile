# Используйте официальный базовый образ Node.js для сборки
FROM node:20-alpine as build-stage

WORKDIR /app

# Копирование файла зависимостей
COPY package.json yarn.lock ./

# Установка зависимостей
RUN yarn install --frozen-lockfile

COPY . .

# Сборка приложения
RUN yarn build

# Используйте официальный образ Nginx для запуска веб-сервера
FROM nginx:alpine

# Копирование собранных файлов из предыдущего шага в директорию Nginx для статических файлов
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Настройка Nginx может потребовать кастомного файла конфигурации, который вы можете скопировать следующим образом:
# COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# В случае использования стандартной конфигурации Nginx, дополнительное копирование не требуется.
# По умолчанию, Nginx слушает на порту 80, так что вам просто нужно открыть этот порт.
EXPOSE 80