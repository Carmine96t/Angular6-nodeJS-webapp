import {FilmService} from '../../services/film.service';
import {Film} from '../films/film';
import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  @Input() film: Film;

  constructor(
    private filmService: FilmService,
    private location: Location,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getFilm();
  }

  save(): void {
    this.filmService.updateFilm(this.film)
      .subscribe(() => this.goBack());
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id)
      .subscribe(film => this.film = film);
  }

  goBack(): void {
    this.location.back();
  }


}
