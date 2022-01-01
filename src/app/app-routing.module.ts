import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { ThankyoucomponentComponent } from './thankyoucomponent/thankyoucomponent.component';

const routes: Routes = [
  {path:'',component:HomecomponentComponent},
  {path:'signup',component: SignupcomponentComponent,},
  {path:'thankyou',component: ThankyoucomponentComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
