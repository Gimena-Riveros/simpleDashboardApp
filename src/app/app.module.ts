import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//  Components
import { LoginComponent } from './components/login/login.component';
import { SharedAngularModule } from './components/shared-angular/shared-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
