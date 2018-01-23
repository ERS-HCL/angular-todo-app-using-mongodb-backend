import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { CONFIRM } from '../../common-modal/actions';
import { ICommonModalModel } from '../../common-modal/store';
import { TodoService } from '../todo.service';
import { IAppState } from '../../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select(s => s.todoState.todos) todos;

  constructor(private _todoService: TodoService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this._todoService.getTodos();
  }

  removeTodo(id) {
    let confirmObject: ICommonModalModel = {
      messageType: 'confirm',
      heading: 'Confirm Modal',
      message: 'Are you sure you want to delete this todo?',
      removeTodoId: id
    }
    this.ngRedux.dispatch({ type: CONFIRM, payload: confirmObject });
  }

  toogleTodo(id, isCompleted) {
    isCompleted = !isCompleted;
    let lastUpdated = new Date();
    this._todoService.toggleTodo(id, isCompleted, lastUpdated);
  }
}
