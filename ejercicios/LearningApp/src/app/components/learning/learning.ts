import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../../services/course';
import { CourseComponent } from "../course/course";
import { CourseDetail } from "../course-detail/course-detail";

@Component({
  selector: 'app-learning',
  imports: [CourseComponent, CourseDetail],
  templateUrl: './learning.html',
  
})
export class Learning implements OnInit{
  course!:Course;
  constructor(private service: CourseService){}
  ngOnInit(): void {
    this.course=this.service.getCourse();
  }


}
