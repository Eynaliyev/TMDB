import { Component } from '@angular/core';
import {MovieService} from './shared/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movies = [];
  constructor(private movieService: MovieService){
    this.movieService.getPopularMovies()
    .subscribe(movies => {
      this.movies = movies;
    });
  }
}
