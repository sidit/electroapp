import { IProduct } from './../product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url : string = "/assets/products/products.json"

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url);
  }

  getProduct(id : number){
    return this.getAllProducts()
    .pipe(
      map((products) => products.find(p => p.id === id))
    );
  }
}
