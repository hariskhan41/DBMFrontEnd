import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses.component';
import { AddCoursesComponent } from './pages/add-courses/add-courses.component';
import { AllcoursesComponent } from './pages/allcourses/allcourses.component';


const routes: Routes = [
  { path: 'course', component: CoursesComponent, 
    children :[
      { path: 'AllCourses', component: AllcoursesComponent },
      {path:'AddCourses', component:AddCoursesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
