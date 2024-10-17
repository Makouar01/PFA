import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User = { id: 0  , name: '', role: '', permissions: [], job: '', email: '', password: '', departement: '', enConge: false };
  showEditModal = false;
  showDeleteModal = false;
  userIdToDelete: number | null = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  selectUser(user: User) {
    this.selectedUser = { ...user };
    this.showEditModal = true;
  }

  addUser() {
    this.selectedUser = { id: 0 ,   role: '', permissions: [], name: '', job: '', email: '', password: '', departement: '', enConge: false };
    this.showEditModal = true;
  }

  updateUser() {
    if (this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(() => {
        this.fetchUsers();
        this.clearSelection();
      });
    } else {
      this.userService.addUser(this.selectedUser).subscribe(() => {
        this.fetchUsers();
        this.clearSelection();
      });
    }
  }

  confirmDeleteUser(id: number) {
    this.userIdToDelete = id;
    this.showDeleteModal = true;
  }

  deleteUser() {
    if (this.userIdToDelete !== null) {
      this.userService.deleteUser(this.userIdToDelete).subscribe(() => {
        this.fetchUsers();
        this.clearSelection();
      });
    }
  }

  clearSelection() {
    this.selectedUser = { id: 0,name: '', role: '', permissions: [], job: '', email: '', password: '', departement: '', enConge: false };
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.userIdToDelete = null;
  }
}
