import { Schema, model, Document } from 'mongoose';

interface IJob extends Document {
  title: string;
  description: string;
  companyId: Schema.Types.ObjectId;
}

const jobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true }
});

export const Job = model<IJob>('Job', jobSchema);
