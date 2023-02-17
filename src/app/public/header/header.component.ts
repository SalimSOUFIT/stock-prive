import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Categorie } from '../../product/categorie';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    categorieList: Categorie[] | undefined;
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
      this.productService.getCategorieList()
        .subscribe(categorieList => this.categorieList = categorieList)
    }





}
