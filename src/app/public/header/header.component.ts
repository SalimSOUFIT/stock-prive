import { CATEGORIES } from './../../product/moc-category-list';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import Swiper from 'swiper';
import { Category } from '../../product/category';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  categoryList: Category[] = CATEGORIES;
    constructor(
      private router: Router,
      private productService: ProductService
    ){}

    goToProductList(){
      this.router.navigate(['products']);
    }

    goToHome(){
      this.router.navigate(['home']);
    }

    ngOnInit(){

            // this.productService.getCategoryList()
      //   .subscribe(categoryList => this.categoryList = categoryList)

    }
    initSwiper() {
      const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },


    });
    }






}
