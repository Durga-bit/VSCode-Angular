import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

/*interface Product
{
  productId:number,
  productName:String,
  productPrice:number,
  productDes:String,
  productImg:String,
}*/

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  { 
  sortby:any;
  term:any;

  products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  errMsg:any;
  constructor(proService:ProductService){
    //proService.getallproducts();
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
  }

}