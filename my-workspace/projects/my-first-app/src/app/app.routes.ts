import { Routes } from '@angular/router';
import { FirstComponent } from './democomporoute/first/first.component';
import { SecondComponent } from './democomporoute/second/second.component';
import { AuthguardService } from './democomporoute/authguard.service';
import { ListComponent } from './democomporoute/listcomponent/list/list.component';
import { DescriptionComponent } from './democomporoute/listcomponent/description/description.component';

export const routes: Routes = [
{
    path:'first',
    component:FirstComponent,
    canActivate:[AuthguardService]
},
{
    path:'second/:id',
    component:SecondComponent
},
{
    path:'second',
    component:SecondComponent
},
{
    path:'third',
    loadComponent:()=> import('./democomporoute/third/third.component').then(component=>component.ThirdComponent)
},
{
  path:'list',
  component:ListComponent

},
{
    path:'description/:id',
    component:DescriptionComponent
  
}
  

];
