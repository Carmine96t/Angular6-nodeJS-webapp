import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {FilmsComponent} from './components/films/films.component';
import {FilmDetailComponent} from './components/film-detail/film-detail.component';
import {MessagesComponent} from './components/messages/messages.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
