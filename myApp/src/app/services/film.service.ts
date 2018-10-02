import {Film} from '../components/films/film';
import {FILMS} from '../components/films/mock-films';
import {MessageService} from './message.service';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})


export class FilmService {
  private filmsUrl = 'http://localhost:8080/api/films';


  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    //this.messageService.add('Filmservice: fatched films');
    //return of(FILMS);
    return this.http.get<Film[]>(this.filmsUrl)
      .pipe(
        catchError(this.handleError('getFilms', []))
      );
  }

  top3Fils(): Observable<any> {
    const url = `${this.filmsUrl}/top3/search`;
    return this.http.get<Film>(url);
  }

  private log(message: string) {
    this.messageService.add(`filmService: ${message}`);
  }

   getFilm<Data>(id: number): Observable<Film> {
//    const url = `${this.filmsUrl}/${id}`;
//    return this.http.get<Film[]>(url)
//      .pipe(
//        map(films => films[0]), // returns a {0|1} element array
//        tap(h => {
//          const outcome = h ? `fetched` : `did not find`;
//          this.log(`${outcome} film id=${id}`);
//        }),
//        catchError(this.handleError<Film>(`getFilm id=${id}`))
//      );
    const url = `${this.filmsUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  /** PUT: update the film on the server */
  updateFilm(film: Film): Observable<any> {
    return this.http.put(this.filmsUrl, film, httpOptions).pipe(
      tap(_ => this.log(`updated film id=${film.id}`)),
      catchError(this.handleError<any>('updateFilm'))
    );
  }

  /** POST: add a new film to the server */
  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.filmsUrl, film, httpOptions).pipe(
      tap((film: Film) => this.log(`added film w/ id=${film.id}`)),
      catchError(this.handleError<Film>('addFilm'))
    );
  }

  /** DELETE: delete the film from the server */
  deleteFilm(film: Film | number): Observable<Film> {
    const id = typeof film === 'number' ? film : film.id;
    const url = `${this.filmsUrl}/${id}`;

    return this.http.delete<Film>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Film>('deleteHero'))
    );
  }

  /* GET films whose title contains search term */
  searchFilms(term: string): Observable<Film[]> {
    if (!term.trim()) {
      // if not search term, return empty film array.
      return of([]);
    }
    return this.http.get<Film[]>(`${this.filmsUrl}/searchByTitle/${term}`).pipe(
      tap(_ => this.log(`found films matching "${term}"`)),
      catchError(this.handleError<Film[]>('searchFilm', []))
    );
  }

  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
