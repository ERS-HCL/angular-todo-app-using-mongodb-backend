import * as _ from 'lodash';
import { tassign } from 'tassign';

import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO, FETCH_TODO_SUCCESS } from './actions';

export interface ITodoModel {
    _id?: string;
    desc?: string;
    priority?: string,
    isCompleted?: boolean,
    lastUpdated?: string
}

export interface ITODOState {
    todos: ITodoModel[]
}

export const TODO_INITIAL_STATE = {
    todos: []
}

function addTodo(state: ITODOState, action) {
    _.reverse(state.todos);
    return tassign(state, {
        todos: _.reverse(state.todos.concat(tassign(action.todo)))
    });
}

function removeTodo(state: ITODOState, action) {
    return tassign(state, {
        todos: _.filter(state.todos, todo => todo._id !== action.todoId)
    });
}

function toggleTodo(state: ITODOState, action) {
    let todo : ITodoModel = state.todos.find(todo => todo._id == action.todo._id);
    let index = state.todos.indexOf(todo);
    return tassign(state, {
        todos: [
            ...state.todos.slice(0, index),
            Object.assign({}, todo, { isCompleted: action.todo.isCompleted, lastUpdated: action.todo.lastUpdated }),
            ...state.todos.slice(index + 1)
        ]
    });
}

function fetchTodoSuccess(state: ITODOState, action) {
    return tassign(state, {
        todos: _.reverse(action.todos)
    });
}

export function todoReducer(state: ITODOState = TODO_INITIAL_STATE, action): ITODOState  {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action);
        case REMOVE_TODO: return removeTodo(state, action);
        case TOOGLE_TODO: return toggleTodo(state, action);
        case FETCH_TODO_SUCCESS: return fetchTodoSuccess(state, action);
    }
    return state;
}