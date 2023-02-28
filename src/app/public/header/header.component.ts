import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Category } from '../../product/category';
import SwiperCore, { Autoplay, EffectFlip } from 'swiper';
import { CATEGORIES } from '../../product/moc-category-list';

// install Swiper modules
 SwiperCore.use([Autoplay,EffectFlip]);



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit{
  categoryList : Category[] = CATEGORIES;
    constructor(
      private router: Router,
      private productService: ProductService
    ) { }

    isMobile: boolean =  window.innerWidth < 992;


    goToProductList(){
      this.router.navigate(['products']);
    }

    goToHome(){
      this.router.navigate(['home']);
    }

    ngOnInit(){
      // this.productService.getCategoryList()
      // .subscribe(categoryList => this.categoryList = categoryList);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.isMobile = window.innerWidth < 992;
    }













}
