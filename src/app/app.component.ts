import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ' <div><h1>{{title}}</h1>\n' +
    '  <app-product-list></app-product-list>\n' +
    '    </div>'

  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app';
}
