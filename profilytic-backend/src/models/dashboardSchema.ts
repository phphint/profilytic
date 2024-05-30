// models/dashboardSchema.ts
import { Schema, model, Document } from 'mongoose';

interface IDashboard extends Document {
  userId: Schema.Types.ObjectId;
  companies: Array<{
    companyId: Schema.Types.ObjectId;
    name: string;
    roles: Array<{
      roleId: Schema.Types.ObjectId;
      title: string;
      status: string;
    }>;
  }>;
}

const roleSchema = new Schema({
  roleId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  title: { type: String, required: true },
  status: { type: String, required: true }
});

const companySchema = new Schema({
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  name: { type: String, required: true },
  roles: [roleSchema]
});

const dashboardSchema = new Schema<IDashboard>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  companies: [companySchema]
}, { timestamps: true });

export const Dashboard = model<IDashboard>('Dashboard', dashboardSchema);
