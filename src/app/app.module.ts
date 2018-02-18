import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';

// @ngRx/store settings
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: false, position: 'right' })
  };
}

//components
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { CommonMessagesComponent } from './common-messages/common-messages.component';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { NavbarComponent } from './navbar/navbar.component';

//services
import { TodoService } from './todo/todo.service';

//Reducers
import { todoReducer } from './reducers/todo.reducer';
import { commonModalReducer } from './reducers/common-modal.reducer';
import { commonMessageReducer } from './reducers/common-message.reducer';

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
    BrowserModule,Ng4LoadingSpinnerModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        todos: todoReducer,
        commonModal: commonModalReducer,
        commonMessage: commonMessageReducer
      }
    ),
    StoreDevtoolsModule.instrument(instrumentOptions),
    StoreLogMonitorModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
