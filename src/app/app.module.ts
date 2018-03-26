import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Httpprovider } from './service/http.providers';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent, DetailsComponent, LoginComponent, NavComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'details', component: DetailsComponent },
      { path: 'register', component: RegisterComponent }
      ])
  ],
  providers: [Httpprovider],
  bootstrap: [AppComponent]
})
export class AppModule { }
