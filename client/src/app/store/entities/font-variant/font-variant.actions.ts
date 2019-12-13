import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { FontVariant } from './font-variant.model';

export const loadFontVariants = createAction(
  '[FontVariant/API] Load FontVariants', 
  props<{ fontVariants: FontVariant[] }>()
);

export const addFontVariant = createAction(
  '[FontVariant/API] Add FontVariant',
  props<{ fontVariant: FontVariant }>()
);

export const upsertFontVariant = createAction(
  '[FontVariant/API] Upsert FontVariant',
  props<{ fontVariant: FontVariant }>()
);

export const addFontVariants = createAction(
  '[FontVariant/API] Add FontVariants',
  props<{ fontVariants: FontVariant[] }>()
);

export const upsertFontVariants = createAction(
  '[FontVariant/API] Upsert FontVariants',
  props<{ fontVariants: FontVariant[] }>()
);

export const updateFontVariant = createAction(
  '[FontVariant/API] Update FontVariant',
  props<{ fontVariant: Update<FontVariant> }>()
);

export const updateFontVariants = createAction(
  '[FontVariant/API] Update FontVariants',
  props<{ fontVariants: Update<FontVariant>[] }>()
);

export const deleteFontVariant = createAction(
  '[FontVariant/API] Delete FontVariant',
  props<{ id: string }>()
);

export const deleteFontVariants = createAction(
  '[FontVariant/API] Delete FontVariants',
  props<{ ids: string[] }>()
);

export const clearFontVariants = createAction(
  '[FontVariant/API] Clear FontVariants'
);
