import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    usuario: reducers.UsuarioState;
    usuarios: reducers.UsuariosState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuario: reducers.usuarioReducer,
    usuarios: reducers.usuariosReducer
};
