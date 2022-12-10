import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType:String='default'
  sellerName:String='';

  searchResult:any;
  constructor(private route:Router, private service:SellerService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      console.log(val.url);
      if(val.url){
        if(localStorage.getItem("seller") && val.url.includes('seller')){
          console.log("in seller area");
          this.menuType='seller';
          if(localStorage.getItem("seller")){
            let sellerStore = localStorage.getItem("seller");
            console.log(sellerStore)
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            console.log("seller data",sellerData)
            this.sellerName = sellerData.name;
            console.log("seller name is",this.sellerName);
          }

        }else{
          console.log("outside seller");
          this.menuType ='default';
        }
      }
    })
  }
  logout():void{
    localStorage.removeItem("seller");
    this.route.navigate(['/']);
  }

  searchProduct(query:KeyboardEvent){
    
  
    if(query){
      const element=query.target as HTMLInputElement;
      console.log(element.value);
      this.service.searchProductService(element.value).subscribe((result:any)=>{
        console.log(result);
        this.searchResult = result;
      })
    }
  }

  hideSearch(){
    this.searchResult = undefined;
  }
}
