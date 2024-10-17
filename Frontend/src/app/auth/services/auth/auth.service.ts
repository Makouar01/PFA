import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from 'src/app/user/pages/admin/model/user.model';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: User | null = null; // Change the type to User | null for clarity
  private jwtToken: string | null = null;

  constructor(private http: HttpClient) {
    this.userData = this.getUserDataFromStorage(); 
    this.jwtToken = this.getTokenFromStorage(); // Load JWT token from localStorage
  }

  getUserId(): number | null {
    return this.userData ? this.userData.id : null; // Return the user ID if available
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/updateUser/${id}`, userData);
  }
  

  register(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "auth/signup", signupRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + "auth/login", loginRequest).pipe(
      tap(response => {
        this.jwtToken = response.jwt; // Store JWT
        localStorage.setItem('jwtToken', this.jwtToken);
        this.fetchUserDetails(response.userId); // Fetch user details after login
      }),
      catchError(error => {
        console.error('Login failed', error);
        return of(null);
      })
    );
  }

  fetchUserDetails(id: number): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
    this.http.get<User>(`${BASIC_URL}auth/getUser/${id}`, { headers })
      .pipe(
        tap(user => {
          this.setUserData(user); // Set user data
        }),
        catchError(err => {
          console.error('Error fetching user details', err);
          return of(null);
        })
      )
      .subscribe();
  }

  getUserData(): User | null {
    return this.userData;
  }

  getUserRole(): string {
    return this.userData && this.userData.role ? this.userData.role : '';
  }

  getUserEmail(): string | null {
    return this.userData ? this.userData.email : null;
  }

  setUserData(userData: User): void {
    this.userData = userData;
    localStorage.setItem('userData', JSON.stringify(userData)); // Persist user data to localStorage
  }

  clearUserData(): void {
    this.userData = null;
    localStorage.removeItem('userData'); // Remove user data from localStorage
    localStorage.removeItem('jwtToken'); // Remove JWT token from localStorage
  }

  getCurrentUser(): Observable<User | null> {
    const id = this.getUserId();
    if (id) {
      console.log(`Fetching user with ID: ${id}`);
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
      return this.http.get<User>(`${BASIC_URL}auth/getUser/${id}`, { headers }).pipe(
        tap(user => {
          console.log('User data fetched:', user);
          this.setUserData(user); // Optionally store the fetched user data
        }),
        catchError(err => {
          console.error('Error fetching user details', err);
          return of(null); // Handle error and return null if fetching fails
        })
      );
    } else {
      console.error('No user ID found');
      return of(null);
    }
  }
  

  private getUserDataFromStorage(): User | null {
    const storedData = localStorage.getItem('userData');
    return storedData ? JSON.parse(storedData) : null;
  }

  private getTokenFromStorage(): string | null {
    return localStorage.getItem('jwtToken');
  }

  getUserPermissions(): string[] {
    return this.userData && this.userData.permissions ? this.userData.permissions : [];
  }
}
