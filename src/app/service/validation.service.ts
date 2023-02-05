
//arquivo q contém a lógica para ser empregada para realizar login e logout

import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { SignInData } from '../model/signInData';


//serviço pode ser injetado em toda a aplicação
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  //*****SENHA predefinida

  //para este projeto foram definidos um usário e senha, 
  //mas idealmente teríamos também uma página para o usuário se registrar
  private readonly mockUser: SignInData = new SignInData('ana', '1234');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getUser()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getUser();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}