import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentacno:any

  dataBase: any = {
    1001: { acno: 1001, uname: "sahal", password: 1001, balance: 10000,transaction:[] },
    1002: { acno: 1002, uname: "mubi", password: 1002, balance: 5000,transaction:[] },
    1003: { acno: 1003, uname: "siyad", password: 1003, balance: 7000,transaction:[] }
  }

  constructor() {
    this.getDetails()
   }
  
  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.dataBase))
    if(this.currentacno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentacno))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
    if(localStorage.getItem("database")){
      this.dataBase =JSON.parse (localStorage.getItem("database")||"")
    }
    if(localStorage.getItem("currentAcno")){
      this.currentacno =JSON.parse (localStorage.getItem("currentAcno")||"")
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser =JSON.parse (localStorage.getItem("currentUser")||"")
    }
    
  }
    
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
        balance:0,
        transaction:[]
      }
      this.saveDetails()
      return true
      // console.log("dataBase");
    }
  }

  login(acno:any,pswd:any){
    let dataBase=this.dataBase
    if(acno in dataBase){
      if(pswd == dataBase[acno]["password"]){
        this.currentUser=dataBase[acno]["uname"]
        this.currentacno=acno
        this.saveDetails()
        
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
        database[acno]["transaction"].push({
          type:"CREDIT",
          amount:amount
        })
        this.saveDetails()
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

withdraw(acno:any,pswd:any,amt:any){
  let amount=parseInt(amt)
  let database=this.dataBase

  if(acno in database){
    if(pswd==database[acno]["password"]){
      if(amount<=database[acno]["balance"]){
        database[acno]["balance"]-=amount
        database[acno]["transaction"].push({
          type:"DEBIT",
          amount:amount
        })
        this.saveDetails()
        return database[acno]["balance"]
      }else{
         alert("insuffisient balance")
         return false
      }
    }else{
      alert("invalid password")
      return false
    }
  }else{
    alert("invalid account number")
    return false
  }

  }

  transaction(acno:any){
     return this.dataBase[acno].transaction
  }

  
}

