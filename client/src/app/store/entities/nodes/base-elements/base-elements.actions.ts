import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BaseElements } from './base-elements.model';

export const loadBaseElementss = createAction(
  '[BaseElements/API] Load BaseElementss', 
  props<{ baseElementss: BaseElements[] }>()
);

export const addBaseElements = createAction(
  '[BaseElements/API] Add BaseElements',
  props<{ baseElements: BaseElements }>()
);

export const upsertBaseElements = createAction(
  '[BaseElements/API] Upsert BaseElements',
  props<{ baseElements: BaseElements }>()
);

export const addBaseElementss = createAction(
  '[BaseElements/API] Add BaseElementss',
  props<{ baseElementss: BaseElements[] }>()
);

export const upsertBaseElementss = createAction(
  '[BaseElements/API] Upsert BaseElementss',
  props<{ baseElementss: BaseElements[] }>()
);

export const updateBaseElements = createAction(
  '[BaseElements/API] Update BaseElements',
  props<{ baseElements: Update<BaseElements> }>()
);

export const updateBaseElementss = createAction(
  '[BaseElements/API] Update BaseElementss',
  props<{ baseElementss: Update<BaseElements>[] }>()
);

export const deleteBaseElements = createAction(
  '[BaseElements/API] Delete BaseElements',
  props<{ id: string }>()
);

export const deleteBaseElementss = createAction(
  '[BaseElements/API] Delete BaseElementss',
  props<{ ids: string[] }>()
);

export const clearBaseElementss = createAction(
  '[BaseElements/API] Clear BaseElementss'
);
