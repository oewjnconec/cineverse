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

ngOnInit() {
  this.apiService.getPopularMovies().subscribe(data => {
    this.peliculas = data;
  });
}
}
