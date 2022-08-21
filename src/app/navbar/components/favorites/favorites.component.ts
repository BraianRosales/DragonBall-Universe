import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateAppService } from '../../../services/stateApp.service';
import { DialogAnimationsComponent } from '../../../shared/dialog-animations/dialog-animations.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  myListFavorites$ = this.stateAppService.myFavoritesList$;

  constructor(
    private stateAppService: StateAppService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  myListIsEmpty() {
    return this.stateAppService.myList.length === 0;
  }

  openDialog(): void {
    this.dialog.open(DialogAnimationsComponent, {
      width: '250px',
    });
  }
}
