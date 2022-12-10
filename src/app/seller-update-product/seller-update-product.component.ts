import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  updateForm:any;
  product!: products;
  constructor(private route:ActivatedRoute,private seller:SellerService,) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    let productID: any = this.route.snapshot.paramMap.get('id');
    this.seller.getProuctById(productID).subscribe((result)=>{
      console.log(result);
      this.product=result;
    })
    

  }
  updateFormBtn(event:products){
    console.log(event);
    event.id = this.product.id
    this.seller.updateProductByID(event).subscribe((data)=>{
      if(data){
        alert("product updated successfully....!");
      }
    })
  }
}
