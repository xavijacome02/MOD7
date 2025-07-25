import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  
})
export class CourseComponent {
  @Input() course!:Course
}
