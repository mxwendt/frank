import { createAction, props } from '@ngrx/store';

export const loadDefaultValues = createAction(
  '[Vars] Load Default Values'
);

export const loadDefaultValuesSuccess = createAction(
  '[Vars] Load Default Values Success',
  props<{ defaultValues: any }>()
);

export const loadDefaultValuesFailure = createAction(
  '[Vars] Load Default Values Failure'
);
