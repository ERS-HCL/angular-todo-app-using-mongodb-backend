import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { WARNING } from '../../global-modal/actions';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select(s => s.todoing.todos) todos;

  constructor(private _todoService: TodoService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this._todoService.getTodos();
  }

  removeTodo(id) {
    let warningObject = {
      warning: true,
      heading: 'Remove todo warning',
      message: 'Are you sure you want to delete this todo?',
      id: id
    }
    this.ngRedux.dispatch({ type: WARNING, payload: warningObject });
  }

  toogleTodo(id, isCompleted) {
    isCompleted = !isCompleted;
    let lastUpdated = new Date();
    this._todoService.toggleTodo(id, isCompleted, lastUpdated);
  }
}
