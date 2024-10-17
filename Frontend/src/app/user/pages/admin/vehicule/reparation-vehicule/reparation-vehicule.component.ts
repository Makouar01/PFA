import { Component, OnInit } from '@angular/core';
import { ReparationVehiculeService } from '../../services/reparation-vehicule.service';
import { ReparationVehicule } from '../../model/ReparationVehicule';
import { Vehicule } from '../../model/vehicule.model';

@Component({
  selector: 'app-reparation-vehicule',
  templateUrl: './reparation-vehicule.component.html',
  styleUrls: ['./reparation-vehicule.component.scss']
})
export class ReparationVehiculeComponent implements OnInit {
  reparations: ReparationVehicule[] = [];
  vehicles: Vehicule[] = [];
  selectedReparation: ReparationVehicule | null = null;
  showEditModal = false;
  showDeleteModal = false;

  constructor(private reparationService: ReparationVehiculeService) {}

  ngOnInit(): void {
    this.loadReparations();
    this.loadVehicles();
  }

  loadReparations(): void {
    this.reparationService.getAllReparations().subscribe({
      next: (data) => this.reparations = data,
      error: (err) => console.error('Error loading reparations:', err)
    });
  }

  loadVehicles(): void {
    this.reparationService.getVehicules().subscribe({
      next: (data) => this.vehicles = data,
      error: (err) => console.error('Error loading vehicles:', err)
    });
  }

  selectReparation(reparation: ReparationVehicule): void {
    this.selectedReparation = { ...reparation };
    this.showEditModal = true;
  }

  addReparation(): void {
    this.selectedReparation = {} as ReparationVehicule;
    this.showEditModal = true;
  }

  updateReparation(): void {
    if (this.selectedReparation?.id) {
      this.reparationService.updateReparation(this.selectedReparation.id, this.selectedReparation).subscribe({
        next: () => {
          this.loadReparations();
          this.clearSelection();
        },
        error: (err) => console.error('Error updating reparation:', err)
      });
    } else {
      this.reparationService.addReparation(this.selectedReparation!).subscribe({
        next: () => {
          this.loadReparations();
          this.clearSelection();
        },
        error: (err) => console.error('Error adding reparation:', err)
      });
    }
  }

  confirmDeleteReparation(id: number): void {
    this.selectedReparation = { id } as ReparationVehicule;
    this.showDeleteModal = true;
  }

  deleteReparation(): void {
    if (this.selectedReparation?.id) {
      this.reparationService.deleteReparation(this.selectedReparation.id).subscribe({
        next: () => {
          this.loadReparations();
          this.clearSelection();
        },
        error: (err) => console.error('Error deleting reparation:', err)
      });
    }
  }

  clearSelection(): void {
    this.selectedReparation = null;
    this.showEditModal = false;
    this.showDeleteModal = false;
  }
}
