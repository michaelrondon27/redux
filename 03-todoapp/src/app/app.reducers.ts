import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actions';

// Models
import { Todo } from './todo/model/todo.model';

export interface AppState {
    todos: Todo[];
    filtro: fromFilterActions.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filterReducer
};
