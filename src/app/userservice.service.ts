import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http:HttpClient) { }
  newUser(user:any)
  {
    return this.http.post("http://localhost:8000/signup",user)
  }
  addapplication(course:any){
    return this.http.post("http://localhost:8000/applycourse",course)

  }
}
