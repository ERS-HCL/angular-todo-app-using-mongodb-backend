import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { ITODOState, TODO_INITIAL_STATE, todoReducer } from './todo';
import { commonModalReducer, ICommonModalState, MODAL_INITIAL_STATE } from './common-modal';
import { ICommonMessageState, MESSAGE_INITIAL_STATE, commonMessageReducer } from './common-messages';

export interface IAppState {
    todoing: ITODOState;
    commonMessaging: ICommonMessageState;
    commonModling: ICommonModalState;
}

export const INITIAL_STATE: IAppState = {
    todoing: TODO_INITIAL_STATE,
    commonMessaging: MESSAGE_INITIAL_STATE,
    commonModling: MODAL_INITIAL_STATE
}

export const combinedReducer = composeReducers(
    combineReducers({
        commonMessaging: commonMessageReducer,
        todoing: todoReducer,
        commonModling: commonModalReducer
    }),
    defaultFormReducer()
);


