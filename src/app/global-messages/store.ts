import { IGlobalMessage } from './global-messages.model';
import { SUCCESS, INFO, WARNING } from './actions';
import * as _ from 'lodash';

export interface IGlobalMessageState {
    globalMessages: string
}

export const GLOBAL_MESSAGE_INITIAL_STATE = {
    globalMessages: ''
}

function showSuccessMessage(state, action) {
    console.log(action.payload.message);
    return Object.assign({}, state, {globalMessages: action.payload });
}

function ShowWarningMessage(state, action) {
    return Object.assign({}, state, {});
}

function showInfoMessage(state, action) {
    return Object.assign({}, state, {});
}

export function globalMessageReducer(state: IGlobalMessageState = GLOBAL_MESSAGE_INITIAL_STATE, action): IGlobalMessageState {
    switch (action.type) {
        case SUCCESS: return showSuccessMessage(state, action);
        case WARNING: return ShowWarningMessage(state, action);
        case INFO: return showInfoMessage(state, action);
    }
    return state;
}