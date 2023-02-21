import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PublicRoutingModule } from './public-routing.module';
import { SwiperModule } from 'swiper/angular';
import { PublicComponent } from './public/public.component';




@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        PublicComponent,
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        SwiperModule


    ]
})
export class PublicModule { }
