import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorserviceService {
  item={
    _id :'',
    email:'',
    phno:'',
    qualification:'',
    course:'',
    mode:'',
    Status : '',
    student : '',
    studentID : ''
  }

  courseitem={
    coursetitle:"",
    description:"",
    imageUrl:"",
    duration:"",
    coursefee:""
  }

  constructor(private http:HttpClient) { }
  getcourses(){
    return this.http.get("http://localhost:8000/courses/");
  }
  getCourse(){
    return this.http.get("http://localhost:8000/courses/");
  }
  
  addcourse(courseitem:any){
    return this.http.post("http://localhost:8000/addcourse",courseitem)
    .subscribe(data=>{console.log(data)})
    }

    getcourse(id:any){
      return this.http.get("http://localhost:8000/courseapp/"+id);
    }

    newuser(user:any)
    {
      return this.http.post("http://localhost:8000/signupprof",user)
      console.log(user);
        }
  getUser()
  {
    return this.http.get("http://localhost:8000/profs")
  }
  getuser(id:any)
  {
    return this.http.get("http://localhost:8000/prof/"+id)
   }
   editcourse(course:any)
   {
     
     return this.http.put("http://localhost:8000/editcourse",course)
     .subscribe(data =>{console.log(data)})
   }
   getCourses(){
    return this.http.get("http://localhost:8000/coursesapp")
   }
approvestudent(item:any){
  console.log("Approved data:"+item)
    return this.http.post("http://localhost:8000/approvecourse",item)
    .subscribe (data => {console.log(data)});
} 
rejectstudent(item:any){
  console.log("Rejected data:"+item)
  return this.http.post("http://localhost:8000/rejectcourse",item)
  .subscribe (data => {console.log(data)});
}
}
