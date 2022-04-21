import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname=""
  // acno=""
  // pswd=""

  registerForm = this.fb.group({
    uname:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pswd:["",[Validators.required,Validators.pattern('[a-zA-Z1-9 ]*')]],
    acno:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })
  
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    var result=this.ds.register(uname,acno,pswd)
    if(this.registerForm.valid){
      if (result) {
        alert("registration succefully")
        console.log(this.ds.dataBase);
        this.router.navigateByUrl("")
      }else{
        alert("existing user")
      }
    }else{
      alert("invalid form")
    }
    
  }

}
