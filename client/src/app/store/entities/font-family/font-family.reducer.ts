import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FontFamily } from './font-family.model';
import * as FontFamilyActions from './font-family.actions';

export const fontFamiliesFeatureKey = 'fontFamilies';

export interface State extends EntityState<FontFamily> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FontFamily> = createEntityAdapter<FontFamily>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1', '2', '3', '4', '5'],
  entities: {
    '0': {
      id: '0',
      value: 'serif',
      defaultValue: true
    },
    '1': {
      id: '0',
      value: 'sans-serif',
      defaultValue: true
    },
    '2': {
      id: '0',
      value: 'monospace',
      defaultValue: true
    },
    '3': {
      id: '0',
      value: 'cursive',
      defaultValue: true
    },
    '4': {
      id: '0',
      value: 'fantasy',
      defaultValue: true
    },
    '5': {
      id: '0',
      value: 'system-ui',
      defaultValue: true
    }
  }

});

const fontFamilyReducer = createReducer(
  initialState,
  on(FontFamilyActions.addFontFamily,
    (state, action) => adapter.addOne(action.fontFamily, state)
  ),
  on(FontFamilyActions.upsertFontFamily,
    (state, action) => adapter.upsertOne(action.fontFamily, state)
  ),
  on(FontFamilyActions.addFontFamilys,
    (state, action) => adapter.addMany(action.fontFamilys, state)
  ),
  on(FontFamilyActions.upsertFontFamilys,
    (state, action) => adapter.upsertMany(action.fontFamilys, state)
  ),
  on(FontFamilyActions.updateFontFamily,
    (state, action) => adapter.updateOne(action.fontFamily, state)
  ),
  on(FontFamilyActions.updateFontFamilys,
    (state, action) => adapter.updateMany(action.fontFamilys, state)
  ),
  on(FontFamilyActions.deleteFontFamily,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(FontFamilyActions.deleteFontFamilys,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(FontFamilyActions.loadFontFamilys,
    (state, action) => adapter.addAll(action.fontFamilys, state)
  ),
  on(FontFamilyActions.clearFontFamilys,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return fontFamilyReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
