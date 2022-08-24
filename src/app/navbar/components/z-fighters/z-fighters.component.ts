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
  charactersZ: CharacterDB[] = [];
  
  constructor(private dragonBallService: DragonballService, private stateAppService: StateAppService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getCharactersZ()
    }, 1000);
  }

  getCharactersZ() {
      this.dragonBallService.charactersDB().subscribe((characters: CharacterDB[]) => {
        this.charactersZ = characters.filter((character:CharacterDB) => character.role.toLowerCase() === 'guerrero z')
      });
  }

  myListIsEmpty() {
    return this.charactersZ.length === 0;
  }
}
