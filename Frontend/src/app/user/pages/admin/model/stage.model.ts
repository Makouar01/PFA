import { User } from "./user.model";

export interface Stage {
    id: number;
    sujet: string;
    nom: string;
    description: string;
    departement: string; // Assurez-vous que le type correspond à celui de votre backend
    etat: boolean;
    encadrent : Partial<User>
  }
  