import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'tr[student-item]',
  imports: [],
  templateUrl: './student-item.html',
  
})
export class CourseItem {
  @Input() student!:Student;
}
