import { Component } from '@angular/core';
import { IPeopleData, PeoppeDataService } from '../peoppe-data.service';
import { FormsModule } from '@angular/forms';
import { httpResource } from '@angular/common/http';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [FormsModule,CommonModule,UpperCasePipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  providers: [PeoppeDataService]
})
export class FormsComponent {

  static current = 0;
  peopleData: IPeopleData[] = [];

  singlePeopleData: IPeopleData = {
    id: 0,
    name: '',
    isSeniorCitizen: false,
    gender: 'male'
  }

  constructor(private data: PeoppeDataService) {
    this.data.getPeopleDataList().subscribe(next => {
      this.peopleData = next;
      this.singlePeopleData = this.peopleData[FormsComponent.current]
      console.log(this.peopleData);
    })
  }

  flag:Boolean = false;

  next(){

   if(FormsComponent.current ==0 ){
    this.flag =false;
   }

   if(FormsComponent.current == this.peopleData.length-1){

    this.flag = true;
    console.log(this.flag);

   } 

   if(!this.flag)
    {
    this.singlePeopleData = this.peopleData[FormsComponent.current]
    FormsComponent.current = FormsComponent.current +1;
    console.log("plus")
    }

    if(this.flag)   
   {
    this.singlePeopleData = this.peopleData[FormsComponent.current]
    FormsComponent.current = FormsComponent.current -1;
    console.log("minus")
   }
   
    
  }
  a =4500;
  b= 9000;

  save()
  {
    this.data.postData(this.singlePeopleData).subscribe(result=>{
      console.log(result);
    })

  }

  




  
}
