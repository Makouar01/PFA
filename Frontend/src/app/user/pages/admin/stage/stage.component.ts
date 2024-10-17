import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { Stage } from '../model/stage.model';

@Component({
  selector: 'app-manage-stage',
  templateUrl: 'stage.component.html',
  styleUrls: ['stage.component.scss']
})
export class StageComponent implements OnInit {
  stages: Stage[] = [];
  selectedStage: Stage | null = null;
  showEditModal = false;
  showDeleteModal = false;

  constructor(private stageService: StageService) {}

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages(): void {
    this.stageService.getAllStages().subscribe({
      next: (data) => this.stages = data,
      error: (err) => console.error('Error loading stages:', err)
    });
  }

  selectStage(stage: Stage): void {
    this.selectedStage = { ...stage };
    this.showEditModal = true;
  }

  addStage(): void {
    this.selectedStage = {} as Stage;
    this.showEditModal = true;
  }

  updateStage(): void {
    if (this.selectedStage?.id) {
      this.stageService.updateStage(this.selectedStage.id, this.selectedStage).subscribe({
        next: () => {
          this.loadStages();
          this.clearSelection();
        },
        error: (err) => console.error('Error updating stage:', err)
      });
    } else {
      this.stageService.addStage(this.selectedStage!).subscribe({
        next: () => {
          this.loadStages();
          this.clearSelection();
        },
        error: (err) => console.error('Error adding stage:', err)
      });
    }
  }

  confirmDeleteStage(id: number): void {
    this.selectedStage = { id } as Stage;
    this.showDeleteModal = true;
  }

  deleteStage(): void {
    if (this.selectedStage?.id) {
      this.stageService.deleteStage(this.selectedStage.id).subscribe({
        next: () => {
          this.loadStages();
          this.clearSelection();
        },
        error: (err) => console.error('Error deleting stage:', err)
      });
    }
  }

  clearSelection(): void {
    this.selectedStage = null;
    this.showEditModal = false;
    this.showDeleteModal = false;
  }
}
