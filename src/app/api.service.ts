import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewBooks = () =>
  {
    return this.http.get("http://localhost:8008/view")
  }

  addBooks = (dataToSend:any) =>
  {
    return this.http.post("http://localhost:8008/add",dataToSend)
  }
  searchBooks = (dataToSend:any) =>
  {
    return this.http.post("http://localhost:8008/search",dataToSend)
  }
  deleteBooks = (dataToSend:any) =>
  {
    return this.http.post("http://localhost:8008/delete",dataToSend)
  }
  userLogin = (dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userLogin",dataToSend)
  }
  userSignUp = (dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userSignUp",dataToSend)
  }
}
