import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from '../model/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:8080/conge';

  constructor(private http: HttpClient) { }

  // Créer un nouveau congé
  createConge(conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(this.apiUrl, conge);
  }

  // Lire un congé par son ID
  getCongeById(id: number): Observable<Conge> {
    return this.http.get<Conge>(`${this.apiUrl}/${id}`);
  }

  // Lire tous les congés
  getAllConges(): Observable<Conge[]> {
    return this.http.get<Conge[]>(this.apiUrl);
  }

  // Mettre à jour un congé
  updateConge(id: number, conge: Conge): Observable<Conge> {
    return this.http.put<Conge>(`${this.apiUrl}/update/${id}`, conge);
  }

  // Supprimer un congé
  deleteConge(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
