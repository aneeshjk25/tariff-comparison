import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  products: Product[];
  annualCostProducts: Product[];
  constructor(private productService:ProductService){

  }
  onSubmit(queryCost) {
    this.annualCostProducts = this.products
    .map((product) => {
      return this.calculateTariffCost(queryCost, product);
    })
    .sort((productA, productB) => {
      return productA.annual_cost - productB.annual_cost;
    })
  }
  calculateTariffCost(consumption:number,product: Product,){
    const newProduct = Object.assign({}, product);
    newProduct.annual_cost  = product.base_cost + Math.max(consumption - product.base_consumption, 0 ) * product.incremental_cost;
    return newProduct;
  }
  ngOnInit(){
    this.productService.getProducts()
      .subscribe((data) => {
        this.products = data.products;
      })
  }
}
