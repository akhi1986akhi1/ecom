import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  addForm:any;
  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {
  }
  addFormBtn(e:any){
    console.log(e);
    this.seller.addProductSeller(e).subscribe((result:object)=>{
      console.log(result);
      alert("data saved");
    })
  }
}
