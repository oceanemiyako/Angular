import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enMaj'
})
export class EnMajPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()
  }


}