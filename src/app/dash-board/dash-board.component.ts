import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno2=""
  pswd2=""
  amount2=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    let acno=this.acno
    let pswd=this.pswd
    let amount=this.amount

    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+" successfully deposited \n current balance "+result)
      console.log(this.ds.dataBase);
      
    }
  }
  withdrawal(){
    alert("withdrawal")
  }
}
