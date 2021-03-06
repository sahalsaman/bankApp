import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect bank partner"
  accn="Enter account number"
  // acno=""
  // pswd=""


  loginForm=this.fb.group({
    acno:["",[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
//        Event Binding using $event
//  ==========================
//   acnoChange(event:any){
//     // console.log(event.target.value);
//     this.acno=event.target.value
//   }
//   pswdChange(event:any){
//     // console.log(event.target.value);
//     this.pswd=event.target.value
//   }

//    Event Binding using $event & two way bainding ngModel
//  ==========================

 login(){
   var acno=this.loginForm.value.acno
   var pswd=this.loginForm.value.pswd
 
   if(this.loginForm.valid){
    this.ds.login(acno,pswd).subscribe(
      (result:any)=>{
        if (result) {
          localStorage.setItem('currentAcno',JSON.stringify(result.currentacno))
          localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
          localStorage.setItem('token',JSON.stringify(result.token))
          alert(result.messege)
          this.router.navigateByUrl("home")
        }
      },result=>{
        alert(result.error.messege)
      }
    )
  
  }else{
    alert("invalid form")
  }
   }
 

//   Template Refernce variable
// =====================
// login(a:any,p:any){
//      var acno=a.value
//      var pswd=p.value
//      var dataBase=this.dataBase
//      if(acno in dataBase){
//        if(pswd == dataBase[acno]["password"]){
//          alert("login successfull")
//        }else{
//          alert("invalid password")
//        }
//      }else{
//        alert("user does not exist")
//      }
//    }
}
