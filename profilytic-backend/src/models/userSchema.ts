import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  company: Schema.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true }
});

export const User = model<IUser>('User', userSchema);
