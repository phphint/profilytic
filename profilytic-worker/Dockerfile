# Use the official Node.js 22.2.0-slim image as a base
FROM --platform=linux/amd64 node:22.2.0-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN ls -la /app
RUN ls -la /app/src

ENV NODE_ENV=development
ENV TEMPORAL_ADDRESS=temporal-server:7233

# Set the environment variable for NODE_ENV
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
