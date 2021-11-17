import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardtittle',
  templateUrl: './cardtittle.component.html',
  styleUrls: ['./cardtittle.component.css']
})
export class CardtittleComponent implements OnInit {

  @Input('tittle') public data?: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
