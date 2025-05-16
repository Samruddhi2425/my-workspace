import { Component, Input, input } from '@angular/core';
import { SecondformComponent } from '../continents/secondform.component';
import { BindingComponent } from '../binding/binding.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my',
  imports: [SecondformComponent, BindingComponent, CommonModule, FormsModule],
  templateUrl: './my.component.html',
  styleUrl: './my.component.css'
})
export class MyComponent {
  @Input() message:string="";
  name="samruddhi"
  title = "My Page !";
  color: boolean = false;
  fsize = "60px";
  font = "blue";
  border = "red"
  paragraphlist: string[] = ['paragraph1', 'paragraph2', 'paragraph3', 'paragraph4']
  toggle: boolean = false;
  toggleButton() {
    this.toggle = !this.toggle;
  }

  visible: boolean = false
  products = [
    { id: 1, name: "lenovo", price: 46578 },
    { id: 2, name: "apple", price: 78899 },
    { id: 3, name: "dell", price: 90789 }
  ]

  fromhtmltots(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  }
}
