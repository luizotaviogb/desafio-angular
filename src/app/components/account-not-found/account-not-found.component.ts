import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-not-found',
  templateUrl: './account-not-found.component.html',
  styleUrls: ['./account-not-found.component.css']
})
export class AccountNotFoundComponent implements OnInit {

  @Input('error') error?: any = null;
  constructor() { }

  ngOnInit(): void {
  }

}
