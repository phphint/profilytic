# Use the slim variant of the Node.js 20.9.0 image
FROM node:20.9.0-slim

# Install Python and other necessary dependencies
RUN apt-get update \
    && apt-get install -y python3 python3-pip python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy Python requirements file and install dependencies
COPY ai_models/requirements.txt .
RUN python3 -m venv /venv \
    && . /venv/bin/activate \
    && pip install -r requirements.txt

# Copy Node.js package.json (and package-lock.json/yarn.lock) and install dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --production

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]
