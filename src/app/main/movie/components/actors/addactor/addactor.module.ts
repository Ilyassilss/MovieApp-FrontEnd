import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddactorComponent } from './addactor.component';


const routes: Routes = [
  { path: '', component: AddactorComponent }
];

@NgModule({
  declarations: [
    AddactorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AddactorModule { }
