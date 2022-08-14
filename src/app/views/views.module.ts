import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CharactersListComponent } from '../components/characters-list/characters-list.component';
import { MaterialModule } from '../material/material.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    ErrorPageComponent,
    CharactersListComponent,
    CharacterDetailComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HomeComponent,
    ErrorPageComponent
  ]
})
export class ViewsModule { }
