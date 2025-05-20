import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../../../../sidebar/sidebar.component';


@Component({
  selector: 'app-manager',
  imports: [RouterModule,RouterOutlet,SidebarComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
