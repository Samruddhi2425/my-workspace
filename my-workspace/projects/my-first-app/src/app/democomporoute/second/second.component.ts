import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

  constructor(private root:Router, private route:ActivatedRoute){
    this.route.params.subscribe(params=>{
       console.log(params['id']);
       if(params['id'] == 23){
        root.navigate(['/first']);
       }
    })
  
    


  }
}
