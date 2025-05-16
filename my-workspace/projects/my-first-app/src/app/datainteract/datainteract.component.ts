import { Component } from '@angular/core';
import { DataapiService, IUsData } from '../dataapi.service';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { FormsModule } from '@angular/forms';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-datainteract',
  imports: [HttpClientModule,FormsModule],
  templateUrl: './datainteract.component.html',
  styleUrl: './datainteract.component.css',
  providers:[DataapiService,HttpClient]
})
export class DatainteractComponent {

  countr:number = 0;
  static current:number = 0;
  userlist:IUsData={
    id: 0,
    name: '',
    city: '',
    isSeniorCitizen: true,
    gender: 'MALE',
    continent: ''
  }
  user:IUsData[]=[];
  constructor(private http:DataapiService, private ctr:CounterService){
  http.getData().subscribe(next=>{
    this.user = next
    console.log(this.user);
    this.userlist = this.user[DatainteractComponent.current];
  },error=>{
    console.log(error);
  })
  
 }
 increment(){
  this.countr = this.ctr.getCount();
 }
 


//{
//   id: 0,
//   name: '',
//   city: '',
//   isSeniorCitizen: true,
//   gender: 'MALE',
//   continent: ''
// }
 nextValue(e:Event){

  if(DatainteractComponent.current == this.user.length-1){
    console.log(this.user.length)
    DatainteractComponent.current =  DatainteractComponent.current -1;

    this.userlist = this.user[DatainteractComponent.current];
   
    console.log("inside");
  }
  else{
 DatainteractComponent.current =  DatainteractComponent.current +1;

 this.userlist = this.user[DatainteractComponent.current];

 console.log(DatainteractComponent.current);
  }

 }

}
