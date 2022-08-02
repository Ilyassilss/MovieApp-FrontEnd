import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DirectordetailsComponent } from './directordetails.component';


const routes: Routes = [
  { path: '', component: DirectordetailsComponent }
];

@NgModule({
  declarations: [
    DirectordetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectordetailsModule { }
