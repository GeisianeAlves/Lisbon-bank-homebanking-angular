import { Component } from '@angular/core';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'cf-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {


  constructor(private bankService: BankServiceService) { }
  

  getSaldo(){
    this.bankService.getSaldoAtual();
  }
 
  total = this.bankService.getSaldoAtual();

  depositar(valor: string) {    
     this.total += parseInt(valor);         
  }

  ngOnInit(): void { }

  }
