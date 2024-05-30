import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema';
import { Company } from '../models/companySchema';
import { IAuthService } from '../interfaces/IAuthService';
import { getWorkflowClient } from '../clients/temporalClient';
import { v4 as uuidv4 } from 'uuid';

class AuthService implements IAuthService {
  async register(email: string, password: string, name: string, companyName: string, phone?: string, language?: string, country?: string): Promise<any> {
    console.log('Starting registration process...');
    let company = await Company.findOne({ name: companyName });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);  // Log the hashed password

    const user = new User({ email, password: hashedPassword, name, phone, language, country });

    // If the company doesn't exist, create a new one and set the userId
    if (!company) {
      company = new Company({ name: companyName, userId: user._id });
      await company.save();
    } else {
      user.company = company._id;
    }

    // Save the user with the company reference
    user.company = company._id;
    await user.save();

    console.log('User registered successfully:', user);

    try {
      const workflowClient = getWorkflowClient();
      await workflowClient.start('sendWelcomeEmailWorkflow', {
        workflowId: `welcome-email-${email}-${uuidv4()}`,
        args: [email],
        taskQueue: 'profilytic-tasks'
      });
    } catch (error) {
      console.error('Failed to start sendWelcomeEmail workflow:', error);
    }

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
    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '30d' });
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
    await workflowClient.start('sendPasswordResetEmailWorkflow', {
      workflowId: `password-reset-${email}-${uuidv4()}`,
      args: [email, resetLink],
      taskQueue: 'profilytic-tasks'
    });

    return { message: 'Password reset email sent' };
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
      const user = await User.findById(decoded.id);
      if (!user) {
        throw new Error('User not found');
      }

      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  async delegateAccess(userId: string, delegateId: string, roles: string[]): Promise<any> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.delegatedAccess.push({ userId: delegateId, roles });
    await user.save();
    return user;
  }
}

export const authService = new AuthService();
