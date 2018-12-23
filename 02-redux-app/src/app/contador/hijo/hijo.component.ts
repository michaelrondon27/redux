import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.store.select( 'contador' ).subscribe( contador => {

      this.contador = contador;

    });

  }

  multiplicar() {

    this.contador *= 2;

  }

  dividir() {

    this.contador /= 2;

  }

  resetNieto( nuevoContador ) {

    this.contador = nuevoContador;

  }

}
