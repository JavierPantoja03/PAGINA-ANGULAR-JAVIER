import { Routes } from '@angular/router';
import { PensamientoComputacionalComponent } from './pages/pensamiento-computacional/pensamiento-computacional.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: PensamientoComputacionalComponent },
  { path: 'herramientas', component: HerramientasComponent },
  { path: '**', redirectTo: 'inicio' }
];
