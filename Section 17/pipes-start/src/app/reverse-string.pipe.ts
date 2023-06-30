import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length < 2) return value;
    return value.split('').reverse().join('');
  }

}
