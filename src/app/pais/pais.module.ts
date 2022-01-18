import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais/pais-input/pais-input.component';
import { CapitalInputComponent } from './components/capital/capital-input/capital-input.component';
import { CapitalTablaComponent } from './components/capital/capital-tabla/capital-tabla.component';
import { RegionInputComponent } from './components/region/region-input/region-input.component';
import { RegionTablaComponent } from './components/region/region-tabla/region-tabla.component';




@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
    CapitalInputComponent,
    CapitalTablaComponent,
    RegionInputComponent,
    RegionTablaComponent
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    CapitalTablaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    //FormsModule sirve para poder NGModel
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
