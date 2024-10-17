import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './AngularMaterialModule';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AccesRefuseComponent } from './user/pages/acces-refuse/acces-refuse.component';
import { CreateMissionComponent } from './user/pages/admin/create-mission/create-mission.component';
import { MissionService } from './user/pages/admin/services/mission.service';
import { VehiculeComponent } from './user/pages/admin/vehicule/vehicule.component';
import { ManageVehiculeComponent } from './user/pages/admin/vehicule/manage-vehicule/manage-vehicule.component';
import { ManageUserComponent } from './user/pages/admin/manage-user/manage-user.component';
import { HistoryCongeComponent } from './user/pages/admin/conge/history-conge/history-conge.component';
import { VehiculeHistoryComponent } from './user/pages/admin/vehicule/vehicule-history/vehicule-history.component';
import { ManageMissionComponent } from './user/pages/admin/manage-mission/manage-mission.component';
import { ManageCongeComponent } from './user/pages/admin/conge/manage-conge/manage-conge.component';
import { ProfilComponent } from './user/pages/profil/profil.component';
import { ReparationVehiculeComponent } from './user/pages/admin/vehicule/reparation-vehicule/reparation-vehicule.component';
import { ManageAccesComponent } from './user/pages/admin/manage-acces/manage-acces.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DemandeCongeComponent } from './user/pages/admin/conge/demande-conge/demande-conge.component';
import { DemandeMissionComponent } from './user/pages/admin/demande-mission/demande-mission.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StageComponent } from './user/pages/admin/stage/stage.component';
import { DemandeVehiculeComponent } from './user/pages/admin/vehicule/demande-vehicule/demande-vehicule.component';
import { FooterComponent } from './user/pages/footer/footer.component';
import { EditComponent } from './user/pages/admin/edit/edit.component';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    SignupComponent,
    AccesRefuseComponent,
    CreateMissionComponent,
    VehiculeComponent,
    ManageAccesComponent,
    EditComponent,
    ManageVehiculeComponent,
    ManageUserComponent,
    HistoryCongeComponent,
    VehiculeHistoryComponent,
    ManageMissionComponent,
    ManageCongeComponent,
    ProfilComponent,
    ReparationVehiculeComponent,
    DemandeCongeComponent,
    DemandeMissionComponent,
    
    StageComponent,
    DemandeVehiculeComponent,
    FooterComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [MissionService],

  bootstrap: [AppComponent]
})
export class AppModule { }
