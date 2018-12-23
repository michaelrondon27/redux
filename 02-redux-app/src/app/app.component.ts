import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) {

    // this.contador = 10;

    this.store.subscribe( state => {

      this.contador = state.contador;

    });

  }

  incrementar() {

    // this.contador += 1;

    const accion: Action = {
      type: 'INCREMENTAR'
    };

    this.store.dispatch( accion );

  }

  decrementar() {

    // this.contador -= 1;

    const accion: Action = {
      type: 'DECREMENTAR'
    };

    this.store.dispatch( accion );

  }

}
