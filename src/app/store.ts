import { combineReducers } from 'redux';
import { ITODOState, TODO_INITIAL_STATE, todoReducer } from './todo/store';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { IGlobalMessageState, GLOBAL_MESSAGE_INITIAL_STATE, globalMessageReducer } from './global-messages/store';

export interface IAppState {
    todoing: ITODOState;
    globalMessaging: IGlobalMessageState;
}

export const INITIAL_STATE: IAppState = {
    todoing: TODO_INITIAL_STATE,
    globalMessaging: GLOBAL_MESSAGE_INITIAL_STATE
}

export const combinedReducer = composeReducers(
    combineReducers({
        globalMessaging: globalMessageReducer,
        todoing: todoReducer
    }),
    defaultFormReducer()
);


