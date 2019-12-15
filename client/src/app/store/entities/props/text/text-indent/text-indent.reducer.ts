import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TextIndent } from './text-indent.model';
import * as TextIndentActions from './text-indent.actions';

export const textIndentsFeatureKey = 'textIndents';

export interface State extends EntityState<TextIndent> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TextIndent> = createEntityAdapter<TextIndent>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const textIndentReducer = createReducer(
  initialState,
  on(TextIndentActions.addTextIndent,
    (state, action) => adapter.addOne(action.textIndent, state)
  ),
  on(TextIndentActions.upsertTextIndent,
    (state, action) => adapter.upsertOne(action.textIndent, state)
  ),
  on(TextIndentActions.addTextIndents,
    (state, action) => adapter.addMany(action.textIndents, state)
  ),
  on(TextIndentActions.upsertTextIndents,
    (state, action) => adapter.upsertMany(action.textIndents, state)
  ),
  on(TextIndentActions.updateTextIndent,
    (state, action) => adapter.updateOne(action.textIndent, state)
  ),
  on(TextIndentActions.updateTextIndents,
    (state, action) => adapter.updateMany(action.textIndents, state)
  ),
  on(TextIndentActions.deleteTextIndent,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TextIndentActions.deleteTextIndents,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TextIndentActions.loadTextIndents,
    (state, action) => adapter.addAll(action.textIndents, state)
  ),
  on(TextIndentActions.clearTextIndents,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return textIndentReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
