import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterDB } from '../interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class StateAppService {
  myList: CharacterDB[] = [];
  myFavoritesList = new BehaviorSubject<CharacterDB[]>([]);
  myFavoritesList$ = this.myFavoritesList.asObservable();

  universeNum: number = 0;
  universeNumber = new BehaviorSubject<number>(0);
  universeNumber$ = this.universeNumber.asObservable();

  constructor() {}

  addToFavorites(newCharacterDB: CharacterDB) {
    if (this.myListIds().includes(newCharacterDB.id)) {
      return
    }
    this.myList.push(newCharacterDB);
    this.myFavoritesList.next(this.myList);
  }

  removeFromFavorites(idCharacter: number) {
    this.myList = this.myList.filter( (character: CharacterDB) => character.id !== idCharacter );
    this.myFavoritesList.next(this.myList);
  }

  myListIds(){
    return this.myList.map((character) =>  character.id);
  }

  clean(){
    this.myList = [];
    this.myFavoritesList.next(this.myList)
  }

  // Estado numerico del url en el componente universes.

  universe(universeNumber: number){
    this.universeNum = universeNumber;
    this.universeNumber.next(this.universeNum)
  }
  
}
