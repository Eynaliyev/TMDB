import { Component } from '@angular/core';
import {MovieService} from './shared/movie.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movies = [];
  movie = {id: 0};  
  private searchTerms = new Subject<string>();
    
  constructor(private movieService: MovieService){
    this.getPopularMovies();
  }
  ngOnInit(): void {
  }
  select(movie){
    this.movie =  {id: 0};
    this.movieService.getMovieById(movie.id)
    .subscribe(res => {
      this.movie = res;
      console.log(this.movie);
    });   
  }
  search(term: string): void {
    this.movieService.search(term)
    .subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    });
  }
  getPopularMovies(){
    this.movieService.getPopularMovies()
    .subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    });
  }
}
