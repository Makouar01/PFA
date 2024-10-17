import { Vehicule } from "./vehicule.model";
export interface ReparationVehicule {
    id: number;
    description: string;
    name: string;
    cout: number;
    etat: boolean;
    vehicule: Vehicule;  // Assurez-vous que l'interface Vehicule est correctement définie
  }
  