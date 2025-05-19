import { Routes } from '@angular/router';
import { HomeComponent } from '../../component/home/home.component';
import { LoginComponent } from '../../component/loginFolder/login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin_folder/admin/admin.component';
<<<<<<< HEAD
import { ForgotPasswardComponent } from './forgot-passward/forgot-passward.component';
import { ManagerComponent } from '../../component/manager/manager/manager.component';
=======
import { ManagerComponent } from './manager/manager/manager.component';
>>>>>>> a28dc69ef339543e58d8002fc7ea3a3a57ee7915
import { UserComponent } from '../../component/user/user/user.component';

export const routes: Routes = [
     { path: '', component: LoginComponent},
     {path:'home', component:HomeComponent},
      { path: 'login', component: LoginComponent },
      {path:'register', component:RegisterComponent},
      {path:'admin',component:AdminComponent},
      {path:'manager',component:ManagerComponent},
      {path:'user',component:UserComponent},
      {path:'forgotpassword',component:ForgotPasswardComponent}
];
