import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';

const routes: Routes = [
  {path:'',component:HomecomponentComponent},
  {path:'signup',component: SignupcomponentComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
