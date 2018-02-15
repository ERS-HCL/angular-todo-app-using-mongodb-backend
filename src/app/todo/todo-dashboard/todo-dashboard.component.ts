import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import { ADD_TODO } from '../actions';
@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  onSubmitTodo(form) {
    if (form.valid) {
      form.value.lastUpdated = new Date();
      this._todoService.addTodo(form.value);
      form.reset();
    }
  }

}
