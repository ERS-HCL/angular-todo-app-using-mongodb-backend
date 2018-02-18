import * as _ from 'lodash';
import { CONFIRM, DISABLE_MODAL } from '../actions/common-modal.actions';
import { ICommonModalModel } from '../models/common-modal.model';


export interface ICommonModalState {
    modalObject: ICommonModalModel
}

export const MODAL_INITIAL_STATE: ICommonModalState = {
    modalObject: {}
}

function confirmModal(state: ICommonModalState, action) {
    return Object.assign({}, state, { modalObject: action.payload });
}

function disableModal(state: ICommonModalState, action) {
    return Object.assign({}, state, { modalObject: action.payload });
}

export function commonModalReducer(state: ICommonModalState = MODAL_INITIAL_STATE, action): ICommonModalState {
    switch (action.type) {
        case CONFIRM: return confirmModal(state, action);
        case DISABLE_MODAL: return disableModal(state, action);
    }
    return state;
}