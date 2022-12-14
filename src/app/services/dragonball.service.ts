import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterDB } from '../interfaces/index';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  /**variable donde guarda el apiUrl traida de environment. */
  private _url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  /**Metodo donde retorna todos los characters de la app */
  charactersDB(): Observable<CharacterDB[]>{
    return this.httpClient.get<CharacterDB[]>(`${this._url}/characters`);
  }

  /**Metodo donde retorna el character buscado con el parametro characterName. */
  characterDetail(characterName: string): Observable<CharacterDB>{
    return this.httpClient.get<CharacterDB>(`${this._url}/characters/${characterName}`)
  }
}
