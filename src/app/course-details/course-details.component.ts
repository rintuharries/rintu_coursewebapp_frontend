import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorserviceService } from '../professorservice.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
coursedetails={
  coursetitle:"",
  description:"",
  imageUrl:"",
  duration:"",
  coursefee:""
}
  constructor(private router:Router,private facultyservice:ProfessorserviceService) { }

  ngOnInit(): void {
  }
  createcourse(){
    this.facultyservice.addcourse(this.coursedetails);
    console.log("Called");    
    alert("Successfully added");
    this.router.navigate(['/professor/viewcourse']);
  }
}
