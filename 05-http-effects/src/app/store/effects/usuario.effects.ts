import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

import * as usuarioActions from '../actions';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) {}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType(usuarioActions.CARGAR_USUARIO ),
        switchMap( action => {

            const id = action['id'];

            return this.usuariosService.getUserById( id )
                    .pipe(
                        map( user => new usuarioActions.CargarUsuarioSuccess( user ) ),
                        catchError( error => of(new usuarioActions.CargarUsuarioFail( error )) )
                    );

        })
    );

}
