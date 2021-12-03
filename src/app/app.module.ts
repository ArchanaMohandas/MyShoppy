import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeBannerComponent } from './Components/home-banner/home-banner.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  mystyleDirective } from './CustomDirectives/addClass.directive';
import { customColorDirective } from './CustomDirectives/color.directive';
import { StyleDirective } from './CustomDirectives/style.directive';
import { MyCustomPipe } from './Pipes/my-custom.pipe';
import { ViewUserDataComponent } from './Components/view-user-data/view-user-data.component';
import { LoggerService } from './Services/Logger.service';
import { UserService } from './Services/user.service';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { CustomerComponent } from './Components/customer/customer.component';
import {AuthGuardService} from './auth-guard.service';

import {RouterModule} from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { ProductService } from './Services/Product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientDemoComponent } from './Components/http-client-demo/http-client-demo.component';
import { HttpGetComponent } from './Components/http-get/http-get.component';
import { HttpPostComponent } from './Components/http-post/http-post.component';
import { HttpPutComponent } from './Components/http-put/http-put.component';
import { HttpDeleteComponent } from './Components/http-delete/http-delete.component';
import { ReposService } from './Services/Repos.Service';
import { HomeModule } from './Components/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    FooterComponent,
    HomeBannerComponent,
    ProductsComponent,
mystyleDirective,
customColorDirective,
StyleDirective,
MyCustomPipe,
ViewUserDataComponent,
ReactiveFormComponent,
CustomerComponent,
ErrorComponent,
HttpClientDemoComponent,
HttpGetComponent,
HttpPostComponent,
HttpPutComponent,
HttpDeleteComponent  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'home',loadChildren:()=>import('./Components/home/home.module').then(m=>m.HomeModule)},
      {path:'api',component:HttpClientDemoComponent},
      {path:'register',component:RegisterComponent},
      {path:'products',component:ProductsComponent},
      {path:'customer',component:CustomerComponent,canActivate:[AuthGuardService]},
      {path:'main',component:MainComponent,canActivate:[AuthGuardService]},
      {path:'view/:username',component:ViewUserDataComponent,canActivate:[AuthGuardService]},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'**',component:ErrorComponent}

      ]),
      HomeModule
  
  ],
  providers: [LoggerService,UserService,AuthGuardService,ProductService,ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
