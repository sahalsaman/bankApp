import { Component, OnInit } from '@angular/core';

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

  dataBase={1001:{acno:1001,uname:"sahal",password:1001,balance:100000},
            1002:{acno:1001,uname:"sahal",password:1001,balance:100000},
            1003:{acno:1001,uname:"sahal",password:1001,balance:100000}}

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    // console.log(event.target.value);
    this.acno=event.target.value
  }
  pswdChange(event:any){
    // console.log(event.target.value);
    this.pswd=event.target.value
  }

 login(){
   alert("account number"+this.acno+"\npassword"+this.pswd)
   
 }
}
