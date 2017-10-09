import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  private apiKey = 'eab9e99a811e51f63615ff28f2ad0603';
  rootUrl = `https://api.themoviedb.org/3`;

  constructor(
    private http: Http
  ) { }
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eab9e99a811e51f63615ff28f2ad0603
  getPopularMovies(){
    let url = `${this.rootUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get(url)
    .map(res => JSON.parse(JSON.stringify(res))._body)
    .map(movies => JSON.parse(movies)['results']);
  }
  getMovieById(id){
    let url = `${this.rootUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

}
