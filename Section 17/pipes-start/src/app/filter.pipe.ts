import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '')
      return value;
    return value.filter((el: any) => el.status.startsWith(filterString));
  }
}
