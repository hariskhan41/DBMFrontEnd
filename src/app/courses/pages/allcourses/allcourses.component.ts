import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent implements OnInit {
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  constructor() { }

  ngOnInit() {
    // this.breakpoint = (window.innerWidth <= 800 ) ? 2 : 4;
    // this.breakpoint = (window.innerWidth <= 500) ? 1 : 4;
  }
  
  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 800) ? 2 : 4;
  //   // this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  // }
 
  

}
