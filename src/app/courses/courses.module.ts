import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses.component';
import { AllcoursesComponent } from './pages/allcourses/allcourses.component';


@NgModule({
  declarations: [CoursesComponent, AllcoursesComponent],
  exports:[
    CoursesComponent,
    AllcoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
