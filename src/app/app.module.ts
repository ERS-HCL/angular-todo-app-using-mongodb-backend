import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
// import { Reducer } from 'redux';
// import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { GlobalMessagesComponent } from './global-messages/global-messages.component';

import { combinedReducer, IAppState, INITIAL_STATE } from './store';

import { TodoService } from './todo/todo.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    NavbarComponent,
    GlobalMessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgReduxModule, HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(combinedReducer, INITIAL_STATE, [], enhancers);
  }
}
