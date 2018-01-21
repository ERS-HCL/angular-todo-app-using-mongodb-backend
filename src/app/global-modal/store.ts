import { WARNING, DISABLE_MODAL } from './actions';
import * as _ from 'lodash';

export interface IGlobalModalState {
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

export function globalModalReducer(state: IGlobalModalState = MODAL_INITIAL_STATE, action): IGlobalModalState {
    switch (action.type) {
        case WARNING: return warningModal(state, action);
        case DISABLE_MODAL: return disableModal(state, action);
    }
    return state;
}