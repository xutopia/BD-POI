import { Action } from '@ngrx/store';
// import { Injectable } from '@angular/core';

// import { State } from './state.model';
// import { Query } from './query.model';

// export const Search = {
//   type: 'SEARCH',
//   // payload: Query,
// };
// @Injectable()
// export class SearchAction {
//   search(query): Action {
//     return {
//       type: 'SEARCH',
//       // paylaod: query,
//     }
//   }
// }

export class SearchAction implements Action {
  readonly type = 'SEARCH';
  constructor(public payload?: string) {}
}

// export const SearchResults = {
//   type: 'SEARCH_RESULTS',
//   // payload: any,
// };
//
// export const Details = {
//   type: 'DETAILS',
//   // payload: any,
// }
//
// export const Photos = {
//   type: 'PHOTOS',
//   // payload: Array<string>,
// }
//
// export const SearchByToken = {
//   type: 'SEARCH_BY_TOKEN',
//   // payload: string,
// }


export type All =  SearchAction;
