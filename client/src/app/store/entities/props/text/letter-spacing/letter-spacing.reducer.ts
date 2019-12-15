import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { LetterSpacing } from './letter-spacing.model';
import * as LetterSpacingActions from './letter-spacing.actions';

export const letterSpacingsFeatureKey = 'letterSpacings';

export interface State extends EntityState<LetterSpacing> {
  // additional entities state properties
}

export const adapter: EntityAdapter<LetterSpacing> = createEntityAdapter<LetterSpacing>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1'],
  entities: {
    '0': {
      id: '0',
      value: 'normal',
      defaultValue: true
    },
    '1': {
      id: '1',
      value: 'inherit',
      defaultValue: true
    }
  }
  
});

const letterSpacingReducer = createReducer(
  initialState,
  on(LetterSpacingActions.addLetterSpacing,
    (state, action) => adapter.addOne(action.letterSpacing, state)
  ),
  on(LetterSpacingActions.upsertLetterSpacing,
    (state, action) => adapter.upsertOne(action.letterSpacing, state)
  ),
  on(LetterSpacingActions.addLetterSpacings,
    (state, action) => adapter.addMany(action.letterSpacings, state)
  ),
  on(LetterSpacingActions.upsertLetterSpacings,
    (state, action) => adapter.upsertMany(action.letterSpacings, state)
  ),
  on(LetterSpacingActions.updateLetterSpacing,
    (state, action) => adapter.updateOne(action.letterSpacing, state)
  ),
  on(LetterSpacingActions.updateLetterSpacings,
    (state, action) => adapter.updateMany(action.letterSpacings, state)
  ),
  on(LetterSpacingActions.deleteLetterSpacing,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(LetterSpacingActions.deleteLetterSpacings,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(LetterSpacingActions.loadLetterSpacings,
    (state, action) => adapter.addAll(action.letterSpacings, state)
  ),
  on(LetterSpacingActions.clearLetterSpacings,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return letterSpacingReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
