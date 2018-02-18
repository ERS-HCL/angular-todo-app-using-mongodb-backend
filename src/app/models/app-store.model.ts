import { ITodoModel } from './todo.model';
import { ICommonMessageModel } from './common-messages.model';
import { ICommonModalModel } from './common-modal.model';

/**
 * Application Store for state management
 */
export interface AppStore {
    todos: ITodoModel[];
    commonMessage: ICommonMessageModel[];
    commonModal: ICommonModalModel;
};
