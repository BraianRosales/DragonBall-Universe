import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StateAppService } from 'src/app/services/stateApp.service';
import { CharacterDB } from '../../interfaces/index';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {

  /**Duración base del snackBar */
  durationInSeconds = 2;

  /**Input que me pasa el padre de referencia character. */
  @Input() character!: CharacterDB;

  constructor(private stateAppService: StateAppService, private _snackBar: MatSnackBar) {}

  /**Metodo donde se agrega una character a favoritos. */
  addToFavorites(character: CharacterDB) {
    this.stateAppService.addToFavorites(character);
    this.openSnackBar()
  }

  /**Metodo que abre el alerta con un mensaje "Se agrego a favoritos". */
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: 'Se agrego a favoritos!'
    });
  }

  /**Remueve un character de favoritos. */
  removeCharacter(character: CharacterDB) {
    console.log('Objeto removido: ', character);
    this.stateAppService.removeFromFavorites(character.id);
    this.closeSnackBar()
  }

  /**Metodo que abre el alerta con un mensaje "Se removio de favoritos!" */
  closeSnackBar(){
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: 'Se removio de favoritos!'
    });
  }


  /**Retorna true si el character pasado por parametro existe en una lista de IDs. */
  characterInFavorites(character: CharacterDB) {
    return this.stateAppService.myListIds().includes(character.id);
  }
}
