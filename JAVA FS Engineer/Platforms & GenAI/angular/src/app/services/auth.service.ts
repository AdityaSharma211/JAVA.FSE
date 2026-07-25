import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Hardcoded for demo purposes - a real app would set this from a login flow / token check.
  isLoggedIn = true;
}
