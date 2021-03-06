import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
    error: any;
    loaded: boolean;
    loading: boolean;
    users: Usuario[];
}

const estadoInicial: UsuariosState = {
    error: null,
    loaded: false,
    loading: false,
    users: []
};

export function usuariosReducer( state = estadoInicial, action: fromUsuarios.usuariosAcciones ): UsuariosState {

    switch ( action.type ) {

        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [ ...action.usuarios ]
            };

        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    message: action.payload.message,
                    status: action.payload.status,
                    url: action.payload.url
                }
            };

        default:
            return state;

    }

}
