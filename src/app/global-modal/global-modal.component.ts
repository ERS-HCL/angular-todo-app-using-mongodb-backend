import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { TodoService } from '../todo/todo.service';
import { Observable } from 'rxjs/Observable';
import { IAppState } from '../store';
import { DISABLE_MODAL } from './actions';
@Component({
    selector: 'app-global-modal',
    templateUrl: './global-modal.component.html',
    styleUrls: ['./global-modal.component.css']
})

export class GlobalModalComponent implements OnInit {
    @select(s => s.globalModling.modalObject) modalObject;

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
