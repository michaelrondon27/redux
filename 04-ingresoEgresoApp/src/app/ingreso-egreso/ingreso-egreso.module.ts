import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';

// Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';

// Pipes
import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';

// Modulos Personalizados
import { SharedModule } from '../shared/shared.module';
import { DashboardRountingModule } from '../dashboard/dashboard-rounting.module';

// Reducers
import { ingresoEgresoReducer } from './ingreso-egreso.reducer';

@NgModule({
  declarations: [
    DashboardComponent,
    DetalleComponent,
    EstadisticaComponent,
    IngresoEgresoComponent,
    OrdenIngresoEgresoPipe,
  ],
  imports: [
    ChartsModule,
    CommonModule,
    DashboardRountingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('ingresoEgreso', ingresoEgresoReducer)
  ]
})
export class IngresoEgresoModule { }
