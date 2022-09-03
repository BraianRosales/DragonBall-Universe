import { Component, OnInit } from '@angular/core';

import { DragonballService } from '../../../services/dragonball.service';
import { CharacterDB } from '../../../interfaces/index';
import { StateAppService } from '../../../services/stateApp.service';


@Component({
  selector: 'app-z-fighters',
  templateUrl: './z-fighters.component.html',
  styleUrls: ['./z-fighters.component.css'],
})
export class ZFightersComponent implements OnInit {
  /**Lista de personajesZ */
  charactersZ: CharacterDB[] = [];
  
  constructor(private dragonBallService: DragonballService, private stateAppService: StateAppService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getCharactersZ()
    }, 500);
  }

  /**Metodo que se utiliza para filtrar la lista de guerreros, en este caso solo nos trae los guerreros z */
  getCharactersZ() {
      this.dragonBallService.charactersDB().subscribe((characters: CharacterDB[]) => {
        this.charactersZ = characters.filter((character:CharacterDB) => character.role.toLowerCase() === 'guerrero z')
      });
  }

  /**Metodo flag que indica si la lista esta vacia, funciona como condición. */
  myListIsEmpty() {
    return this.charactersZ.length === 0;
  }
}
