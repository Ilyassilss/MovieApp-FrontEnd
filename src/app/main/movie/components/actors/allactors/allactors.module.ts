import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllactorsComponent } from './allactors.component';


const routes: Routes = [
  { path: '', component: AllactorsComponent },
  { path: 'actordetails', loadChildren: () => import('./actordetails/actordetails.module').then(m => m.ActordetailsModule) }
];

@NgModule({
  declarations: [
    AllactorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllactorsModule { }
