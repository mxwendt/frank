import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Abbreviation } from './abbreviation.model';
import * as AbbreviationActions from './abbreviation.actions';

export const abbreviationsFeatureKey = 'abbreviations';

export interface State extends EntityState<Abbreviation> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Abbreviation> = createEntityAdapter<Abbreviation>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  ids: ['0'],
  entities: {
    '0': {
      id: '0',
      root: {
        selector: '0',
        level: 0,
        children: [
          {
            selector: '1',
            level: 1,
            children: []
          }
        ]
      }
    }
  }

});

const abbreviationReducer = createReducer(
  initialState,
  on(AbbreviationActions.addAbbreviation,
    (state, action) => adapter.addOne(action.abbreviation, state)
  ),
  on(AbbreviationActions.upsertAbbreviation,
    (state, action) => adapter.upsertOne(action.abbreviation, state)
  ),
  on(AbbreviationActions.addAbbreviations,
    (state, action) => adapter.addMany(action.abbreviations, state)
  ),
  on(AbbreviationActions.upsertAbbreviations,
    (state, action) => adapter.upsertMany(action.abbreviations, state)
  ),
  on(AbbreviationActions.updateAbbreviation,
    (state, action) => adapter.updateOne(action.abbreviation, state)
  ),
  on(AbbreviationActions.updateAbbreviations,
    (state, action) => adapter.updateMany(action.abbreviations, state)
  ),
  on(AbbreviationActions.deleteAbbreviation,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AbbreviationActions.deleteAbbreviations,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AbbreviationActions.loadAbbreviations,
    (state, action) => adapter.addAll(action.abbreviations, state)
  ),
  on(AbbreviationActions.clearAbbreviations,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return abbreviationReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
