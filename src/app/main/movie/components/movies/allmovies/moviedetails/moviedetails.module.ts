import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails.component';


const routes: Routes = [
  { path: '', component: MoviedetailsComponent }
];

@NgModule({
  declarations: [
    MoviedetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviedetailsModule { }
