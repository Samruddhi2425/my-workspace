import { Component } from '@angular/core';
import { HomeComponent } from '../../component/home/home.component';
import { LoginComponent } from '../../component/loginFolder/login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin_folder/admin/admin.component';
<<<<<<< HEAD
import { ForgotPasswardComponent } from './forgot-passward/forgot-passward.component';
import { ManagerComponent } from '../../component/manager/manager/manager.component';
=======
import { ManagerComponent } from './manager/manager/manager.component';
>>>>>>> a28dc69ef339543e58d8002fc7ea3a3a57ee7915
import { UserComponent } from '../../component/user/user/user.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,LoginComponent,RegisterComponent,RouterModule,AdminComponent,ManagerComponent,UserComponent,ForgotPasswardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LibraryMgntSystem';
}
