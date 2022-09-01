import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateAppService } from '../../../services/stateApp.service';
import { DialogAnimationsComponent } from '../../../shared/dialog-animations/dialog-animations.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  /**Recibe la lista de favoritos enviada y actualizada de forma real time por el stateAppService. */
  myListFavorites$ = this.stateAppService.myFavoritesList$;

  constructor(
    private stateAppService: StateAppService,
    public dialog: MatDialog
  ) {}

  /**Retorna true cuando la lista de favoritos esta vacía, funciona como flag */
  myListIsEmpty() {
    return this.stateAppService.myList.length === 0;
  }

  /**Metodo que abre el Dialog, que contiene el componente DialogAnimations. */
  openDialog(): void {
    this.dialog.open(DialogAnimationsComponent, {
      width: '250px',
    });
  }
}
