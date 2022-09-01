import { Component, Input, OnInit } from '@angular/core';
import { StateAppService } from 'src/app/services/stateApp.service';
import { CharacterDB } from '../../interfaces/index';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  /**Input que me pasa el padre de referencia character. */
  @Input() character!: CharacterDB;

  constructor(private stateAppService: StateAppService) {}

  /**Metodo donde se agrega una character a favoritos. */
  addToFavorites(character: CharacterDB) {
    this.stateAppService.addToFavorites(character);
  }

  /**Remueve un character de favoritos. */
  removeCharacter(character: CharacterDB) {
    console.log('Objeto removido: ', character);
    this.stateAppService.removeFromFavorites(character.id);
  }

  /**Retorna true si el character pasado por parametro existe en una lista de IDs. */
  characterInFavorites(character: CharacterDB) {
    return this.stateAppService.myListIds().includes(character.id);
  }
}
