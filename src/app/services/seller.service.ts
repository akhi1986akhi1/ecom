import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  userSignup(data:SignUp){
    console.log("Service Called");
    this.http
    .post("http://localhost:3000/seller",
    data,
    {
      observe:'response'
    }
    )
    .subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['/seller-home']);
    });

  }

  reLoadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['/seller-home']);
    }
  }

  userLogin(data:login){
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {
      observe:'response'
    }).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length){
        console.log("login successfull");
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['/seller-home']);

      }else{
        console.log("login failed");
        this.isLoginError.emit(true)
      }
    })
  }
}
