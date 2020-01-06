import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WhiteSpace } from './white-space.model';
import * as WhiteSpaceActions from './white-space.actions';

export const whiteSpacesFeatureKey = 'whiteSpaces';

export interface State extends EntityState<WhiteSpace> {
  // additional entities state properties
}

export const adapter: EntityAdapter<WhiteSpace> = createEntityAdapter<WhiteSpace>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1', '2', '3', '4', '5'],
  entities: {
    '0': {
      id: '0',
      value: 'normal',
      defaultValue: true
    },
    '1': {
      id: '1',
      value: 'pre',
      defaultValue: true
    },
    '2': {
      id: '2',
      value: 'nowrap',
      defaultValue: true
    },
    '3': {
      id: '3',
      value: 'pre-wrap',
      defaultValue: true
    },
    '4': {
      id: '4',
      value: 'pre-linge',
      defaultValue: true
    },
    '5': {
      id: '5',
      value: 'inherit',
      defaultValue: true
    }
  }

});

const whiteSpaceReducer = createReducer(
  initialState,
  on(WhiteSpaceActions.addWhiteSpace,
    (state, action) => adapter.addOne(action.whiteSpace, state)
  ),
  on(WhiteSpaceActions.upsertWhiteSpace,
    (state, action) => adapter.upsertOne(action.whiteSpace, state)
  ),
  on(WhiteSpaceActions.addWhiteSpaces,
    (state, action) => adapter.addMany(action.whiteSpaces, state)
  ),
  on(WhiteSpaceActions.upsertWhiteSpaces,
    (state, action) => adapter.upsertMany(action.whiteSpaces, state)
  ),
  on(WhiteSpaceActions.updateWhiteSpace,
    (state, action) => adapter.updateOne(action.whiteSpace, state)
  ),
  on(WhiteSpaceActions.updateWhiteSpaces,
    (state, action) => adapter.updateMany(action.whiteSpaces, state)
  ),
  on(WhiteSpaceActions.deleteWhiteSpace,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(WhiteSpaceActions.deleteWhiteSpaces,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(WhiteSpaceActions.loadWhiteSpaces,
    (state, action) => adapter.addAll(action.whiteSpaces, state)
  ),
  on(WhiteSpaceActions.clearWhiteSpaces,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return whiteSpaceReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
