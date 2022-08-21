import { Component, Input, OnInit } from '@angular/core';
import { StateAppService } from 'src/app/services/stateApp.service';
import { CharacterDB } from '../../interfaces/index';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: CharacterDB;

  constructor(private stateAppService: StateAppService) {}

  ngOnInit(): void {}

  addToFavorites(character: CharacterDB) {
    console.log('Objeto agregado: ', character);
    this.stateAppService.addToFavorites(character);
  }

  removeCharacter(character: CharacterDB){
    console.log('Objeto removido: ', character);
    this.stateAppService.removeFromFavorites(character.id)
  }

  characterInFavorites(character: CharacterDB){
    return this.stateAppService.myListIds().includes(character.id)
  }
}
