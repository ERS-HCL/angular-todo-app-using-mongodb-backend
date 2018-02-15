import { combineReducers } from '@ngrx/store';

import { ITODOState, TODO_INITIAL_STATE, todoReducer } from './todo';
import { commonModalReducer, ICommonModalState, MODAL_INITIAL_STATE } from './common-modal';
import { ICommonMessageState, MESSAGE_INITIAL_STATE, commonMessageReducer } from './common-messages';

export interface IAppState {
    todoState: ITODOState;
    commonMessageState: ICommonMessageState;
    commonModleState: ICommonModalState;
}

export const INITIAL_STATE: IAppState = {
    todoState: TODO_INITIAL_STATE,
    commonMessageState: MESSAGE_INITIAL_STATE,
    commonModleState: MODAL_INITIAL_STATE
}

export function AppReducer(state: any, action: any) {
    return {
        commonMessageState: commonMessageReducer,
        todoState: todoReducer,
        commonModleState: commonModalReducer
    }
}


