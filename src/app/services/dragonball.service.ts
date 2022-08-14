import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterDB } from '../interfaces/index';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  private _url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  charactersDB(): Observable<CharacterDB[]>{
    return this.httpClient.get<CharacterDB[]>(`${this._url}/characters`);
  }

  characterDetail(characterName: string): Observable<CharacterDB>{
    return this.httpClient.get<CharacterDB>(`${this._url}/characters/${characterName}`)
  }

}
