import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';


const routes: Routes = [
  { path: '', component: MovieComponent }
];

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieModule { }
