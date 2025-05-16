import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-description',
  imports: [RouterModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  id=0;
 constructor(private route:ActivatedRoute)
 {

  this.route.params.subscribe(params=>{
    this.id = params['id'];
    console.log(params['id']);

  })

 }
}
