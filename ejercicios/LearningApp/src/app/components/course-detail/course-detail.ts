import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';
import { CourseItem } from "../student-item/student-item";

@Component({
  selector: 'course-detail',
  imports: [CourseItem],
  templateUrl: './course-detail.html',
  
})
export class CourseDetail {
  @Input() course!:Course;
}
