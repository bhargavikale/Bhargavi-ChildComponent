import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  courses=[{name:'Javascript',about:'In this course you will learn basics of JavaScript',type:'Free',Price:'0'},
    {name:'Typescript',about:'In this course you will learn basics of Typescript',type:'Premium',Price:'2000'},
    {name:'Python',about:'In this course you will learn basics of Python',type:'Premium',Price:'2000'},
    {name:'ReactJS',about:'In this course you will learn basics of ReactJS',type:'Premium',Price:'2000'}
  ]

  getTotalCourses(){
    return this.courses.length;
  }
  getFreeCourses(){
    return this.courses.filter(course=>course.type==='Free').length;
  }
  getPremiumCourses(){
    return this.courses.filter(course=>course.type==='Premium').length;
  }

  courseRadioButtonChanged:string="All";
  searchText:string = '';
  onFilterRadioButtonChanged(data:string){
    this.courseRadioButtonChanged = data;
  }

  onSearchTextEntered(value:string){
    this.searchText = value;
  }

}
