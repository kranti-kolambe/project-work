import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  
  baseUrl:string="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }

  loginCheck(obj){
   return(this.http.post('http://localhost:8080/api/loginCheck',obj));
   //return this.http.post('${this.baseUrl}loginCheck',obj);
   
  }
  getAllCountry(){
    //return (this.http.get(`${this.baseUrl}getAllcountry`));
    return (this.http.get('http://localhost:8080/api/getAllCountry'));
  }
  getAllEmployee(){
    //return (this.http.get('${this.baseUrl}getAllEmployee'));
    return (this.http.get('http://localhost:8080/api/getAllEmployee'));
  }
  addEmloyee(empobj){
    return(this.http.post('http://localhost:8080/api/registerEmp',empobj,{responseType:"text"}));
  }
}