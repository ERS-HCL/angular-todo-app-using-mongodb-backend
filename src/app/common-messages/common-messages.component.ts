import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../models/app-store.model';
import { ICommonMessageModel } from '../models/common-messages.model';

@Component({
  selector: 'app-common-messages',
  templateUrl: './common-messages.component.html',
  styleUrls: ['./common-messages.component.css']
})
export class CommonMessagesComponent implements OnInit {
  private messages: ICommonMessageModel[];

  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
    this.store.select('commonMessage').subscribe(
      (message) => {
        this.messages = message;
      }
    );
  }

}
