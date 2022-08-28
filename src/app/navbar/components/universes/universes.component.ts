import { Component, OnInit } from '@angular/core';
import { StateAppService } from '../../../services/stateApp.service';
import { CharacterDB } from '../../../interfaces/index';
import { DragonballService } from '../../../services/dragonball.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-universes',
  templateUrl: './universes.component.html',
  styleUrls: ['./universes.component.css']
})
export class UniversesComponent implements OnInit{
  universeNumber!: number;
  universeList: CharacterDB[] = []

  constructor(private stateAppService: StateAppService, private dragonBallService: DragonballService,  private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(params => {
      this.universeNumber = Number(params.get('number'))
      this.stateAppService.universe(this.universeNumber)
    });
    this.stateAppService.universeNumber$.subscribe((number:number) => {
      this.filterByUnivese()
    })
  }

  filterByUnivese(){
    this.dragonBallService.charactersDB()
    .subscribe((characters: CharacterDB[]) => {
      this.universeList = characters.filter((character: CharacterDB) => Number(character.universe) === this.universeNumber)
    })
  }

  myListIsEmpty() {
    return this.universeList.length === 0;
  }
}
