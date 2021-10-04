import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  newitem={

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


  constructor(private http:HttpClient) { }

newUser(user:any)
{
    return this.http.post("http://localhost:8000/signup",user)
}
getUser()
{
  return this.http.get("http://localhost:8000/users")
}
getuser(id:any)
{
  return this.http.get("http://localhost:8000/studuser/"+id)
 }
addapplication(item:any){
  return this.http.post("http://localhost:8000/applycourse",{"newitem":item})
  .subscribe (data => {console.log(data)})
}
}
