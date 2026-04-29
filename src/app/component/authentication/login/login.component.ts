import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logindone: boolean| null = null;
  loginData = {
    emailaddress: '',
    password: ''
  };
  constructor(private productService: ProductService, private router: Router) { }
  loginform() {
    this.productService.login(this.loginData).subscribe({
      next: (res) => {
        this.logindone = true;
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.logindone = false;
      }
  });

  }


}
