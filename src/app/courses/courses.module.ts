import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses.component';
import { AllcoursesComponent } from './pages/allcourses/allcourses.component';
import { AddCoursesComponent } from './pages/add-courses/add-courses.component';
import { CourseDashboardComponent} from './pages/course-dashboard/course-dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatFileUploadModule} from 'angular-material-fileupload';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{MaterialFileInputModule} from 'ngx-material-file-input';
import{MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { OverlayModule} from '@angular/cdk/overlay';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@NgModule({
  
  declarations: [CoursesComponent, AllcoursesComponent, AddCoursesComponent, CourseDashboardComponent, AnnouncementsComponent],
  exports:[
    CoursesComponent,
    AllcoursesComponent,
    AddCoursesComponent,
    CourseDashboardComponent,
    AnnouncementsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    MatGridListModule,
    CoursesRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatFileUploadModule,
    OverlayModule
  ]
})
export class CoursesModule {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 }
