import { Component } from '@angular/core';
import {expand} from "rxjs";

@Component({
  selector: 'app-root',
  // template: ' <div class="title"><h1>{{title}}</h1></div>\n' +
  //   ' <div> <app-product-list></app-product-list>\n' +
  //   '    </div>',
  template: '<nav class="navbar navbar-expand navbar-light bg-light">' +
    '<a class="navbar-brand">{{title}}</a>' +
    '<ul class="nav nav-pills">' +
    '<li><a class="nav-link" routerLink="/welcome">Home</a> </li>' +
    '<li><a class="nav-link" routerLink="/products">Product List</a> </li>' +
    '</ul> ' +
    '</nav>' +
    '<div class="container"><router-outlet></router-outlet></div> '

})
export class AppComponent {
  title: string = 'Phone shop';
}
