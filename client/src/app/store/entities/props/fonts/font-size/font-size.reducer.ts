import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FontSize } from './font-size.model';
import * as FontSizeActions from './font-size.actions';

export const fontSizesFeatureKey = 'fontSizes';

export interface State extends EntityState<FontSize> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FontSize> = createEntityAdapter<FontSize>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0'],
  entities: {
    '0': {
      id: '0',
      value: 16,
      unit: 'px',
      defaultValue: true
    }
  }

});

const fontSizeReducer = createReducer(
  initialState,
  on(FontSizeActions.addFontSize,
    (state, action) => adapter.addOne(action.fontSize, state)
  ),
  on(FontSizeActions.upsertFontSize,
    (state, action) => adapter.upsertOne(action.fontSize, state)
  ),
  on(FontSizeActions.addFontSizes,
    (state, action) => adapter.addMany(action.fontSizes, state)
  ),
  on(FontSizeActions.upsertFontSizes,
    (state, action) => adapter.upsertMany(action.fontSizes, state)
  ),
  on(FontSizeActions.updateFontSize,
    (state, action) => adapter.updateOne(action.fontSize, state)
  ),
  on(FontSizeActions.updateFontSizes,
    (state, action) => adapter.updateMany(action.fontSizes, state)
  ),
  on(FontSizeActions.deleteFontSize,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(FontSizeActions.deleteFontSizes,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(FontSizeActions.loadFontSizes,
    (state, action) => adapter.addAll(action.fontSizes, state)
  ),
  on(FontSizeActions.clearFontSizes,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return fontSizeReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
