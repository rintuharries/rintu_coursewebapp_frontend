import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  student={
    email:'',
    password:''
  }
  teacher={
    email:'',
    password:''
  }
  invalidLogin: boolean=false;
  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
  loginuser()
  {
    this.auth.loginUser(this.student)
    .subscribe(
      res => {
        
        if(res.token){     
          
        localStorage.setItem('token', res.token)  
      
        this.router.navigate(['/professor'])
        }
        else if(res.student){
       console.log(res.student._id)
       localStorage.setItem('student',res.student._id )
       this.router.navigate(['/student'])
        }
       
      },
      err => {
        alert("Invalid Login Credentials")
        console.log(err);
        
      }
    ) 
      }
}
