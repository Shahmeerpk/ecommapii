import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/header/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './component/authentication/signup/signup.component';
import { LoginComponent } from './component/authentication/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {jwtInterceptor} from './jwt.interceptor'

import { AddproductComponent } from './component/pages/addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],

  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])),
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
