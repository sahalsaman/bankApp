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
    pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    acno:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })
  
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    if(this.registerForm.valid){
      this.ds.register(uname,acno,pswd).subscribe((result:any)=>{
        if (result) {
          alert(result.messege)
          this.router.navigateByUrl("")
        }
      },result=>{
        alert(result.error.messege)
      })
      
    }else{
      alert("invalid form")
    }
    
  }

}
