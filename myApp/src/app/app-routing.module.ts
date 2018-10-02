import {DashboardComponent} from './components/dashboard/dashboard.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import {FilmsComponent} from './components/films/films.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: FilmDetailComponent},
  {path: 'films', component: FilmsComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {}
