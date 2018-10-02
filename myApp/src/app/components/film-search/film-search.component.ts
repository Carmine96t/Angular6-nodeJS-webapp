import {FilmService} from '../../services/film.service';
import {Film} from '../films/film';
import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, switchMap, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {
  films$: Observable<Film[]>;
  private searchTerms = new Subject<String>();

  constructor(private filmService: FilmService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.films$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.filmService.searchFilms(term)),
    );
  }

}
