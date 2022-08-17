import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterLinkPipe } from '../../shared/pipes/character-link.pipe';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home.component';

import { Routes } from '@angular/router';
import { CharacterCardComponent } from '../../shared/character-card/character-card.component';
import { SharedModule } from '../../shared/shared.module';

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
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
