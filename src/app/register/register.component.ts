import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd
    var result=this.ds.register(uname,acno,pswd)
    if (result) {
      alert("registration succefully")
      console.log(this.ds.dataBase);
      this.router.navigateByUrl("")
    }else{
      alert("existing user")
    }
  }

}
