# syntax=docker/dockerfile:1
# Static Docusaurus site → Nginx (use when Coolify Nixpacks cannot detect Node, or you prefer Dockerfile builds.)
# Coolify: set Build Pack → Dockerfile; pass build arg DOCS_SITE_URL=https://your-public-host (no trailing slash).

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG DOCS_SITE_URL=
ENV DOCS_SITE_URL=${DOCS_SITE_URL}

RUN npm run build

FROM nginx:alpine AS runner
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
