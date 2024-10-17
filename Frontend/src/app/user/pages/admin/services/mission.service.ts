import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Vehicule } from '../model/vehicule.model';
import { Mission } from '../model/mission.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private apiUrl = 'http://localhost:8080/api/missions';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${this.apiUrl}/vehicules`);
  }z

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/all`); 
  }


  
 
  createMission(missionData: Partial<Mission>, userId: number, vehiculeId: number): Observable<Mission> {
    const validUserId = userId !== undefined ? userId.toString() : '';
    const validVehiculeId = vehiculeId !== undefined ? vehiculeId.toString() : '';
  
    if (!validUserId || !validVehiculeId) {
      console.error('Invalid userId or vehiculeId:', validUserId, validVehiculeId);
      return throwError('Invalid userId or vehiculeId');
    }
  
    return this.http.post<Mission>(`${this.apiUrl}/create?userId=${validUserId}&vehiculeId=${validVehiculeId}`, missionData).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(error);
      })
    );
  }
 
  
  





  

  updateMission(id: number, mission: Mission): Observable<Mission> {
    return this.http.put<Mission>(`http://localhost:8080/api/missions/${id}`, mission);
  }

  deleteMission(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/${id}`);
  }
}
