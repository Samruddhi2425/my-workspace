import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent 
{
 

  list:IAnchor[]=[];

  constructor(){
  this.list = [
    {id:'/description/1',name:'Laptop'},
    {id:'/description/2',name:'Bag'},
    {id:'/description/3',name:'Book'},
    {id:'/description/4',name:'Charger'},
    {id:'/description/5',name:'Cup'}
  ]
  }


}

export interface IAnchor
{
  id:string,
  name:string
}
