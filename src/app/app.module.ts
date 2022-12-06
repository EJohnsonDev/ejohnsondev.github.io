import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleInfoModule } from './shared/components/title-info/title-info.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
