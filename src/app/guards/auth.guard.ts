import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidationService } from '../service/validation.service';

@Injectable({
  providedIn: 'root'
})

//guarda criada para permitir o acesso à homepage apenas se o login estiver correto

//classe implementa CanActivate
export class AuthGuard implements CanActivate {
  authenticationService: any;

  constructor(private validationService: ValidationService, private router: Router) {

  }

  //método que retorna true ou false para informar ao usuário se pode ou não acessar uma pa´gina
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.validationService.isAuthenticated) {
      return true;
    }
    this.router.navigate(['']);
      return false;
  }
  
}
