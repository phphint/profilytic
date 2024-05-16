import { Router, Response } from 'express';
import { Company } from '../models/companySchema';
import { authMiddleware } from '../middleware/authMiddleware';
import { CustomRequest } from '../types/customTypes';

const router = Router();

// Middleware to authenticate requests
router.use(authMiddleware);

// Create a new company
router.post('/', async (req: CustomRequest, res: Response) => {
  const { name } = req.body;
  const userId = req.user?.id;

  if (!name) {
    return res.status(400).json({ message: 'Company name is required' });
  }

  try {
    const newCompany = new Company({ name, userId });
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error });
  }
});

export { router as companyController };
