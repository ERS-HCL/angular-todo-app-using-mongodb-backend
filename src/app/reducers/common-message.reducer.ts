import * as _ from 'lodash';
import { REMOVE_MESSAGE, SUCCESS_MESSAGE, INFO_MESSAGE } from '../actions/common-messages.actions';
import { ICommonMessageModel } from '../models/common-messages.model';

export interface ICommonMessageState {
    commonMessages: ICommonMessageModel[]
}

export const MESSAGE_INITIAL_STATE = {
    commonMessages: []
}

function showSuccessMessage(state: ICommonMessageState, action) {
    return Object.assign({}, state, { commonMessages: state.commonMessages.concat(action.payload) });
}

function showInfoMessage(state: ICommonMessageState, action) {
    return Object.assign({}, state, { commonMessages: state.commonMessages.concat(action.payload) });
}

function clearMessage(state: ICommonMessageState, action) {
    return Object.assign({}, state, { commonMessages: [] });
}

export function commonMessageReducer(state: ICommonMessageState = MESSAGE_INITIAL_STATE, action): ICommonMessageState {
    switch (action.type) {
        case SUCCESS_MESSAGE: return showSuccessMessage(state, action);
        case REMOVE_MESSAGE: return clearMessage(state, action);
        case INFO_MESSAGE: return showInfoMessage(state, action);
    }
    return state;
}