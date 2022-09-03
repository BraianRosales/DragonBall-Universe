import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversesComponent } from './universes.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UniversesComponent,
  },
];

@NgModule({
  declarations: [UniversesComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class UniversesModule {}
