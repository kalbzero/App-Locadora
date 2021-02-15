import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes.component';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [FilmesComponent],
  imports: [
    CommonModule,
    ToastModule
  ]
})
export class FilmesModule { }
