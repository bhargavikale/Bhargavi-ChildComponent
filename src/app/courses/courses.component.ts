import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses : {id:number,name:string,about:string,type:string,Price:string}[] =[];
  constructor(private route:Router,private coursesService:CoursesService){}
  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }


  /*courses=[{id:1,name:'Javascript',about:'In this course you will learn basics of JavaScript',type:'Free',Price:'0'},
    {id:2,name:'Typescript',about:'In this course you will learn basics of Typescript',type:'Premium',Price:'2000'},
    {id:3,name:'Python',about:'In this course you will learn basics of Python',type:'Premium',Price:'2000'},
    {id:4,name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'},
    {id:5,name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'},
    {id:6,name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'},
    {id:7,name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'},
    {id:8,name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'},
    {id:9,name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'}
  ]*/

  navigateToHome(){
    this.route.navigateByUrl('Home');
  }
}
