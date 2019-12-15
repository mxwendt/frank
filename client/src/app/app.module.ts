import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { PillComponent } from './components/pill/pill.component';
import { PreviewComponent } from './components/preview/preview.component';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { FontFamilyEffects } from './store/entities/font-family/font-family.effects';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VariablesModule } from './variables/variables.module';
import { EditorModule } from './editor/editor.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PillComponent,
    PreviewComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HeaderBarComponent
  ],
  imports: [

    // import vendor modules
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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    
    // import app modules
    VariablesModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
