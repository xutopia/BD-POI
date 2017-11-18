import { All } from '../actions/index.actions';
import { State } from '../models/state.model';
import { initialState } from '../models/initial-state.model';

export function appReducer(state: State = initialState, action: All): State {
  switch(action.type) {
    case 'SEARCH': {
      state.searches.push(action.payload);
      return {
        ...state,
      }
    }
  }
}
