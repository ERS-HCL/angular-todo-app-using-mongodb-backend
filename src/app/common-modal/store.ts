import * as _ from 'lodash';
import { tassign } from 'tassign';

import { CONFIRM, DISABLE_MODAL } from './actions';

export interface ICommonModalModel{
    messageType?: string;
    heading?: string;
    message?: string;
    removeTodoId?: string;
}

export interface ICommonModalState {
    modalObject: ICommonModalModel
}

export const MODAL_INITIAL_STATE: ICommonModalState = {
    modalObject: {}
}

function confirmModal(state: ICommonModalState, action) {
    return tassign(state, { modalObject: action.payload });
}

function disableModal(state: ICommonModalState, action) {
    return tassign(state, { modalObject: action.payload });
}

export function commonModalReducer(state: ICommonModalState = MODAL_INITIAL_STATE, action): ICommonModalState {
    switch (action.type) {
        case CONFIRM: return confirmModal(state, action);
        case DISABLE_MODAL: return disableModal(state, action);
    }
    return state;
}