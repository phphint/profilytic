// src/api/dashboardController.ts

import { Router, Response } from 'express';
import { Company } from '../models/companySchema';
import { Job } from '../models/jobSchema';
import { authMiddleware } from '../middleware/authMiddleware';
import { CustomRequest } from '../types/customTypes';

const router = Router();

// Middleware to authenticate requests
router.use(authMiddleware);

// Get all companies for the authenticated user
router.get('/companies', async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.id; // Use optional chaining to avoid potential undefined error
    const companies = await Company.find({ userId });

    if (companies.length === 0) {
      return res.status(200).json({ message: 'No companies found', data: [] });
    }

    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
});

// Get all jobs for a specific company
router.get('/companies/:companyId/jobs', async (req: CustomRequest, res: Response) => {
  const { companyId } = req.params;
  const userId = req.user?.id; // Use optional chaining to avoid potential undefined error

  try {
    const company = await Company.findOne({ _id: companyId, userId });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    const jobs = await Job.find({ companyId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
});

export { router as dashboardController };
