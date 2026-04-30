import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';


@Component({
  selector: 'app-pant',
  templateUrl: './pant.component.html',
  styleUrl: './pant.component.css',
 
})
export class PantComponent {
  public products:any;
  constructor(private productService: ProductService){
    productService.getcategory("pant").subscribe({
      next:(res)=>{
        console.log('Successfully retrieved from SQL:', res);
       this.products =res;

      },
       error: (err)=>{
          console.error('API Error:', err);
        alert('Failed to get product. Check the console.');
        }
    })
  }
  

}
