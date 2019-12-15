import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BaseElements } from './base-elements.model';
import * as BaseElementsActions from './base-elements.actions';

export const baseElementsesFeatureKey = 'baseElementses';

export interface State extends EntityState<BaseElements> {
  // additional entities state properties
}

export const adapter: EntityAdapter<BaseElements> = createEntityAdapter<BaseElements>();

export const initialState: State = adapter.getInitialState({

  // additional entity state properties

  // default values
  ids: ['0', '1'],
  entities: {
    '0': {
      id: '0',
      selector: 'body',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    },
    '1': {
      id: '1',
      selector: 'article',
      declarations: {
        fonts: {
          fontFamily: '0',
          fontSize: '0',
          fontStyle: '0',
          fontVariant: '0',
          fontWeight: '0',
          lineHeight: '0'
        }
      }
    }
  }

});

const baseElementsReducer = createReducer(
  initialState,
  on(BaseElementsActions.addBaseElements,
    (state, action) => adapter.addOne(action.baseElements, state)
  ),
  on(BaseElementsActions.upsertBaseElements,
    (state, action) => adapter.upsertOne(action.baseElements, state)
  ),
  on(BaseElementsActions.addBaseElementss,
    (state, action) => adapter.addMany(action.baseElementss, state)
  ),
  on(BaseElementsActions.upsertBaseElementss,
    (state, action) => adapter.upsertMany(action.baseElementss, state)
  ),
  on(BaseElementsActions.updateBaseElements,
    (state, action) => adapter.updateOne(action.baseElements, state)
  ),
  on(BaseElementsActions.updateBaseElementss,
    (state, action) => adapter.updateMany(action.baseElementss, state)
  ),
  on(BaseElementsActions.deleteBaseElements,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BaseElementsActions.deleteBaseElementss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BaseElementsActions.loadBaseElementss,
    (state, action) => adapter.addAll(action.baseElementss, state)
  ),
  on(BaseElementsActions.clearBaseElementss,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return baseElementsReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
