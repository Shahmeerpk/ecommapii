import { Component } from '@angular/core';
import { ProductService } from '../../../service/service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  product = {
    productname: '',
    productimageUrl: '',
    productcategory: '',
    productprice:0,
    productdescription: ''
    
  };
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  formatPrice(){
   this.product.productprice = Number(this.product.productprice.toFixed(2))
  }
  
  constructor(private productService: ProductService){}

  
    saveData(){
      const formData = new FormData();
    
    // 3. Add text data (must match C# Product model property names)
    formData.append('productname', this.product.productname);
    formData.append('productprice', this.product.productprice.toString());
    formData.append('productcategory', this.product.productcategory);
    formData.append('productdescription', this.product.productdescription);
    // 4. Add the image (must match 'IFormFile image' in your C# Controller)
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

      this.productService.saveProduct(formData).subscribe({
        next:(res)=>{
          console.log('Successfully saved to SQL:', res);
        alert('Product added successfully!');
        this.resetForm();
        this.selectedFile =null;
        },
        error: (err)=>{
          console.error('API Error:', err);
        alert('Failed to save product. Check the console.');
        }
      },)
    }
  
  resetForm(){
           this.product = {
          productname: '',
          productimageUrl: '',
          productprice:0,
          productdescription: '',
          productcategory: '' 
        };
        }
}
