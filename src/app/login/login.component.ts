import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
//import { AuthenticationService } from '../service/authentication/authentication.service';
import { ValidationService } from '../service/validation.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;


  //injeção de dependência do serviço validationService via construtor
  constructor(private validationService: ValidationService) { }
  ngOnInit() {
  }

  //métodos para garantir q a homepage seja acessada apenas se os dados inseridos forem válidos
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if (!this.validationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
