import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "This is a Course"
  courses = ["course1","course2","course3"]
  constructor() { }

  ngOnInit() {
  }

}
