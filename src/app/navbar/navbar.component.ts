import { Component, OnInit } from '@angular/core';
import { StateAppService } from '../services/stateApp.service';
import { CharacterDB } from '../interfaces/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myList: CharacterDB[] = []

  constructor(private stateService: StateAppService) { }

  ngOnInit(): void {
    this.stateService.myFavoritesList$.subscribe((list: CharacterDB[])=>{
      this.myList = list;
    })
  }

}
