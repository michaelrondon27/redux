import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];

  public doughnutChartData: MultiDataSet = [];

  cuantosErgesos: number;

  cuantosIngresos: number;

  egresos: number;

  ingresos: number;

  subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.subscription = this.store.select('ingresoEgreso').subscribe( ingresoEgreso => {

      this.contarIngresoEgreso( ingresoEgreso.items );

    });

  }

  contarIngresoEgreso( items: IngresoEgreso[] ) {

    this.cuantosErgesos = 0;

    this.cuantosIngresos = 0;

    this.egresos = 0;

    this.ingresos = 0;

    items.forEach( item => {

      if ( item.tipo === 'ingreso' ) {

        this.cuantosIngresos++;

        this.ingresos += item.monto;

      } else {

        this.cuantosErgesos++;

        this.egresos += item.monto;

      }

      this.doughnutChartData = [ [this.ingresos, this.egresos] ];

    });

  }

}
