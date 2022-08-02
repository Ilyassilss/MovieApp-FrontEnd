import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddmovieComponent } from './addmovie.component';


const routes: Routes = [
  { path: '', component: AddmovieComponent }
];

@NgModule({
  declarations: [
    AddmovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddmovieModule { }
