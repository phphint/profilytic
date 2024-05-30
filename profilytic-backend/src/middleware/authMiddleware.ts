import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    console.warn('Access denied, no token provided');
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  try {
    console.log('Verifying token');
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      console.warn('User not found');
      return res.status(401).json({ message: 'User not found' });
    }
    console.log(`User authenticated: ${req.user.id}`);
    next();
  } catch (error) {
    console.error('Invalid token', error);
    res.status(400).json({ message: 'Invalid token' });
  }
};
