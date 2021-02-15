import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Filme } from '../interfaces/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor( private http: HttpClient ) { }

  getFilmes(): Observable<Filme[]>{
    return this.http.get<Filme[]>('../../assets/filmes.json');
  }
}
