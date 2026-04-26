import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/header/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { FooterComponent } from './component/footer/footer/footer.component';

import { AddproductComponent } from './component/pages/addproduct/addproduct.component';
import { TshirtComponent } from './component/categories/tshirt/tshirt.component';
import { TrouserComponent } from './component/categories/trouser/trouser.component';
import { PantComponent } from './component/categories/pant/pant.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './component/authentication/signup/signup.component';
import { SignoutpageComponent } from './component/authentication/signoutpage/signoutpage.component';
import { LoginComponent } from './component/authentication/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    FooterComponent,
  
    AddproductComponent,
    TshirtComponent,
    TrouserComponent,
    PantComponent,
    SignupComponent,
    SignoutpageComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
