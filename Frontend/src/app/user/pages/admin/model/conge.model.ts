export interface Conge {
  id?: number;  // Make 'id' optional
  description: string;
  dateDebut: string;
  dateFin: string;
  etat: boolean;
  user: {
    id: number;
    name: string;
  };
}
