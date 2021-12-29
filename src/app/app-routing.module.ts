import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component : PorPaisComponent,
    pathMatch : 'full'
  },
  {
    path: 'region',
    component : PorRegionComponent
  },
  {
    path: 'capital',
    component : PorCapitalComponent,
  },
  {
    //se pone :id para reedirigir al cliente a la vista asignada.
    path: 'pais/:id',
    component : VerPaisComponent
  },
  {
    //asteriscos sirven como exception en dado caso de dejar el id de la ruta vacia.
    path: '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
