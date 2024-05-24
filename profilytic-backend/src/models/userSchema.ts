import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IApiKey {
  key: string;
  createdAt: Date;
  status: 'active' | 'inactive';
}

interface IDelegatedAccess {
  userId: mongoose.Types.ObjectId;
  roles: string[];
}

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  phone?: string;
  company: mongoose.Types.ObjectId;
  smsNumber?: string;
  delegatedAccess: IDelegatedAccess[];
  apiKeys: IApiKey[];
}

// Schema definition
const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: false },
  company: { type: mongoose.Types.ObjectId, ref: 'Company', required: true },
  smsNumber: { type: String, required: false },
  delegatedAccess: [
    {
      userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
      roles: { type: [String], required: true, enum: ['Billing', 'Add', 'Edit', 'Read'] }
    }
  ],
  apiKeys: [
    {
      key: { type: String, required: true },
      createdAt: { type: Date, required: true, default: Date.now },
      status: { type: String, required: true, enum: ['active', 'inactive'], default: 'active' }
    }
  ]
}, { timestamps: true });

// Pre-save hook to hash password before saving
UserSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Interface for the User model
interface IUserModel extends Model<IUser> {
  // Define any static methods here if needed
}

// Create the User model
const User: IUserModel = mongoose.model<IUser, IUserModel>('User', UserSchema);

export default User;
