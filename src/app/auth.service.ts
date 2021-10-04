import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }
//   loginUser(teacher:any){
// return this.http.post<any>("http://localhost:8000/login",teacher)
//   }
  loginUser(student:any){
    return this.http.post<any>("http://localhost:8000/loginstud",student)
      }
}
