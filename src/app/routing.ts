import { Router, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivateGuard } from './activate.guard';
export const Approutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: AdminComponent },
  { path: 'Admin', component: AdminComponent, canActivate: [ActivateGuard] }
];
