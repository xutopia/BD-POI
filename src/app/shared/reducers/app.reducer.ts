import { Action } from '../models/actions.model';
import { State } from '../models/state.model';
import { initialState } from '../models/initial-state.model';

export function appReducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case 'SEARCH': {
      state.searches.push(action.payload);
      return {
        ...state,
      }
    }
    case 'SEARCH_RESULTS': {
      return {
        ...state,
        ...action.payload,
      }
    }
  }
}
