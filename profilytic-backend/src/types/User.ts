export interface User {
    id: string;
    email: string;
    password: string;
    fullName: string;
    phone: string;
    company: string; // This will be the ObjectId reference to the company
  }
  