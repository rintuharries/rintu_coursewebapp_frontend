import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { HomecoursesComponent } from './homecourses/homecourses.component';
import { HomefacultyComponent } from './homefaculty/homefaculty.component';
import { HomestudComponent } from './homestud/homestud.component';
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { SignupComponent } from './signup/signup.component';
import { SignupteachersComponent } from './signupteachers/signupteachers.component';
import { StudentComponent } from './student/student.component';
import { StudentapprovalComponent } from './studentapproval/studentapproval.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'homecourses',component:HomecoursesComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},
  {path: 'signupteachers', component: SignupteachersComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'student', component: StudentComponent},
  {path: 'professor', component: ProfessorComponent},
  {path:'professor/course-details',component:CourseDetailsComponent},
  {path:'professor/viewcourse',component:ViewcourseComponent},
  {path:'professor/updatecourse',component:UpdatecourseComponent},
  {path:'professor/studentdetails',component:StudentregisterComponent},
  {path:"course/:_id",component:StudentapprovalComponent},
  {path:"student/course",component:CourseComponent},
  {path: 'student/homestud', component: HomestudComponent},
  {path: 'professor/homefaculty', component: HomefacultyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
