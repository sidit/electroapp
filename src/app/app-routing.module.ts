import { CategoriesComponent } from './components/categories/categories.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'cart',component: CartComponent},
  {path: 'product/:id',component: ProductComponent},
  {path: 'checkout',component: CheckoutComponent},
  {path: 'thankyou',component: ThankyouComponent},
  {path: 'categories',component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
