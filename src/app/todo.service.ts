import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITodo } from './todo.model';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { Router } from '@angular/router';
@Injectable()
export class TodoService {

    private URL = 'http://localhost:3000/api';
    constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>, private _router: Router) {

    }

    addTodo(todo) {
        this._http.post(this.URL + '/todos', todo).subscribe(todos => { this.ngRedux.dispatch({ type: 'ADD_TODO', todos: todos }); });
    }

    getTodos() {
        this._http.get(this.URL + '/todos').subscribe(todos => {
            console.log(todos);
            this.ngRedux.dispatch({ type: 'FETCH_TODO_SUCCESS', todos: todos });
        });
    }

    removeTodo(id) {
        this._http.delete(this.URL + '/todos/' + id).subscribe(todos => { this.ngRedux.dispatch({ type: 'REMOVE_TODO', todos: todos }); });
    }

    toggleTodo(id, isCompleted) {
        this._http.patch(this.URL + '/todos/' + id, { 'isCompleted': isCompleted }).subscribe(todos => { this.ngRedux.dispatch({ type: 'TOOGLE_TODO', todos: todos }); });
    }
}