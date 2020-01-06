import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FontWeight } from './font-weight.model';
import * as FontWeightActions from './font-weight.actions';

export const fontWeightsFeatureKey = 'fontWeights';

export interface State extends EntityState<FontWeight> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FontWeight> = createEntityAdapter<FontWeight>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1', '2', '3'],
  entities: {
    '0': {
      id: '0',
      value: 'normal',
      defaultValue: true
    },
    '1': {
      id: '1',
      value: 'bold',
      defaultValue: true
    },
    '2': {
      id: '2',
      value: 'light',
      defaultValue: true
    },
    '3': {
      id: '3',
      value: 'lighter',
      defaultValue: true
    }
    // TODO: add number
  }

});

const fontWeightReducer = createReducer(
  initialState,
  on(FontWeightActions.addFontWeight,
    (state, action) => adapter.addOne(action.fontWeight, state)
  ),
  on(FontWeightActions.upsertFontWeight,
    (state, action) => adapter.upsertOne(action.fontWeight, state)
  ),
  on(FontWeightActions.addFontWeights,
    (state, action) => adapter.addMany(action.fontWeights, state)
  ),
  on(FontWeightActions.upsertFontWeights,
    (state, action) => adapter.upsertMany(action.fontWeights, state)
  ),
  on(FontWeightActions.updateFontWeight,
    (state, action) => adapter.updateOne(action.fontWeight, state)
  ),
  on(FontWeightActions.updateFontWeights,
    (state, action) => adapter.updateMany(action.fontWeights, state)
  ),
  on(FontWeightActions.deleteFontWeight,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(FontWeightActions.deleteFontWeights,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(FontWeightActions.loadFontWeights,
    (state, action) => adapter.addAll(action.fontWeights, state)
  ),
  on(FontWeightActions.clearFontWeights,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return fontWeightReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
