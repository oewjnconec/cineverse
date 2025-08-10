import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '55885af8b8de5192b5f345827920e296';
  private baseUrl = 'https://api.themoviedb.org/3';

  private http = inject(HttpClient);

  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=1`;
    return this.http.get(url);
  }
}
