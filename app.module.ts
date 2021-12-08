import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileComponent } from './mobile/mobile.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NeedDataService } from './need-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobileComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgModule,
    HttpClientModule
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
