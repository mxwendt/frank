import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputStreamService } from './input-stream.service';
import { TokenStreamService } from './token-stream.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InputStreamService,
    TokenStreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
