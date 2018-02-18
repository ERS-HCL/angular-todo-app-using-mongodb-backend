import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { CONFIRM } from '../../actions/common-modal.actions';
import { TodoService } from '../todo.service';
import { AppStore } from '../../models/app-store.model';
import { ITodoModel } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ITodoModel[];

  constructor(
    private store: Store<AppStore>,
    private _todoService: TodoService
  ) {
    this._todoService.getTodos();
  }

  ngOnInit() {
    this.store.select("todos").subscribe(
      (todo) => {
        this.todos = todo;
      }
    );
  }

  removeTodo(id) {
    let confirmObject = {
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
