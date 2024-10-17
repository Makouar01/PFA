import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  static getUser(): any | null {
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }


  static getUserPermissions(): string[] {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedData = JSON.parse(userData);
      return parsedData.permissions || [];
    }
    return [];
  }


  static isUserLoggedIn(): boolean {
    return this.getToken() !== null && this.getUser() !== null;
  }

  static getUserId(): string {
    const user = this.getUser();
    return user ? user.id : '';
  }

  static signOut(): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
  }

  static hasToken(): boolean {
    return this.getToken() !== null;
  }
}
