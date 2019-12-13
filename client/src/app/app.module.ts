import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PillComponent } from './components/pill/pill.component';
import { PreviewComponent } from './components/preview/preview.component';
import { NodeComponent } from './components/node/node.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FontFamilyEffects } from './store/entities/font-family/font-family.effects';
import { VariableEditorComponent } from './components/variable-editor/variable-editor.component';
import * as fromFontStyle from './store/entities/font-style/font-style.reducer';
import * as fromFontVariant from './store/entities/font-variant/font-variant.reducer';
import * as fromFontWeight from './store/entities/font-weight/font-weight.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PillComponent,
    PreviewComponent,
    NodeComponent,
    VariableEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([FontFamilyEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
