import { Component, OnInit } from '@angular/core';
import { ProfessorserviceService } from '../professorservice.service';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupteachers',
  templateUrl: './signupteachers.component.html',
  styleUrls: ['./signupteachers.component.css']
})
export class SignupteachersComponent implements OnInit {

  constructor(public fb:FormBuilder,public router:Router,public facultyservice:ProfessorserviceService) { }

  ngOnInit(): void {
  }
  register = this.fb.group(
    {
      fullname:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
      qualification:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email:['', [Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],     
     password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
     designation:['',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]]  
    }
  )
  signupusert()
  {
    this.facultyservice.newuser(this.register.value)
    .subscribe(
      res=>{
        if(res)
        {
          alert("User already Exist")        
        }     
               
      })
      alert("Registered Successfully")
      this.router.navigate(['/login']);
   
  }
}
