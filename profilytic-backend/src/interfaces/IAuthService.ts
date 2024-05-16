export interface IAuthService {
    register(email: string, password: string, fullName: string, phone: string, company: string): Promise<any>;
    login(email: string, password: string): Promise<string>;
  }
  