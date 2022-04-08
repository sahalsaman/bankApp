import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataBase: any = {
    1001: { acno: 1001, uname: "sahal", password: 1001, balance: 100000 },
    1002: { acno: 1002, uname: "mubi", password: 1002, balance: 50000 },
    1003: { acno: 1003, uname: "siyad", password: 1003, balance: 70000 }
  }

  constructor() { }
  register(uname:any,acno:any,password:any){
    
    let dataBase=this.dataBase
    if(acno in dataBase){
      //  existing user
      return false
    }else{
      // add user
      dataBase[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      return true
      // console.log("dataBase");
    }
  }

  login(acno:any,pswd:any){
    let dataBase=this.dataBase
    if(acno in dataBase){
      if(pswd == dataBase[acno]["password"]){
        return true
      }else{
        alert("invalid password")
        return false
      }
    }else{
      alert("user does not exist")
      return false
  }
}

deposit(acno:any,pswd:any,amt:any){
    let amount=parseInt(amt)
    let database=this.dataBase
    if(acno in database){
      if(pswd==database[acno]["password"]){
        database[acno]["balance"]+=amount
        return database[acno]["balance"]
      }else{
        alert("invalid password")
        return false
      }
    }else{
      alert("invalid account number")
      return false
    }
}
}