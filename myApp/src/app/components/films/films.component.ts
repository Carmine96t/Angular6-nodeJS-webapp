import {Film} from './film';
import {FilmService} from '../../services/film.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];

  selectedFilm: Film;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    this.getFilms();
  }

  onSelect(film: Film) {
    this.selectedFilm = film;
  }

  getFilms(): void {
    this.filmService.getFilms()
      .subscribe(films => this.films = films);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) {return;}
    this.filmService.addFilm({id: null, title: title, rate: 0})
      .subscribe(film => {
        this.films.push(film);
      });
  }


  delete(film: Film): void {
    if(confirm("Are you sure to delete '"+film.title+"'??")) {
      this.films = this.films.filter(h => h !== film);
      this.filmService.deleteFilm(film).subscribe();
    }

  }
}
