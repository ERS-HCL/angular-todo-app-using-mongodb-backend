import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Store } from "@ngrx/store";

import { AppStore } from '../models/app-store.model';
import { ADD_TODO, REMOVE_TODO, FETCH_TODO_SUCCESS, TOOGLE_TODO } from '../actions/todo.actions';
import { SUCCESS_MESSAGE, REMOVE_MESSAGE, INFO_MESSAGE } from '../actions/common-messages.actions';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';


@Injectable()
export class TodoService {

    private URL = 'http://localhost:4000/api';

    constructor(
        private store: Store<AppStore>,
        private _http: HttpClient,
        private ng4LoadingSpinnerService: Ng4LoadingSpinnerService
    ) { }

    addTodo(todo) {
        this.ng4LoadingSpinnerService.show();
        this._http.post(this.URL + '/todos', todo)
            .map((todo) => ({ type: ADD_TODO, todo: todo }))
            .subscribe(todo => {
                this.store.dispatch(todo);
                this.store.dispatch({ type: SUCCESS_MESSAGE, payload: { success: 'Your todo added successfully.' } });
                setTimeout(() => {
                    this.store.dispatch({ type: REMOVE_MESSAGE });
                }, 2000)
                this.ng4LoadingSpinnerService.hide();
            });
    }

    getTodos() {
        this.ng4LoadingSpinnerService.show();
        this._http.get(this.URL + '/todos')
            .map((todos) => ({ type: FETCH_TODO_SUCCESS, todos: todos }))
            .subscribe((todos) => {
                this.store.dispatch(todos);
                this.ng4LoadingSpinnerService.hide();
            });
    }

    removeTodo(id) {
        this.ng4LoadingSpinnerService.show();
        this._http.delete(this.URL + '/todos/' + id)
            .map((todoId) => ({ type: REMOVE_TODO, todoId: todoId }))
            .subscribe(todoId => {
                this.store.dispatch(todoId);
                this.ng4LoadingSpinnerService.hide();
            });
    }

    toggleTodo(id, isCompleted, lastUpdated) {
        this.ng4LoadingSpinnerService.show();
        this._http.patch(this.URL + '/todos/' + id, { 'isCompleted': isCompleted, 'lastUpdated': lastUpdated })
            .map((todo) => ({ type: TOOGLE_TODO, todo: todo }))
            .subscribe(todo => {
                this.store.dispatch(todo);
                if (isCompleted) {
                    this.store.dispatch({ type: INFO_MESSAGE, payload: { info: 'Todo status changed to completed.' } });
                    this.ng4LoadingSpinnerService.hide();
                } else {
                    this.store.dispatch({ type: INFO_MESSAGE, payload: { info: 'Todo status changed to not completed.' } });
                    this.ng4LoadingSpinnerService.hide();
                }
                setTimeout(() => {
                    this.store.dispatch({ type: REMOVE_MESSAGE });
                }, 3000)
            });
    }
}