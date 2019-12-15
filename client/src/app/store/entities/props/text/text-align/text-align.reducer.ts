import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TextAlign } from './text-align.model';
import * as TextAlignActions from './text-align.actions';

export const textAlignsFeatureKey = 'textAligns';

export interface State extends EntityState<TextAlign> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TextAlign> = createEntityAdapter<TextAlign>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties

  // default values
  ids: ['0', '1', '2', '3', '4'],
  entities: {
    '0': {
      id: '0',
      value: 'left',
      defaultValue: true
    },
    '1': {
      id: '1',
      value: 'right',
      defaultValue: true
    },
    '2': {
      id: '2',
      value: 'center',
      defaultValue: true
    },
    '3': {
      id: '3',
      value: 'justify',
      defaultValue: true
    },
    '4': {
      id: '4',
      value: 'inherit',
      defaultValue: true
    }
  }

});

const textAlignReducer = createReducer(
  initialState,
  on(TextAlignActions.addTextAlign,
    (state, action) => adapter.addOne(action.textAlign, state)
  ),
  on(TextAlignActions.upsertTextAlign,
    (state, action) => adapter.upsertOne(action.textAlign, state)
  ),
  on(TextAlignActions.addTextAligns,
    (state, action) => adapter.addMany(action.textAligns, state)
  ),
  on(TextAlignActions.upsertTextAligns,
    (state, action) => adapter.upsertMany(action.textAligns, state)
  ),
  on(TextAlignActions.updateTextAlign,
    (state, action) => adapter.updateOne(action.textAlign, state)
  ),
  on(TextAlignActions.updateTextAligns,
    (state, action) => adapter.updateMany(action.textAligns, state)
  ),
  on(TextAlignActions.deleteTextAlign,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TextAlignActions.deleteTextAligns,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TextAlignActions.loadTextAligns,
    (state, action) => adapter.addAll(action.textAligns, state)
  ),
  on(TextAlignActions.clearTextAligns,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return textAlignReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
