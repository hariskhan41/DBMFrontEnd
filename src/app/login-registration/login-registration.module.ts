import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatCardModule } from '@angular/material/card';

import { LoginRegistrationRoutingModule } from './login-registration-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginRegistrationComponent } from './pages/login-registration.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, LoginRegistrationComponent],
  imports: [
    CommonModule,
    LoginRegistrationRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatFileUploadModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    MatCardModule,
  ]
})
export class LoginRegistrationModule { }
