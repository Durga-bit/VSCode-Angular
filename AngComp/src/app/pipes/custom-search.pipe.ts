import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomSearch'
})
export class CustomSearchPipe
{
  transform(array: string[], startWith: string): any {
    let temp: string[] = [];
    temp = array.filter(a => a.startsWith(startWith));
    return temp;
}
}