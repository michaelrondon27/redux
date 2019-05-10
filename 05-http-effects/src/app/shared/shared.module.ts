import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
