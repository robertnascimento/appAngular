import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
  ){
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )  

    //recupera um parametro da rota, mas n resgata valor algum

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    ) 

    //recupera um parametro da rota e resgata os valores

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    ) 
    //resgata mais de um paramentros da rota, mas n resgata os valores
  }

  ngOnInit(): void {

    setInterval(()=>{
      this.navegador.navigate(['/'])
    },50000)
    //define um intervalo para redirecionar para outra pág 
  }
}
