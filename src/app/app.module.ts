import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//services
import { SpotifyService } from "./services/spotify.service"

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearcheComponent } from './components/searche/searche.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearcheComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
