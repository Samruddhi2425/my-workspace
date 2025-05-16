import { Component } from '@angular/core';
import { DatainteractComponent } from '../datainteract/datainteract.component';
import { FormsComponent } from '../forms/forms.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [DatainteractComponent, FormsComponent,RouterOutlet,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
