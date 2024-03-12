# syntax=docker/dockerfile:1.6
FROM node:21
WORKDIR /app
COPY --link ./iss-exporter/package*.json ./
RUN npm install
COPY --link ./iss-exporter/dist ./dist

EXPOSE 3000
USER node
CMD ["npm", "run", "start"]
