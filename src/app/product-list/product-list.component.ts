import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  products: any[] = [
    {
      "productId": 2,
      "productName": "iPhone 13 Pro Max",
      "productCode": "ip13pm",
      "releaseDate": "September 14 2021",
      "description": "6.7\" 12mp 2160px 265gb memory 6gb ram  4352mAh",
      "price": 1299,
      "startRating": 9.5,
      "imageUrl": "../../assets/13pro.jpg"
    },
    {
      "productId": 3,
      "productName": "Samsung S21 ULTRA 5G ",
      "productCode": "s21ultra",
      "releaseDate": "January 14 2021",
      "description": "6.8\" 108mp 4320px 265gb memory 16gb ram  5000mAh",
      "price": 999,
      "startRating": 9.8,
      "imageUrl": "../../assets/s21ultra.jpg"
    },
    {
      "productId": 4,
      "productName": "iPhone 12 Pro Max",
      "productCode": "ip12pm",
      "releaseDate": "October 13 2020",
      "description": "6.7\" 12mp 2160px 265gb memory 6gb ram  3687mAh",
      "price": 999,
      "startRating": 9.0,
      "imageUrl": "../../assets/12pro.jpg"
    },
    {
      "productId": 5,
      "productName": "Samsung S20+",
      "productCode": "s20plus",
      "releaseDate": "February 11 2020",
      "description": "6.7\" 64mp 4320px 265gb memory 8gb ram  4500mAh",
      "price": 699,
      "startRating": 8.8,
      "imageUrl": "../../assets/s20.jpg"
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
