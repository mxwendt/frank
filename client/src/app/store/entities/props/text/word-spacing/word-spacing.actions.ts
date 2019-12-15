import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { WordSpacing } from './word-spacing.model';

export const loadWordSpacings = createAction(
  '[WordSpacing/API] Load WordSpacings', 
  props<{ wordSpacings: WordSpacing[] }>()
);

export const addWordSpacing = createAction(
  '[WordSpacing/API] Add WordSpacing',
  props<{ wordSpacing: WordSpacing }>()
);

export const upsertWordSpacing = createAction(
  '[WordSpacing/API] Upsert WordSpacing',
  props<{ wordSpacing: WordSpacing }>()
);

export const addWordSpacings = createAction(
  '[WordSpacing/API] Add WordSpacings',
  props<{ wordSpacings: WordSpacing[] }>()
);

export const upsertWordSpacings = createAction(
  '[WordSpacing/API] Upsert WordSpacings',
  props<{ wordSpacings: WordSpacing[] }>()
);

export const updateWordSpacing = createAction(
  '[WordSpacing/API] Update WordSpacing',
  props<{ wordSpacing: Update<WordSpacing> }>()
);

export const updateWordSpacings = createAction(
  '[WordSpacing/API] Update WordSpacings',
  props<{ wordSpacings: Update<WordSpacing>[] }>()
);

export const deleteWordSpacing = createAction(
  '[WordSpacing/API] Delete WordSpacing',
  props<{ id: string }>()
);

export const deleteWordSpacings = createAction(
  '[WordSpacing/API] Delete WordSpacings',
  props<{ ids: string[] }>()
);

export const clearWordSpacings = createAction(
  '[WordSpacing/API] Clear WordSpacings'
);
