import mongoose from 'mongoose';
import config from '../config/configLoader';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoDbUri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};
