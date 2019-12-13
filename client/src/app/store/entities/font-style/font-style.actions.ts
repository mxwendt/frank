import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { FontStyle } from './font-style.model';

export const loadFontStyles = createAction(
  '[FontStyle/API] Load FontStyles', 
  props<{ fontStyles: FontStyle[] }>()
);

export const addFontStyle = createAction(
  '[FontStyle/API] Add FontStyle',
  props<{ fontStyle: FontStyle }>()
);

export const upsertFontStyle = createAction(
  '[FontStyle/API] Upsert FontStyle',
  props<{ fontStyle: FontStyle }>()
);

export const addFontStyles = createAction(
  '[FontStyle/API] Add FontStyles',
  props<{ fontStyles: FontStyle[] }>()
);

export const upsertFontStyles = createAction(
  '[FontStyle/API] Upsert FontStyles',
  props<{ fontStyles: FontStyle[] }>()
);

export const updateFontStyle = createAction(
  '[FontStyle/API] Update FontStyle',
  props<{ fontStyle: Update<FontStyle> }>()
);

export const updateFontStyles = createAction(
  '[FontStyle/API] Update FontStyles',
  props<{ fontStyles: Update<FontStyle>[] }>()
);

export const deleteFontStyle = createAction(
  '[FontStyle/API] Delete FontStyle',
  props<{ id: string }>()
);

export const deleteFontStyles = createAction(
  '[FontStyle/API] Delete FontStyles',
  props<{ ids: string[] }>()
);

export const clearFontStyles = createAction(
  '[FontStyle/API] Clear FontStyles'
);
