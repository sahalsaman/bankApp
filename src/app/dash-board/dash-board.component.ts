import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  // acno=""
  // pswd=""
  // amount=""

  // acno2=""
  // pswd2=""
  // amount2=""
  user:any

  depositForm=this.fb.group({
    acno:["",[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm=this.fb.group({
    acno2:["",[Validators.required,Validators.pattern('[0-9]*')]],
    pswd2:["",[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount2:["",[Validators.required,Validators.pattern('[0-9]*')]]
  })

  loginDate:any
  delAcno:any

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=JSON.parse(localStorage.getItem('currentUser')||"")
    this.loginDate=new Date()
   }

  ngOnInit(): void {
    // if(!localStorage.getItem("currentAcno")){
    //   alert("please login")
    //   this.router.navigateByUrl("/")
    // }
  }

  deposit(){
    let acno=this.depositForm.value.acno
    let pswd=this.depositForm.value.pswd
    let amount=this.depositForm.value.amount
   if(this.depositForm.valid){
    this.ds.deposit(acno,pswd,amount).subscribe((result:any)=>{
      if(result){
        alert(result.messege)
        // console.log(this.ds.dataBase);
      }
    },result=>{
      alert(result.error.messege)
    })
    
    }else{
      alert("invalid form")
    }
  }
  withdraw(){
    let acno=this.withdrawForm.value.acno2
    let pswd=this.withdrawForm.value.pswd2
    let amount=this.withdrawForm.value.amount2
if(this.withdrawForm.valid){
  this.ds.withdraw(acno,pswd,amount).subscribe((result:any)=>{
    if(result){
      alert(result.messege)
    }
  },result=>{
    alert(result.error.messege)
  })
    }else{
      alert("invalid form")
    }
  }

  logout(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl("")
  }

  deletefromParent(){
    this.delAcno=JSON.parse(localStorage.getItem("currentAcno")||"")
  }

  onCancel(){
    this.delAcno=""
 }

 onDelete(event:any){
  this.ds.onDelete(event).subscribe((result:any)=>{
    if(result){
      alert(result.messege)
      this.router.navigateByUrl("")
    }
  },result=>{
    alert(result.error.messege)
  })
 }
}
