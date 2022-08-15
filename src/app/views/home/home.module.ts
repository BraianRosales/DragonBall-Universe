import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterLinkPipe } from './pipes/character-link.pipe';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CharactersListComponent,
    CharacterLinkPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
