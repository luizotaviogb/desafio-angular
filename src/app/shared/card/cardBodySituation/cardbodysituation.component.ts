import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardbodysituation',
  templateUrl: './cardbodysituation.component.html',
  styleUrls: ['./cardbodysituation.component.css']
})
export class CardbodysituationComponent implements OnInit {

  @Input('data') data?: any = null;


  constructor() { }

  ngOnInit(): void {
  }

}
