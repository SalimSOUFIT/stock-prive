import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ]
})
export class ProductModule { }
