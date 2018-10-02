import {FilmService} from '../../services/film.service';
import {Film} from '../films/film';
import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.top3Fils()
      .subscribe(films => this.films = films
        .sort((x1, x2) => x1.rate < x2.rate)
        .slice(0, 3));
  }

}
