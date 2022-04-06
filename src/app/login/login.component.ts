import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect bak partner"
  accn="Enter account number"
  acno=""
  pswd=""

  dataBase:any={1001:{acno:1001,uname:"sahal",password:1001,balance:100000},
            1002:{acno:1001,uname:"sahal",password:1001,balance:100000},
            1003:{acno:1001,uname:"sahal",password:1001,balance:100000}}

  constructor(private router:Router) { }

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
   var acno=this.acno
   var pswd=this.pswd
   var dataBase=this.dataBase
   if(acno in dataBase){
     if(pswd == dataBase[acno]["password"]){
       alert("login successfull")
       this.router.navigateByUrl("home")
     }else{
       alert("invalid password")
     }
   }else{
     alert("user does not exist")
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
