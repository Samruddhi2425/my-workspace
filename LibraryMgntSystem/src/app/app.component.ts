import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/loginFolder/login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin_folder/admin/admin.component';

import { ForgotPasswardComponent } from './forgot-passward/forgot-passward.component';
import { ManagerComponent } from './component/manager/manager/manager.component';

import { UserComponent } from './component/user/user/user.component';
import { NewPasswordComponent } from './new-password/new-password.component';


@Component({
  selector: 'app-root',
  imports: [HomeComponent,LoginComponent,RegisterComponent,RouterModule,AdminComponent,ManagerComponent,UserComponent,ForgotPasswardComponent,NewPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LibraryMgntSystem';
}
