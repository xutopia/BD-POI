import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {Store} from "@ngrx/store";

import { SearchAction } from '../actions/index.actions';
import { State } from '../models/state.model';
import { ApiService } from '../services/api.service';

@Injectable()
export class PoiEffects {
  constructor(
    private actions: Actions,
    private store: Store<State>,
    private apiService: ApiService,
  ) {}


  @Effect() search = this.actions.ofType('SEARCH').
    switchMap((action) => {
      return this.apiService.getPlaces({queryText: '369+lexington'}).map(res => {
        ({ type: 'SEARCH_RESULTS', payload: res })
      })
    })
}
