import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './../myhttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  allCountry=[];
  constructor(private service:MyhttpService,
              private router:Router) { }

  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response)=>{
          console.log(response);
          this.allCountry=(<any>response);
      })

  }
  onSubmit(f){
    let empobj={
      username:f.value.username,
      email:f.value.email,
      password:f.value.password,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
        },
      phoneno:f.value.phoneno,
      dept:f.value.dept,
      status:f.value.status,
      createddt:Date.now(),
      createdby:sessionStorage.getItem("username"),
      updateddt:Date.now(),
      updatedby:sessionStorage.getItem("username")
    };
    this.service.addEmloyee(empobj)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/home']);
    })
  }
}
