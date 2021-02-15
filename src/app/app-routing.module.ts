import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FilmesComponent} from './pages/filmes/filmes.component';
import {FormComponent} from './pages/filmes/form/form.component';

const routes: Routes = [
  {
    path: "",
    component: FilmesComponent
  },
  {
    path: "add",
    component: FormComponent
  },
  {
    path: "edit/:id",
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
