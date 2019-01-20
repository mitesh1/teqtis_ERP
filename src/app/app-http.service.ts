import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {Product} from  './models/productModel.js'


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  addProductUrl = "http://127.0.0.1:3000/add";

  getProdDataUrl = "http://127.0.0.1:3000/getproddata" ;
  getNormalDataUrl = "http://127.0.0.1:3000/getnormaldata " ;

  constructor(private http: HttpClient) { }

  getNormalData(){
    return this.http.get(this.getNormalDataUrl);
  } 

  getProdData(){
    return this.http.get(this.getProdDataUrl);
  }

  addProduct (product: Product): Observable<Product> {
     //return       this.http.get<Product>(this.addProductUrl);
    return this.http.post<Product>(this.addProductUrl, product);
      
  }

  
}
