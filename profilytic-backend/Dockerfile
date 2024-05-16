# Use the official Node.js 20.9.0-slim image as a base
FROM node:20.9.0-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the environment variable for NODE_ENV
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Conditionally run build for production
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
