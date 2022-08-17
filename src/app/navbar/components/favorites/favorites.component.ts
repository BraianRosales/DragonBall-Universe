import { Component, OnInit } from '@angular/core';
import { StateAppService } from '../../../services/stateApp.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {

  myListFavorites$ = this.stateAppService.myFavoritesList$;

  constructor(private stateAppService: StateAppService) {}

  ngOnInit(): void {}

  removeFromFavorites(id: number){
    console.log(id);
    this.stateAppService.removeFromFavorites(id)
  }
}
