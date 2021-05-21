import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../components/clases/product';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Product[]>{
    return this.http.get(this.url).pipe(
      map(productos => productos as Product[])
    )
  }

  findById(id: string){
    return this.http.get(`${this.url}/${id}`).pipe(
      map(producto => producto as Product)
    )
  }

  get url(){
    return this.endpoint + '/productos';
  }

}
