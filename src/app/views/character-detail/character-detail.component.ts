import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragonballService } from 'src/app/services/dragonball.service';
import { CharacterDB } from '../../interfaces/index';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  
  name: string | undefined;
  character!: CharacterDB;

  constructor(private route: ActivatedRoute, private dragonBallService: DragonballService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Cambiar a mayuscula la primer letra del nombre que obtengo por parametro con una expresion regular, tambien sirve para una cadena de strings.
      this.name = params.get('name')!.replace(/\b[a-z]/g,c=>c.toUpperCase());

      this.dragonBallService.characterDetail(this.name).subscribe(res =>{
        this.character = res
      })
    });
  }

}
