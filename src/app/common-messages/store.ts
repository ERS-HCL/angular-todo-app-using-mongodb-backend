import * as _ from 'lodash';
import { tassign } from 'tassign';

import { REMOVE_MESSAGE, SUCCESS_MESSAGE, INFO_MESSAGE } from './actions';

export interface ICommonMessageModal {
    info?: string;
    success?: string;
    warning?: string;
    danger?: string;
}

export interface ICommonMessageState {
    commonMessages: ICommonMessageModal[]
}

export const MESSAGE_INITIAL_STATE = {
    commonMessages: []
}

function showSuccessMessage(state: ICommonMessageState, action) {
    return tassign(state, { commonMessages: state.commonMessages.concat(action.payload) });
}

function showInfoMessage(state: ICommonMessageState, action) {
    return tassign(state, { commonMessages: state.commonMessages.concat(action.payload) });
}

function clearMessage(state: ICommonMessageState, action) {
    return tassign(state, { commonMessages: [] });
}

export function commonMessageReducer(state: ICommonMessageState = MESSAGE_INITIAL_STATE, action): ICommonMessageState {
    switch (action.type) {
        case SUCCESS_MESSAGE: return showSuccessMessage(state, action);
        case REMOVE_MESSAGE: return clearMessage(state, action);
        case INFO_MESSAGE: return showInfoMessage(state, action);
    }
    return state;
}