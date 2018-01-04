import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { rootReducer, IAppState, INITIAL_STATE } from './store';
import { Test1Component } from './test1/test1.component';

import { TodoService } from './todo.service';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    Test1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgReduxModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
