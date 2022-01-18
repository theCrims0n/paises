import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `li { cursor : pointer; }`
  ]
})
export class PorPaisComponent {
  termino : string = '';
  hayError : boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];

  constructor(private paisService : PaisService) 
  {
    // this.paises  = JSON.parse(localStorage.getItem('paises')!) || [];
  }

  buscar(termino : string)
  {
    this.hayError = false;
    this.termino = termino;
    this.paises = [];

    this.paisService.buscarPais(this.termino)
    .subscribe((paises) => {

    console.log(paises);
    this.paises = paises;
    }, (err) => {this.hayError = true; this.paises = [];});
  }

  sugerencias(termino : string)
  {
    if(termino.trim() === '')
    {
      this.hayError = false;
      this.paises = [];
    }
    else
    {
      this.hayError = false;
      this.paisService.buscarPais(termino).pipe( tap(console.log))
      .subscribe( paises => this.paisesSugeridos = paises,
      (err) => this.paisesSugeridos = []);
    }
  }
}
