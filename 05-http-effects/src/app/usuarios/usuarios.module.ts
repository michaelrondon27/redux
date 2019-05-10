import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
