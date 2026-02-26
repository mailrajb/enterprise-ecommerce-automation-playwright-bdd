# Simple container to run the test suite consistently
FROM mcr.microsoft.com/playwright:v1.49.0-jammy

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
ENV HEADLESS=true

CMD ["npm", "run", "test:e2e"]
