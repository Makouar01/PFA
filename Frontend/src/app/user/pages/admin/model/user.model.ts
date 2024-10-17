export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  departement: string; 
  enConge: boolean;
  role: string;          
  permissions: string[];
  job:string;
}
