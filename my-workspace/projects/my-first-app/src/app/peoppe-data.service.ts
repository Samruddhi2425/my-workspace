import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeoppeDataService {

  constructor(private http:HttpClient) { 


  }

  getPeopleDataList():Observable<IPeopleData[]>
  {
  return this.http.get<IPeopleData[]>("https://localhost:7035/WeatherForecast/people");
  }

  postData(data:IPeopleData):Observable<IPeopleData>
  {
       return this.http.post<IPeopleData>
       ("https://localhost:7035/WeatherForecast/savedata",
        data)
  }
}

export interface IPeopleData{
id: number,
    name: string,
    isSeniorCitizen: boolean,
    gender: string
}


