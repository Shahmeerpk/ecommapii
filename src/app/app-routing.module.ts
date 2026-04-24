import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { AddproductComponent } from './component/pages/addproduct/addproduct.component';
import { TshirtComponent } from './component/categories/tshirt/tshirt.component';
import { TrouserComponent } from './component/categories/trouser/trouser.component';
import { PantComponent } from './component/categories/pant/pant.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'tshirt',component:TshirtComponent},
  {path:'trouser',component:TrouserComponent},
  {path:'pant',component:PantComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
