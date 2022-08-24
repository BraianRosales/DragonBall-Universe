import { Component, OnInit } from '@angular/core';
import { CharacterDB } from '../../../interfaces/index';
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'app-z-fighters',
  templateUrl: './z-fighters.component.html',
  styleUrls: ['./z-fighters.component.css'],
})
export class ZFightersComponent implements OnInit {
  listZ: CharacterDB[] = [];

  constructor(private dragonballService: DragonballService) {}

  ngOnInit(): void {
    this.dragonballService.charactersDB().subscribe(characters => {
      this.listZ = characters.filter((character:CharacterDB) => character.role === 'Guerrero Z')
    })
  }
}
