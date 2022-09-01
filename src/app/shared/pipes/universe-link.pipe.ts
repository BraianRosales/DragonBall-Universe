import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universeLink'
})
export class UniverseLinkPipe implements PipeTransform {
  /**Pipe que retorna un ling con su parametro(universeNumber) */

  transform(universeNumber: number | undefined): string {
    return `/universe/${universeNumber}`;
  }

}
