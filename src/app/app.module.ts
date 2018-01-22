import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';
// import { Reducer } from 'redux';
// import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo';
import { TodoListComponent } from './todo';
import { CommonMessagesComponent } from './common-messages';
import { CommonModalComponent } from './common-modal';
import { NavbarComponent } from './navbar';

import { combinedReducer, IAppState, INITIAL_STATE } from './store';

import { TodoService } from './todo';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    NavbarComponent,
    CommonMessagesComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(combinedReducer, INITIAL_STATE, [], enhancers);
  }
}
