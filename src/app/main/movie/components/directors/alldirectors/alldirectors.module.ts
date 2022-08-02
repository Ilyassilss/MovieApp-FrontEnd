import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlldirectorsComponent } from './alldirectors.component';


const routes: Routes = [
  { path: '', component: AlldirectorsComponent }
];

@NgModule({
  declarations: [
    AlldirectorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AlldirectorsModule { }
