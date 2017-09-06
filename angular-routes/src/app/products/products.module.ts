
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule, ActivatedRoute, Router} from '@angular/router';

import {MainComponent} from './main/main.component';
import {MoreInfoComponent} from './more-info/more-info.component';
import {ProductComponent} from './product/product.component';

export const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'more-info', component: MoreInfoComponent},
  {path: ':id', component: ProductComponent},
];

@NgModule({
  declarations: [
    ProductComponent,
    MainComponent,
    MoreInfoComponent],
  exports: [
    ProductComponent,
    MainComponent,
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ProductsModule {}
