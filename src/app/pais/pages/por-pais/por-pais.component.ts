import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino : string = '';
  hayError : boolean = false;
  paises : Country[] = [];
  constructor(private paisService : PaisService) 
  {
    this.paises  = JSON.parse(localStorage.getItem('paises')!) || [];
  }

  buscar()
  {
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
    .subscribe((paises) => {

    console.log(paises);
    this.paises = paises;
    localStorage.setItem('paises', JSON.stringify(this.paises));
    }, (err) => {this.hayError = true; this.paises = [];});
  }
}
