import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../core/services/api.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private apiService = inject(ApiService);

  peliculas: any[] = [];

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((response) => {
      this.peliculas = response.results.map((movie: any) => ({
        titulo: movie.title,
        anio: movie.release_date ? movie.release_date.split('-')[0] : '',
        portada: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        descripcion: movie.overview,
      }));
    });
  }
}
