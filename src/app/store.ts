import { ITodo } from './todo.model';
import { ADD_TODO, REMOVE_TODO, CLEAR_ALL, TOOGLE_TODO, FETCH_TODO_SUCCESS } from './actions';

export interface IAppState {
    todos: ITodo[]
    lastUpdate: Date
}

export const INITIAL_STATE = {
    todos: [],
    lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TODO: {
            return Object.assign({}, state, {todos: action.todos});
        }
            
        case REMOVE_TODO: {
            return Object.assign({}, state, {todos: action.todos});
        }
            

        case CLEAR_ALL: {
            return Object.assign({}, state, {todos: action.todos});
        }
            

        case TOOGLE_TODO: {
            return Object.assign({}, state, {todos: action.todos});
        }
            
        
        case FETCH_TODO_SUCCESS: {
            return Object.assign({}, state, {todos: action.todos});
        }
    }
    return state;
}