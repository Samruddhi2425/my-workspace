import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({providedIn:'root'})
export class DataAccessService{

    constructor(private http:HttpClient){

    }

   count:number = 0;

    getData():Observable<ISeasons[]>
    {
         return this.http.get<ISeasons[]>("https://localhost:7035/WeatherForecast");
    }

    counteIncrementor():number{
          return this.count +=1;
    }

}

export interface ISeasons
{
    
        date: Date
        temperatureC: number
        temperatureF: number
        summary: string
      

}