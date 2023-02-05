import { Component } from '@angular/core';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'cf-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {


  constructor(private bankService: BankServiceService) { }
  

  getSaldo(){
    this.bankService.getSaldoAtual();
  }
 
  total = this.bankService.getSaldoAtual();


  sacar(valor: string) {    
     this.total -= parseInt(valor);     
   
    }

  ngOnInit(): void { }

  }
