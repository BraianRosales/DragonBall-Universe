import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLink',
})
export class CharacterLinkPipe implements PipeTransform {
  /**Pipe que retorna un string characterName pero con sun primer letra en Mayuscula. */
  name: string | undefined;

  transform(characterName: string | undefined): string {
    this.name = characterName!.replace(/\b[a-z]/g, (c) => c.toUpperCase());
    return `/character/${this.name}`;
  }
}
