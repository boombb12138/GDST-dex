# Build stage
FROM docker.m.daocloud.io/node:18 AS builder

# Set working directory
WORKDIR /app

# Copy root workspace files first
COPY package.json yarn.lock turbo.json ./
COPY .yarn ./.yarn
COPY .yarnrc.yml ./

# Create necessary directories for workspace
RUN mkdir -p apps/web packages

# Copy all workspace package.json files
COPY apps/web/package.json ./apps/web/package.json
COPY packages/*/package.json ./packages/*/package.json/

# Try multiple registry options
RUN echo "npmRegistryServer: 'https://registry.npmmirror.com'" >> .yarnrc.yml && \
    echo "unsafeHttpWhitelist: ['registry.npmmirror.com']" >> .yarnrc.yml

# Install dependencies with retry
RUN for i in 1 2 3; do yarn install && break || sleep 15; done

# Copy source code
COPY . .


#  Expose port 3000 (serve's default port)
EXPOSE 3000

# Start development server
CMD ["yarn", "web", "start"]