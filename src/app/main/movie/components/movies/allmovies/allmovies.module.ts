import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllmoviesComponent } from './allmovies.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';


const routes: Routes = [
  { path: '', component: AllmoviesComponent },
  { path: 'moviedetails', loadChildren: () => import('./moviedetails/moviedetails.module').then(m => m.MoviedetailsModule) }
];

@NgModule({
  declarations: [
    AllmoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardSnippetModule,
    ContentHeaderModule,
    NgSelectModule,
  ]
})
export class AllmoviesModule { }
