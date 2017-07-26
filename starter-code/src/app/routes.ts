import { Routes } from '@angular/router';

import { MyHomeComponent } from './my-home/my-home.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MoviesComponent }
]
