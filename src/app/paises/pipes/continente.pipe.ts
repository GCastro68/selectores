import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continente',
})
export class ContinentePipe implements PipeTransform {
  transform(valor: string): string {
    let i = 0;
    let nomCorto: string = '';

    while (valor[i] !== ' ') {
      nomCorto += valor[i];
      i++;
    }

    return nomCorto.toLowerCase();
  }
}
