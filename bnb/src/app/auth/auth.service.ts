import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsVerified = false;

  constructor() { }

  login(){
    this.userIsVerified = true;
  }

  logout(){
    this.userIsVerified = false;
  }

}
