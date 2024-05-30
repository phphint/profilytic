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
  const {
    title,
    description,
    companyId,
    lengthOfExperience,
    relevantExperience,
    relevantDegreeObtained,
    matchingSkills,
    relevantCertificationsAndTraining,
    leadershipRoles,
    lengthOfTenureAtPreviousJobs,
    status
  } = req.body;

  const userId = req.user?.id;

  if (!title || !description || !companyId) {
    return res.status(400).json({ message: 'Title, description, and companyId are required' });
  }

  // Validate importance levels
  const validImportanceLevels = ['Not Important', 'Somewhat Important', 'Important', 'Very Important'];
  const importanceFields = [
    lengthOfExperience,
    relevantExperience,
    relevantDegreeObtained,
    matchingSkills,
    relevantCertificationsAndTraining,
    leadershipRoles,
    lengthOfTenureAtPreviousJobs
  ];

  for (const field of importanceFields) {
    if (!validImportanceLevels.includes(field)) {
      return res.status(400).json({ message: 'Invalid importance level provided' });
    }
  }

  // Validate job status
  const validJobStatuses = ['Open', 'Under Review', 'Interviewing', 'Offer Extended', 'Closed', 'On Hold', 'Archived'];
  if (!validJobStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid job status provided' });
  }

  try {
    const company = await Company.findOne({ _id: companyId, userId });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    if (company.isArchived) {
      return res.status(400).json({ message: 'Cannot add job to an archived company' });
    }

    const newJob = new Job({
      title,
      description,
      companyId,
      lengthOfExperience,
      relevantExperience,
      relevantDegreeObtained,
      matchingSkills,
      relevantCertificationsAndTraining,
      leadershipRoles,
      lengthOfTenureAtPreviousJobs,
      status
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
});

export { router as jobController };
