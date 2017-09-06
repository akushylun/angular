import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AUTH_PROVIDERS} from './auth.service';
import {LoggedInGuard} from './logged-in.guard';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {ProtectedComponent} from './protected/protected.component';
import {ProductsComponent} from './products/products.component';

import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'},


  {path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },

  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProtectedComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  providers: [AUTH_PROVIDERS,
    LoggedInGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
