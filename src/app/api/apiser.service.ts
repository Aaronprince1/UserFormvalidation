import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

   ApiUrl = "http://localhost:3000/users"
  constructor(public http:HttpClient) { }

  postDetails(data:any){
    return this.http.post(this.ApiUrl, data, this.httpOptions)
  }
  getAllDetail(){
    return this.http.get(this.ApiUrl);
  }
  getById(id:any){
    return this.http.get(this.ApiUrl+'/'+id)
  }
  deleteById(id:any){
    return this.http.delete(this.ApiUrl+'/'+id)
  }
  updateData(id:any,data:any){
    return this.http.put(this.ApiUrl+'/'+`${id}`,data, this.httpOptions)
  }
}
