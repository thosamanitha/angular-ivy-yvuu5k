import { Component, OnInit } from '@angular/core';
import {Course} from '../model/Course';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseList :Course[];
  displayPrice:boolean=false;
  constructor() {
    console.log('constructor');
    this.courseList=[
      {
        code:1,
        name:"Angular",
        desc:"Angular Course",
        price:10000,
        // displayPrice:true,
      },
      {
        code:2,
        name:"React",
        desc:"React Course",
        price:12000,
        // displayPrice:false,
      },
      {
        code:3,
        name:"J2EE",
        desc:"Java Enterprise Edition",
        price:15000,
        // displayPrice:true,
      }
    ];
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
}