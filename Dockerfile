FROM node:10-alpine AS builder
WORKDIR /usr/src/app/
COPY . .
RUN npm install && npm run build

# FROM node:10 AS frontend-build
# WORKDIR /usr/src/app
# COPY frontend/ ./frontend/
# RUN mkdir build
# RUN cd frontend && npm install && npm run build
RUN cd frontend && npm install && npm run build

FROM node:10-alpine
WORKDIR /usr/src/app/
# COPY --from=frontend-build /usr/src/app/frontend/build ./frontend/build
COPY --from=builder /usr/src/app/ ./
RUN ls

EXPOSE 8080

CMD ["npm", "start"]