import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class ProductModule { }
