import { Component, OnInit } from '@angular/core';
import { CharacterDB } from 'src/app/interfaces';
import { DragonballService } from 'src/app/services/dragonball.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'DragonBall Universe';
  /**Contiene todos los personajes de la app. */
  dragonBallCharacters: CharacterDB[] = [];

  constructor(private DBservice: DragonballService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.DBservice.charactersDB().subscribe((characters: CharacterDB[]) => {
        this.dragonBallCharacters = characters;
      });
    }, 800);
  }
}
