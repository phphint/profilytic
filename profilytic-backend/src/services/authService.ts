import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/userSchema';
import { Company } from '../models/companySchema';
import { IAuthService } from '../interfaces/IAuthService';
import { getWorkflowClient } from '../clients/temporalClient';
import { v4 as uuidv4 } from 'uuid';

class AuthService implements IAuthService {
  async register(email: string, password: string, fullName: string, phone: string, companyName: string, smsNumber?: string): Promise<any> {
    const existingCompany = await Company.findOne({ name: companyName });
    let company;

    if (existingCompany) {
      company = existingCompany;
    } else {
      company = new Company({ name: companyName });
      await company.save();
    }

    const user = new User({ email, password, fullName, phone, company: company._id, smsNumber });
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    const workflowClient = getWorkflowClient();
    await workflowClient.start('emailManagement.sendWelcomeEmail', {
      workflowId: `welcome-email-${email}-${uuidv4()}`,
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
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '30d' }); // Set token to expire in 30 days
    return token;
  }

  async forgotPassword(email: string): Promise<any> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    const workflowClient = getWorkflowClient();
    await workflowClient.start('emailManagement.sendPasswordResetEmail', {
      workflowId: `password-reset-${email}-${uuidv4()}`,
      args: [email, resetLink],
      taskQueue: 'profilytic-task-queue'
    });

    return { message: 'Password reset email sent' };
  }

  async delegateAccess(userId: string, delegateId: string, roles: string[]): Promise<any> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.delegatedAccess.push({ userId: new mongoose.Types.ObjectId(delegateId), roles });
    await user.save();
    
    return user;
  }

  async generateApiKey(userId: string): Promise<string> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const newApiKey = {
      key: uuidv4(), // Generate a unique API key
      createdAt: new Date(),
      status: 'active'
    };

    user.apiKeys.push(newApiKey);
    await user.save();

    return newApiKey.key;
  }

  async deactivateApiKey(userId: string, apiKey: string): Promise<void> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const apiKeyObj = user.apiKeys.find(key => key.key === apiKey);
    if (!apiKeyObj) {
      throw new Error('API key not found');
    }

    apiKeyObj.status = 'inactive';
    await user.save();
  }

  async listApiKeys(userId: string): Promise<IApiKey[]> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    return user.apiKeys;
  }
}

export const authService = new AuthService();
