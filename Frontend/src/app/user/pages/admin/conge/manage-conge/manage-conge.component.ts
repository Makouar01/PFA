import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../services/conge.service';
import { Conge } from '../../model/conge.model';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-manage-conge',
  templateUrl: './manage-conge.component.html',
  styleUrls: ['./manage-conge.component.scss']
})
export class ManageCongeComponent implements OnInit {
  conges: Conge[] = [];
  users: User[] = [];
  showEditModal = false;
  showDeleteModal = false;
  selectedConge: Conge | null = null;
  congeIdToDelete: number | null = null;

  constructor(private congeService: CongeService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllConges();
    this.getUsers();
  }

  getAllConges() {
    this.congeService.getAllConges().subscribe((data: Conge[]) => {
      this.conges = data;
    }, error => {
      console.error('Error fetching congés:', error);
    });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }

  openEditModal(conge: Conge) {
    this.selectedConge = { ...conge }; // Create a copy of the conge for editing
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.selectedConge = null;
  }

  submitEditForm() {
    if (this.selectedConge) {
      this.congeService.updateConge(this.selectedConge.id, this.selectedConge).subscribe(() => {
        this.getAllConges();
        this.closeEditModal();
      }, error => {
        console.error('Error updating conge:', error);
      });
    }
  }

  openDeleteModal(congeId: number) {
    this.congeIdToDelete = congeId;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  confirmDelete() {
    if (this.congeIdToDelete !== null) {
      this.congeService.deleteConge(this.congeIdToDelete).subscribe(() => {
        this.getAllConges();
        this.closeDeleteModal();
      }, error => {
        console.error('Error deleting conge:', error);
      });
    }
  }
}
