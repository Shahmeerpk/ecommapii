import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantComponent } from '../../categories/pant/pant.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../../auth.guard';
import { TrouserComponent } from '../../categories/trouser/trouser.component';
import { TshirtComponent } from '../../categories/tshirt/tshirt.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
 {
    path: '', component: ProductsComponent, canActivate: [authGuard],
    children: [{ path: '', redirectTo: 'tshirt', pathMatch: 'full' },
    { path: 'tshirt', component: TshirtComponent },
    { path: 'trouser', component: TrouserComponent },
    { path: 'pant', component: PantComponent }]
  },
];

@NgModule({
  declarations: [
    TshirtComponent,
    TrouserComponent,
    PantComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProdctModule { }
