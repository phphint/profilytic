import { Router, Response } from 'express';
import { Job } from '../models/jobSchema';
import { Company } from '../models/companySchema';
import { authMiddleware } from '../middleware/authMiddleware';
import { CustomRequest } from '../types/customTypes';

const router = Router();

// Middleware to authenticate requests
router.use(authMiddleware);

// Create a new job
router.post('/', async (req: CustomRequest, res: Response) => {
  const { title, description, companyId } = req.body;
  const userId = req.user?.id;

  if (!title || !description || !companyId) {
    return res.status(400).json({ message: 'Title, description, and companyId are required' });
  }

  try {
    const company = await Company.findOne({ _id: companyId, userId });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    const newJob = new Job({ title, description, companyId });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
});

export { router as jobController };
