import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions';

export interface UsuarioState {
    error: any;
    loaded: boolean;
    loading: boolean;
    user: Usuario;
}

const estadoInicial: UsuarioState = {
    error: null,
    loaded: false,
    loading: false,
    user: null
};

export function usuarioReducer( state = estadoInicial, action: fromUsuario.usuarioAcciones ): UsuarioState {

    switch ( action.type ) {

        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {
                    ...action.usuario
                }
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
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
