import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritasComponent } from './pages/favoritas/favoritas.component';
import { PorVerComponent } from './pages/por-ver/por-ver.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'favoritas', component: FavoritasComponent
    },
    {
        path: 'por-ver', component: PorVerComponent
    },

];
