import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { Mission } from '../model/mission.model';
import { User } from '../model/user.model';
import { Vehicule } from '../model/vehicule.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog'; // Importer MatDialogRef

@Component({
  selector: 'app-demande-mission',
  templateUrl: './demande-mission.component.html',
  styleUrls: ['./demande-mission.component.scss']
})
export class DemandeMissionComponent implements OnInit {

  mission: Partial<Mission> = {
    title: '',
    description: '',
    dateDebut: '',
    dateFin: ''
  };
  vehicules: Vehicule[] = [];
  selectedVehiculeId: number | undefined;
  currentUser: User | null = null;

  constructor(
    private missionService: MissionService,
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<DemandeMissionComponent>, // Injecter MatDialogRef
  ) { }

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadVehicules();
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
  
  loadVehicules(): void {
    this.missionService.getVehicules().subscribe(
      vehicules => {
        this.vehicules = vehicules;
        console.log('Véhicules chargés:', this.vehicules);
      },
      error => {
        console.error('Erreur lors du chargement des véhicules', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.currentUser?.id) {
      console.error('ID utilisateur manquant');
      return;
    }

    if (!this.selectedVehiculeId) {
      console.error('ID véhicule manquant');
      return;
    }

    const missionData: Partial<Mission> = {
      ...this.mission,
      user: { id: this.currentUser.id, name: this.currentUser.name } as User,
      vehicule: { id: this.selectedVehiculeId } as Vehicule
    };

    this.missionService.createMission(missionData, this.currentUser.id, this.selectedVehiculeId)
      .subscribe(
        () => {
          console.log('Mission créée avec succès');
          this.dialogRef.close(); // Fermer la fenêtre modale
        },
        (error) => {
          console.error('Erreur lors de la création de la mission', error);
        }
      );
  }
  onCancel(): void {
    this.dialogRef.close(false);  // Fermer la modale sans succès
  }
}
