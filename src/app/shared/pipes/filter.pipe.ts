import {Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'filterResults' })
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, filters: Array<any>): Array<any> {
    if (items && items.length) {
      // console.log('custom pipe, items: ', items);
      // console.log('custom pipe, filters: ', filters);
      let filteredResults = [];

      filters.forEach(filter => {
        items.forEach(item => {
          if (filter.name === item.types[0] && filter.isSelected) {
            filteredResults.push(item);
          }
        });
      });
      return filteredResults.length > 0 ? filteredResults : items;
    } else {
      return items;
    }
  }
}
