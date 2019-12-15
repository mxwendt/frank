import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { TextTransform } from './text-transform.model';

export const loadTextTransforms = createAction(
  '[TextTransform/API] Load TextTransforms', 
  props<{ textTransforms: TextTransform[] }>()
);

export const addTextTransform = createAction(
  '[TextTransform/API] Add TextTransform',
  props<{ textTransform: TextTransform }>()
);

export const upsertTextTransform = createAction(
  '[TextTransform/API] Upsert TextTransform',
  props<{ textTransform: TextTransform }>()
);

export const addTextTransforms = createAction(
  '[TextTransform/API] Add TextTransforms',
  props<{ textTransforms: TextTransform[] }>()
);

export const upsertTextTransforms = createAction(
  '[TextTransform/API] Upsert TextTransforms',
  props<{ textTransforms: TextTransform[] }>()
);

export const updateTextTransform = createAction(
  '[TextTransform/API] Update TextTransform',
  props<{ textTransform: Update<TextTransform> }>()
);

export const updateTextTransforms = createAction(
  '[TextTransform/API] Update TextTransforms',
  props<{ textTransforms: Update<TextTransform>[] }>()
);

export const deleteTextTransform = createAction(
  '[TextTransform/API] Delete TextTransform',
  props<{ id: string }>()
);

export const deleteTextTransforms = createAction(
  '[TextTransform/API] Delete TextTransforms',
  props<{ ids: string[] }>()
);

export const clearTextTransforms = createAction(
  '[TextTransform/API] Clear TextTransforms'
);
