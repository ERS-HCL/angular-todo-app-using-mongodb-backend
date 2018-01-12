import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_TODO, TOOGLE_TODO, FETCH_TODO_SUCCESS } from '../actions';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>, private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.getTodos();
  }

  removeTodo(id) {
    this._todoService.removeTodo(id);
  }

  toogleTodo(id, isCompleted) {
    isCompleted = !isCompleted;
    let lastUpdated = new Date();
    this._todoService.toggleTodo(id, isCompleted, lastUpdated);
  }
}
