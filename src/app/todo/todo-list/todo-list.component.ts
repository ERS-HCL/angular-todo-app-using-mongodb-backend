import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { REMOVE_TODO, TOOGLE_TODO } from '../actions';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select(s => s.todoing.todos) todos;

  constructor(private _todoService: TodoService) { }

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
