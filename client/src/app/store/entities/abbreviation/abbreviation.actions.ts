import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Abbreviation } from './abbreviation.model';

export const loadAbbreviations = createAction(
  '[Abbreviation/API] Load Abbreviations', 
  props<{ abbreviations: Abbreviation[] }>()
);

export const addAbbreviation = createAction(
  '[Abbreviation/API] Add Abbreviation',
  props<{ abbreviation: Abbreviation }>()
);

export const upsertAbbreviation = createAction(
  '[Abbreviation/API] Upsert Abbreviation',
  props<{ abbreviation: Abbreviation }>()
);

export const addAbbreviations = createAction(
  '[Abbreviation/API] Add Abbreviations',
  props<{ abbreviations: Abbreviation[] }>()
);

export const upsertAbbreviations = createAction(
  '[Abbreviation/API] Upsert Abbreviations',
  props<{ abbreviations: Abbreviation[] }>()
);

export const updateAbbreviation = createAction(
  '[Abbreviation/API] Update Abbreviation',
  props<{ abbreviation: Update<Abbreviation> }>()
);

export const updateAbbreviations = createAction(
  '[Abbreviation/API] Update Abbreviations',
  props<{ abbreviations: Update<Abbreviation>[] }>()
);

export const deleteAbbreviation = createAction(
  '[Abbreviation/API] Delete Abbreviation',
  props<{ id: string }>()
);

export const deleteAbbreviations = createAction(
  '[Abbreviation/API] Delete Abbreviations',
  props<{ ids: string[] }>()
);

export const clearAbbreviations = createAction(
  '[Abbreviation/API] Clear Abbreviations'
);
