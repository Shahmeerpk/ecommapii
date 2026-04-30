import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { AddproductComponent } from './component/pages/addproduct/addproduct.component';
import { SignupComponent } from './component/authentication/signup/signup.component';
import { LoginComponent } from './component/authentication/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent ,
    canActivate: [authGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./component/pages/products/prodct.module').then(m => m.ProdctModule)
  },
  { path: 'about', component: AboutComponent,canActivate: [authGuard] },
 
  { path: 'addproduct', component: AddproductComponent, canActivate: [authGuard] },
   { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
