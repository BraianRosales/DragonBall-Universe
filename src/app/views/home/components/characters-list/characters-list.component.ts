import { Component, Input, OnInit } from '@angular/core';
import { CharacterDB } from 'src/app/interfaces';
import { StateAppService } from 'src/app/services/stateApp.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  @Input() characters: CharacterDB[] = [];

  constructor() {}

  ngOnInit(): void {}
}
