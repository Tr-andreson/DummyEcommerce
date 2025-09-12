FROM oven/bun:1 as build

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --production

COPY . .

RUN bun run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80




