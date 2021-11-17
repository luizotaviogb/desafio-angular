import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public typeAccount = 'ACCOUNT';
  public typeSituation = 'SITUATION';

  @Input('data') public data?: any = null;
  @Input('type') public type?: any = null;

  tittles: any = [
    {
      tittle: 'Conta aplicação',
      subtittle: 'Cooperativa Viacredi'
    },

    {
      tittle: "Situação Cadastral do CPF",
      subtittle: 'Consulta da Receita Federal'
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
