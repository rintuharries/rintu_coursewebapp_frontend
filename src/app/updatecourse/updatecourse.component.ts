import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorserviceService } from '../professorservice.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
 course:any;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private router:Router,private facultyService:ProfessorserviceService) { }

  ngOnInit(): void {
    // const routeParams = this.route.snapshot.paramMap;
    // const courseIdFromRoute = routeParams.get('_id');   
   
   
    this.facultyService.getCourse()
      .subscribe(data =>{
        console.log(data)
        this.course = data;
        
      });
  }
  
  usercourse = this.fb.group(
    {
    coursetitle:['',[Validators.required]],
    description:['',[Validators.required]],
    imageUrl:['', [Validators.required]],     
    duration:['',[Validators.required]],
    coursefee:['',[Validators.required]]
    
    }
  )
  editcourse()
  {
    this.facultyService.editcourse(this.course);
    alert("Updated");
    this.router.navigate(['viewcourse']);
  }
}
