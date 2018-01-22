import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { TodoService } from '../todo';
import { IAppState } from '../store';
import { DISABLE_MODAL } from './actions';

@Component({
    selector: 'app-common-modal',
    templateUrl: './common-modal.component.html',
    styleUrls: ['./common-modal.component.css']
})

export class CommonModalComponent implements OnInit {
    @select(s => s.commonModling.modalObject) modalObject;

    data = {
        enableModal: true
    }
    constructor(private _todoService: TodoService, private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() {
    }

    removeTodo(id) {
        this._todoService.removeTodo(id);
        this.ngRedux.dispatch({ type: DISABLE_MODAL, payload: {} });
    }

    disableModal() {
        this.ngRedux.dispatch({ type: DISABLE_MODAL, payload: {} })
    }
}
