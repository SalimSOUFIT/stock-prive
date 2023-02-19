import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';
import { ProductListComponent } from '../product/product-list/product-list.component';


const routes: Routes = [
    {path: '', component: PlayoutComponent, children: [
    { path: '', component: HomeComponent },
    {path: 'products', component: ProductListComponent}

  ]}


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
