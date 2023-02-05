
//serviço criado para conter a lógica a fim de obter o saldo atual, depositar e sacar
//as páginas account-balace, deposit e withdraw terão acesso a esse serviço por meio da injeção de dependência

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  constructor(){ }

//salário inicial do usuário definido
saldo:number=2358;

getSaldoAtual(){
  return this.saldo;
 }

 depositar(valor: string){
  this.saldo += parseInt(valor);
}

sacar(valor:string){
      this.saldo -= parseInt(valor);      
}
consultarSaldo(){
  return this.saldo ;
  
}

}

