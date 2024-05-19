// src/clients/mongoClient.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env.development file
dotenv.config({ path: '.env.development' });

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const appName = process.env.MONGODB_APPNAME;

if (!username || !password || !cluster || !appName) {
  throw new Error('One or more MongoDB environment variables are not defined');
}

const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=${appName}`;
//console.log('MongoDB URI:', mongoURI); // Add this line for debugging

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
};

// Optionally, you can address a specific collection here, if needed.
// For example:
export const getCollection = (collectionName: string) => {
  return mongoose.connection.db.collection(collectionName);
};
