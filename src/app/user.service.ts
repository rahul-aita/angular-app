import { Injectable } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  isAdminRights(): boolean {
    return false;
  }
}
