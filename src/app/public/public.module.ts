import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PublicRoutingModule } from './public-routing.module';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';




@NgModule({
    declarations: [
        HomeComponent,
        PlayoutComponent,
        FooterComponent,
        HeaderComponent,
        CategoryCarouselComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,


    ]
})
export class PublicModule { }
