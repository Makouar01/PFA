import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { Mission } from '../model/mission.model';
import { User } from '../model/user.model';
import { Vehicule } from '../model/vehicule.model';

@Component({
  selector: 'app-manage-mission',
  templateUrl: './manage-mission.component.html',
  styleUrls: ['./manage-mission.component.scss']
})
export class ManageMissionComponent implements OnInit {
  missions: Mission[] = [];
  users: User[] = [];
  vehicules: Vehicule[] = [];
  showEditModal = false;
  showDeleteModal = false;
  selectedMission: Mission | null = null;
  missionIdToDelete: number | null = null;

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.getAllMissions();
    this.getUsers();
    this.getVehicules();
  }

  getAllMissions() {
    this.missionService.getMissions().subscribe((data: Mission[]) => {
      this.missions = data;
    }, error => {
      console.error('Error fetching missions:', error);
    });
  }

  getUsers() {
    this.missionService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

  getVehicules() {
    this.missionService.getVehicules().subscribe((data: Vehicule[]) => {
      this.vehicules = data;
    }, error => {
      console.error('Error fetching vehicules:', error);
    });
  }

  openEditModal(mission: Mission) {
    this.selectedMission = { ...mission }; // Copier la mission sélectionnée
    if (!this.selectedMission.user) {
      this.selectedMission.user = this.users[0]; // Initialisation si utilisateur non sélectionné
    }
    if (!this.selectedMission.vehicule) {
      this.selectedMission.vehicule = this.vehicules[0]; // Initialisation si véhicule non sélectionné
    }
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  submitEditForm() {
    if (this.selectedMission) {
      this.missionService.updateMission(this.selectedMission.id, this.selectedMission).subscribe(() => {
        this.getAllMissions();
        this.closeEditModal();
      }, error => {
        console.error('Error updating mission:', error);
      });
    }
  }

  openDeleteModal(missionId: number) {
    this.missionIdToDelete = missionId;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  confirmDelete() {
    if (this.missionIdToDelete !== null) {
      this.missionService.deleteMission(this.missionIdToDelete).subscribe(() => {
        this.getAllMissions();
        this.closeDeleteModal();
      }, error => {
        console.error('Error deleting mission:', error);
      });
    }
  }
}
