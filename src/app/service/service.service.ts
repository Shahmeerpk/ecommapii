import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiUrl = 'http://43.205.210.0:8080/api'; 

  constructor(private http: HttpClient) { }

  // Method to send product data to C#
  saveProduct(productData: any): Observable<any> {
    console.log(productData);
    return this.http.post(`${this.apiUrl}/product`, productData);
  }
  getcategory(category:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/product/category/${category}`)
  }
  signup(userdetail:any):Observable<any>{
   var checking =this.http.post(`${this.apiUrl}/User/signup`,userdetail)
  
   console.log("hello")
 return checking
  }
  
  login(logindata:any):Observable<any>{
    var checking =this.http.post(`${this.apiUrl}/User/login`,logindata)
    console.log(checking)
  return checking
   }
   private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('userEmail'));

  // This is what the Navbar will listen to
  isLoggedIn$ = this.loggedIn.asObservable();

  // Call this method whenever you login or logout
  updateLoginStatus(status: boolean) {
    this.loggedIn.next(status);
  }
}