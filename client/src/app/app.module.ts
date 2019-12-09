import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PillComponent } from './pill/pill.component';
import { PreviewComponent } from './preview/preview.component';
import { NodeComponent } from './node/node.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { VarsModule } from './vars/vars.module';

@NgModule({
  declarations: [
    AppComponent,
    PillComponent,
    PreviewComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VarsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
