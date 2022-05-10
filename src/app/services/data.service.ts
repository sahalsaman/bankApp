import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentacno: any

  dataBase: any = {
    1001: { acno: 1001, uname: "sahal", password: 1001, balance: 10000, transaction: [] },
    1002: { acno: 1002, uname: "mubi", password: 1002, balance: 5000, transaction: [] },
    1003: { acno: 1003, uname: "siyad", password: 1003, balance: 7000, transaction: [] }
  }

  constructor(private http: HttpClient) {
    this.getDetails()
  }

  saveDetails() {
    localStorage.setItem("database", JSON.stringify(this.dataBase))
    if (this.currentacno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentacno))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }

  getDetails() {
    if (localStorage.getItem("database")) {
      this.dataBase = JSON.parse(localStorage.getItem("database") || "")
    }
    if (localStorage.getItem("currentAcno")) {
      this.currentacno = JSON.parse(localStorage.getItem("currentAcno") || "")
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "")
    }
  }

  register(uname: any, acno: any, password: any) {
    const data = {
      uname,
      acno,
      password
    }
    return this.http.post('http://localhost:3000/register', data)
  }

  login(acno: any, pswd: any) {
    const data = {
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login', data)
  }

  getOptions() {
    const token = JSON.parse(localStorage.getItem("token") || "")
    let headers = new HttpHeaders()

    if(token){
    headers = headers.append('access-token', token)
    options.headers = headers
    }
  return options
  }

  deposit(acno: any, pswd: any, amt: any) {
    const data = {
      acno,
      pswd,
      amt
    }
    return this.http.post('http://localhost:3000/deposit', data,this.getOptions())
  }

  withdraw(acno: any, pswd: any, amt: any) {
    const data = {
      acno,
      pswd,
      amt
    }
    return this.http.post('http://localhost:3000/withdraw', data,this.getOptions())
  }

  transaction(acno: any) {
    const data = {
      acno
    }
    return this.http.post('http://localhost:3000/transaction', data,this.getOptions())
  }
  
  onDelete(acno:any){
    return this.http.delete("http://localhost:3000/deleteAcc/"+acno,this.getOptions())
  }

}

