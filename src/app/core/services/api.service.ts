import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '55885af8b8de5192b5f345827920e296';
  private baseUrl = 'https://api.themoviedb.org/3';
    private imgUrl = 'https://image.tmdb.org/t/p/original'; 


  private http = inject(HttpClient);

  getPopularMovies(): Observable<any> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=1`;
    return this.http.get<any>(url).pipe(
      map(res =>
        res.results.map((peli: any) => ({
          id: peli.id,
          titulo: peli.title,
          anio: peli.release_date?.split('-')[0],
          poster: `${this.imgUrl}${peli.poster_path}`,   // póster vertical
          banner: `${this.imgUrl}${peli.backdrop_path}`    //póster horizontal
        }))
      )
    );
  }
}
