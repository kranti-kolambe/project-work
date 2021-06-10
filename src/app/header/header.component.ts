import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:string='';
  constructor(private Routes:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("username");
  }
  onLogout(){
    sessionStorage.removeItem("username");
    sessionStorage.clear();
    this.Routes.navigate(["/login"]);

  }

}
