import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAccessServiceService {

  count:number = 0;
  constructor() { 
   

  }

  getCounter():number{
return this.count += 1;

  }
}
