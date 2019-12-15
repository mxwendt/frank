import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { LetterSpacing } from './letter-spacing.model';

export const loadLetterSpacings = createAction(
  '[LetterSpacing/API] Load LetterSpacings', 
  props<{ letterSpacings: LetterSpacing[] }>()
);

export const addLetterSpacing = createAction(
  '[LetterSpacing/API] Add LetterSpacing',
  props<{ letterSpacing: LetterSpacing }>()
);

export const upsertLetterSpacing = createAction(
  '[LetterSpacing/API] Upsert LetterSpacing',
  props<{ letterSpacing: LetterSpacing }>()
);

export const addLetterSpacings = createAction(
  '[LetterSpacing/API] Add LetterSpacings',
  props<{ letterSpacings: LetterSpacing[] }>()
);

export const upsertLetterSpacings = createAction(
  '[LetterSpacing/API] Upsert LetterSpacings',
  props<{ letterSpacings: LetterSpacing[] }>()
);

export const updateLetterSpacing = createAction(
  '[LetterSpacing/API] Update LetterSpacing',
  props<{ letterSpacing: Update<LetterSpacing> }>()
);

export const updateLetterSpacings = createAction(
  '[LetterSpacing/API] Update LetterSpacings',
  props<{ letterSpacings: Update<LetterSpacing>[] }>()
);

export const deleteLetterSpacing = createAction(
  '[LetterSpacing/API] Delete LetterSpacing',
  props<{ id: string }>()
);

export const deleteLetterSpacings = createAction(
  '[LetterSpacing/API] Delete LetterSpacings',
  props<{ ids: string[] }>()
);

export const clearLetterSpacings = createAction(
  '[LetterSpacing/API] Clear LetterSpacings'
);
