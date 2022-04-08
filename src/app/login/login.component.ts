import { Component, OnInit } from '@angular/core';
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
  acno=""
  pswd=""


  constructor(private router:Router,private ds:DataService) { }

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

   const result = this.ds.login(acno,pswd)

   if (result) {
     this.router.navigateByUrl("home")
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
