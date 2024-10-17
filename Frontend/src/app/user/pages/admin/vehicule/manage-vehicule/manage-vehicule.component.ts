import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../../services/vehicule.service';
import { Vehicule } from '../../model/vehicule.model';

@Component({
  selector: 'app-manage-vehicule',
  templateUrl: './manage-vehicule.component.html',
  styleUrls: ['./manage-vehicule.component.scss']
})
export class ManageVehiculeComponent implements OnInit {
  vehicules: Vehicule[] = [];
  selectedVehicule: Vehicule | null = null;
  showEditModal = false;
  showDeleteModal = false;

  constructor(private vehiculeService: VehiculeService) {}

  ngOnInit(): void {
    this.loadVehicules();
  }

  loadVehicules(): void {
    this.vehiculeService.getAllVehicules().subscribe({
      next: (data) => this.vehicules = data,
      error: (err) => console.error('Error loading vehicules:', err)
    });
  }

  selectVehicule(vehicule: Vehicule): void {
    this.selectedVehicule = { ...vehicule };
    this.showEditModal = true;
  }

  addVehicule(): void {
    this.selectedVehicule = {} as Vehicule;
    this.showEditModal = true;
  }

  updateVehicule(): void {
    if (this.selectedVehicule?.id) {
      this.vehiculeService.updateVehicule(this.selectedVehicule.id, this.selectedVehicule).subscribe({
        next: () => {
          this.loadVehicules();
          this.clearSelection();
        },
        error: (err) => console.error('Error updating vehicule:', err)
      });
    } else {
      this.vehiculeService.addVehicule(this.selectedVehicule!).subscribe({
        next: () => {
          this.loadVehicules();
          this.clearSelection();
        },
        error: (err) => console.error('Error adding vehicule:', err)
      });
    }
  }

  confirmDeleteVehicule(id: number): void {
    this.selectedVehicule = { id } as Vehicule;
    this.showDeleteModal = true;
  }

  deleteVehicule(): void {
    if (this.selectedVehicule?.id) {
      console.log(`Deleting vehicule with id: ${this.selectedVehicule.id}`); // Debugging line
      this.vehiculeService.deleteVehicule(this.selectedVehicule.id).subscribe({
        next: () => {
          this.loadVehicules();
          this.clearSelection();
        },
        error: (err) => console.error('Error deleting vehicule:', err)
      });
    }
  }


  clearSelection(): void {
    this.selectedVehicule = null;
    this.showEditModal = false;
    this.showDeleteModal = false;
  }
}
