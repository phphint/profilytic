import { Router, Response } from 'express';
import { Company } from '../models/companySchema';
import { Job } from '../models/jobSchema';
import { authMiddleware } from '../middleware/authMiddleware';
import { CustomRequest } from '../types/customTypes';
import mongoose from 'mongoose';

const router = Router();

// Middleware to authenticate requests
router.use(authMiddleware);

// Get dashboard data for a user
router.get('/', async (req: CustomRequest, res: Response) => {
  console.log('GET /api/dashboard called');
  const userId = req.user?.id;
  console.log(`Extracted userId: ${userId}`);

  if (!userId) {
    console.warn('No userId found in request.');
    return res.status(400).json({ message: 'User ID is missing' });
  }

  try {
    console.log(`Fetching companies for userId: ${userId}`);
    const objectIdUserId = new mongoose.Types.ObjectId(userId);
    console.log(`Converted userId to ObjectId: ${objectIdUserId}`);

    // Find companies by userId
     const companies = await Company.find({ userId: objectIdUserId, isArchived: false });
    //const companies = await Company.find({ userId: objectIdUserId });

    console.log('Query result:', companies);

    if (companies.length === 0) {
      console.warn(`No companies found for userId: ${userId}`);
      return res.status(404).json({ message: 'No companies found' });
    }

    // Debugging: Log the companies and their userId types
    companies.forEach((company) => {
      console.log(`Company: ${company.name}, userId: ${company.userId}, userId type: ${typeof company.userId}`);
    });

    const companiesWithJobs = await Promise.all(
      companies.map(async (company) => {
        const jobs = await Job.find({ companyId: company._id });
        return {
          companyId: company._id,
          name: company.name,
          roles: jobs.map((job) => ({
            roleId: job._id,
            title: job.title,
            status: job.status,
          })),
        };
      })
    );

    console.log(`Companies and jobs data found for userId: ${userId}`);
    res.status(200).json({ companies: companiesWithJobs });
  } catch (error) {
    console.error(`Error fetching dashboard data for userId: ${userId}`, error);
    res.status(500).json({ message: 'Error fetching dashboard data', error });
  }
});

export { router as dashboardController };
