import { CommonModule } from '@angular/common';
import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dropdowninput',
  imports: [CommonModule],
  templateUrl: './dropdowninput.component.html',
  styleUrl: './dropdowninput.component.css'
})
export class DropdowninputComponent {
@Input() selectedSport:string='';

dropList:string[]=[];

@Input() type:string=' ';
states: string[]=[];

ngOnChanges(changes:SimpleChanges){

  console.log(changes['type'].currentValue);
 if(changes['type'].currentValue == "sport"){
    this.dropList=["Indoor","OutDoor"];
 }

 if(changes['type'].currentValue == "state"){
    this.dropList=["Mahrashtra","Goa","..."];
 }

  console.log('ngOnChanges triggered:',changes['selectedSport'].currentValue);

  
  if(changes['selectedSport'] && changes['selectedSport'].currentValue){
    this.fetchStatesForSport(this.selectedSport);
  }
}

fetchStatesForSport(sport: string){
  const SportStateMap:  { [key: string]: string[]} ={
    Sports:['Football','basketball','Cricket'],
    State:['Maharashtra','Gujrat','up']
  };

  this.states= SportStateMap[sport] || [];
}
}
