import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { SignupteachersComponent } from './signupteachers/signupteachers.component';
import { StudentapprovalComponent } from './studentapproval/studentapproval.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { HomecoursesComponent } from './homecourses/homecourses.component';
import { BlogComponent } from './blog/blog.component';
import { HomestudComponent } from './homestud/homestud.component';
import { HomefacultyComponent } from './homefaculty/homefaculty.component';






@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProfessorComponent,
    CourseDetailsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CourseComponent,
    SignupteachersComponent,
    StudentapprovalComponent,
    ViewcourseComponent,
    UpdatecourseComponent,
    StudentregisterComponent,
    HomecoursesComponent,
    BlogComponent,
    HomestudComponent,
    HomefacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
