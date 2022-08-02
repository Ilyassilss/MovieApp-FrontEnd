import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllmoviesComponent } from './allmovies.component';


const routes: Routes = [
  { path: '', component: AllmoviesComponent },
  { path: 'moviedetails', loadChildren: () => import('./moviedetails/moviedetails.module').then(m => m.MoviedetailsModule) }
];

@NgModule({
  declarations: [
    AllmoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllmoviesModule { }
