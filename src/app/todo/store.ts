import * as _ from 'lodash';
import { tassign } from 'tassign';

import { ADD_TODO, REMOVE_TODO, TOOGLE_TODO, FETCH_TODO_SUCCESS } from './actions';

export interface ITodoModel {
    id: string;
    desc: string;
    priority: string,
    lastUpdated?: string
}

export interface ITODOState {
    todos: ITodoModel[]
}

export const TODO_INITIAL_STATE: ITodoModel = 
{
    id: '',
    desc: '',
    priority: ''
}


function addTodo(state, action) {
    _.reverse(state.todos);
    return Object.assign({}, state, {
        todos: _.reverse(state.todos.concat(Object.assign({}, action.todo)))
    });
}

function removeTodo(state, action) {
    return Object.assign({}, state, {
        todos: _.filter(state.todos, todo => todo._id !== action.todoId)
    });
}

function toggleTodo(state, action) {
    let todo = state.todos.find(todo => todo._id == action.todo._id);
    let index = state.todos.indexOf(todo);
    return Object.assign({}, state, {
        todos: [
            ...state.todos.slice(0, index),
            Object.assign({}, todo, { isCompleted: action.todo.isCompleted, lastUpdated: action.todo.lastUpdated }),
            ...state.todos.slice(index + 1)
        ]
    });
}

function fetchTodoSuccess(state, action) {
    return Object.assign({}, state, {
        todos: _.reverse(action.todos)
    });
}

export function todoReducer(state: ITodoModel = TODO_INITIAL_STATE, action): ITodoModel {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action);
        case REMOVE_TODO: return removeTodo(state, action);
        case TOOGLE_TODO: return toggleTodo(state, action);
        case FETCH_TODO_SUCCESS: return fetchTodoSuccess(state, action);
    }
    return state;
}