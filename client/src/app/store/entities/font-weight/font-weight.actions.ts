import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { FontWeight } from './font-weight.model';

export const loadFontWeights = createAction(
  '[FontWeight/API] Load FontWeights', 
  props<{ fontWeights: FontWeight[] }>()
);

export const addFontWeight = createAction(
  '[FontWeight/API] Add FontWeight',
  props<{ fontWeight: FontWeight }>()
);

export const upsertFontWeight = createAction(
  '[FontWeight/API] Upsert FontWeight',
  props<{ fontWeight: FontWeight }>()
);

export const addFontWeights = createAction(
  '[FontWeight/API] Add FontWeights',
  props<{ fontWeights: FontWeight[] }>()
);

export const upsertFontWeights = createAction(
  '[FontWeight/API] Upsert FontWeights',
  props<{ fontWeights: FontWeight[] }>()
);

export const updateFontWeight = createAction(
  '[FontWeight/API] Update FontWeight',
  props<{ fontWeight: Update<FontWeight> }>()
);

export const updateFontWeights = createAction(
  '[FontWeight/API] Update FontWeights',
  props<{ fontWeights: Update<FontWeight>[] }>()
);

export const deleteFontWeight = createAction(
  '[FontWeight/API] Delete FontWeight',
  props<{ id: string }>()
);

export const deleteFontWeights = createAction(
  '[FontWeight/API] Delete FontWeights',
  props<{ ids: string[] }>()
);

export const clearFontWeights = createAction(
  '[FontWeight/API] Clear FontWeights'
);
