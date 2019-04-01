import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  isLoggedIn = false;
  userAccess = [
    {user : 'admin' , password : 'admin'}
  ];
  loginUser = '';

  constructor() { }
}
