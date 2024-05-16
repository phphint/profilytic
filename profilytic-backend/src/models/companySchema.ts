import { Schema, model, Document } from 'mongoose';

interface ICompany extends Document {
  name: string;
  userId: Schema.Types.ObjectId;
}

const companySchema = new Schema<ICompany>({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Company = model<ICompany>('Company', companySchema);
