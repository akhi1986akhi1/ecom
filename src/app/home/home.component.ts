import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:any=[];
  constructor(private seller:SellerService,) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.seller.getAllProduct().subscribe((result)=>{
      this.productList = result;
      console.log(result);
    })
  }
}
