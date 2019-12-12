import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { LineHeight } from './line-height.model';
import * as LineHeightActions from './line-height.actions';

export const lineHeightsFeatureKey = 'lineHeights';

export interface State extends EntityState<LineHeight> {
  // additional entities state properties
}

export const adapter: EntityAdapter<LineHeight> = createEntityAdapter<LineHeight>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0'],
  entities: {
    '0': {
      id: '0',
      value: 'normal',
      unit: null,
      defaultValue: true
    }
  }

});

const lineHeightReducer = createReducer(
  initialState,
  on(LineHeightActions.addLineHeight,
    (state, action) => adapter.addOne(action.lineHeight, state)
  ),
  on(LineHeightActions.upsertLineHeight,
    (state, action) => adapter.upsertOne(action.lineHeight, state)
  ),
  on(LineHeightActions.addLineHeights,
    (state, action) => adapter.addMany(action.lineHeights, state)
  ),
  on(LineHeightActions.upsertLineHeights,
    (state, action) => adapter.upsertMany(action.lineHeights, state)
  ),
  on(LineHeightActions.updateLineHeight,
    (state, action) => adapter.updateOne(action.lineHeight, state)
  ),
  on(LineHeightActions.updateLineHeights,
    (state, action) => adapter.updateMany(action.lineHeights, state)
  ),
  on(LineHeightActions.deleteLineHeight,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(LineHeightActions.deleteLineHeights,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(LineHeightActions.loadLineHeights,
    (state, action) => adapter.addAll(action.lineHeights, state)
  ),
  on(LineHeightActions.clearLineHeights,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return lineHeightReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
