import { Router, Request, Response } from 'express';
import { storageService } from '../services/storageService';
import { resumeService } from '../services/resumeService';
import { authService } from '../services/authService';
import { WorkflowClient } from '@temporalio/client';
import { body, validationResult } from 'express-validator';
import { Job } from '../models/jobSchema';
import { Company } from '../models/companySchema';

const router = Router();

router.post('/upload',
  authService.authenticate, // Assuming you have a middleware to authenticate the user
  body('jobId').notEmpty().withMessage('Job ID is required'),
  body('companyId').notEmpty().withMessage('Company ID is required'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = req.user; // Assuming the authenticated user is attached to the request
      const file = req.files.file; // Assuming you're using a middleware like multer or busboy for file uploads
      const { jobId, companyId } = req.body;

      if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      // Verify Job and Company exist
      const job = await Job.findById(jobId);
      const company = await Company.findById(companyId);

      if (!job || !company) {
        return res.status(400).json({ message: 'Invalid job or company ID' });
      }

      const fileBuffer = file.buffer;
      const fileHash = Resume.generateHash(fileBuffer);

      // Check if the file already exists
      const existingResume = await resumeService.findResumeByHash(fileHash);
      if (existingResume && existingResume.processingStatus === 'failed') {
        return res.status(400).json({ message: 'File already exists and processing failed' });
      }

      if (existingResume) {
        return res.status(400).json({ message: 'File already exists' });
      }

      // Upload file to Storj
      const uploadPath = `${user._id}/${fileHash}/${file.originalname}`;
      await storageService.uploadFile('your-bucket-name', uploadPath, fileBuffer);

      // Save resume entry to the database
      const resume = await resumeService.createResume({
        _id: fileHash,
        user: user._id,
        company: company._id,
        job: job._id,
        originalFileName: file.originalname,
        processingStatus: 'pending',
      });

      // Start Temporal workflow
      const client = new WorkflowClient();
      await client.start('processResumeWorkflow', {
        taskQueue: 'resume-processing',
        workflowId: `process-resume-${fileHash}`,
        args: [fileHash, uploadPath],
      });

      res.status(201).json(resume);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while processing the file' });
    }
  }
);

export { router as candidateController };
