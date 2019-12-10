import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromFontFamily from '../../store/entities/font-family/font-family.reducer';
import * as fromFontSize from '../entities/font-size/font-size.reducer';
import * as fromLineHeight from '../entities/line-height/line-height.reducer';


export interface State {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.State;
  [fromFontSize.fontSizesFeatureKey]: fromFontSize.State;
  [fromLineHeight.lineHeightsFeatureKey]: fromLineHeight.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.reducer,
  [fromFontSize.fontSizesFeatureKey]: fromFontSize.reducer,
  [fromLineHeight.lineHeightsFeatureKey]: fromLineHeight.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectFontFamilyState = createFeatureSelector<fromFontFamily.State>(fromFontFamily.fontFamiliesFeatureKey);
export const selectAllFontFamilies = createSelector(selectFontFamilyState, fromFontFamily.selectAll);
export const selectFontFamilyTotal = createSelector(selectFontFamilyState, fromFontFamily.selectTotal);

export const selectFontSizeState = createFeatureSelector<fromFontSize.State>(fromFontSize.fontSizesFeatureKey);
export const selectAllFontSizes = createSelector(selectFontSizeState, fromFontSize.selectAll);
export const selectFontSizeTotal = createSelector(selectFontSizeState, fromFontSize.selectTotal);

export const selectLineHeightState = createFeatureSelector<fromLineHeight.State>(fromLineHeight.lineHeightsFeatureKey);
export const selectAllLineHeights = createSelector(selectLineHeightState, fromLineHeight.selectAll);
export const selectLineHeihgtTotal = createSelector(selectLineHeightState, fromLineHeight.selectTotal);