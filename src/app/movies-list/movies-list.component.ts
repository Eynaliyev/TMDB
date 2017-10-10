import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() movies;
  @Output() movie = new EventEmitter<any>();
  @Input() activeMovie;
  constructor() { }

  ngOnInit() {
  }
  select(movie){
    this.movie.emit(movie);
  }
}
