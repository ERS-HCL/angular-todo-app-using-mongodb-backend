import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from '../store';
import { ADD_TODO, REMOVE_TODO, FETCH_TODO_SUCCESS, TOOGLE_TODO } from './actions';
import { SUCCESS_MESSAGE, REMOVE_MESSAGE, INFO_MESSAGE } from '../common-messages';

@Injectable()
export class TodoService {

    private URL = 'https://sleepy-citadel-54178.herokuapp.com/api';

    constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) {

    }

    addTodo(todo) {
        this._http.post(this.URL + '/todos', todo)
        .map((todo) => ({ type: ADD_TODO, todo: todo }))
        .subscribe(todo => {
            this.ngRedux.dispatch(todo);
            this.ngRedux.dispatch({ type: SUCCESS_MESSAGE, payload: { success: 'Your todo added successfully.' } });
            setTimeout(() => {
                this.ngRedux.dispatch({ type: REMOVE_MESSAGE });
            }, 2000)
        });
    }

    getTodos() {
        this._http.get(this.URL + '/todos')
        .map((todos) => ({ type: FETCH_TODO_SUCCESS, todos: todos }))
        .subscribe((todos) => {
            this.ngRedux.dispatch(todos);
        });
    }

    removeTodo(id) {
        this._http.delete(this.URL + '/todos/' + id)
        .map((todoId) => ({ type: REMOVE_TODO, todoId: todoId }))
        .subscribe(todoId => {
            this.ngRedux.dispatch(todoId);
        });
    }

    toggleTodo(id, isCompleted, lastUpdated) {
        this._http.patch(this.URL + '/todos/' + id, { 'isCompleted': isCompleted, 'lastUpdated': lastUpdated })
        .map((todo) => ({ type: TOOGLE_TODO, todo: todo }))
        .subscribe(todo => {
            this.ngRedux.dispatch(todo);
            if (isCompleted) {
                this.ngRedux.dispatch({ type: INFO_MESSAGE, payload: { info: 'Todo status changed to completed.' } });
            } else {
                this.ngRedux.dispatch({ type: INFO_MESSAGE, payload: { info: 'Todo status changed to not completed.' } });
            }
            setTimeout(() => {
                this.ngRedux.dispatch({ type: REMOVE_MESSAGE });
            }, 3000)
        });
    }
}