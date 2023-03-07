import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Category } from '../../product/category';
import { ProductService } from 'src/app/product/product.service';
import SwiperCore, {EffectCards, SwiperOptions, } from 'swiper';


// install Swiper modules
 SwiperCore.use([EffectCards]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  categoryList: Category[] | undefined;
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(){
    // this.productService.getCategoryList()
    // .subscribe(categoryList => this.categoryList = categoryList);
  }

  // goToProductDetail(){
  //   this.router.navigate(['Product/'])
  // }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: true,
    slideClass: 'my-slide'
  };
}
