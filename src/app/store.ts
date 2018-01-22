import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { ITODOState, TODO_INITIAL_STATE, todoReducer, ITodoModel } from './todo';
import { commonModalReducer, ICommonModalState, MODAL_INITIAL_STATE } from './common-modal';
import { ICommonMessageState, MESSAGE_INITIAL_STATE, commonMessageReducer } from './common-messages';

export interface IAppState {
    todoState: ITodoModel;
    commonMessageState: ICommonMessageState;
    commonModleState: ICommonModalState;
}

export const INITIAL_STATE: IAppState = {
    todoState: TODO_INITIAL_STATE,
    commonMessageState: MESSAGE_INITIAL_STATE,
    commonModleState: MODAL_INITIAL_STATE
}

export const combinedReducer = composeReducers(
    combineReducers({
        commonMessageState: commonMessageReducer,
        todoState: todoReducer,
        commonModleState: commonModalReducer
    }),
    defaultFormReducer()
);


