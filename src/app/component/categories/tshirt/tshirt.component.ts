import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';


@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrl: './tshirt.component.css'
})
export class TshirtComponent {
  public products:any;
  constructor(private productService: ProductService){
    this.productService.getcategory("tshirt").subscribe({
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