import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  course;
  courseId;
  routeParamasObj;
  editMode:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,private service:CoursesService,private route:Router){}


  ngOnInit(): void {
    //this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    //console.log(this.courseId);
    //this.course = this.service.courses.find((x)=>x.id == this.courseId);
    this.routeParamasObj = this.activatedRoute.paramMap.subscribe((param)=>{
      this.courseId = param.get('id');
      this.course = this.service.courses.find((x)=>x.id == this.courseId);
    })

    this.activatedRoute.queryParamMap.subscribe((param)=>{
      this.editMode = Boolean(param.get('edit'));
    })

  }
  appendQueryparam(){
    this.route.navigate(['/Courses/Course',this.courseId],{queryParams:{edit:true}});
  }


}
