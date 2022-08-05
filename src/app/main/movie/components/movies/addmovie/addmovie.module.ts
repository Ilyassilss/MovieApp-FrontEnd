import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddmovieComponent } from './addmovie.component';
import { FormsModule } from '@angular/forms';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreCommonModule } from '@core/common.module';
import { QuillModule } from 'ngx-quill';


const routes: Routes = [
  { path: '', component: AddmovieComponent }
];

@NgModule({
  declarations: [
    AddmovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ContentHeaderModule,
    CoreCommonModule,
    QuillModule.forRoot(),
    NgSelectModule,
    NgbModule
  ]
})
export class AddmovieModule { }
