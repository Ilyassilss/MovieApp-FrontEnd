import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlldirectorsComponent } from './alldirectors.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


const routes: Routes = [
  { path: '', component: AlldirectorsComponent }
];

@NgModule({
  declarations: [
    AlldirectorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule
  ]
})
export class AlldirectorsModule { }
