import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { data } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private course:Course=data;
  constructor(){}
  getCourse():Course{
    return this.course;
  }
}
