import Resume from '../models/resumeSchema';
import { IResume } from '../models/resumeSchema';

class ResumeService {
  async findResumeByHash(fileHash: string): Promise<IResume | null> {
    return await Resume.findById(fileHash).exec();
  }

  async createResume(resumeData: Partial<IResume>): Promise<IResume> {
    const resume = new Resume(resumeData);
    return await resume.save();
  }

  async updateResumeProcessingStatus(fileHash: string, status: 'processing' | 'completed' | 'failed'): Promise<IResume> {
    const resume = await Resume.findByIdAndUpdate(fileHash, { processingStatus: status }, { new: true });
    if (!resume) {
      throw new Error('Resume not found');
    }
    return resume;
  }

  async saveProcessedData(fileHash: string, textVersion: string, markdownVersion: string, htmlVersion: string, analytics: any, score: number): Promise<IResume> {
    const resume = await Resume.findByIdAndUpdate(fileHash, {
      processingStatus: 'completed',
      textVersion,
      markdownVersion,
      htmlVersion,
      analytics,
      score,
    }, { new: true });

    if (!resume) {
      throw new Error('Resume not found');
    }
    return resume;
  }
}

export const resumeService = new ResumeService();
