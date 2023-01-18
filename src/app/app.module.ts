import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaucheComponentComponent } from './gauche-component/gauche-component.component';
import { DroiteComponentComponent } from './droite-component/droite-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GaucheComponentComponent,
    DroiteComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
