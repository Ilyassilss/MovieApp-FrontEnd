import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllactorsComponent } from './allactors.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


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
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule
  ]
})
export class AllactorsModule { }
