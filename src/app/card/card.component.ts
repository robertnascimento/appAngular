import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos:string[] = []
  menuType:string = 'admin'

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]


  }

  ngOnInit(): void{
    
  }

  adicionar(){
    this.produtos.push('Robi');
  }

  remover(index: number){
    this.produtos.splice(index,1);
  }

}
