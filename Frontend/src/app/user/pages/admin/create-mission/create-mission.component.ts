import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { Mission } from '../model/mission.model';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/user.model';
import { Vehicule } from '../model/vehicule.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.scss']
})
export class CreateMissionComponent implements OnInit {

  mission: Partial<Mission> = {  // Use Partial to allow optional properties
    title: '',
    description: '',
    dateDebut: '',
    cout: 0,
    typecout : '',
    dateFin: '',
    etat : true 
  };
  users: User[] = [];
  vehicules: Vehicule[] = [];
  selectedUserId: number | undefined;
  selectedVehiculeId: number | undefined;

  constructor(
    private missionService: MissionService, 
    private router: Router,
    public dialogRef: MatDialogRef<CreateMissionComponent> // Injecter la référence de la modale
  ) { }

  ngOnInit(): void {
    this.loadUsersAndVehicules();
  }

  loadUsersAndVehicules(): void {
    this.missionService.getUsers().subscribe(users => this.users = users);
    this.missionService.getVehicules().subscribe(vehicules => this.vehicules = vehicules);
  }

  onSubmit(): void {
    if (this.selectedUserId && this.selectedVehiculeId) {
      const missionData: Partial<Mission> = {
        ...this.mission,
        user: { id: this.selectedUserId } as User,
        vehicule: { id: this.selectedVehiculeId } as Vehicule
      };

      this.missionService.createMission(missionData, this.selectedUserId, this.selectedVehiculeId)
        .subscribe(() => {
          console.log('Mission created successfully');
          this.dialogRef.close(); // Fermer la modale après la création réussie
          this.router.navigate(['admin/manage-mission']);
        }, error => {
          console.error('Error creating mission', error);
        });
    } else {
      console.error('User or Vehicule not selected');
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);  // Fermer la modale sans succès
  }
}
