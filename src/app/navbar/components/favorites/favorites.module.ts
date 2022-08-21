import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../../material/material.module';


const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
  },
];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, MaterialModule, SharedModule ,RouterModule.forChild(routes)],
})
export class FavoritesModule {}
