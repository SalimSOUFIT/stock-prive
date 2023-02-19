import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategorieComponent } from './categorie/categorie.component';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    CategorieComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductModule { }
