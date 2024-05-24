import mongoose, { Schema, Document } from 'mongoose';
import crypto from 'crypto';

interface IAnalytics {
  [key: string]: any;
}

interface IResume extends Document {
  _id: string;
  user: mongoose.Types.ObjectId;
  company: mongoose.Types.ObjectId;
  job: mongoose.Types.ObjectId;
  originalFileName: string;
  processingStatus: 'pending' | 'processing' | 'completed' | 'failed';
  textVersion: string;
  markdownVersion: string;
  htmlVersion: string;
  analytics: IAnalytics;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema: Schema = new Schema({
  _id: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  company: { type: mongoose.Types.ObjectId, ref: 'Company', required: true },
  job: { type: mongoose.Types.ObjectId, ref: 'Job', required: true },
  originalFileName: { type: String, required: true },
  processingStatus: { type: String, required: true, enum: ['pending', 'processing', 'completed', 'failed'], default: 'pending' },
  textVersion: { type: String, default: '' },
  markdownVersion: { type: String, default: '' },
  htmlVersion: { type: String, default: '' },
  analytics: { type: Map, of: Schema.Types.Mixed, default: {} },
  score: { type: Number, default: 0 },
}, { timestamps: true });

ResumeSchema.statics.generateHash = function (fileBuffer: Buffer): string {
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
};

const Resume = mongoose.model<IResume>('Resume', ResumeSchema);

export default Resume;
