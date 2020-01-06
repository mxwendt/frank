import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromFontFamily from '../entities/props/fonts/font-family/font-family.reducer';
import * as fromFontSize from '../entities/props/fonts/font-size/font-size.reducer';
import * as fromLineHeight from '../entities/props/fonts/line-height/line-height.reducer';
import * as fromFontStyle from '../entities/props/fonts/font-style/font-style.reducer';
import * as fromFontVariant from '../entities/props/fonts/font-variant/font-variant.reducer';
import * as fromFontWeight from '../entities/props/fonts/font-weight/font-weight.reducer';

import * as fromLetterSpacing from '../entities/props/text/letter-spacing/letter-spacing.reducer';
import * as fromTextAlign from '../entities/props/text/text-align/text-align.reducer';
import * as fromTextIndent from '../entities/props/text/text-indent/text-indent.reducer';
import * as fromTextTransform from '../entities/props/text/text-transform/text-transform.reducer';
import * as fromWhiteSpace from '../entities/props/text/white-space/white-space.reducer';
import * as fromWordSpacing from '../entities/props/text/word-spacing/word-spacing.reducer';

import * as fromAbbreviation from '../entities/abbreviation/abbreviation.reducer';
import * as fromNode from '../entities/node/node.reducer';


export interface State {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.State;
  [fromFontSize.fontSizesFeatureKey]: fromFontSize.State;
  [fromLineHeight.lineHeightsFeatureKey]: fromLineHeight.State;
  [fromFontStyle.fontStylesFeatureKey]: fromFontStyle.State;
  [fromFontVariant.fontVariantsFeatureKey]: fromFontVariant.State;
  [fromFontWeight.fontWeightsFeatureKey]: fromFontWeight.State;
  [fromLetterSpacing.letterSpacingsFeatureKey]: fromLetterSpacing.State;
  [fromTextAlign.textAlignsFeatureKey]: fromTextAlign.State;
  [fromTextIndent.textIndentsFeatureKey]: fromTextIndent.State;
  [fromTextTransform.textTransformsFeatureKey]: fromTextTransform.State;
  [fromWhiteSpace.whiteSpacesFeatureKey]: fromWhiteSpace.State;
  [fromWordSpacing.wordSpacingsFeatureKey]: fromWordSpacing.State;
  [fromAbbreviation.abbreviationsFeatureKey]: fromAbbreviation.State;
  [fromNode.nodesFeatureKey]: fromNode.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromFontFamily.fontFamiliesFeatureKey]: fromFontFamily.reducer,
  [fromFontSize.fontSizesFeatureKey]: fromFontSize.reducer,
  [fromLineHeight.lineHeightsFeatureKey]: fromLineHeight.reducer,
  [fromFontStyle.fontStylesFeatureKey]: fromFontStyle.reducer,
  [fromFontVariant.fontVariantsFeatureKey]: fromFontVariant.reducer,
  [fromFontWeight.fontWeightsFeatureKey]: fromFontWeight.reducer,
  [fromLetterSpacing.letterSpacingsFeatureKey]: fromLetterSpacing.reducer,
  [fromTextAlign.textAlignsFeatureKey]: fromTextAlign.reducer,
  [fromTextIndent.textIndentsFeatureKey]: fromTextIndent.reducer,
  [fromTextTransform.textTransformsFeatureKey]: fromTextTransform.reducer,
  [fromWhiteSpace.whiteSpacesFeatureKey]: fromWhiteSpace.reducer,
  [fromWordSpacing.wordSpacingsFeatureKey]: fromWordSpacing.reducer,
  [fromAbbreviation.abbreviationsFeatureKey]: fromAbbreviation.reducer,
  [fromNode.nodesFeatureKey]: fromNode.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// variables - fonts props

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

// variables - text props

export const selectLetterSpacingState = createFeatureSelector<fromLetterSpacing.State>(fromLetterSpacing.letterSpacingsFeatureKey);
export const selectAllLetterSpacings = createSelector(selectLetterSpacingState, fromLetterSpacing.selectAll);
export const selectLetterSpacingTotal = createSelector(selectLetterSpacingState, fromLetterSpacing.selectTotal);

export const selectTextAlignState = createFeatureSelector<fromTextAlign.State>(fromTextAlign.textAlignsFeatureKey);
export const selectAllTextAligns = createSelector(selectTextAlignState, fromTextAlign.selectAll);
export const selectTextAlignTotal = createSelector(selectTextAlignState, fromTextAlign.selectTotal);

export const selectTextIndentState = createFeatureSelector<fromTextIndent.State>(fromTextIndent.textIndentsFeatureKey);
export const selectAllTextIndents = createSelector(selectTextIndentState, fromTextIndent.selectAll);
export const selectTextIndentTotal = createSelector(selectTextIndentState, fromTextIndent.selectTotal);

export const selectTextTransformState = createFeatureSelector<fromTextTransform.State>(fromTextTransform.textTransformsFeatureKey);
export const selectAllTextTransforms = createSelector(selectTextTransformState, fromTextTransform.selectAll);
export const selectTextTransformTotal = createSelector(selectTextTransformState, fromTextTransform.selectTotal);

export const selectWhiteSpaceState = createFeatureSelector<fromWhiteSpace.State>(fromWhiteSpace.whiteSpacesFeatureKey);
export const selectAllWhiteSpaces = createSelector(selectWhiteSpaceState, fromWhiteSpace.selectAll);
export const selectWhiteSpaceTotal = createSelector(selectWhiteSpaceState, fromWhiteSpace.selectTotal);

export const selectWordSpacingState = createFeatureSelector<fromWordSpacing.State>(fromWordSpacing.wordSpacingsFeatureKey);
export const selectAllWordSpacings = createSelector(selectWordSpacingState, fromWordSpacing.selectAll);
export const selectWordSpacingTotal = createSelector(selectWordSpacingState, fromWordSpacing.selectTotal);

// nodes

export const selectNodeState = createFeatureSelector<fromNode.State>(fromNode.nodesFeatureKey);
export const selectAllNodes = createSelector(selectNodeState, fromNode.selectAll);

// abbreviations

export const selectAbbreviationState = createFeatureSelector<fromAbbreviation.State>(fromAbbreviation.abbreviationsFeatureKey);
export const selectAllAbbreviations = createSelector(selectAbbreviationState, fromAbbreviation.selectAll);
