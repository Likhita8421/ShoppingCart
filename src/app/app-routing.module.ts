import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:'full'},
  {path: 'products', component:ShoppingCartComponent},
  {path: 'addTocart', component: AddItemFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
