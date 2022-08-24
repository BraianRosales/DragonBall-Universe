import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ZFightersComponent } from './z-fighters.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ZFightersComponent,
  },
];

@NgModule({
  declarations: [ZFightersComponent],
  imports: [CommonModule, MaterialModule, SharedModule, RouterModule.forChild(routes)],
})
export class ZFightersModule {}
