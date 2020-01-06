import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WordSpacing } from './word-spacing.model';
import * as WordSpacingActions from './word-spacing.actions';

export const wordSpacingsFeatureKey = 'wordSpacings';

export interface State extends EntityState<WordSpacing> {
  // additional entities state properties
}

export const adapter: EntityAdapter<WordSpacing> = createEntityAdapter<WordSpacing>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  
  // default values
  ids: ['0', '1'],
  entities: {
    '0': {
      id: '0',
      value: 'normal',
      unit: null,
      defaultValue: true
    },
    '1': {
      id: '1',
      value: 'inherit',
      unit: null,
      defaultValue: true
    }
  }

});

const wordSpacingReducer = createReducer(
  initialState,
  on(WordSpacingActions.addWordSpacing,
    (state, action) => adapter.addOne(action.wordSpacing, state)
  ),
  on(WordSpacingActions.upsertWordSpacing,
    (state, action) => adapter.upsertOne(action.wordSpacing, state)
  ),
  on(WordSpacingActions.addWordSpacings,
    (state, action) => adapter.addMany(action.wordSpacings, state)
  ),
  on(WordSpacingActions.upsertWordSpacings,
    (state, action) => adapter.upsertMany(action.wordSpacings, state)
  ),
  on(WordSpacingActions.updateWordSpacing,
    (state, action) => adapter.updateOne(action.wordSpacing, state)
  ),
  on(WordSpacingActions.updateWordSpacings,
    (state, action) => adapter.updateMany(action.wordSpacings, state)
  ),
  on(WordSpacingActions.deleteWordSpacing,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(WordSpacingActions.deleteWordSpacings,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(WordSpacingActions.loadWordSpacings,
    (state, action) => adapter.addAll(action.wordSpacings, state)
  ),
  on(WordSpacingActions.clearWordSpacings,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return wordSpacingReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
