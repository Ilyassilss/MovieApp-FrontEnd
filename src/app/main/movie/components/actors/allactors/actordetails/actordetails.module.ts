import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ActordetailsComponent } from './actordetails.component';


const routes: Routes = [
  { path: '', component: ActordetailsComponent }
];

@NgModule({
  declarations: [
    ActordetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActordetailsModule { }
