import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorserviceService } from '../professorservice.service';

@Component({
  selector: 'app-studentapproval',
  templateUrl: './studentapproval.component.html',
  styleUrls: ['./studentapproval.component.css']
})
export class StudentapprovalComponent implements OnInit {
  isnoteditable: boolean = true;
  courseapp:any;
  constructor(private route: ActivatedRoute, private router: Router,private facultyService:ProfessorserviceService) { }
  coursedetail={
    name:'',
    email:'',
    phno:'',
    qualification:'',
    course:'',
    mode:'',
    Status : ''
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIdFromRoute = routeParams.get('_id');
    this.facultyService.getcourse(postIdFromRoute)
      .subscribe(data => {
        this.courseapp = data;
        localStorage.setItem('postobjectid', this.courseapp._id.toString());

      });

  }
  approveStudent(){
    this.courseapp.Status='Approved';
    console.log("Admin approved status:"+this.courseapp.Status);
    console.log("Admin approved status:"+this.courseapp._id);
     
    this.facultyService.approvestudent(this.courseapp);
    
    this.router.navigate(['studentdetail']);
    console.log("course application details are" + this.courseapp.PostTitle); 
  }
  rejectStudent(){
    this.courseapp.Status='Rejected';
    this.facultyService.rejectstudent(this.courseapp);
    this.router.navigate(['studentdetail']);
    
  }
}
