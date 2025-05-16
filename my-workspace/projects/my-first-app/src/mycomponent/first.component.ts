import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DemoComponentComponent } from "../app/demo-component/demo-component.component";
import { CommonModule } from "@angular/common";
import { DataAccessService } from "../app/data.service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:`first-tag`,
    template:`
    <h1>{{date}}</h1>
    <h2>Count:{{count}}</h2>
    <p [ngClass]="{ 'isActive': active }">Hello World!</p>
    <div [ngStyle]="{'color':textColor,'font-size.px':fontSize}"> Demo of Attribute Directive : [ngStyle]</div>
    <input type="text" id="text_us" [(ngModel)]="users.usname" (input)="handleChange($event)"/>
    <input type="text" id="text_pw" [(ngModel)]="users.pwd"/>
    <p>Username : {{users.usname}} </p>
    <p>Password : {{users.pwd}}</p>
    <button (click)="handleClick()" >Login</button>
    <app-demo-component></app-demo-component>
    <select>
    <option>Select....</option>
    <option *ngFor="let item of continents">
    {{item}}
    </option>
    </select>
    <ol>
    <li *ngFor = "let val of continents">{{val}}</li>
    </ol>
    <div *ngIf="isLoaded">I am visible when isLoaded is true</div>

    <div [ngSwitch]="switchvar">

    <span *ngSwitchCase=1>Option One</span>
    <span *ngSwitchCase=2>Option Two</span>
    <span *ngSwitchCase=3>Option Three</span>
    <span *ngSwitchDefault>Processing ... </span>

    </div>
    <div [ngStyle]="{
    'width': progress + '%',
    'background-color': progress < 30 ? 'red': progress < 70 ? 'yellow':'green',
    'height':'20px' 
     }"> </div>

    `,
    imports:[FormsModule,DemoComponentComponent,CommonModule],
    styleUrl:'./first.component.css',
    providers:[HttpClient],
    standalone:true
})
export class FirstComponent{

  count:number = 0
  constructor(private cnt:DataAccessService){
  this.count = this.cnt.counteIncrementor();
  this.count = this.cnt.counteIncrementor();
  this.count = this.cnt.counteIncrementor();
  this.count = this.cnt.counteIncrementor();
    setTimeout(() => {
      // this.fontSize=50;
      // this.textColor='red';
      this.progress = 20;
      
    }, 2000);
    setTimeout(() => {
      
      this.progress = 40;
      
    }, 2000);
    setTimeout(() => {
      
      this.progress = 60;
      
    }, 2000);
    setTimeout(() => {
      
      this.progress = 80;
      
    }, 2000);

    setTimeout(() => {
      
      this.progress = 100;
      
    }, 2000);
    
  }
  date:Date = new Date();

  continents:string[] = ["Asia","Africa","South Americal","North America","Antarctica","Australia"];

  active=false;

  switchvar = 0;
  
  progress = 20;

 textColor='blue';
 fontSize=20;

  isLoaded = false;

  users:iUser={
      usname: "some",
      pwd: "pwd"
  }

  handleChange(e:Event){
  let value = (e.target as HTMLInputElement).value;
  console.log(value);
  }

  handleClick(){
    console.log(this.users);
    this.isLoaded = true;
    this.switchvar = 3;
    this.fontSize=50;
    this.textColor='red';
    this.active = true;
    
  }
}

interface iUser
{
    usname:string
    pwd:string
}