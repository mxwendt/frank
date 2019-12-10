import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromFontFamily from '../../store/entities/font-family/font-family.reducer';


export interface State {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectFontFamilyState = createFeatureSelector<fromFontFamily.State>(fromFontFamily.fontFamiliesFeatureKey);
export const selectAllFontFamilies = createSelector(selectFontFamilyState, fromFontFamily.selectAll);
export const selectFontFamilyTotal = createSelector(selectFontFamilyState, fromFontFamily.selectTotal);
