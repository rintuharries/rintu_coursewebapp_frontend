import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
courseitem={
name:'',
email:"",
phno:"",
qualification:"",
course:"",
mode:"",
student : '',
studentID : '',
Status : ''
}

students:any;

  constructor(private router:Router,private studentservice:StudentserviceService) { }

  ngOnInit(): void {
    var id = localStorage.getItem('student');
    this.studentservice.getuser(id)
    .subscribe((data: any)=>{
      this.students=JSON.parse(JSON.stringify(data))
    }
    );

  }
  createapplication(){
    // var studentid = localStorage.getItem('student');
    // studentid = studentid == null ? '' : studentid.toString();
    
    // var firstname = localStorage.getItem('firstname'); 
    //  firstname = firstname == null ? '' : firstname.toString();
    // var lastname = localStorage.getItem('lastname'); 
    //  lastname = lastname == null ? '' : lastname.toString();
  
    //  this.courseitem.CreatedTime=new Date().toISOString();
     this.courseitem.Status='pending';
    //  this.courseitem.studentID = studentid;
    //  this.courseitem.student=firstname+' ' + lastname;

    this.studentservice.addapplication(this.courseitem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }

}
