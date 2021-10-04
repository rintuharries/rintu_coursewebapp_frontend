import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public fb:FormBuilder,public userService:UserserviceService,public router:Router) { }

  ngOnInit(): void {
  }
  register = this.fb.group(
    {
      firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
      lastname:['',[Validators.required, Validators.pattern('^[a-zA-Z\s]+$')]],
      email:['', [Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],     
     password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      phone:['',[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]],
      qualification:['',[Validators.required, Validators.pattern('^[a-zA-Z\s]+$')]],
    
    }
  )
  signupuser()
  {
    this.userService.newUser(this.register.value)
    .subscribe(
      res=>{
        if(res)
        {
          alert("User already Exist")        
        }     
               
      })
      this.router.navigate(['login']);
   
  }

}
