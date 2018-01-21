import { REMOVE_MESSAGE, SUCCESS_MESSAGE, INFO_MESSAGE } from './actions';
import * as _ from 'lodash';

export interface IGlobalMessageState {
    globalMessages: any[]
}

export const GLOBAL_MESSAGE_INITIAL_STATE = {
    globalMessages: []
}

function showSuccessMessage(state, action) {
    return Object.assign({}, state, { globalMessages: state.globalMessages.concat(action.payload) });
}

function showInfoMessage(state, action) {
    return Object.assign({}, state, { globalMessages: state.globalMessages.concat(action.payload) });
}

function clearMessage(state, action) {
    return Object.assign({}, state, { globalMessages: [] });
}

export function globalMessageReducer(state: IGlobalMessageState = GLOBAL_MESSAGE_INITIAL_STATE, action): IGlobalMessageState {
    switch (action.type) {
        case SUCCESS_MESSAGE: return showSuccessMessage(state, action);
        case REMOVE_MESSAGE: return clearMessage(state, action);
        case INFO_MESSAGE: return showInfoMessage(state, action);
    }
    return state;
}