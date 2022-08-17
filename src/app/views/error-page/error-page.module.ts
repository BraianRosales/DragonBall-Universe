import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ErrorPageComponent } from './error-page.component';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
  }
]

@NgModule({
  declarations: [
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorPageModule { }
