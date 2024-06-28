import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./feature/main/main.module').then(m => m.MainModule)},
  {path: 'order', loadChildren: () => import('./feature/order/order.module').then(m => m.OrderModule)},
  {path: 'products', loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
