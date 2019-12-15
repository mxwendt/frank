import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TextAlign } from './text-align.model';

export const loadTextAligns = createAction(
  '[TextAlign/API] Load TextAligns', 
  props<{ textAligns: TextAlign[] }>()
);

export const addTextAlign = createAction(
  '[TextAlign/API] Add TextAlign',
  props<{ textAlign: TextAlign }>()
);

export const upsertTextAlign = createAction(
  '[TextAlign/API] Upsert TextAlign',
  props<{ textAlign: TextAlign }>()
);

export const addTextAligns = createAction(
  '[TextAlign/API] Add TextAligns',
  props<{ textAligns: TextAlign[] }>()
);

export const upsertTextAligns = createAction(
  '[TextAlign/API] Upsert TextAligns',
  props<{ textAligns: TextAlign[] }>()
);

export const updateTextAlign = createAction(
  '[TextAlign/API] Update TextAlign',
  props<{ textAlign: Update<TextAlign> }>()
);

export const updateTextAligns = createAction(
  '[TextAlign/API] Update TextAligns',
  props<{ textAligns: Update<TextAlign>[] }>()
);

export const deleteTextAlign = createAction(
  '[TextAlign/API] Delete TextAlign',
  props<{ id: string }>()
);

export const deleteTextAligns = createAction(
  '[TextAlign/API] Delete TextAligns',
  props<{ ids: string[] }>()
);

export const clearTextAligns = createAction(
  '[TextAlign/API] Clear TextAligns'
);
