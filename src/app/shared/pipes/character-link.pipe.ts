import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLink',
})
export class CharacterLinkPipe implements PipeTransform {
  name: string | undefined;

  transform(characterName: string | undefined): string {
    this.name = characterName!.replace(/\b[a-z]/g, (c) => c.toUpperCase());
    return `/character/${this.name}`;
  }
}
