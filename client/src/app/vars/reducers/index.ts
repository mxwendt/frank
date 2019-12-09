import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromFontFamily from '../entities/font-family/font-family.reducer';

export const variablesFeatureKey = 'variables';

export interface State {

  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
