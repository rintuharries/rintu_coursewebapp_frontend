import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorserviceService } from '../professorservice.service';
@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  courses=[{
    coursetitle:'',
    description:'',
    imageUrl:'',
    duration:'',
    coursefee:''
  }]
  constructor(private router:Router,private facultyService:ProfessorserviceService) { }

  ngOnInit(): void {
    this.facultyService.getcourses().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));

  })

  }


}
