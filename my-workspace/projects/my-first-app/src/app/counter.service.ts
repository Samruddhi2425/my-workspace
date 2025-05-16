import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'any'
})
export class CounterService {

  count = 0;
  constructor() { }

  getCount():number{
    return this.count +=1;
  }
}
