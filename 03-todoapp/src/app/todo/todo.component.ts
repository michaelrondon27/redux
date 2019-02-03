import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// Actions
import {
  ToggleAllTodoAction
} from './todo.actions';

// Reducers
import {
  AppState
} from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  toggleAll() {

    this.completado = !this.completado;

    const accion = new ToggleAllTodoAction( this.completado );

    this.store.dispatch( accion );

  }

}
