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


  constructor(private productService: ProductService, private router: Router) {}
   ngOnInit() {
    this.productService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status; // 4. Added 'this.'
      this.username = localStorage.getItem('firstname');
    });
  }

    Onlogout(){
      localStorage.removeItem('userEmail');
      localStorage.removeItem('firstname');
      this.productService.updateLoginStatus(false);
      this.router.navigate(['/login']);
    }
  

}
