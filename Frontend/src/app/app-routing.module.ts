import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AdminComponent } from './user/pages/admin/admin.component';
import { DevComponent } from './user/pages/dev/dev.component';
import { UserComponent } from './user/pages/user/user.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AccesRefuseComponent } from './user/pages/acces-refuse/acces-refuse.component';
import { CreateMissionComponent } from './user/pages/admin/create-mission/create-mission.component';
import { VehiculeComponent } from './user/pages/admin/vehicule/vehicule.component';
import { ManageVehiculeComponent } from './user/pages/admin/vehicule/manage-vehicule/manage-vehicule.component';
import { ManageUserComponent } from './user/pages/admin/manage-user/manage-user.component';
import { HistoryCongeComponent } from './user/pages/admin/conge/history-conge/history-conge.component';
import { VehiculeHistoryComponent } from './user/pages/admin/vehicule/vehicule-history/vehicule-history.component';
import { ManageMissionComponent } from './user/pages/admin/manage-mission/manage-mission.component';
import { ManageCongeComponent } from './user/pages/admin/conge/manage-conge/manage-conge.component';
import { ProfilComponent } from './user/pages/profil/profil.component';
import { ManageAccesComponent } from './user/pages/admin/manage-acces/manage-acces.component';
import { ReparationVehiculeComponent } from './user/pages/admin/vehicule/reparation-vehicule/reparation-vehicule.component';
import { DemandeCongeComponent } from './user/pages/admin/conge/demande-conge/demande-conge.component';
import { DemandeMissionComponent } from './user/pages/admin/demande-mission/demande-mission.component';
import { DemandeVehiculeComponent } from './user/pages/admin/vehicule/demande-vehicule/demande-vehicule.component';
import { StageComponent } from './user/pages/admin/stage/stage.component';
import { EditComponent } from './user/pages/admin/edit/edit.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // redirige vers la page de démarrage
  { path: '', component: LoginComponent },
  {path:'manage-acces',component: ManageAccesComponent},
  {path:'demande-mission',component:DemandeMissionComponent},
  {path:'demande-conge',component: DemandeCongeComponent},
  {path:'demande-vehicule',component:DemandeVehiculeComponent},
  {path:'admin/manage-conge',component:ManageCongeComponent},
  {path:'reparation-vehicle',component:ReparationVehiculeComponent},
  { path: 'profil', component: ProfilComponent },
  {path:'admin/manage-mission',component:ManageMissionComponent},
  {path:'admin/vehicule-history',component:VehiculeHistoryComponent},
  {path:'admin/conge-history',component : HistoryCongeComponent},
  {path:'stage',component:StageComponent},
  {path:'admin/manage-user' , component : ManageUserComponent},
  {path: 'admin/manage-vehicule' , component:ManageVehiculeComponent},
  {path: 'admin/vehicule',component:VehiculeComponent},
  { path: 'admin/createmission', component: CreateMissionComponent },
  { path: 'user/admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: ['ROLE_ADMIN'] } },
  { path: 'user/user', component: UserComponent, canActivate: [AuthGuard], data: { role: ['ROLE_USER'] } },
  { path: 'user/dev', component: DevComponent, canActivate: [AuthGuard], data: { role: ['ROLE_DEV'] } },
  { path: 'access-denied', component: AccesRefuseComponent },
  {path:'edit/user',component:EditComponent},
  { path: 'signup', component: SignupComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
