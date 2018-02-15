import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { AppReducer, IAppState, INITIAL_STATE } from './store';
import { ITODOState, TODO_INITIAL_STATE, todoReducer } from './todo';
import { TodoService } from './todo';



import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { localStorageSync } from 'ngrx-store-localstorage';

import { commonModalReducer, ICommonModalState, MODAL_INITIAL_STATE } from './common-modal';
import { ICommonMessageState, MESSAGE_INITIAL_STATE, commonMessageReducer } from './common-messages';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: 'right' })
  };
}

const reducers = {
  todos: todoReducer,
  commonModal: commonModalReducer,
  commonMessage: commonMessageReducer
};
const appReducer = compose(
localStorageSync({keys: ['todos', 'commonModal', 'commonMessage'], rehydrate : true}), 
combineReducers)(reducers);

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
    HttpClientModule,
    StoreModule.forRoot({
      todos: todoReducer,
      commonModal: commonModalReducer,
      commonMessage: commonMessageReducer
    }),
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
