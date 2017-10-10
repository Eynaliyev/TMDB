import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
  private apiKey = 'eab9e99a811e51f63615ff28f2ad0603';
  rootUrl = `https://api.themoviedb.org/3`;

  constructor(
    private http: Http
  ) { } 
  getPopularMovies(){
    let url = `${this.rootUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get(url)
    .map(res => JSON.parse(JSON.stringify(res))._body)
    .map(movies => JSON.parse(movies)['results']);
  }
  getMovieById(id){
    let url = `${this.rootUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url)
    .map(res => JSON.parse(JSON.stringify(res))._body)
    .map(movie => JSON.parse(movie))
    .map(movie => {
      movie.image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;
      return movie;
    });
  }
  search(term: string){
    console.log(term);
    let url = `${this.rootUrl}/search/multi?api_key=${this.apiKey}&language=en-US&query=${term}`;
    return this.http.get(url)
    .map(res => JSON.parse(JSON.stringify(res))._body)
    .map(movies => JSON.parse(movies)['results']);;
  }

}
