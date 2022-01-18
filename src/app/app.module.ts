import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ConvertToSpacePipe} from "./shared/convert-to-space.pipe";
import {StarComponent} from "./shared/star.component";
import { ProductDetailComponent } from './product-list/product-detail.component';
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome/welcome.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductListComponent,
    WelcomeComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
