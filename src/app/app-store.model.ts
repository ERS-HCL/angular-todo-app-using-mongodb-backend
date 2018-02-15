import { ITodoModel } from './todo/todo.model';
import { ICommonMessageModal } from './common-messages/common-message.model';
import { ICommonModalModel } from './common-modal/common-modal.model';

/**
 * Application Store for state management
 */
export interface AppStore {
    todos: ITodoModel[];
    commonMessage: ICommonMessageModal[];
    commonModal: ICommonModalModel;
};
