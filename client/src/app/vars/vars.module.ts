import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromVariables from './reducers';
import * as fromFontFamily from './entities/font-family/font-family.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromVariables.variablesFeatureKey, fromVariables.reducers, { metaReducers: fromVariables.metaReducers }),
  ]
})
export class VarsModule { }
