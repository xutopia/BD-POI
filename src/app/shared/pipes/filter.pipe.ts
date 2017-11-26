import {Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'filterResults' })
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, trigger: boolean, filters: Array<any>): Array<any> {
    let filteredResults = [];

    filters.forEach(filter => {
      items.forEach(item => {
        if (filter.name === item.types[0] && filter.isSelected) {
          filteredResults.push(item);
        }
      });
    });
    return filteredResults.length > 0 ? filteredResults : items;
  }
}
