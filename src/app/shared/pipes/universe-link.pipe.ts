import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universeLink'
})
export class UniverseLinkPipe implements PipeTransform {

  transform(universeNumber: number | undefined): string {
    return `/universe/${universeNumber}`;
  }

}
