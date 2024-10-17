import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from './auth/services/storage/storage.service';
import { CreateMissionComponent } from './user/pages/admin/create-mission/create-mission.component';
import { DemandeMissionComponent } from './user/pages/admin/demande-mission/demande-mission.component';
import { DemandeCongeComponent } from './user/pages/admin/conge/demande-conge/demande-conge.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'APP pfa';
  isUserLoggedIn: boolean = false;
  isAdmin: boolean = false;
  permissions: string[] = [];

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.checkUserStatus();

    this.router.events.subscribe(() => {
      this.checkUserStatus();
    });
  }

  checkUserStatus(): void {
    this.isUserLoggedIn = StorageService.isUserLoggedIn();
    this.isAdmin = StorageService.getUserRole() === 'ROLE_ADMIN';
    this.permissions = StorageService.getUserPermissions();
  }

  logout() {
    StorageService.signOut();
    this.isUserLoggedIn = false;
    this.isAdmin = false;
    this.permissions = [];
    this.router.navigateByUrl('/');
  }

  hasPermission(permission: string): boolean {
    return this.isAdmin || this.permissions.includes(permission);
  }

  openCreateMissionDialog(): void {
    this.dialog.open(CreateMissionComponent, {
      width: '600px',
      height: 'auto',
    });
  }
  openDemandeMissionDialog(): void {
    this.dialog.open(DemandeMissionComponent, {
      width: '600px', // Ajustez la largeur selon vos besoins
      height: 'auto',
      disableClose: true, // Empêche la fermeture en dehors de la fenêtre modale
      panelClass: 'custom-dialog-container' // Ajoutez une classe CSS pour la personnalisation
    });
  }

  openDemandeCongeDialog(): void {
    this.dialog.open(DemandeCongeComponent, {
      width: '600px', // Ajustez la largeur selon vos besoins
      height: 'auto',
      disableClose: true, // Empêche la fermeture en dehors de la fenêtre modale
      panelClass: 'custom-dialog-container' // Ajoutez une classe CSS pour la personnalisation
    });
  }


}
