import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital',
})
export class CapitalPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
