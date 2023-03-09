import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';

const appRoute : Routes = [
  {path:'',component:ContentComponent},
  {path:'Home',component:ContentComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Courses/Course/:id',component:CourseComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SearchComponent,
    FilterComponent,
    NavComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
