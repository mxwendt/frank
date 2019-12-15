import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TextIndent } from './text-indent.model';

export const loadTextIndents = createAction(
  '[TextIndent/API] Load TextIndents', 
  props<{ textIndents: TextIndent[] }>()
);

export const addTextIndent = createAction(
  '[TextIndent/API] Add TextIndent',
  props<{ textIndent: TextIndent }>()
);

export const upsertTextIndent = createAction(
  '[TextIndent/API] Upsert TextIndent',
  props<{ textIndent: TextIndent }>()
);

export const addTextIndents = createAction(
  '[TextIndent/API] Add TextIndents',
  props<{ textIndents: TextIndent[] }>()
);

export const upsertTextIndents = createAction(
  '[TextIndent/API] Upsert TextIndents',
  props<{ textIndents: TextIndent[] }>()
);

export const updateTextIndent = createAction(
  '[TextIndent/API] Update TextIndent',
  props<{ textIndent: Update<TextIndent> }>()
);

export const updateTextIndents = createAction(
  '[TextIndent/API] Update TextIndents',
  props<{ textIndents: Update<TextIndent>[] }>()
);

export const deleteTextIndent = createAction(
  '[TextIndent/API] Delete TextIndent',
  props<{ id: string }>()
);

export const deleteTextIndents = createAction(
  '[TextIndent/API] Delete TextIndents',
  props<{ ids: string[] }>()
);

export const clearTextIndents = createAction(
  '[TextIndent/API] Clear TextIndents'
);
