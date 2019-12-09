import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { FontFamily } from './font-family.model';

export const loadFontFamilys = createAction(
  '[FontFamily/API] Load FontFamilys', 
  props<{ fontFamilys: FontFamily[] }>()
);

export const addFontFamily = createAction(
  '[FontFamily/API] Add FontFamily',
  props<{ fontFamily: FontFamily }>()
);

export const upsertFontFamily = createAction(
  '[FontFamily/API] Upsert FontFamily',
  props<{ fontFamily: FontFamily }>()
);

export const addFontFamilys = createAction(
  '[FontFamily/API] Add FontFamilys',
  props<{ fontFamilys: FontFamily[] }>()
);

export const upsertFontFamilys = createAction(
  '[FontFamily/API] Upsert FontFamilys',
  props<{ fontFamilys: FontFamily[] }>()
);

export const updateFontFamily = createAction(
  '[FontFamily/API] Update FontFamily',
  props<{ fontFamily: Update<FontFamily> }>()
);

export const updateFontFamilys = createAction(
  '[FontFamily/API] Update FontFamilys',
  props<{ fontFamilys: Update<FontFamily>[] }>()
);

export const deleteFontFamily = createAction(
  '[FontFamily/API] Delete FontFamily',
  props<{ id: string }>()
);

export const deleteFontFamilys = createAction(
  '[FontFamily/API] Delete FontFamilys',
  props<{ ids: string[] }>()
);

export const clearFontFamilys = createAction(
  '[FontFamily/API] Clear FontFamilys'
);
