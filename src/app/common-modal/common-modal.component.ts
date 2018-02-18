import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

import { TodoService } from '../todo/todo.service';
import { AppStore } from '../models/app-store.model';
import { ICommonModalModel } from '../models/common-modal.model';
import { DISABLE_MODAL } from '../actions/common-modal.actions';

@Component({
    selector: 'app-common-modal',
    templateUrl: './common-modal.component.html',
    styleUrls: ['./common-modal.component.css']
})

export class CommonModalComponent implements OnInit {
    modalObject: ICommonModalModel;

    constructor(
        private store: Store<AppStore>,
        private _todoService: TodoService
    ) { }

    ngOnInit() {
        this.store.select('commonModal').subscribe(
            (object) => {
                this.modalObject = object;
            }
        );
    }

    removeTodo(id) {
        this._todoService.removeTodo(id);
        this.store.dispatch({ type: DISABLE_MODAL, payload: {} });
    }

    disableModal() {
        this.store.dispatch({ type: DISABLE_MODAL, payload: {} })
    }
}
