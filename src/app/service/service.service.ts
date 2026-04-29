import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Add this for tap
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private apiUrl = 'http://localhost:5027/api'; 

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
     private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('authtoken'));

  // This is what the Navbar will listen to
  isLoggedIn$ = this.loggedIn.asObservable();

   private getUserNameFromToken(): string | null {
    const token = localStorage.getItem('authtoken');
    if (!token) return null;

    try {
      // jwtDecode: Decodes the middle part (Payload) of the token
      const decoded: any = jwtDecode(token);
      // 'FirstName' matches the key name you used in your C# Claims
      return decoded.FirstName || null;
    } catch (error) {
      return null;
    }
  }
     private getUserRoleFromToken(): string | null {
    const token = localStorage.getItem('authtoken');
    if (!token) return null;

    try {
      // jwtDecode: Decodes the middle part (Payload) of the token
      const decoded: any = jwtDecode(token);
      // 'FirstName' matches the key name you used in your C# Claims
      return decoded.rolename || null;
      
    } catch (error) {
      return null;
    }
  }

  login(logindata: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/User/login`, logindata).pipe(
      tap(res => {
        if (res.token) {
          localStorage.setItem('authtoken', res.token);
          
          // Instead of using res.firstname, we extract it from the token we just saved
          const name = this.getUserNameFromToken();
          
          const role = this.getUserRoleFromToken();
          this.updateLoginStatus(true, name, role);
        }
      })
    );
  }
  
  private userNameSubject = new BehaviorSubject<string | null>(this.getUserNameFromToken());
  private userRoleSubject = new BehaviorSubject<string | null>(this.getUserRoleFromToken());
  userName$ = this.userNameSubject.asObservable();
  userRole$ = this.userRoleSubject.asObservable();

  // Call this method whenever you login or logout
  updateLoginStatus(status: boolean, name: string | null = null, role: string | null = null) {
    this.loggedIn.next(status);
    this.userNameSubject.next(name);
    this.userRoleSubject.next(role);
  }
  
  logout() {
    localStorage.removeItem('authtoken');
    this.updateLoginStatus(false, null, null);
  }
}