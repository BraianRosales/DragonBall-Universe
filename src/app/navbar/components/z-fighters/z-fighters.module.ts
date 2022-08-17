import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ZFightersComponent } from './z-fighters.component';

const routes: Routes = [
  {
    path: '',
    component: ZFightersComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ZFightersModule {}
