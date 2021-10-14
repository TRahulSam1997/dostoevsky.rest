FROM node:10-alpine AS builder
WORKDIR /usr/src/app/
COPY . .
RUN mkdir build && cd frontend && npm install && npm run build && cd .. && npm install && npm run build

FROM node:10-alpine
WORKDIR /usr/src/app/
COPY --from=builder /usr/src/app/ ./

EXPOSE 8080

CMD ["npm", "start"]