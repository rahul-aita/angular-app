import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DesignutilityService } from './service/designutility.service';
import { JoinComponent } from './pages/join/join.component';
import { AuthGuardGuard } from './pages/auth-guard.guard';
const routes: Routes = [
  {path: '',   redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component:HomeComponent },
  { path: 'Menu',canActivate:[AuthGuardGuard], component:MenuComponent},
  { path: 'menu/:id' ,component:MenupageComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent},
  {path:'join', component:JoinComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
