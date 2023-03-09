import { Component } from '@angular/core';
import {CoursesService} from './services/courses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CoursesService]
})
export class AppComponent {
  title = 'courses';

  constructor(private courses:CoursesService){

  }
}
