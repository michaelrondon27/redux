import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import * as usuariosActions from '../actions';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions
    ) {}

    @Effect({ dispatch: false })
    cargarUsuarios$ = this.actions$.pipe(ofType( usuariosActions.CARGAR_USUARIOS ), map( action => {

        console.log(action);

        return action;

    }));

}
