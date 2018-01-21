import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-global-messages',
  templateUrl: './global-messages.component.html',
  styleUrls: ['./global-messages.component.css']
})
export class GlobalMessagesComponent implements OnInit {
  @select(s => s.globalMessaging.globalMessages) globalMessages;
  
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
