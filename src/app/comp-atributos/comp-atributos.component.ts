import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})

export class CompAtributosComponent {
  estilo:string = 'disable'
  corFundo: String = 'purple'
  item:string = ''
  list:string [] = []
  isEnableBlock: boolean = true

  constructor(){}

  ngOnInit(): void{

  }

  adicionarList(){
    this.list.push(this.item)
  }

  desabilitar(){
    if(this.isEnableBlock == false){
      this.isEnableBlock = true
    }else{
      this.isEnableBlock = false
    }
  }

  trocar(){
    if(this.estilo == 'disable'){
      this.estilo = 'enable'
    }else{
      this.estilo = 'disable'
    }
  }
}
