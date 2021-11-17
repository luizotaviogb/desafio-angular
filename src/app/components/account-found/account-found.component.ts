import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-found',
  templateUrl: './account-found.component.html',
  styleUrls: ['./account-found.component.css']
})
export class AccountFoundComponent implements OnInit {

  @Input("data") value?: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
