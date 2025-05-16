import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from '../mycomponent/first.component';
import { DataAccessService } from './data.service';
import { HttpClient } from '@angular/common/http' ;
import {HttpClientModule} from '@angular/common/http';
import { Demo } from './demo.component';
import { DataAccessServiceService } from '../../../data-access-service/src/public-api';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CounterService } from './counter.service';
import { filter, Observable } from 'rxjs';

import { of } from 'rxjs';
import { tap,map} from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,HttpClientModule,Demo,HeadercomponentComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClient,DataAccessService,DataAccessServiceService,CounterService],
  standalone:true
  
})
export class AppComponent 
{


  count:number = 0;
  countr:number = 0;
  constructor(private data:DataAccessService, private data2:DataAccessServiceService, private ctr:CounterService)
  {
  this.count = this.data.counteIncrementor();
  this.count = this.data.counteIncrementor();
  this.count = this.data.counteIncrementor();
  this.count = this.data.counteIncrementor();
  this.count = this.data2.getCounter();
  this.count = this.ctr.getCount();

  let numOfObervable = new Observable<number>(observer=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);

    setTimeout(()=>{
   observer.next(5);
   observer.complete();
    },2000)
  });

numOfObervable.subscribe(
  next=>console.log(next),
  error => {console.log(error)},
   ()=>console.log("completed") 
  )

  let list:number[]=[1,2,3,4,5,6];

  let numbers$ = of(1,2,3,4,5,6);


   numbers$.pipe(
   tap(num => console.log('original :' +num)),
   filter(num => num % 2===0),
   map(num=>num *2)


   ).subscribe(result=>console.log('result : '+result));
  
  


  }
  title = 'my-first-app';

  incrementCounter()
  {
    this.countr = this.ctr.getCount();
  }
  
}
