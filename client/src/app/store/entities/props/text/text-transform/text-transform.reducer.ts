import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TextTransform } from './text-transform.model';
import * as TextTransformActions from './text-transform.actions';

export const textTransformsFeatureKey = 'textTransforms';

export interface State extends EntityState<TextTransform> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TextTransform> = createEntityAdapter<TextTransform>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const textTransformReducer = createReducer(
  initialState,
  on(TextTransformActions.addTextTransform,
    (state, action) => adapter.addOne(action.textTransform, state)
  ),
  on(TextTransformActions.upsertTextTransform,
    (state, action) => adapter.upsertOne(action.textTransform, state)
  ),
  on(TextTransformActions.addTextTransforms,
    (state, action) => adapter.addMany(action.textTransforms, state)
  ),
  on(TextTransformActions.upsertTextTransforms,
    (state, action) => adapter.upsertMany(action.textTransforms, state)
  ),
  on(TextTransformActions.updateTextTransform,
    (state, action) => adapter.updateOne(action.textTransform, state)
  ),
  on(TextTransformActions.updateTextTransforms,
    (state, action) => adapter.updateMany(action.textTransforms, state)
  ),
  on(TextTransformActions.deleteTextTransform,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TextTransformActions.deleteTextTransforms,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TextTransformActions.loadTextTransforms,
    (state, action) => adapter.addAll(action.textTransforms, state)
  ),
  on(TextTransformActions.clearTextTransforms,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return textTransformReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
