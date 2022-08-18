import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { RouterModule } from '@angular/router';
import { CharacterLinkPipe } from './pipes/character-link.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MaterialModule,RouterModule, CommonModule],
  exports: [CharacterCardComponent],
  declarations: [CharacterCardComponent,CharacterLinkPipe],
  providers: [],
})
export class SharedModule {}