import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { FontSize } from './font-size.model';

export const loadFontSizes = createAction(
  '[FontSize/API] Load FontSizes', 
  props<{ fontSizes: FontSize[] }>()
);

export const addFontSize = createAction(
  '[FontSize/API] Add FontSize',
  props<{ fontSize: FontSize }>()
);

export const upsertFontSize = createAction(
  '[FontSize/API] Upsert FontSize',
  props<{ fontSize: FontSize }>()
);

export const addFontSizes = createAction(
  '[FontSize/API] Add FontSizes',
  props<{ fontSizes: FontSize[] }>()
);

export const upsertFontSizes = createAction(
  '[FontSize/API] Upsert FontSizes',
  props<{ fontSizes: FontSize[] }>()
);

export const updateFontSize = createAction(
  '[FontSize/API] Update FontSize',
  props<{ fontSize: Update<FontSize> }>()
);

export const updateFontSizes = createAction(
  '[FontSize/API] Update FontSizes',
  props<{ fontSizes: Update<FontSize>[] }>()
);

export const deleteFontSize = createAction(
  '[FontSize/API] Delete FontSize',
  props<{ id: string }>()
);

export const deleteFontSizes = createAction(
  '[FontSize/API] Delete FontSizes',
  props<{ ids: string[] }>()
);

export const clearFontSizes = createAction(
  '[FontSize/API] Clear FontSizes'
);
