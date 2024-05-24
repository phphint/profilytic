import { Request } from 'express';
import { Document } from 'mongoose';

export interface CustomRequest extends Request {
  user?: Document; // Adjust the type as needed to match your User model
}
