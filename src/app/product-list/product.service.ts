import {Injectable} from "@angular/core";
import {IProduct} from "./product-list";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private productUrl = 'src/api/products/products.json';
  constructor(private  http: HttpClient) {
  }
  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
    tap(data => console.log('All :', JSON.stringify(data))),
      catchError(this.handleError));
  }
  handleError(err : HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent){
      errorMessage = 'An error occurred:  $(err.error.message)';
    }
    else{
      errorMessage = 'Server returned code: ${err.status}, error message is : ${err.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  // getProducts(): IProduct[]{
  //   return[
  //     {
  //       "productId": 2,
  //       "productName": "iPhone 13 Pro Max",
  //       "productCode": "ip13-pm",
  //       "releaseDate": "September 14 2021",
  //       "description": "Screen 6.7\" \n Camera: 12mp 2160px \n265gb memory 6gb ram  \nBattery: 4352mAh",
  //       "price": 1299,
  //       "startRating": 4.5,
  //       "imageUrl": "../../assets/13pro.jpg"
  //     },
  //     {
  //       "productId": 3,
  //       "productName": "Samsung S21 ULTRA 5G ",
  //       "productCode": "s21-ultra",
  //       "releaseDate": "January 14 2021",
  //       "description": "6.8\" 108mp 4320px 265gb memory 16gb ram  5000mAh",
  //       "price": 999,
  //       "startRating": 4.8,
  //       "imageUrl": "../../assets/s21ultra.jpg"
  //     },
  //     {
  //       "productId": 4,
  //       "productName": "iPhone 12 Pro Max",
  //       "productCode": "ip12-pm",
  //       "releaseDate": "October 13 2020",
  //       "description": "6.7\" 12mp 2160px 265gb memory 6gb ram  3687mAh",
  //       "price": 999,
  //       "startRating": 4.0,
  //       "imageUrl": "../../assets/12pro.jpg"
  //     },
  //     {
  //       "productId": 5,
  //       "productName": "Samsung S20+",
  //       "productCode": "s20-plus",
  //       "releaseDate": "February 11 2020",
  //       "description": "6.7\" 64mp 4320px 265gb memory 8gb ram  4500mAh",
  //       "price": 699,
  //       "startRating": 3.8,
  //       "imageUrl": "../../assets/s20.jpg"
  //     },
  //     {
  //       "productId": 5,
  //       "productName": "Samsung S20+",
  //       "productCode": "s20-plus",
  //       "releaseDate": "February 11 2020",
  //       "description": "6.7\" 64mp 4320px 265gb memory 8gb ram  4500mAh",
  //       "price": 699,
  //       "startRating": 3.8,
  //       "imageUrl": "../../assets/s20.jpg"
  //     },
  //     {
  //       "productId": 5,
  //       "productName": "Samsung S20+",
  //       "productCode": "s20-plus",
  //       "releaseDate": "February 11 2020",
  //       "description": "6.7\"\n 64mp 4320px \n265gb memory 8gb ram  \n Battery 4500mAh",
  //       "price": 699,
  //       "startRating": 3.8,
  //       "imageUrl": "../../assets/s20.jpg"
  //     }
  //   ];
  // }
}
