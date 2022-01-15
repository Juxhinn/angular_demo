import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ' <div class="title"><h1>{{title}}</h1></div>\n' +
    ' <div> <app-product-list></app-product-list>\n' +
    '    </div>',

  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phone shop';
}
