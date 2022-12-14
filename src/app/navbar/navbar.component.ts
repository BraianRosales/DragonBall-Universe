import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateAppService } from '../services/stateApp.service';
import { CharacterDB } from '../interfaces/index';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  myList: CharacterDB[] = [];
  allUniverses: number[] = []

  /**Genera un evento y se lo manda al padre indicando con un emit() que se ejecuto dicho evento. */
  @Output() close = new EventEmitter<string>()

  constructor(private dragonBallService: DragonballService, 
              private stateService: StateAppService, 
              ) {}

  ngOnInit(): void {
    this.stateService.myFavoritesList$.subscribe((list: CharacterDB[]) => {
      this.myList = list;
    });
    this.dragonBallService.charactersDB().subscribe((characters) => {
        this.allUniverses =  characters.map((character: CharacterDB) => Number(character.universe))
        // Con el array Set no dejamos ingresar repetidos.
        this.allUniverses =  [...new Set(this.allUniverses)];
        // Ordenamos el array de numeros de menor a mayor.
        this.allUniverses = this.allUniverses.sort((a, b) => a - b )
    })
  }
  
/** Evento enviado al padre para cerrar el navbar */
  closeNavbar(){
    this.close.emit()
  }

}
