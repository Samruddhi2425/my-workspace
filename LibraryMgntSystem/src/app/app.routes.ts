import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin_folder/admin/admin.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { UserComponent } from './user/user/user.component';
import { ForgotPasswardComponent } from './forgot-passward/forgot-passward.component';

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
