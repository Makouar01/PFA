import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Stage } from '../model/stage.model';
// Exemple de service Angular
@Injectable({
    providedIn: 'root'
  })
  export class StageService {
    private apiUrl = 'http://localhost:8080/api/stages'; 
    
    private apiUrl1 = 'http://localhost:8080/api/missions';

  
    constructor(private http: HttpClient) {}
  
    getAllStages(): Observable<Stage[]> {
      return this.http.get<Stage[]>(`${this.apiUrl}`);
    }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl1}/users`);
    }
  
    getStageById(id: number): Observable<Stage> {
      return this.http.get<Stage>(`${this.apiUrl}/${id}`);
    }
  
    addStage(stage: Stage): Observable<Stage> {
      return this.http.post<Stage>(`${this.apiUrl}`, stage);
    }
  
    updateStage(id: number, stage: Stage): Observable<Stage> {
      return this.http.put<Stage>(`${this.apiUrl}/${id}`, stage);
    }
  
    deleteStage(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

  }
  