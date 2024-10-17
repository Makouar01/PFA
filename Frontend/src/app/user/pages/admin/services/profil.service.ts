import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private baseUrl = 'http://localhost:8080/user';  // Changez cette URL si nécessaire

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les informations du profil utilisateur courant
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }

  // Méthode pour obtenir tous les utilisateurs
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }
}
