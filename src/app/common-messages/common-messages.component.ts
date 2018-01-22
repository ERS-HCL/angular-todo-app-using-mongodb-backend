import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from '../store';

@Component({
  selector: 'app-common-messages',
  templateUrl: './common-messages.component.html',
  styleUrls: ['./common-messages.component.css']
})
export class CommonMessagesComponent implements OnInit {
  @select(s => s.commonMessageState.commonMessages) commonMessages;
  
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
