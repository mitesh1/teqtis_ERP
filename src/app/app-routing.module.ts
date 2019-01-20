import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ERPGridComponent } from './erp-grid/erp-grid.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: 'addProduct', component: AddProductComponent },
  { path: 'erpGrid', component: ERPGridComponent },
  // { path: '**', component: ERPGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
