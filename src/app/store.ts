import { ITodo } from './todo.model';
import { ADD_TODO, REMOVE_TODO, CLEAR_ALL, TOOGLE_TODO, FETCH_TODO_SUCCESS } from './actions';
import * as _ from 'lodash';

export interface IAppState {
    todos: ITodo[]
}

export const INITIAL_STATE = {
    todos: []
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO: {
            _.reverse(state.todos);
            return Object.assign({}, state, { todos:  _.reverse(state.todos.concat(Object.assign({}, action.todo))) });
        }

        case REMOVE_TODO: {
            return Object.assign({}, state, { todos: _.filter(state.todos, todo => todo._id !== action.todoId) });
        }

        case CLEAR_ALL: {
            return Object.assign({}, state, { todos: action.todos });
        }

        case TOOGLE_TODO: {
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

        case FETCH_TODO_SUCCESS: {
            return Object.assign({}, state, { todos: _.reverse(action.todos) });
        }
    }
    return state;
}