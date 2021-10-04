import { Component, OnInit } from '@angular/core';
import { ProfessorserviceService } from '../professorservice.service';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {
courseapp:any;
  constructor(private facultyService:ProfessorserviceService) { }

  ngOnInit(): void {
    this.facultyService.getCourses()
    .subscribe((data)=>{
      this.courseapp=JSON.parse(JSON.stringify(data))
      console.log(this.courseapp);
    }
    );

  }

}
