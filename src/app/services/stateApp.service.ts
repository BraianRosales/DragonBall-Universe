import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterDB } from '../interfaces/index';

@Injectable({
  providedIn: 'root',
})
export class StateAppService {
  /**Lista inicial donde guardo una lista de CharacterDB. */
  myList: CharacterDB[] = [];
  /**Inicializo una variable con referencia myFavoritesList donde instansio un BehaviorSubject. */
  myFavoritesList = new BehaviorSubject<CharacterDB[]>([]);
  /**Declaro una variable myFavoritesList$ donde  guardo myFavoritesList que sos lo declaro como asObservable (Solo sirve para ser escuchado)*/
  myFavoritesList$ = this.myFavoritesList.asObservable();

   /**numero del universo inicial donde guardo una numero como estado unicial. */
  universeNum: number = 0;
  /**Inicializo una variable con referencia universeNumber donde instansio un BehaviorSubject. */
  universeNumber = new BehaviorSubject<number>(0);
  /**Declaro una variable universeNumber$ donde guardo myFavoritesList que sos lo declaro como asObservable (Solo sirve para ser escuchado)*/
  universeNumber$ = this.universeNumber.asObservable();

  /**Metodo donde pushea un nuevo CharacterDB. */
  addToFavorites(newCharacterDB: CharacterDB) {
    if (this.myListIds().includes(newCharacterDB.id)) {
      return
    }
    this.myList.push(newCharacterDB);
    this.myFavoritesList.next(this.myList);
  }

  /**Metodo que sirve para remover un character de la lista de characters por medio de su ID */
  removeFromFavorites(idCharacter: number) {
    this.myList = this.myList.filter( (character: CharacterDB) => character.id !== idCharacter );
    this.myFavoritesList.next(this.myList);
  }

  /**Metodo donde acumulo una lista de IDs de toda la variable myList. */
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
