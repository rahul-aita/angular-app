import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './products/laptop/laptop.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './service/designutility.service';
import { Contact2Component } from './contact2/contact2.component';
import{HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { JoinComponent } from './pages/join/join.component';
import { AuthGuardGuard } from './pages/auth-guard.guard';


// const appRoutes:Routes=[
//   {path:'',redirectTo:'login' ,pathMatch:'full'},
//   {path:'home',component: HomeComponent},
//   ,
//   {path:'products',component: ProductsComponent,children:[
//     {path:'',component: ProductsComponent},
//     {path:'laptop',component: LaptopComponent}
//   ]},
//   {path:'contactus',component: Contact2Component},
 
// ]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NgIfComponent,
    NgswitchComponent,
    NgForComponent,
    HomeComponent,
    ProductsComponent,
    Contact2Component,
   LaptopComponent,
   CardComponent,
   ParentComponent,
   ChildComponent,
   Card2Component,
   Contact2Component,
   Comp1Component,
   Comp2Component,
   Comp3Component,
   Comp4Component,
   NavbarComponent,
   FooterComponent,
   MenuComponent,
   AboutComponent,
   ContactComponent,
   MenupageComponent,
   JoinComponent,

  ],
  imports: [CommonModule, FormsModule, BrowserModule, AppRoutingModule,RouterModule,ReactiveFormsModule],
  providers: [AuthGuardGuard, UserService,DesignutilityService],
  bootstrap: [AppComponent],

})
export class AppModule {
  constructor(){
    console.log('constructor Module loaded')
  }
}

