import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(private http:HttpClient) 
  {


  }

  getData():Observable<IUsData[]>{
    return this.http.get<IUsData[]>("https://localhost:7035/WeatherForecast/data");
  }


  

}

export interface IUsData
{
    id: number,
    name: string,
    city: string,
    isSeniorCitizen: true,
    gender: string,
    continent: string
}
