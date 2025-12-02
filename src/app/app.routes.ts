import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Noticias } from './pages/noticias/noticias'; 
import { Equipos } from './pages/equipos/equipos';
import { Estadios } from './pages/estadios/estadios'; 
import { Temporadas } from './pages/temporadas/temporadas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'noticias', component: Noticias },
  { path: 'equipos', component: Equipos },
  { path: 'estadios', component: Estadios },
  { path: 'temporadas', component: Temporadas }
];

// ng g component pages/nombre --standalone