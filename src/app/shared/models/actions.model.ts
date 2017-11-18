import { RouterAction } from '@ngrx/router-store';

import { State } from './state.model';
import { Query } from './query.model';

export type Search = {
  type: 'SEARCH',
  payload: Query,
};

export type SearchResults = {
  type: 'SEARCH_RESULTS',
  payload: any,
};

export type Details = {
  type: 'DETAILS',
  payload: any,
}

export type Photos = {
  type: 'PHOTOS',
  payload: Array<string>,
}

export type SearchByToken = {
  type: 'SEARCH_BY_TOKEN',
  payload: string,
}


export type Action = RouterAction<State> | Search | SearchResults | Details | Photos | SearchByToken;
