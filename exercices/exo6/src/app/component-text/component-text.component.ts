import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-component-text',
  templateUrl: './component-text.component.html',
  styleUrls: ['./component-text.component.css']
})
@Pipe({
  name: 'truncateText'
})

export class ComponentTextComponent implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.substring(0, maxLength) + ' ... ';
    }
  }
}





