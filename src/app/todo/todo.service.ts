import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from "@ngrx/store";

import { ITODOState } from './store';
import { ADD_TODO, REMOVE_TODO, FETCH_TODO_SUCCESS, TOOGLE_TODO } from './actions';
import { SUCCESS_MESSAGE, REMOVE_MESSAGE, INFO_MESSAGE } from '../common-messages';

@Injectable()
export class TodoService {

    private URL = 'https://sleepy-citadel-54178.herokuapp.com/api';

    constructor(private store: Store<ITODOState>, private _http: HttpClient) {

    }

    addTodo(todo) {
        this._http.post(this.URL + '/todos', todo)
            .map((todo) => ({ type: ADD_TODO, todo: todo }))
            .subscribe(todo => {
                this.store.dispatch(todo);
                this.store.dispatch({ type: SUCCESS_MESSAGE, payload: { success: 'Your todo added successfully.' } });
                setTimeout(() => {
                    this.store.dispatch({ type: REMOVE_MESSAGE });
                }, 2000)
            });
    }

    getTodos() {
        this._http.get(this.URL + '/todos')
            .map((todos) => ({ type: FETCH_TODO_SUCCESS, todos: todos }))
            .subscribe((todos) => {
                this.store.dispatch(todos);
            });
    }

    removeTodo(id) {
        this._http.delete(this.URL + '/todos/' + id)
            .map((todoId) => ({ type: REMOVE_TODO, todoId: todoId }))
            .subscribe(todoId => {
                this.store.dispatch(todoId);
            });
    }

    toggleTodo(id, isCompleted, lastUpdated) {
        this._http.patch(this.URL + '/todos/' + id, { 'isCompleted': isCompleted, 'lastUpdated': lastUpdated })
            .map((todo) => ({ type: TOOGLE_TODO, todo: todo }))
            .subscribe(todo => {
                this.store.dispatch(todo);
                if (isCompleted) {
                    this.store.dispatch({ type: INFO_MESSAGE, payload: { info: 'Todo status changed to completed.' } });
                } else {
                    this.store.dispatch({ type: INFO_MESSAGE, payload: { info: 'Todo status changed to not completed.' } });
                }
                setTimeout(() => {
                    this.store.dispatch({ type: REMOVE_MESSAGE });
                }, 3000)
            });
    }
}