import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';


@Component({
  selector: 'app-trouser',
  templateUrl: './trouser.component.html',
  styleUrl: './trouser.component.css'
})
export class TrouserComponent {
  public products:any;
  constructor(private productService: ProductService){
    productService.getcategory("trouser").subscribe({
      next:(res)=>{
        console.log('Successfully saved to SQL:', res);
       this.products =res;

      },
       error: (err)=>{
          console.error('API Error:', err);
        alert('Failed to save product. Check the console.');
        }
    })
  }
}