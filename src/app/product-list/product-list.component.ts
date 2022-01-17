import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "./product-list";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy{
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = "";
  sub!: Subscription;
  onRatingClicked(message : string) : void{
    this.pageTitle = 'Product list: ' + message;
  }

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

  performFilter(filterBy:string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));

  }
  constructor(private productService: ProductService) {
  }


  ngOnInit(): void {
     this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
