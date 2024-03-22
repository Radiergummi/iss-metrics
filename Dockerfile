# syntax=docker/dockerfile:1.6
FROM node:21 AS builder
ARG SOURCE_ROOT=./iss-exporter/src
ENV SOURCE_ROOT ${SOURCE_ROOT}
WORKDIR /app
COPY --link ./telemetry.json /
COPY --link ./iss-exporter/package*.json ./iss-exporter/tsconfig.json ./
RUN npm install

COPY --link ./iss-exporter/src ./src

RUN npm run build -- --sourceRoot "${SOURCE_ROOT}"

FROM node:21
ARG LISTEN_PORT=3000
ENV LISTEN_PORT=${LISTEN_PORT:-3000}
ENV NODE_ENV=production
WORKDIR /app

COPY --link ./telemetry.json /
COPY --link ./iss-exporter/package.json ./
COPY --link --from=builder /app/node_modules ./node_modules
COPY --link --from=builder /app/dist ./dist

EXPOSE ${LISTEN_PORT}
USER node
ENTRYPOINT ["node", "--enable-source-maps", "--no-warnings=ExperimentalWarning"]
CMD ["dist/index.js"]
