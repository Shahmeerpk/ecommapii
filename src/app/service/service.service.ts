import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiUrl = 'http://localhost:5027/api/product'; 

  constructor(private http: HttpClient) { }

  // Method to send product data to C#
  saveProduct(productData: any): Observable<any> {
    console.log(productData);
    return this.http.post(this.apiUrl, productData);
  }
  getcategory(category:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/category/${category}`)
  }

}