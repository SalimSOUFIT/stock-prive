import { Component, OnInit } from '@angular/core';
import { Category } from '../../product/category';
import { ProductService } from 'src/app/product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  categoryList: Category[] | undefined;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(){
    // this.productService.getCategoryList()
    // .subscribe(categoryList => this.categoryList = categoryList);
  }


}
