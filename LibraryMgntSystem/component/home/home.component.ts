import { Component } from '@angular/core';
import { LoginComponent } from '../loginFolder/login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
@Component({
  selector: 'app-home',
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
