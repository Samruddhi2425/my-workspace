import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin_folder/admin/admin.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { UserComponent } from './user/user/user.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,LoginComponent,RegisterComponent,RouterModule,AdminComponent,ManagerComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LibraryMgntSystem';
}
