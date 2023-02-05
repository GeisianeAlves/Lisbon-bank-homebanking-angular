import { Component, OnInit } from '@angular/core';
import { BankServiceService } from '../bank-service.service';


@Component({
  selector: 'account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {


 //injeção de dependência do serviço bankService via construtor
 constructor(private bankService: BankServiceService) { }

  //declaração de varáveis para obter a data atual quando a página for carregada
  date: any = null;
  day:any = null;
  month: any = null;
  year: any = null;

  
//aqui são implementados os métodos do serviço utilizado 
//que são necessários para o funcionamento da página de transações do banco
  getSaldo(){
    this.bankService.getSaldoAtual();
  }
 
  total = this.bankService.getSaldoAtual();
 

  //nessa página será possível ver o saldo atual, fazer um depósito ou sacar um valor
  depositar(val:string) {
    this.total += parseInt(val);  
  }
  sacar(valor: string) {    
     this.total -= parseInt(valor);    
    }


  ngOnInit(): void {
    this.date = new Date();
    this.day = this.date.getDate();
    this.month = Number(this.date.getMonth() + 1);
    this.year = this.date.getFullYear();
  }

 
}