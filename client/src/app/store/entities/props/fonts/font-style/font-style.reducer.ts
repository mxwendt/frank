import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FontStyle } from './font-style.model';
import * as FontStyleActions from './font-style.actions';

export const fontStylesFeatureKey = 'fontStyles';

export interface State extends EntityState<FontStyle> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FontStyle> = createEntityAdapter<FontStyle>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1', '2'],
  entities: {
    '0': {
      id: '0',
      value: 'normal',
      defaultValue: true
    },
    '1': {
      id: '1',
      value: 'italic',
      defaultValue: true
    },
    '2': {
      id: '2',
      value: 'oblique',
      defaultValue: true
    }
    // TODO: oblique <angle>
  }
});

const fontStyleReducer = createReducer(
  initialState,
  on(FontStyleActions.addFontStyle,
    (state, action) => adapter.addOne(action.fontStyle, state)
  ),
  on(FontStyleActions.upsertFontStyle,
    (state, action) => adapter.upsertOne(action.fontStyle, state)
  ),
  on(FontStyleActions.addFontStyles,
    (state, action) => adapter.addMany(action.fontStyles, state)
  ),
  on(FontStyleActions.upsertFontStyles,
    (state, action) => adapter.upsertMany(action.fontStyles, state)
  ),
  on(FontStyleActions.updateFontStyle,
    (state, action) => adapter.updateOne(action.fontStyle, state)
  ),
  on(FontStyleActions.updateFontStyles,
    (state, action) => adapter.updateMany(action.fontStyles, state)
  ),
  on(FontStyleActions.deleteFontStyle,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(FontStyleActions.deleteFontStyles,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(FontStyleActions.loadFontStyles,
    (state, action) => adapter.addAll(action.fontStyles, state)
  ),
  on(FontStyleActions.clearFontStyles,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return fontStyleReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
