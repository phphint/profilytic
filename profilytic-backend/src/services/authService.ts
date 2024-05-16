import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/userSchema';
import { Company } from '../models/companySchema';
import { IAuthService } from '../interfaces/IAuthService';
import { getWorkflowClient } from '../clients/temporalClient';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

class AuthService implements IAuthService {
  async register(email: string, password: string, fullName: string, phone: string, companyName: string): Promise<any> {
    const existingCompany = await Company.findOne({ name: companyName });
    let company;

    if (existingCompany) {
      company = existingCompany;
    } else {
      company = new Company({ name: companyName });
      await company.save();
    }

    const user = new User({ email, password, fullName, phone, company: company._id });
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    // Initiate Welcome Email Workflow by name
    const workflowClient = getWorkflowClient();
    await workflowClient.start('emailManagement.sendWelcomeEmail', {
      workflowId: `welcome-email-${email}-${uuidv4()}`, // Generate a unique workflowId
      args: [email],
      taskQueue: 'profilytic-task-queue'
    });

    return user;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email }).populate('company');
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return token;
  }

  async forgotPassword(email: string): Promise<any> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    // Initiate Password Reset Email Workflow by name
    const workflowClient = getWorkflowClient();
    await workflowClient.start('emailManagement.sendPasswordResetEmail', {
      workflowId: `password-reset-${email}-${uuidv4()}`, // Generate a unique workflowId
      args: [email, resetLink],
      taskQueue: 'profilytic-task-queue'
    });

    return { message: 'Password reset email sent' };
  }
}

export const authService = new AuthService();
