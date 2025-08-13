FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (leverage Docker layer cache)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --production

# Copy application source
COPY . .

# Use non-root user
RUN addgroup -S nodejs && adduser -S node -G nodejs \
	&& chown -R node:node /app
USER node

ENV NODE_ENV=production \
		PORT=3000

EXPOSE 3000

# Basic healthcheck hitting the HTTP server
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
	CMD wget -qO- http://localhost:${PORT}/health || exit 1

CMD ["node", "src/index.js"]