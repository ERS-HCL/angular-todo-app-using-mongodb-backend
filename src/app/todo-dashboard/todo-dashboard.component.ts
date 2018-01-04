import { Component, OnInit } from '@angular/core';
import { ADD_TODO, CLEAR_ALL } from '../actions';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ITodo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>, private _todoService: TodoService) { }

  ngOnInit() {
  }

  model: ITodo = {
    _id: '',
    desc: '',
    priority: ''
  }

  onSubmitTodo(todo) {
    if (todo.valid) {
      // this.model = todo.value;
      // this.ngRedux.dispatch({ type: ADD_TODO, payload: { todo: this.model } });
      console.log(todo.value);
      this._todoService.addTodo(todo.value);

    }
  }

  clearAll() {
    this.ngRedux.dispatch({ type: CLEAR_ALL });
  }

}
