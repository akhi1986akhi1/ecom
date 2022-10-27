import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
sellerForm:any;
authError='';
  constructor(private seller:SellerService, private router:Router) { }
  showLogin = false;
  ngOnInit(): void {
    this.seller.reLoadSeller();
  }
  signUp(value:SignUp){
    // console.log(value);
    this.seller.userSignup(value)
    // .subscribe((result)=>{
    //   console.log(result);
    //   if(result){
    //     this.router.navigate(['/seller-home']);
    //   }
    // })
  }

  login(value:SignUp){
    console.log(value);
    this.authError='';
    this.seller.userLogin(value);
    this.seller.isLoginError.subscribe((isErr)=>{
      if(isErr){
        this.authError='Email or Password is not correct';
      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUP(){
   this.showLogin=false; 
  }
}
