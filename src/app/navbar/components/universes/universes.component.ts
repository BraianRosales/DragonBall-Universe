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
  /**Con esta variable seteo el numero del url y se lo mando al stateApp.service.ts */ 
  universeNumber!: number;
  /**Guardo la lista de los personajes del universo correspondiente, seteando el universo con el mismo universeNumber. */
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

  /**Filtro los character por universo. */
  filterByUnivese(){
    this.dragonBallService.charactersDB()
    .subscribe((characters: CharacterDB[]) => {
      this.universeList = characters.filter((character: CharacterDB) => Number(character.universe) === this.universeNumber)
    })
  }

  /**Retorno true si la lista universeList esta vacía, funciona como flag. */
  myListIsEmpty() {
    return this.universeList.length === 0;
  }
}
