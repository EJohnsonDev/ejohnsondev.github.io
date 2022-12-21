import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleInfoModule } from './shared/components/title-info/title-info.module';
import { BioComponent } from './shared/components/bio/bio.component';
import { StackComponent } from './shared/components/stack/stack.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    StackComponent,
    ContactComponent,
    NavComponent,
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
