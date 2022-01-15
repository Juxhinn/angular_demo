import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product-list";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter:string = '';
  get listFilter():string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "iPhone 13 Pro Max",
      "productCode": "ip13-pm",
      "releaseDate": "September 14 2021",
      "description": "6.7\" 12mp 2160px 265gb memory 6gb ram  4352mAh",
      "price": 1299,
      "startRating": 9.5,
      "imageUrl": "../../assets/13pro.jpg"
    },
    {
      "productId": 3,
      "productName": "Samsung S21 ULTRA 5G ",
      "productCode": "s21-ultra",
      "releaseDate": "January 14 2021",
      "description": "6.8\" 108mp 4320px 265gb memory 16gb ram  5000mAh",
      "price": 999,
      "startRating": 9.8,
      "imageUrl": "../../assets/s21ultra.jpg"
    },
    {
      "productId": 4,
      "productName": "iPhone 12 Pro Max",
      "productCode": "ip12-pm",
      "releaseDate": "October 13 2020",
      "description": "6.7\" 12mp 2160px 265gb memory 6gb ram  3687mAh",
      "price": 999,
      "startRating": 9.0,
      "imageUrl": "../../assets/12pro.jpg"
    },
    {
      "productId": 5,
      "productName": "Samsung S20+",
      "productCode": "s20-plus",
      "releaseDate": "February 11 2020",
      "description": "6.7\" 64mp 4320px 265gb memory 8gb ram  4500mAh",
      "price": 699,
      "startRating": 8.8,
      "imageUrl": "../../assets/s20.jpg"
    }

  ];
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  // onRatingClicked(message: string) : void{
  //   this.message = message;
  // }
  performFilter(filterBy:string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));

  }
  constructor() { }

  ngOnInit(): void {
this.listFilter = '';  }

}
