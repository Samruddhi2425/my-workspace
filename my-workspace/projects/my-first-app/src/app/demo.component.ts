import { Component } from "@angular/core";
import { DataAccessService } from "./data.service";
import { HttpClient } from "@angular/common/http";


@Component({
    selector:`demo-app`,
    template:`<h1>{{count}}</h1>`,
    providers:[HttpClient]
})
export class Demo
{
    count:number = 0;
    constructor(private data:DataAccessService)
    {
     this.count = this.data.counteIncrementor();
     this.count = this.data.counteIncrementor();
     this.count = this.data.counteIncrementor();
    }
}