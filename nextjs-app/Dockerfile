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

# Ensure the .npm directory exists and has the right permissions
#RUN mkdir -p /home/node/.npm && chown -R node:node /home/node/.npm

# Set the environment variable for NODE_ENV
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Conditionally run build for production
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Expose port 3000
EXPOSE 3000

# Change the user to `node`
USER node

# Start the application
CMD ["npm", "run", "dev"]
