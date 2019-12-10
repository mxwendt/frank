import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { LineHeight } from './line-height.model';

export const loadLineHeights = createAction(
  '[LineHeight/API] Load LineHeights', 
  props<{ lineHeights: LineHeight[] }>()
);

export const addLineHeight = createAction(
  '[LineHeight/API] Add LineHeight',
  props<{ lineHeight: LineHeight }>()
);

export const upsertLineHeight = createAction(
  '[LineHeight/API] Upsert LineHeight',
  props<{ lineHeight: LineHeight }>()
);

export const addLineHeights = createAction(
  '[LineHeight/API] Add LineHeights',
  props<{ lineHeights: LineHeight[] }>()
);

export const upsertLineHeights = createAction(
  '[LineHeight/API] Upsert LineHeights',
  props<{ lineHeights: LineHeight[] }>()
);

export const updateLineHeight = createAction(
  '[LineHeight/API] Update LineHeight',
  props<{ lineHeight: Update<LineHeight> }>()
);

export const updateLineHeights = createAction(
  '[LineHeight/API] Update LineHeights',
  props<{ lineHeights: Update<LineHeight>[] }>()
);

export const deleteLineHeight = createAction(
  '[LineHeight/API] Delete LineHeight',
  props<{ id: string }>()
);

export const deleteLineHeights = createAction(
  '[LineHeight/API] Delete LineHeights',
  props<{ ids: string[] }>()
);

export const clearLineHeights = createAction(
  '[LineHeight/API] Clear LineHeights'
);
