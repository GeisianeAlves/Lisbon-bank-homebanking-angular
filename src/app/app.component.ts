import { Component } from '@angular/core';

import { ValidationService } from './service/validation.service';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-page';

  constructor(public validationService: ValidationService) { }

  logout() {
    this.validationService.logout();
  }
}
