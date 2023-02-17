import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8890/product/all'

  constructor(private http: HttpClient) { }

getProductList(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl).pipe(
    tap((response) => console.table(response)),
    catchError((error) => {
      console.error(error);
      return of([]);
    })
  );
}


}
