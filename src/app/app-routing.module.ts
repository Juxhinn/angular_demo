 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {ProductListComponent} from "./product-list/product-list.component";
 import {ProductDetailComponent} from "./product-list/product-detail.component";
 import {WelcomeComponent} from "./home/welcome/welcome.component";

const routes: Routes = [];

 @NgModule({
  imports: [RouterModule.forRoot([
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component:ProductDetailComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
