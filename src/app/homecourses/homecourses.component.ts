import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorserviceService } from '../professorservice.service';

@Component({
  selector: 'app-homecourses',
  templateUrl: './homecourses.component.html',
  styleUrls: ['./homecourses.component.css']
})
export class HomecoursesComponent implements OnInit {
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
