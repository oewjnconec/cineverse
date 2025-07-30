import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    peliculas = [
    {
      titulo: 'Interstellar',
      anio: '2014',
      portada: 'https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg',
      descripcion: 'Una épica odisea espacial para salvar a la humanidad.'
    },
    {
      titulo: 'Inception',
      anio: '2010',
      portada: 'http://www.nolanfans.com/images/posters/inception/p4xfull.jpg',
      descripcion: 'Un ladrón que entra en los sueños para robar secretos.'
    },
    {
      titulo: 'Interstellar',
      anio: '2014',
      portada: 'https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg',
      descripcion: 'Una épica odisea espacial para salvar a la humanidad.'
    },
    {
      titulo: 'Inception',
      anio: '2010',
      portada: 'http://www.nolanfans.com/images/posters/inception/p4xfull.jpg',
      descripcion: 'Un ladrón que entra en los sueños para robar secretos.'
    },
    {
      titulo: 'Interstellar',
      anio: '2014',
      portada: 'https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg',
      descripcion: 'Una épica odisea espacial para salvar a la humanidad.'
    },
    {
      titulo: 'Inception',
      anio: '2010',
      portada: 'http://www.nolanfans.com/images/posters/inception/p4xfull.jpg',
      descripcion: 'Un ladrón que entra en los sueños para robar secretos.'
    },
    {
      titulo: 'Interstellar',
      anio: '2014',
      portada: 'https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg',
      descripcion: 'Una épica odisea espacial para salvar a la humanidad.'
    },
    {
      titulo: 'Inception',
      anio: '2010',
      portada: 'http://www.nolanfans.com/images/posters/inception/p4xfull.jpg',
      descripcion: 'Un ladrón que entra en los sueños para robar secretos.'
    },
    {
      titulo: 'Interstellar',
      anio: '2014',
      portada: 'https://m.media-amazon.com/images/I/91vmAIK3d5L._AC_SL1500_.jpg',
      descripcion: 'Una épica odisea espacial para salvar a la humanidad.'
    },
    {
      titulo: 'Inception',
      anio: '2010',
      portada: 'http://www.nolanfans.com/images/posters/inception/p4xfull.jpg',
      descripcion: 'Un ladrón que entra en los sueños para robar secretos.'
    },
  ];

    constructor() {}

    ngOninit(): void {}
}