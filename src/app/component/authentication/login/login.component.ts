import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    emailaddress: '',
    password: ''
  };
  constructor(private productService: ProductService, private router: Router) { }
  loginform() {
    this.productService.login(this.loginData).subscribe({
      next: (res) => {
        // console.log('Login successful:', res);
        // alert('Login successful!');
        this.productService.updateLoginStatus(true);
        localStorage.setItem('userEmail', res.emailaddress);
         localStorage.setItem('firstname', res.firstname);
        
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
  });

  }


}
