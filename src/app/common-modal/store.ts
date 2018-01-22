import { WARNING, DISABLE_MODAL } from './actions';
import * as _ from 'lodash';

export interface ICommonModalState {
    modalObject: any
}

export const MODAL_INITIAL_STATE = {
    modalObject: {}
}

function warningModal(state, action) {
    return Object.assign({}, state, { modalObject: action.payload });
}

function disableModal(state, action) {
    return Object.assign({}, state, { modalObject: action.payload });
}

export function commonModalReducer(state: ICommonModalState = MODAL_INITIAL_STATE, action): ICommonModalState {
    switch (action.type) {
        case WARNING: return warningModal(state, action);
        case DISABLE_MODAL: return disableModal(state, action);
    }
    return state;
}