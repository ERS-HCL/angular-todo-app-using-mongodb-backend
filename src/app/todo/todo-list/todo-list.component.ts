import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

import { CONFIRM } from '../../common-modal/actions';
import { TodoService } from '../todo.service';
import { IAppState } from '../../store';
import { ITODOState, TODO_INITIAL_STATE, todoReducer } from '../store';
import { AppStore } from '../../app-store.model';
import { ITodoModel } from '../todo.model';
import { ICommonModalModel } from '../../common-modal/common-modal.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ITodoModel[];

  constructor(private store: Store<AppStore>, private _todoService: TodoService) { this._todoService.getTodos(); }

  ngOnInit() {
    this.store.select("todos").subscribe((todo) => {
      this.todos = todo;
      console.log(this.todos);
    });
  }

  removeTodo(id) {
    let confirmObject  = {
      messageType: 'confirm',
      heading: 'Confirm Modal',
      message: 'Are you sure you want to delete this todo?',
      removeTodoId: id
    }
    this.store.dispatch({ type: CONFIRM, payload: confirmObject });
  }

  toogleTodo(id, isCompleted) {
    isCompleted = !isCompleted;
    let lastUpdated = new Date();
    this._todoService.toggleTodo(id, isCompleted, lastUpdated);
  }
}
