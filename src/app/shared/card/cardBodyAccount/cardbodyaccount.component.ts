import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cardbodyaccount',
  templateUrl: './cardbodyaccount.component.html',
  styleUrls: ['./cardbodyaccount.component.css']
})

export class CardbodyaccountComponent implements OnInit {

  @Input('account') data?: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
