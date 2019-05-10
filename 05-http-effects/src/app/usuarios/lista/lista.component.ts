import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  error: any;

  loading: boolean;

  usuarios: Usuario[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select('usuarios').subscribe( usuarios => {

      this.error = usuarios.error;

      this.loading = usuarios.loading;

      this.usuarios = usuarios.users;

    });

    this.store.dispatch( new usuariosActions.CargarUsuarios() );

  }

}
