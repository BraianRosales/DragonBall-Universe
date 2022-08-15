import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailComponent,
  }
]

@NgModule({
  declarations: [
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class CharacterDetailModule { }
