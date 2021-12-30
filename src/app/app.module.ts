import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './components/headercomponent/headercomponent.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    MaincomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
