import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie;
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

}
