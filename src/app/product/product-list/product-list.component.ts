import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  table: number[] = [1,2];
  productList: Product[] | undefined;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProductList()
      .subscribe(productList => this.productList = productList);
      // console.log(this.productList);
  }

}
