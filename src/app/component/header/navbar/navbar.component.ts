import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  username: string | null = null;
  buyer: boolean = false;
  seller: boolean = false;

  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit() {
    this.productService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status; // 4. Added 'this.'

    });
    this.productService.userName$.subscribe(name => {
      this.username = name; // This updates automatically without refresh!
    });
    this.productService.userRole$.subscribe(role => {
      this.buyer = (role === 'buyer');
      this.seller = (role === 'seller');

    });

   console.log(this.buyer)
   console.log(this.seller)


  }
  Onlogout(){
      this.productService.logout();
      this.router.navigate(['/login']);
    }
}

