import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my/my.component';
import { DemoService } from './demo.service';
import { interval, Observable } from 'rxjs';
import { DropdowninputComponent } from './dropdowninput/dropdowninput.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyComponent,DropdowninputComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dList: string[]=['sport','state'];
  selectedSport='';

  onSportChange(sport :string){
    this.selectedSport=sport;
  }
propValue:string='sport';
changeDrop(e:Event){
   const val = (e.target as HTMLInputElement).value;
   this.propValue = val;
}

  title = 'Samruddhiapp';

  constructor(service:DemoService){
    service.myInfo();

    interval(1000).subscribe(
      count=>console.log("Hello World!"));

    this.data.subscribe(
      c=>console.log(c),
      errors=>console.log(errors),
      ()=>console.log("completed !")
  );
  }

  data = new Observable<number>(func=>{
    func.next(1);
    func.next(2);
    func.next(3);
    setTimeout(() => {
      func.next(10);
      func.complete();
    }, 1000);
  })





  
}
