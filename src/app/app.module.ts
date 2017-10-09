import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataListModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    DataListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
