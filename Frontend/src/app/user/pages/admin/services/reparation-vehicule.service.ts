import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReparationVehicule } from '../model/ReparationVehicule';
import { Vehicule } from '../model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class ReparationVehiculeService {
  private apiUrl = 'http://localhost:8080/reparations';

  constructor(private http: HttpClient) {}

  getAllReparations(): Observable<ReparationVehicule[]> {
    return this.http.get<ReparationVehicule[]>(`${this.apiUrl}`);
  }

  getReparationById(id: number): Observable<ReparationVehicule> {
    return this.http.get<ReparationVehicule>(`${this.apiUrl}/${id}`);
  }

  addReparation(reparation: ReparationVehicule): Observable<ReparationVehicule> {
    return this.http.post<ReparationVehicule>(`${this.apiUrl}`, reparation);
  }

  updateReparation(id: number, reparation: ReparationVehicule): Observable<ReparationVehicule> {
    return this.http.put<ReparationVehicule>(`${this.apiUrl}/${id}`, reparation);
  }

  deleteReparation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`http://localhost:8080/vehicule/all`);
  }
}
