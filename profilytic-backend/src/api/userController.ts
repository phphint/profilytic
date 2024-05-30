import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { authService } from '../services/authService';
import { createTemporalClient, getWorkflowClient } from '../clients/temporalClient';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty().withMessage('Name is required'),
  body('company').notEmpty().withMessage('Company is required'),
  body('language').notEmpty().withMessage('Language is required'),
  body('country').notEmpty().withMessage('Country is required'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password, name, company, phone, language, country } = req.body;
      const user = await authService.register(email, password, name, company, phone, language, country);

      // Send welcome email via Temporal asynchronously
      try {
        await createTemporalClient();
        const client = getWorkflowClient();
        await client.start('sendWelcomeEmailWorkflow', {
          args: [email],
          taskQueue: 'profilytic-tasks',
          workflowId: `send-welcome-email-${uuidv4()}`,
        });
        console.log(`sendWelcomeEmailWorkflow successfully started for ${email}`);
      } catch (workflowError) {
        console.error('Failed to start sendWelcomeEmailWorkflow:', workflowError);
      }

      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }
);


router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const token = await authService.login(req.body.email, req.body.password);
      res.status(200).json({ token });
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({ message: error.message });
      } else {
        res.status(401).json({ message: 'Unknown error occurred' });
      }
    }
  }
);

router.post('/forgot-password',
  body('email').isEmail().withMessage('Please enter a valid email address'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Move the temporal client initialization out of this block
      await createTemporalClient(); // Ensure Temporal client is created once at startup
      const resetLink = await authService.forgotPassword(req.body.email);

      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }
);


router.post('/reset-password',
  body('token').notEmpty().withMessage('Token is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { token, password } = req.body;
      await authService.resetPassword(token, password);
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);


router.post('/delegate-access',
  body('userId').notEmpty().withMessage('User ID is required'),
  body('delegateId').notEmpty().withMessage('Delegate ID is required'),
  body('roles').isArray().withMessage('Roles must be an array'),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { userId, delegateId, roles } = req.body;
      const user = await authService.delegateAccess(userId, delegateId, roles);
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }
);

export { router as userController };
