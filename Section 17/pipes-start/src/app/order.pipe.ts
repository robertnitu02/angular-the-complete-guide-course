import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  transform(value: any, orderType: string): any {
    if(orderType === 'ascending') {
      return value.sort((server1: any, server2: any) => {
        if (server1.name < server2.name)
          return -1;
        if (server1.name > server2.name)
          return 1;
        return 0;
      });
    }
    if (orderType === 'descending') {
      return value.sort((server1: any, server2: any) => {
        if (server1.name > server2.name)
          return -1;
        if (server1.name < server2.name)
          return 1;
        return 0;
      });
    }
    return value
  }

}
