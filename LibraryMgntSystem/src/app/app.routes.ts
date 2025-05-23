import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/loginFolder/login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin_folder/admin/admin.component';
import { ForgotPasswardComponent } from './forgot-passward/forgot-passward.component';
import { ManagerComponent } from './component/manager/manager/manager.component';

import { UserComponent } from './component/user/user/user.component';
import { NewPasswordComponent } from './new-password/new-password.component';

export const routes: Routes = [
     { path: '', component: LoginComponent},
     {path:'home', component:HomeComponent},
      // { path: 'login', component: LoginComponent },
      {path:'register', component:RegisterComponent},
      {path:'admin',component:AdminComponent},
      {path:'manager',component:ManagerComponent},
      {path:'user',component:UserComponent},
      {path:'forgotpassword',component:ForgotPasswardComponent},
      {path:'newpassword',component:NewPasswordComponent}
];
