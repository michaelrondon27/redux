import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Modules
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        AngularFireAuthModule,
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class AuthModule {}
