import { Schema, model, Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  description: string;
  companyId: Schema.Types.ObjectId;
  lengthOfExperience: string;
  relevantExperience: string;
  relevantDegreeObtained: string;
  matchingSkills: string;
  relevantCertificationsAndTraining: string;
  leadershipRoles: string;
  lengthOfTenureAtPreviousJobs: string;
  status: string;
}

const importanceLevels = ['Not Important', 'Somewhat Important', 'Important', 'Very Important'];
const jobStatuses = ['Open', 'Under Review', 'Interviewing', 'Offer Extended', 'Closed', 'On Hold', 'Archived'];

const jobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  lengthOfExperience: { type: String, enum: importanceLevels, required: true },
  relevantExperience: { type: String, enum: importanceLevels, required: true },
  relevantDegreeObtained: { type: String, enum: importanceLevels, required: true },
  matchingSkills: { type: String, enum: importanceLevels, required: true },
  relevantCertificationsAndTraining: { type: String, enum: importanceLevels, required: true },
  leadershipRoles: { type: String, enum: importanceLevels, required: true },
  lengthOfTenureAtPreviousJobs: { type: String, enum: importanceLevels, required: true },
  status: { type: String, enum: jobStatuses, default: 'Open', required: true },
});

export const Job = model<IJob>('Job', jobSchema);
