import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product-list";
import {ProductService} from "./product.service";

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
  products: IProduct[] = [];
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  // onRatingClicked(message: string) : void{
  //   this.message = message;
  // }
  constructor(private productService: ProductService) {

  }
  performFilter(filterBy:string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));

  }

  ngOnInit(): void {
    this.products = this.productService.getProduct();
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  onRatingClicked(message : string):void{
    this.pageTitle = 'Product List ' + message;
  }
}
