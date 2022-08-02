import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'allmovies', loadChildren: () => import('./components/movies/allmovies/allmovies.module').then(m => m.AllmoviesModule) },
  { path: 'addmovie', loadChildren: () => import('./components/movies/addmovie/addmovie.module').then(m => m.AddmovieModule) },
  { path: 'allactors', loadChildren: () => import('./components/actors/allactors/allactors.module').then(m => m.AllactorsModule) },
  { path: 'addactor', loadChildren: () => import('./components/actors/addactor/addactor.module').then(m => m.AddactorModule) },
  { path: 'alldirectors', loadChildren: () => import('./components/directors/alldirectors/alldirectors.module').then(m => m.AlldirectorsModule) },
  { path: 'adddirector', loadChildren: () => import('./components/directors/adddirector/adddirector.module').then(m => m.AdddirectorModule) },
  { path: 'directordetails', loadChildren: () => import('./components/directors/alldirectors/directordetails/directordetails.module').then(m => m.DirectordetailsModule) }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieModule { }
