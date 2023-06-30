import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number = -1): any {
    if (value.length > limit && limit > -1)
      return value.substring(0, limit) + ' ...';
    return value;
  }

}
