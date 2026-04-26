import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { AddproductComponent } from './component/pages/addproduct/addproduct.component';
import { TshirtComponent } from './component/categories/tshirt/tshirt.component';
import { TrouserComponent } from './component/categories/trouser/trouser.component';
import { PantComponent } from './component/categories/pant/pant.component';
import { SignupComponent } from './component/authentication/signup/signup.component';
import { LoginComponent } from './component/authentication/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent ,
    canActivate: [authGuard]
  },
  { path: 'about', component: AboutComponent,canActivate: [authGuard] },
  {
    path: 'products', component: ProductsComponent, canActivate: [authGuard],
    children: [{ path: '', redirectTo: 'tshirt', pathMatch: 'full' },
    { path: 'tshirt', component: TshirtComponent },
    { path: 'trouser', component: TrouserComponent },
    { path: 'pant', component: PantComponent }]
  },
  { path: 'addproduct', component: AddproductComponent, canActivate: [authGuard] },
   { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
