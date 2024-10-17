// mission.model.ts
import { User } from './user.model';
import { Vehicule } from './vehicule.model';

export interface Mission {
  id: number;
  user: Partial<User>;
  vehicule: Vehicule;
  title: string;
  cout: number;
  typecout : string ;
  description: string;
  dateDebut: string;
  dateFin: string;
  etat : boolean; 
  
}


