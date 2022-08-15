import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersListComponent } from '../home/components/characters-list/characters-list.component';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CharacterLinkPipe } from './pipes/character-link.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CharactersListComponent,
    CharacterDetailComponent,
    HeaderComponent,
    CharacterLinkPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class HomeModule { }
