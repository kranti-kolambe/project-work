import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyhttpService } from './../myhttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empData:any[]=[];
  constructor(private router:Router,
              private service:MyhttpService) { }

  ngOnInit() {
    this.getAllEmployee();
  }
  onAddEmployee(){
    this.router.navigate(['/addEmployee']);
  }
  getAllEmployee(){
    this.service.getAllEmployee()
    .subscribe((respone)=>{
      console.log(respone);
      this.empData=(<any>respone);
    })
  }
}
