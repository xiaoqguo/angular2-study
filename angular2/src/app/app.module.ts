import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { HeroesComponent } from './heros.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.components';
import { HeroService } from "./hero.service";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },{
        path:'heroes',
        component:HeroesComponent
      },{
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'detail/:id',
        component:HeroDetailComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
