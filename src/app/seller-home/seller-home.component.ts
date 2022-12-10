import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  productList:any=[];
  constructor(private seller:SellerService,) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.seller.getAllProduct().subscribe((result)=>{
      this.productList = result;
      console.log(result);
    })
  }

  removeProduct(id:any){
    this.seller.removeProductByID(id).subscribe((result:any)=>{
      if(result){
        this.getProduct();
        alert("Item deleted successfully")
      }
    })
  }
  test(){
    // alert("mouse over")
    console.log("mouse over");
  }
}
