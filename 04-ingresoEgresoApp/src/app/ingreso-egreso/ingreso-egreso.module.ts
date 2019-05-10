import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Components
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';

// Pipes
import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';

// Modulos Personalizados
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChartsModule,
    DashboardComponent,
    DetalleComponent,
    EstadisticaComponent,
    IngresoEgresoComponent,
    OrdenIngresoEgresoPipe,
    ReactiveFormsModule,
    SharedModule
  ],
  imports: [
    CommonModule
  ]
})
export class IngresoEgresoModule { }
