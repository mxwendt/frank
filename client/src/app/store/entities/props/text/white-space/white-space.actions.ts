import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { WhiteSpace } from './white-space.model';

export const loadWhiteSpaces = createAction(
  '[WhiteSpace/API] Load WhiteSpaces', 
  props<{ whiteSpaces: WhiteSpace[] }>()
);

export const addWhiteSpace = createAction(
  '[WhiteSpace/API] Add WhiteSpace',
  props<{ whiteSpace: WhiteSpace }>()
);

export const upsertWhiteSpace = createAction(
  '[WhiteSpace/API] Upsert WhiteSpace',
  props<{ whiteSpace: WhiteSpace }>()
);

export const addWhiteSpaces = createAction(
  '[WhiteSpace/API] Add WhiteSpaces',
  props<{ whiteSpaces: WhiteSpace[] }>()
);

export const upsertWhiteSpaces = createAction(
  '[WhiteSpace/API] Upsert WhiteSpaces',
  props<{ whiteSpaces: WhiteSpace[] }>()
);

export const updateWhiteSpace = createAction(
  '[WhiteSpace/API] Update WhiteSpace',
  props<{ whiteSpace: Update<WhiteSpace> }>()
);

export const updateWhiteSpaces = createAction(
  '[WhiteSpace/API] Update WhiteSpaces',
  props<{ whiteSpaces: Update<WhiteSpace>[] }>()
);

export const deleteWhiteSpace = createAction(
  '[WhiteSpace/API] Delete WhiteSpace',
  props<{ id: string }>()
);

export const deleteWhiteSpaces = createAction(
  '[WhiteSpace/API] Delete WhiteSpaces',
  props<{ ids: string[] }>()
);

export const clearWhiteSpaces = createAction(
  '[WhiteSpace/API] Clear WhiteSpaces'
);
