import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-manage-acces',
  templateUrl: './manage-acces.component.html',
  styleUrls: ['./manage-acces.component.scss']
})
export class ManageAccesComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'job', 'departement', 'permissions'];

  permissionsList: string[] = ['Conge', 'Mission', 'Vehicules', 'Users'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  updatePermissions(user: User): void {
    this.userService.updateUser(user.id, user).subscribe(updatedUser => {
      // Optionally handle success or update UI
    });
  }

  togglePermission(user: User, permission: string): void {
    if (user.permissions.includes(permission)) {
      user.permissions = user.permissions.filter(p => p !== permission);
    } else {
      user.permissions.push(permission);
    }
    this.updatePermissions(user);
  }
}
