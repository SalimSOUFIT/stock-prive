
import { Component } from '@angular/core';

import Swiper from 'swiper';


@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.css']
})
export class CategoryCarouselComponent {


  initSwiper() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}
