import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses.component';
import { AllcoursesComponent } from './pages/allcourses/allcourses.component';
import { AddCoursesComponent } from './pages/add-courses/add-courses.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatFileUploadModule} from 'angular-material-fileupload';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{MaterialFileInputModule} from 'ngx-material-file-input';
import{MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [CoursesComponent, AllcoursesComponent, AddCoursesComponent],
  exports:[
    CoursesComponent,
    AllcoursesComponent,
    AddCoursesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    CoursesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  
    MatFileUploadModule
  ]
})
export class CoursesModule { }
