import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './components/headercomponent/headercomponent.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ButtonsignupComponent } from './buttonsignup/buttonsignup.component';
import { ThankyoucomponentComponent } from './thankyoucomponent/thankyoucomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    MaincomponentComponent,
    FootercomponentComponent,
    SignupcomponentComponent,
    HomecomponentComponent,
    ButtonsignupComponent,
    ThankyoucomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
