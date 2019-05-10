import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.actions';

import * as fromIngresoEgreso from './ingreso-egreso.reducer';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {

  cargando: boolean;

  forma: FormGroup;

  loadingSubs: Subscription = new Subscription();

  tipo = 'ingreso';

  constructor(
    public ingresoEgresoService: IngresoEgresoService,
    private store: Store<fromIngresoEgreso.AppState>
  ) { }

  ngOnInit() {

    this.loadingSubs = this.store.select('ui').subscribe( ui => this.cargando = ui.isLoading );

    this.forma = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'monto': new FormControl(0, Validators.min(0))
    });

  }

  ngOnDestroy() {

    this.loadingSubs.unsubscribe();

  }

  crearIngresoEgreso() {

    this.store.dispatch( new ActivarLoadingAction() );

    const ingresoEgreso = new IngresoEgreso({ ...this.forma.value, tipo: this.tipo });

    this.ingresoEgresoService.crearIngresoEgreso( ingresoEgreso ).then( () => {

      this.store.dispatch( new DesactivarLoadingAction() );

      Swal.fire({
        title: 'Creado',
        text: ingresoEgreso.descripcion,
        type: 'success'
      });

      this.forma.reset({ monto: 0 });

    });

  }

}
