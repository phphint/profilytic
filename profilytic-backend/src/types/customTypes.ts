// src/types/customTypes.ts

import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: {
    id: string;
    // Add other fields if your JWT contains more information
  };
}
