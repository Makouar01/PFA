import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../services/conge.service';
import { Conge } from '../../model/conge.model';
import { User } from '../../model/user.model';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.scss']
})
export class DemandeCongeComponent implements OnInit {

  conge: Partial<Conge> = {
    description: '',
    dateDebut: '',
    dateFin: '',
    etat: false
  };
  currentUser: User | null = null;

  constructor(
    private congeService: CongeService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<DemandeCongeComponent>, // Inject MatDialogRef
  ) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    this.authService.getCurrentUser().subscribe(
      user => {
        if (user) {
          this.currentUser = user;
          console.log('Utilisateur courant chargé:', this.currentUser);
        } else {
          console.error('Aucun utilisateur trouvé');
        }
      },
      error => {
        console.error('Erreur lors du chargement de l\'utilisateur courant', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.currentUser?.id) {
      console.error('ID utilisateur manquant');
      return;
    }

    const congeData: Partial<Conge> = {
      ...this.conge,
      user: { id: this.currentUser.id, name: this.currentUser.name } as User,
    };

    this.congeService.createConge(congeData as Conge)
      .subscribe(
        () => {
          console.log('Congé créé avec succès');
          this.dialogRef.close(); // Fermer la fenêtre modale
        },
        (error) => {
          console.error('Erreur lors de la création du congé', error);
          this.dialogRef.close();
        }
      );
  }

  onCancel(): void {
    this.dialogRef.close(false);  // Fermer la modale sans succès
  }
}
