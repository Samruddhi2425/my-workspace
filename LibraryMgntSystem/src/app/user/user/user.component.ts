import { Component } from '@angular/core';
import { SidebarComponent } from '../../admin_folder/sidebar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [SidebarComponent,RouterOutlet,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
