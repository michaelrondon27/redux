import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {

  items: IngresoEgreso[];

  subsciption: Subscription = new Subscription();

  constructor(
    private store: Store<fromIngresoEgreso.AppState>,
    public ingresoEgresoService: IngresoEgresoService
  ) { }

  ngOnInit() {

    this.subsciption = this.store.select('ingresoEgreso').subscribe( ingresoEgreso => {

      this.items = ingresoEgreso.items;

    });

  }

  ngOnDestroy() {

    this.subsciption.unsubscribe();

  }

  borrarItem( item: IngresoEgreso ) {

    this.ingresoEgresoService.borrarIngresoEgreso( item.uid ).then( () => {

      Swal.fire({
        title: 'Eliminado',
        text: item.descripcion,
        type: 'success'
      });

    });

  }

}
