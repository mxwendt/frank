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
import * as fromFontStyle from '../entities/font-style/font-style.reducer';
import * as fromFontVariant from '../entities/font-variant/font-variant.reducer';
import * as fromFontWeight from '../entities/font-weight/font-weight.reducer';


export interface State {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.State;
  [fromFontSize.fontSizesFeatureKey]: fromFontSize.State;
  [fromLineHeight.lineHeightsFeatureKey]: fromLineHeight.State;
  [fromFontStyle.fontStylesFeatureKey]: fromFontStyle.State;
  [fromFontVariant.fontVariantsFeatureKey]: fromFontVariant.State;
  [fromFontWeight.fontWeightsFeatureKey]: fromFontWeight.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.reducer,
  [fromFontSize.fontSizesFeatureKey]: fromFontSize.reducer,
  [fromLineHeight.lineHeightsFeatureKey]: fromLineHeight.reducer,
  [fromFontStyle.fontStylesFeatureKey]: fromFontStyle.reducer,
  [fromFontVariant.fontVariantsFeatureKey]: fromFontVariant.reducer,
  [fromFontWeight.fontWeightsFeatureKey]: fromFontWeight.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectFontFamilyState = createFeatureSelector<fromFontFamily.State>(fromFontFamily.fontFamiliesFeatureKey);
export const selectAllFontFamilies = createSelector(selectFontFamilyState, fromFontFamily.selectAll);
export const selectFontFamilyTotal = createSelector(selectFontFamilyState, fromFontFamily.selectTotal);

export const selectFontSizeState = createFeatureSelector<fromFontSize.State>(fromFontSize.fontSizesFeatureKey);
export const selectAllFontSizes = createSelector(selectFontSizeState, fromFontSize.selectAll);
export const selectFontSizeTotal = createSelector(selectFontSizeState, fromFontSize.selectTotal);

export const selectFontStyleState = createFeatureSelector<fromFontStyle.State>(fromFontStyle.fontStylesFeatureKey);
export const selectAllFontStyles = createSelector(selectFontStyleState, fromFontStyle.selectAll);
export const selectFontStyleTotal = createSelector(selectFontStyleState, fromFontStyle.selectTotal);

export const selectFontVariantState = createFeatureSelector<fromFontVariant.State>(fromFontVariant.fontVariantsFeatureKey);
export const selectAllFontVariants = createSelector(selectFontVariantState, fromFontVariant.selectAll);
export const selectFontVariantTotal = createSelector(selectFontVariantState, fromFontVariant.selectTotal);

export const selectFontWeightState = createFeatureSelector<fromFontWeight.State>(fromFontWeight.fontWeightsFeatureKey);
export const selectAllFontWeights = createSelector(selectFontWeightState, fromFontWeight.selectAll);
export const selectFontWeightTotal = createSelector(selectFontWeightState, fromFontWeight.selectTotal);

export const selectLineHeightState = createFeatureSelector<fromLineHeight.State>(fromLineHeight.lineHeightsFeatureKey);
export const selectAllLineHeights = createSelector(selectLineHeightState, fromLineHeight.selectAll);
export const selectLineHeihgtTotal = createSelector(selectLineHeightState, fromLineHeight.selectTotal);