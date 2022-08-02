import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdddirectorComponent } from './adddirector.component';


const routes: Routes = [
  { path: '', component: AdddirectorComponent }
];

@NgModule({
  declarations: [
    AdddirectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdddirectorModule { }
