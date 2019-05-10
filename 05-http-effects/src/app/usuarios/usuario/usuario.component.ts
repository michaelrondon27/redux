import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Usuario } from 'src/app/models/usuario.model';

import * as usuarioActions from '../../store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  error: any;

  loading: boolean;

  user: Usuario;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.router.params.subscribe( params => {

      const id = params['id'];

      this.store.dispatch( new usuarioActions.CargarUsuario( id ) );

    });

    this.store.select('usuario').subscribe( usuario => {

      this.error = usuario.error;

      this.loading = usuario.loading;

      this.user = usuario.user;

    });

  }

}
