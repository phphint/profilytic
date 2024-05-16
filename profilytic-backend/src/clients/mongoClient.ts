// src/clients/mongoClient.ts
import mongoose from 'mongoose';
import config from '../config/configLoader';

const mongoURI = config.mongoDbUri;

if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
};
