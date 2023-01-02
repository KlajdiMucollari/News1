import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';


const routes: Routes = [
  {path: '', component: TopheadingComponent},
  {path: 'tech', component: TechnewsComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'sports', component: SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
