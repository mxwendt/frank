import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FontVariant } from './font-variant.model';
import * as FontVariantActions from './font-variant.actions';

export const fontVariantsFeatureKey = 'fontVariants';

export interface State extends EntityState<FontVariant> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FontVariant> = createEntityAdapter<FontVariant>();

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
      value: 'small-caps',
      defaultValue: true
    }
  }

});

const fontVariantReducer = createReducer(
  initialState,
  on(FontVariantActions.addFontVariant,
    (state, action) => adapter.addOne(action.fontVariant, state)
  ),
  on(FontVariantActions.upsertFontVariant,
    (state, action) => adapter.upsertOne(action.fontVariant, state)
  ),
  on(FontVariantActions.addFontVariants,
    (state, action) => adapter.addMany(action.fontVariants, state)
  ),
  on(FontVariantActions.upsertFontVariants,
    (state, action) => adapter.upsertMany(action.fontVariants, state)
  ),
  on(FontVariantActions.updateFontVariant,
    (state, action) => adapter.updateOne(action.fontVariant, state)
  ),
  on(FontVariantActions.updateFontVariants,
    (state, action) => adapter.updateMany(action.fontVariants, state)
  ),
  on(FontVariantActions.deleteFontVariant,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(FontVariantActions.deleteFontVariants,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(FontVariantActions.loadFontVariants,
    (state, action) => adapter.addAll(action.fontVariants, state)
  ),
  on(FontVariantActions.clearFontVariants,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return fontVariantReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
